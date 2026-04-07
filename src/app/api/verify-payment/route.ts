/**
 * /api/verify-payment
 * Verifies Razorpay payment signature, deducts inventory,
 * and marks the order as COMPLETED.
 */
import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Inventory from "@/models/Inventory";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";
import { z } from "zod";

const schema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
  orderId: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const limited = await rateLimit(req);
    if (limited) return limited;

    const session = await getServerSession(authOptions);
    if (!session?.user)
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid payload." }, { status: 400 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = parsed.data;

    // ── Signature verification ─────────────────────────────────────────
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json({ message: "Server misconfiguration. Razorpay secret missing." }, { status: 500 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ message: "Invalid payment signature. Verification failed." }, { status: 400 });
    }

    // ── Fetch & validate order ─────────────────────────────────────────
    await dbConnect();
    const order = await Order.findOne({ _id: orderId, userId: (session.user as any).id });

    if (!order) {
      return NextResponse.json({ message: "Order not found or unauthorized." }, { status: 404 });
    }

    // Idempotency guard — prevent double verification
    if (order.paymentStatus === "COMPLETED") {
      return NextResponse.json(
        { success: true, message: "Payment already verified.", orderId: order._id },
        { status: 200 }
      );
    }

    if (order.paymentStatus !== "PENDING") {
      return NextResponse.json(
        { message: `Cannot verify order with status: ${order.paymentStatus}` },
        { status: 400 }
      );
    }

    // ── Deduct inventory (with rollback on failure) ────────────────────
    const rollbacks: { productId: string; quantity: number }[] = [];

    for (const item of order.products) {
      const updated = await Inventory.findOneAndUpdate(
        { productId: item.productId, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true }
      );

      if (!updated) {
        // Rollback previous deductions
        for (const rb of rollbacks) {
          await Inventory.updateOne({ productId: rb.productId }, { $inc: { stock: rb.quantity } });
        }
        return NextResponse.json(
          { message: `Insufficient stock for ${item.name}. Please contact support.` },
          { status: 400 }
        );
      }

      rollbacks.push({ productId: item.productId, quantity: item.quantity });
    }

    // ── Mark order as paid ────────────────────────────────────────────
    order.paymentStatus = "COMPLETED";
    order.orderStatus = "Processing";
    order.razorpayPaymentId = razorpay_payment_id;
    await order.save();

    return NextResponse.json(
      { success: true, message: "Payment verified successfully.", orderId: order._id },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[verify-payment]", err);
    return NextResponse.json({ message: "Payment verification failed. Please contact support." }, { status: 500 });
  }
}

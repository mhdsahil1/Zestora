import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Inventory from "@/models/Inventory";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { rateLimit } from "@/lib/rateLimit";

export async function POST(req: Request) {
  try {
    const defaultLimiterResponse = await rateLimit(req);
    if (defaultLimiterResponse) return defaultLimiterResponse;

    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = body;

    // Verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      return NextResponse.json({ message: "Server misconfiguration. Razorpay secret missing." }, { status: 500 });
    }

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json({ message: "Invalid payment signature." }, { status: 400 });
    }

    await dbConnect();
    const order = await Order.findOne({ _id: orderId, userId: (session.user as any).id });

    if (!order) {
      return NextResponse.json({ message: "Order not found or unauthorized." }, { status: 404 });
    }

    if (order.paymentStatus === "COMPLETED") {
      return NextResponse.json(
        { success: true, message: "Payment already verified.", orderId: order._id },
        { status: 200 }
      );
    }

    if (order.paymentStatus !== "PENDING") {
      return NextResponse.json(
        { message: `Order cannot be verified from status ${order.paymentStatus}.` },
        { status: 400 }
      );
    }

    const rollbacks: Array<{ productId: string; quantity: number }> = [];

    for (const item of order.products) {
      const updatedInventory = await Inventory.findOneAndUpdate(
        { productId: item.productId, stock: { $gte: item.quantity } },
        { $inc: { stock: -item.quantity } },
        { new: true }
      );

      if (!updatedInventory) {
        for (const rollback of rollbacks) {
          await Inventory.updateOne(
            { productId: rollback.productId },
            { $inc: { stock: rollback.quantity } }
          );
        }

        return NextResponse.json(
          { message: `Insufficient stock for ${item.name}.`, stockError: true },
          { status: 400 }
        );
      }

      rollbacks.push({ productId: item.productId, quantity: item.quantity });
    }

    order.paymentStatus = "COMPLETED";
    order.orderStatus = "Processing";
    order.razorpayPaymentId = razorpay_payment_id;
    await order.save();

    return NextResponse.json(
      { success: true, message: "Payment verified successfully.", orderId: order._id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Payment Verify API Error]:", error);
    return NextResponse.json({ message: "Payment verification failed." }, { status: 500 });
  }
}

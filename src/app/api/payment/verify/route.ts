import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
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

    // Update order in database
    await dbConnect();
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: orderId, userId: (session.user as any).id },
      { paymentStatus: "COMPLETED" },
      { new: true }
    );

    if (!updatedOrder) {
      return NextResponse.json({ message: "Order not found or unauthorized." }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Payment verified successfully." }, { status: 200 });
  } catch (error: any) {
    console.error("[Payment Verify API Error]:", error);
    return NextResponse.json({ message: "Payment verification failed." }, { status: 500 });
  }
}

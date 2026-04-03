import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

const CANCEL_ELIGIBLE_BEFORE = new Set(["Order Placed", "Processing", "Shipped"]);

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    await dbConnect();

    const { id: orderId } = await params;
    const isAdmin = (session.user as any).role === "admin";
    const userId = (session.user as any).id;

    const orderQuery: any = { _id: orderId };
    if (!isAdmin) {
      orderQuery.userId = userId;
    }

    const order = await Order.findOne(orderQuery);
    if (!order) {
      return NextResponse.json(
        { message: "Order not found or unauthorized." },
        { status: 404 }
      );
    }

    // Only allow cancel before "Out for Delivery"
    if (!CANCEL_ELIGIBLE_BEFORE.has(order.orderStatus)) {
      return NextResponse.json(
        { message: "Order cannot be cancelled at this stage." },
        { status: 400 }
      );
    }

    order.orderStatus = "Cancelled";
    // Mark payment as failed only if it hasn't been completed yet.
    if (order.paymentStatus === "PENDING") {
      order.paymentStatus = "FAILED";
    }

    await order.save();

    return NextResponse.json({ order }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to cancel order.", error: error.message },
      { status: 500 }
    );
  }
}

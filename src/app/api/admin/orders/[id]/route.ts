import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || (session.user as any).role !== "admin") {
      return NextResponse.json({ message: "Unauthorized. Admin access required." }, { status: 403 });
    }

    await dbConnect();

    const { id } = await params;
    const body = await req.json();
    const { orderStatus, paymentStatus } = body;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { 
        ...(orderStatus && { orderStatus }), 
        ...(paymentStatus && { paymentStatus }) 
      },
      { new: true }
    );

    if (!updatedOrder) {
      return NextResponse.json({ message: "Order not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, order: updatedOrder }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update order", error: error.message },
      { status: 500 }
    );
  }
}

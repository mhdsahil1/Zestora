import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import { z } from "zod";

const statusSchema = z.object({
  orderStatus: z.enum(['Order Placed', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered', 'Cancelled'])
});

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || (session.user as any).role !== "admin") {
      return NextResponse.json({ message: "Unauthorized." }, { status: 403 });
    }
    const body = await req.json();
    const validated = statusSchema.safeParse(body);
    if (!validated.success) return NextResponse.json({ message: "Invalid status" }, { status: 400 });

    await dbConnect();
    const { id } = await params;
    const order = await Order.findByIdAndUpdate(id, { orderStatus: validated.data.orderStatus }, { new: true });
    
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });
    return NextResponse.json(order);
  } catch (error) {
    console.error("[Admin Order Status DB Error]:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

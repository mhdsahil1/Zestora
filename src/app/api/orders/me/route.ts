import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }
    
    await dbConnect();
    const orders = await Order.find({ userId: (session.user as any).id }).sort({ createdAt: -1 });
    
    return NextResponse.json(orders);
  } catch (error) {
    console.error("[GET /api/orders/me Error]:", error);
    return NextResponse.json({ message: "Error fetching orders." }, { status: 500 });
  }
}

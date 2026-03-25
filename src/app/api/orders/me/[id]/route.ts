import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }
    
    // Await params object for dynamic routing conventions in latest Next.js versions if needed,
    // although Next.js 15 route handlers use synchronous params if unawaited correctly,
    // let's await them to prevent hydration/build warnings
    const p = await params;
    
    await dbConnect();
    const order = await Order.findOne({ _id: p.id, userId: (session.user as any).id });
    
    if (!order) {
      return NextResponse.json({ message: "Order not found." }, { status: 404 });
    }
    
    return NextResponse.json(order);
  } catch (error) {
    console.error("[GET /api/orders/me/[id] Error]:", error);
    return NextResponse.json({ message: "Error fetching order details." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    await dbConnect();

    const body = await req.json();
    const { products, totalPrice, paymentMethod, deliveryAddress } = body;

    // Server-side validation for COD rule
    if (paymentMethod === "COD" && totalPrice < 5000) {
      return NextResponse.json(
        { message: "Cash on delivery is only available for orders above ₹5000." },
        { status: 400 }
      );
    }

    const newOrder = await Order.create({
      // @ts-ignore
      userId: session.user.id,
      products,
      totalPrice,
      paymentMethod,
      orderStatus: "Order Placed",
      paymentStatus: paymentMethod === "COD" ? "PENDING" : "COMPLETED", // Assuming instant success for non-COD in this mock execution
      deliveryAddress,
    });

    return NextResponse.json({ success: true, orderId: newOrder._id }, { status: 201 });
  } catch (error: any) {
    console.error("DEBUG ORDER API ERROR", error);
    return NextResponse.json(
      { message: "An error occurred placing the order.", error: error.message },
      { status: 500 }
    );
  }
}

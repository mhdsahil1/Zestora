import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Inventory from "@/models/Inventory";
import { z } from "zod";

const simulateSchema = z.object({
  orderId: z.string().min(1, "Order ID is required"),
  status: z.enum(["SUCCESS", "FAILED"]),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    // For production sandboxing, require authentication
    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const body = await req.json();
    const validated = simulateSchema.safeParse(body);
    
    if (!validated.success) {
      return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
    }

    const { orderId, status } = validated.data;
    
    await dbConnect();

    // Verify ownership of the order
    const order = await Order.findOne({ _id: orderId, userId: (session.user as any).id });
    if (!order) {
      return NextResponse.json({ message: "Order not found or unauthorized access." }, { status: 404 });
    }

    // Protect against duplicate processing (Idempotency check)
    if (order.paymentStatus !== "PENDING") {
      return NextResponse.json({ message: `Order already processed with status: ${order.paymentStatus}` }, { status: 400 });
    }

    // Simulate outcome
    if (status === "SUCCESS") {
      // Execute manual transactional decrement to guarantee atomicity and avoid stock race conditions
      const rollbacks: any[] = [];
      let outOfStockError = null;

      for (const item of order.products) {
        const inv = await Inventory.findOneAndUpdate(
          { productId: item.productId, stock: { $gte: item.quantity } },
          { $inc: { stock: -item.quantity } },
          { new: true }
        );

        if (!inv) {
          outOfStockError = `Product ${item.name} is currently out of stock or insufficient quantity available.`;
          break;
        }
        rollbacks.push({ productId: item.productId, quantity: item.quantity });
      }

      if (outOfStockError) {
        // Rollback any successfully decremented items in this order
        for (const rb of rollbacks) {
          await Inventory.updateOne(
            { productId: rb.productId }, 
            { $inc: { stock: rb.quantity } }
          );
        }
        return NextResponse.json(
          { message: outOfStockError, stockError: true }, 
          { status: 400 }
        );
      }

      order.paymentStatus = "COMPLETED";
      order.orderStatus = "Processing";
    } else {
      order.paymentStatus = "FAILED";
      // Keeps orderStatus as "Order Placed" or assigns a specific Failure status
    }

    await order.save();

    return NextResponse.json({ 
      success: true, 
      orderId: order._id, 
      paymentStatus: order.paymentStatus 
    });

  } catch (error: any) {
    console.error("[Simulate Payment API Error]:", error);
    return NextResponse.json({ message: "Internal server error connecting to the Sandbox API." }, { status: 500 });
  }
}

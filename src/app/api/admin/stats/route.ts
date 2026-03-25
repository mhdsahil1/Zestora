import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import User from "@/models/User";
import ProductModel from "@/models/Product";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user || (session.user as any).role !== "admin") {
      return NextResponse.json({ message: "Unauthorized. Admin access required." }, { status: 403 });
    }

    await dbConnect();

    const [orders, totalCustomers, totalProducts] = await Promise.all([
      Order.find().lean(),
      User.countDocuments({ role: "user" }),
      ProductModel.countDocuments(),
    ]);

    const totalRevenue = orders.reduce((sum: number, order: any) => sum + (order.totalPrice || 0), 0);
    const activeOrders = orders.filter(
      (o: any) => o.orderStatus !== "Delivered"
    ).length;

    // Recent orders with customer info
    const recentOrders = await Order.find()
      .populate({ path: "userId", select: "name email", model: User })
      .sort({ createdAt: -1 })
      .limit(10)
      .lean();

    return NextResponse.json({
      stats: {
        totalRevenue,
        activeOrders,
        totalCustomers,
        totalProducts,
      },
      recentOrders: recentOrders.map((order: any) => ({
        id: order._id,
        customer: order.userId?.name || "Unknown",
        email: order.userId?.email || "",
        date: new Date(order.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        total: order.totalPrice,
        status: order.orderStatus,
        paymentMethod: order.paymentMethod,
        paymentStatus: order.paymentStatus,
      })),
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch admin stats", error: error.message },
      { status: 500 }
    );
  }
}

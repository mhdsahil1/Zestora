/**
 * /api/create-order
 * Alias that creates a Razorpay order and a pending DB order in one shot.
 * Used by the checkout page for clean Razorpay integration.
 */
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Inventory from "@/models/Inventory";
import ProductModel from "@/models/Product";
import { rateLimit } from "@/lib/rateLimit";
import { z } from "zod";
import Razorpay from "razorpay";

const schema = z.object({
  products: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().positive().max(99),
      })
    )
    .min(1)
    .max(50),
  paymentMethod: z.enum(["COD", "UPI", "CARD", "NETBANKING"]),
  deliveryAddress: z.object({
    fullName: z.string().min(2).max(100),
    phone: z.string().regex(/^\d{10,15}$/),
    addressLine: z.string().min(5).max(500),
    city: z.string().min(2).max(100),
    state: z.string().min(2).max(100),
    pincode: z.string().regex(/^\d{4,10}$/),
  }),
});

export async function POST(req: Request) {
  try {
    const limited = await rateLimit(req);
    if (limited) return limited;

    const session = await getServerSession(authOptions);
    if (!session?.user)
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });

    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input.", errors: parsed.error.issues },
        { status: 400 }
      );
    }

    const { products, paymentMethod, deliveryAddress } = parsed.data;

    await dbConnect();

    // ── Server-side price calculation (prevents tampering) ─────────────
    let totalPrice = 0;
    const verifiedProducts = [];

    for (const item of products) {
      const product = await ProductModel.findOne({ id: item.productId }).lean();
      if (!product) {
        return NextResponse.json({ message: `Product not found: ${item.productId}` }, { status: 404 });
      }

      let inv = await Inventory.findOne({ productId: item.productId });
      if (!inv) {
        inv = await Inventory.create({ productId: item.productId, stock: 100 });
      }
      if (inv.stock < item.quantity) {
        return NextResponse.json(
          { message: `Insufficient stock for ${product.name}. Only ${inv.stock} left.` },
          { status: 400 }
        );
      }

      const price = product.price;
      totalPrice += price * item.quantity;
      verifiedProducts.push({
        productId: item.productId,
        name: product.name,
        price,
        quantity: item.quantity,
        image: product.images?.[0] || product.image,
      });
    }

    // ── Create pending order in DB ─────────────────────────────────────
    const order = await Order.create({
      userId: (session.user as any).id,
      products: verifiedProducts,
      totalPrice,
      paymentMethod,
      orderStatus: "Order Placed",
      paymentStatus: "PENDING",
      deliveryAddress,
    });

    // ── Create Razorpay order for online payments ──────────────────────
    let razorpayOrderId: string | null = null;

    if (paymentMethod !== "COD") {
      const rzp = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID!,
        key_secret: process.env.RAZORPAY_KEY_SECRET!,
      });

      const rpOrder = await rzp.orders.create({
        amount: Math.round(totalPrice * 100), // paise
        currency: "INR",
        receipt: order._id.toString(),
        notes: { orderId: order._id.toString() },
      });

      razorpayOrderId = rpOrder.id;
      await Order.findByIdAndUpdate(order._id, { razorpayOrderId });
    }

    return NextResponse.json(
      {
        success: true,
        orderId: order._id,
        razorpayOrderId,
        amount: Math.round(totalPrice * 100),
        currency: "INR",
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("[create-order]", err);
    return NextResponse.json({ message: "Failed to create order." }, { status: 500 });
  }
}

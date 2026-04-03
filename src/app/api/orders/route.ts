import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import Order from "@/models/Order";
import Inventory from "@/models/Inventory";
import { z } from "zod";
import { rateLimit } from "@/lib/rateLimit";
import ProductModel from "@/models/Product";

const orderSchema = z.object({
  products: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().positive().max(99),
      })
    )
    .min(1, "Order must contain at least one product")
    .max(50),
  paymentMethod: z.enum(["COD", "UPI", "CARD", "NETBANKING"]),
  deliveryAddress: z.object({
    fullName: z.string().min(2, "Name is required").max(100),
    phone: z.string().regex(/^\d{10,15}$/, "Invalid phone number"),
    addressLine: z.string().min(5, "Address is required").max(500),
    city: z.string().min(2, "City is required").max(100),
    state: z.string().min(2, "State is required").max(100),
    pincode: z.string().regex(/^\d{4,10}$/, "Invalid pincode"),
  }),
});

export async function POST(req: Request) {
  try {
    const defaultLimiterResponse = await rateLimit(req);
    if (defaultLimiterResponse) return defaultLimiterResponse;

    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized. Please log in." }, { status: 401 });
    }

    const body = await req.json();

    // Validate input
    const validated = orderSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { message: "Invalid order data.", errors: validated.error.issues },
        { status: 400 }
      );
    }

    const { products, paymentMethod, deliveryAddress } = validated.data;
    const hasRazorpayConfig = Boolean(
      process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET
    );

    if (paymentMethod !== "COD" && !hasRazorpayConfig) {
      return NextResponse.json(
        { message: "Online payments are temporarily unavailable. Please try Cash on Delivery or contact support." },
        { status: 503 }
      );
    }

    await dbConnect();

    // Server-side price recalculation to prevent price tampering
    let serverTotalPrice = 0;
    const verifiedProducts = [];

    for (const item of products) {
      const catalogProduct = await ProductModel.findOne({ id: item.productId }).lean();
      if (!catalogProduct) {
        throw new Error(`Product not found: ${item.productId}`);
      }

      // Stock verification against Inventory collection
      let inv = await Inventory.findOne({ productId: item.productId });
      if (!inv) {
        throw new Error(`Inventory not initialized for ${catalogProduct.name}.`);
      }

      if (!inv || inv.stock < item.quantity) {
        throw new Error(`Insufficient stock for ${catalogProduct.name}. Only ${inv?.stock || 0} unit(s) available.`);
      }

      const price = catalogProduct.price;
      const name = catalogProduct.name;
      const image = catalogProduct.images?.[0] || catalogProduct.image;
      serverTotalPrice += price * item.quantity;
      
      verifiedProducts.push({ 
        productId: item.productId, 
        quantity: item.quantity, 
        price, 
        name, 
        image 
      });
    }

    // Server-side validation for COD rule
    if (paymentMethod === "COD" && serverTotalPrice < 5000) {
      return NextResponse.json(
        { message: "Cash on delivery is only available for orders above ₹5000." },
        { status: 400 }
      );
    }


    const newOrder = await Order.create({
      userId: (session.user as any).id,
      products: verifiedProducts,
      totalPrice: serverTotalPrice,
      paymentMethod,
      orderStatus: "Order Placed",
      paymentStatus: "PENDING", // Real payment verification required for prepaid
      deliveryAddress,
    });

    let razorpayOrderId = null;
    if (paymentMethod !== "COD" && hasRazorpayConfig) {
      const Razorpay = require("razorpay");
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
      const rpOrder = await razorpay.orders.create({
        amount: Math.round(serverTotalPrice * 100), // in paise
        currency: "INR",
        receipt: newOrder._id.toString(),
      });
      razorpayOrderId = rpOrder.id;
    }

    return NextResponse.json({ 
      success: true, 
      orderId: newOrder._id, 
      razorpayOrderId, 
      amount: Math.round(serverTotalPrice * 100) 
    }, { status: 201 });
  } catch (error: any) {
    console.error("[Orders API Error]:", error);
    const message = error.message?.includes("Product")
      ? error.message
      : "An error occurred placing the order.";
    return NextResponse.json({ message }, { status: 500 });
  }
}

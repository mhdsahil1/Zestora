import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").trim(),
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  phone: z.string().min(10, "Phone number must be at least 10 characters").trim().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
  .strict();

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds by IP
});

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    try {
      await rateLimiter.consume(ip);
    } catch (rateLimiterRes) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await dbConnect();
    const body = await req.json();

    const validatedData = signupSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json(
        { message: "Invalid input data.", errors: validatedData.error.issues },
        { status: 400 }
      );
    }

    const { name, email, phone, password } = validatedData.data;

    const userExists = await User.findOne({
      email: { $regex: new RegExp(`^${escapeRegExp(email)}$`, "i") },
    });

    if (userExists) {
      return NextResponse.json(
        { message: "Email already in use." },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10); // Required salt rounds
    const hashedPassword = await bcrypt.hash(password, salt); // Never store plain text passwords

    try {
      await User.create({
        name,
        email,
        phone: phone || undefined,
        password: hashedPassword,
        provider: "credentials",
        role: "user", // Never accept role from frontend
      });
    } catch (err: any) {
      // Handle rare race conditions for duplicate emails.
      if (err?.code === 11000) {
        return NextResponse.json(
          { message: "Email already in use." },
          { status: 409 }
        );
      }
      throw err;
    }

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred during registration." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { z } from "zod";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    await dbConnect();

    // @ts-ignore
    const user = await User.findById(session.user.id).select("-password");

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch user profile", error: error.message },
      { status: 500 }
    );
  }
}

const profileUpdateSchema = z
  .object({
    name: z.string().min(2).max(100).optional(),
    phone: z.string().min(5).max(30).optional(),
    addresses: z
      .array(
        z.object({
          fullName: z.string().min(2).max(100),
          phone: z.string().min(5).max(30),
          street: z.string().min(3).max(200),
          city: z.string().min(2).max(100),
          state: z.string().min(2).max(100),
          postalCode: z.string().min(4).max(10),
          country: z.string().min(2).max(100).default("India"),
        })
      )
      .optional(),
  })
  .strict();

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const validated = profileUpdateSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { message: "Invalid input.", errors: validated.error.issues },
        { status: 400 }
      );
    }

    await dbConnect();

    const userId = (session.user as any).id;
    const updateData: any = {};
    if (validated.data.name !== undefined) updateData.name = validated.data.name;
    if (validated.data.phone !== undefined) updateData.phone = validated.data.phone;
    if (validated.data.addresses !== undefined) updateData.addresses = validated.data.addresses;

    // Never allow role/provider changes through this endpoint.
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true }).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update profile.", error: error.message },
      { status: 500 }
    );
  }
}

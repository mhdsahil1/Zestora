import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { z } from "zod";

const paramsSchema = z.object({
  id: z.string().min(1),
});

const adminUserUpdateSchema = z
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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized." }, { status: 401 });
    }

    if ((session.user as any).role !== "admin") {
      return NextResponse.json({ message: "Forbidden." }, { status: 403 });
    }

    const validatedParams = paramsSchema.safeParse(params);
    if (!validatedParams.success) {
      return NextResponse.json({ message: "Invalid user id." }, { status: 400 });
    }

    const body = await req.json();
    const validatedBody = adminUserUpdateSchema.safeParse(body);
    if (!validatedBody.success) {
      return NextResponse.json(
        { message: "Invalid input.", errors: validatedBody.error.issues },
        { status: 400 }
      );
    }

    await dbConnect();

    const updateData: any = {};
    if (validatedBody.data.name !== undefined) updateData.name = validatedBody.data.name;
    if (validatedBody.data.phone !== undefined) updateData.phone = validatedBody.data.phone;
    if (validatedBody.data.addresses !== undefined) updateData.addresses = validatedBody.data.addresses;

    const user = await User.findByIdAndUpdate(validatedParams.data.id, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update user.", error: error.message },
      { status: 500 }
    );
  }
}


import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Only admins can access /admin routes (role is validated against MongoDB).
    if (!token?.email) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    await dbConnect();

    const normalizedEmail = String(token.email).trim().toLowerCase();
    const dbUser = await User.findOne({
      email: { $regex: new RegExp(`^${escapeRegExp(normalizedEmail)}$`, "i") },
    });

    if (!dbUser || dbUser.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
  runtime: "nodejs",
};


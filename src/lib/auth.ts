import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { z } from "zod";
import { RateLimiterMemory } from "rate-limiter-flexible";
import type { NextAuthOptions } from "next-auth";

// Fix Node 18+ IPv6 DNS resolution issues for Google APIs which cause OAUTH_CALLBACK_ERROR timeouts
import dns from "node:dns";
dns.setDefaultResultOrder("ipv4first");

const credentialsSchema = z.object({
  email: z.string().email("Invalid email").trim().toLowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Rate limit login: 5 attempts per email per 60 seconds
const loginRateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 60,
  keyPrefix: "login",
});

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      httpOptions: {
        timeout: 10000,
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedData = credentialsSchema.safeParse(credentials);

        if (!validatedData.success) {
          throw new Error("Invalid credentials");
        }

        const email = validatedData.data.email;

        // Rate limit by email to prevent brute-force
        try {
          await loginRateLimiter.consume(email);
        } catch {
          throw new Error("Too many login attempts. Please try again later.");
        }

        await dbConnect();

        const user = await User.findOne({
          email: { $regex: new RegExp(`^${escapeRegExp(email)}$`, "i") },
        }).select("+password");

        if (!user) {
          throw new Error("Invalid credentials");
        }

        // Google users won't have credentials password stored.
        if (!user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordCorrect = await bcrypt.compare(validatedData.data.password, user.password);

        if (!isPasswordCorrect) {
          throw new Error("Invalid credentials");
        }

        // Must return a plain JSON object, not a full Mongoose Document
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  useSecureCookies: process.env.NODE_ENV === "production",
  callbacks: {
    async signIn({ account, profile }) {
      // Google sign-in: create user if not exists, otherwise allow login.
      if (account?.provider === "google") {
        const googleProfile = profile as Record<string, unknown> | undefined;
        const email = (googleProfile?.email as string | undefined) ?? undefined;

        if (!email) {
          return false;
        }

        const normalizedEmail = email.trim().toLowerCase();

        const name =
          (googleProfile?.name as string | undefined) ??
          (email.split("@")[0] ? email.split("@")[0] : "Google User");
        const image = (googleProfile?.picture as string | undefined) ?? undefined;

        await dbConnect();

        const existingUser = await User.findOne({
          email: { $regex: new RegExp(`^${escapeRegExp(normalizedEmail)}$`, "i") },
        });
        if (!existingUser) {
          await User.create({
            name,
            email: normalizedEmail,
            image,
            provider: "google",
            role: "user",
          });
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      // Keep email/name available for the DB lookup.
      if (user) {
        token.email = (user as any).email;
        token.name = (user as any).name;
      }

      if (typeof token.email !== "string" || !token.email.trim()) {
        return token;
      }

      // IMPORTANT: Always fetch the user from MongoDB so role changes are reflected immediately.
      const normalizedEmail = token.email.trim().toLowerCase();

      await dbConnect();

      const dbUser = await User.findOne({
        email: { $regex: new RegExp(`^${escapeRegExp(normalizedEmail)}$`, "i") },
      });

      if (!dbUser) {
        // If the user no longer exists, invalidate the session.
        throw new Error("User not found");
      }

      token.id = dbUser._id.toString();
      token.role = dbUser.role;
      token.name = dbUser.name;
      token.email = dbUser.email;

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
          // Ensure required session.user shape for frontend usage.
          name: (token.name as string) ?? (session.user?.name ?? ""),
          email: (token.email as string) ?? (session.user?.email ?? ""),
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

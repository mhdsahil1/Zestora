import { RateLimiterMemory } from "rate-limiter-flexible";
import { NextResponse } from "next/server";

const defaultLimiter = new RateLimiterMemory({
  points: 10, // 10 requests
  duration: 60, // per 60 seconds
});

export async function rateLimit(req: Request, limiter = defaultLimiter) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    await limiter.consume(ip);
    return null; // Success
  } catch (rejectRes) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }
}

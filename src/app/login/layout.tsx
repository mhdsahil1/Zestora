import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In to Your Account | Zestora",
  description: "Sign in to your Zestora account to track spice deliveries, access saved payment methods, and manage subscriptions.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

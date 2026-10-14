import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart | Zestora",
  description: "Review your selected farm-sourced organic spices and culinary creations before proceeding to secure checkout.",
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

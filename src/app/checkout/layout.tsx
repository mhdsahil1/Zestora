import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Checkout | Zestora",
  description: "Complete your Zestora spice order with fast, secure delivery across India. Multiple payment methods available.",
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

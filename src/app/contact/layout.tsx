import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Support | Zestora",
  description: "Get in touch with the Zestora spice specialists. Inquire about farm partnerships, bulk spice orders, recipe pairings, and order support.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

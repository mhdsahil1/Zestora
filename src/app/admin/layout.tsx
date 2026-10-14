import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | Zestora",
  description: "Administrative console for managing products, inventory, orders, and customer analytics for Zestora.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

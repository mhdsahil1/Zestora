import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Account & Orders | Zestora",
  description: "View and manage your Zestora account profile, saved delivery addresses, and past spice orders.",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

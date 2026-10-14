import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Wishlist | Zestora",
  description: "View and manage your saved organic spices, farm blends, and favorite artisanal seasonings on Zestora.",
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

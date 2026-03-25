import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Shop Premium Spices | Zestora",
  description: "Browse our curated collection of farm-fresh, organic spices. From highly aromatic cardamom to pure saffron.",
  openGraph: {
    title: "Shop Premium Spices | Zestora",
    description: "Browse our curated collection of farm-fresh, organic spices. From highly aromatic cardamom to pure saffron.",
    type: "website",
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

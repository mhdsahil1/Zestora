import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AuthProvider } from "@/components/providers/AuthProvider";
import FloatingIslandNav from "@/components/layout/FloatingIslandNav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zestora – Premium Organic Spices",
  description: "Discover authentic, fresh, and organic spices sourced directly from farms. Pure Spices. Real Flavor.",
  keywords: "organic spices, premium spices, turmeric, cardamom, black pepper, saffron, farm fresh spices",
  openGraph: {
    title: "Zestora – Premium Organic Spices",
    description: "Pure Spices. Real Flavor. Farm-sourced organic spices delivered to your door.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
              <FloatingIslandNav />
              <VisualEditsMessenger />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

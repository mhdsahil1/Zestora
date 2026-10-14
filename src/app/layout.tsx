import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsWrapper } from "@/components/ui/AnalyticsWrapper";

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
  title: {
    default: "Zestora – Premium Organic Spices",
    template: "%s | Zestora",
  },
  description: "Discover authentic, fresh, and organic spices sourced directly from farms. Pure Spices. Real Flavor.",
  keywords: ["organic spices", "premium spices", "turmeric", "cardamom", "black pepper", "saffron", "farm fresh spices"],
  authors: [{ name: "Zestora" }],
  creator: "Zestora",
  publisher: "Zestora",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : 'https://zestoraspices.vercel.app')
  ),
  openGraph: {
    title: "Zestora – Premium Organic Spices",
    description: "Pure Spices. Real Flavor. Farm-sourced organic spices delivered to your door.",
    type: "website",
    locale: "en_IN",
    siteName: "Zestora",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Zestora – Premium Organic Spices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zestora – Premium Organic Spices",
    description: "Pure Spices. Real Flavor. Farm-sourced organic spices delivered to your door.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4f06be698e2968af",
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
              <Toaster richColors position="top-right" />
              <VisualEditsMessenger />
              <AnalyticsWrapper />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Compass, Home, Search, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  const popularCategories = [
    { label: "Whole Spices", href: "/shop" },
    { label: "Kashmir Saffron", href: "/shop?category=Daily Groceries" },
    { label: "Roots & Turmeric", href: "/shop?category=Roots" },
    { label: "Heritage Blends", href: "/shop" },
  ];

  return (
    <main className="min-h-screen bg-[#FFF7E6] flex flex-col justify-between">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center max-w-3xl mx-auto">
        {/* Spice Icon Badge */}
        <div className="relative mb-6">
          <div className="w-28 h-28 bg-[#2B1B12] rounded-full flex items-center justify-center shadow-xl border-4 border-[#D4AF37]/40">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#D4AF37]">404</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-9 h-9 bg-[#C65A00] rounded-full flex items-center justify-center text-white shadow-md">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '12s' }} />
          </div>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-bold mb-3">
          Route Not Found
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl text-[#2B1B12] font-bold mb-4 leading-tight">
          Lost on the Spice Route
        </h1>

        <p className="text-[#7A5C3A] text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
          The page or blend you are searching for might have drifted away like aromatic steam or been moved to a new estate pantry. Let&apos;s get your kitchen back on track.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mb-12">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C65A00] text-white rounded-full font-semibold text-sm hover:bg-[#2B1B12] transition-colors shadow-md shadow-[#C65A00]/25"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>

          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-[#E8D5B0] text-[#2B1B12] rounded-full font-semibold text-sm hover:border-[#C65A00] hover:text-[#C65A00] transition-colors shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            Browse Spice Shop
          </Link>
        </div>

        {/* Popular destinations */}
        <div className="pt-8 border-t border-[#E8D5B0] w-full">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5C3A] mb-4">
            Popular Collections
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {popularCategories.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="px-4 py-2 bg-white text-[#2B1B12] rounded-full text-xs font-medium border border-[#E8D5B0] hover:border-[#C65A00] hover:text-[#C65A00] transition-colors shadow-xs"
              >
                {cat.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 bg-[#FFF7E6] text-[#C65A00] rounded-full text-xs font-semibold border border-[#C65A00]/30 hover:bg-[#C65A00] hover:text-white transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
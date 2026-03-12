"use client";

import React from "react";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { useWishlist } from "@/contexts/WishlistContext";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#2B1B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="w-5 h-5 text-[#D4AF37]" />
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">My Wishlist</p>
          </div>
          <h1 className="font-serif text-5xl text-white">Your Saved Spices</h1>
          {items.length > 0 && (
            <p className="text-white/50 text-sm mt-2">{items.length} item{items.length !== 1 ? "s" : ""} saved</p>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-[#F5E6C8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[#E8D5B0]" />
            </div>
            <h2 className="font-serif text-3xl text-[#2B1B12] mb-3">Your wishlist is empty</h2>
            <p className="text-[#7A5C3A] text-sm mb-8">Save your favorite spices to revisit them later.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#2B1B12] transition-all duration-300"
            >
              Browse Spices <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 mb-12">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#C65A00] text-[#C65A00] font-medium rounded-full hover:bg-[#C65A00] hover:text-white transition-all duration-300"
              >
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
}

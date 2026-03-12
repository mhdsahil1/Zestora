"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, Grid3X3, Grid2X2, X, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const allCategories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest First" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initCategory = searchParams.get("category") || "All";

  const [selectedCategory, setSelectedCategory] = useState(initCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(4);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    list = list.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (inStockOnly) list = list.filter((p) => p.inStock);

    switch (sortBy) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      case "newest": list.sort((a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1)); break;
      case "featured": list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
    }
    return list;
  }, [selectedCategory, sortBy, priceRange, inStockOnly]);

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-[#2B1B12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #C65A00 0%, transparent 50%), radial-gradient(circle at 80% 50%, #D4AF37 0%, transparent 50%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">Our Collection</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-white mb-4">The Spice Shop</h1>
          <p className="text-white/50 text-sm max-w-lg">
            {filtered.length} premium spices from farms around the world
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mb-8">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#C65A00] text-white shadow-md"
                  : "bg-white text-[#7A5C3A] border border-[#E8D5B0] hover:border-[#C65A00] hover:text-[#C65A00]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E8D5B0] rounded-full text-sm text-[#2B1B12] font-medium hover:border-[#C65A00] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <label className="flex items-center gap-2 text-sm text-[#7A5C3A] cursor-pointer">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded accent-[#C65A00]"
              />
              In Stock Only
            </label>
            {(selectedCategory !== "All" || priceRange[0] > 0 || priceRange[1] < 50 || inStockOnly) && (
              <button
                onClick={() => { setSelectedCategory("All"); setPriceRange([0, 50]); setInStockOnly(false); }}
                className="flex items-center gap-1.5 text-xs text-[#C65A00] hover:underline"
              >
                <X className="w-3 h-3" /> Clear Filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-9 py-2.5 bg-white border border-[#E8D5B0] rounded-full text-sm text-[#2B1B12] outline-none cursor-pointer hover:border-[#C65A00] transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A5C3A] pointer-events-none" />
            </div>

            {/* Grid toggle */}
            <div className="hidden sm:flex items-center gap-1 bg-white border border-[#E8D5B0] rounded-full p-1">
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 rounded-full transition-colors ${gridCols === 4 ? "bg-[#C65A00] text-white" : "text-[#7A5C3A]"}`}
              >
                <Grid3X3 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={`p-1.5 rounded-full transition-colors ${gridCols === 3 ? "bg-[#C65A00] text-white" : "text-[#7A5C3A]"}`}
              >
                <Grid2X2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters panel */}
        {filtersOpen && (
          <div className="bg-white border border-[#E8D5B0] rounded-2xl p-6 mb-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#2B1B12] mb-4">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min={0}
                    max={50}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#C65A00]"
                  />
                  <div className="flex justify-between text-xs text-[#7A5C3A]">
                    <span>$0</span>
                    <span className="font-medium text-[#C65A00]">Up to ${priceRange[1]}</span>
                    <span>$50</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#2B1B12] mb-4">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                        selectedCategory === cat
                          ? "bg-[#C65A00] text-white"
                          : "bg-[#F5E6C8] text-[#7A5C3A] hover:bg-[#E8D5B0]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-[#2B1B12] mb-2">No spices found</p>
            <p className="text-[#7A5C3A] text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <div className={`grid gap-5 lg:gap-6 grid-cols-2 ${
            gridCols === 4 ? "md:grid-cols-3 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"
          }`}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FFF7E6] flex items-center justify-center">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Search, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/data/products";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
    setResults(filtered.slice(0, 5));
  }, [query]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-[#FFF7E6] shadow-2xl">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-[#C65A00] flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for spices, origins, or categories..."
              className="flex-1 bg-transparent text-xl text-[#2B1B12] placeholder-[#B09070] outline-none font-serif"
            />
            <button
              onClick={onClose}
              className="p-2 text-[#7A5C3A] hover:text-[#2B1B12] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="border-t border-[#E8D5B0]">
            <div className="max-w-3xl mx-auto px-4 py-4 space-y-2">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F5E6C8] transition-colors group"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={product.image} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-serif font-semibold text-[#2B1B12] group-hover:text-[#C65A00] transition-colors">
                      {product.name}
                    </p>
                    <p className="text-sm text-[#7A5C3A]">{product.origin}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-[#C65A00]">${product.price.toFixed(2)}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#7A5C3A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {query.trim().length >= 2 && results.length === 0 && (
          <div className="border-t border-[#E8D5B0]">
            <div className="max-w-3xl mx-auto px-4 py-8 text-center">
              <p className="text-[#7A5C3A]">No spices found for &ldquo;{query}&rdquo;</p>
              <Link
                href="/shop"
                onClick={onClose}
                className="inline-flex items-center gap-2 mt-4 text-[#C65A00] font-medium hover:underline"
              >
                Browse all spices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {query.trim().length < 2 && (
          <div className="border-t border-[#E8D5B0]">
            <div className="max-w-3xl mx-auto px-4 py-4">
              <p className="text-xs uppercase tracking-widest text-[#7A5C3A] mb-3 font-medium">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {["Turmeric", "Saffron", "Cardamom", "Black Pepper", "Cinnamon", "Chilli"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-4 py-1.5 bg-[#F5E6C8] text-[#2B1B12] text-sm rounded-full hover:bg-[#C65A00] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star, Leaf } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: ProductCardProps) {
  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(product.id);
  const [imageError, setImageError] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 ${className}`}>
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#F5E6C8]">
        <Link href={`/shop/${product.slug}`} className="relative block w-full h-full">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onError={() => setImageError(true)}
              priority={false}
              crossOrigin="anonymous"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#E8D5B0] to-[#F5E6C8]">
              <span className="text-[#7A5C3A] text-xs font-medium text-center px-4">{product.name}</span>
            </div>
          )}
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isBestseller && (
            <span className="bg-[#C65A00] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#D4AF37] text-[#2B1B12] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              New
            </span>
          )}
          {discount && (
            <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={() => toggle(product)}
          className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
            wishlisted
              ? "bg-[#C65A00] text-white"
              : "bg-white/90 text-[#7A5C3A] hover:bg-[#C65A00] hover:text-white"
          }`}
        >
          <Heart className={`w-4 h-4 ${wishlisted ? "fill-current" : ""}`} />
        </button>

        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full py-3 bg-[#2B1B12] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C65A00] transition-colors duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[10px] uppercase tracking-widest text-[#C65A00] font-medium">{product.category}</span>
          <span className="w-1 h-1 rounded-full bg-[#E8D5B0]" />
          <span className="text-[10px] text-[#7A5C3A]">{product.weight}</span>
        </div>

        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-base font-semibold text-[#2B1B12] hover:text-[#C65A00] transition-colors mb-2 leading-tight">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-3">
          {[1,2,3,4,5].map((s) => (
            <Star
              key={s}
              className={`w-3 h-3 ${s <= Math.round(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#E8D5B0]"}`}
            />
          ))}
          <span className="text-xs text-[#7A5C3A] ml-1">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-lg text-[#C65A00]">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#B09070] line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-[10px] text-green-700 bg-green-50 px-2 py-1 rounded-full">
            <Leaf className="w-3 h-3" />
            <span>Organic</span>
          </div>
        </div>
      </div>
    </div>
  );
}

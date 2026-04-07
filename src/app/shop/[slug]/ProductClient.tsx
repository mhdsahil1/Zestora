"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star, Heart, ShoppingCart, Leaf, MapPin,
  Package, CheckCircle, Minus, Plus
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import FlavorVisualizer from "@/components/ui/FlavorVisualizer";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const mockReviews = [
  { id: 1, name: "Aisha Rahman", rating: 5, date: "Jan 2026", text: "Absolutely exceptional quality. The aroma alone tells you this is something special. Will be ordering regularly.", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80", aroma: 5, freshness: 5, spiciness: 4 },
  { id: 2, name: "David Park", rating: 5, date: "Feb 2026", text: "I've tried many premium spice brands and Zestora consistently delivers. Fast shipping, beautiful packaging.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", aroma: 4, freshness: 5, spiciness: 3 },
  { id: 3, name: "Meera Nair", rating: 4, date: "Feb 2026", text: "Very good quality. The origin story behind each spice adds to the whole experience. Highly recommend.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", aroma: 5, freshness: 4, spiciness: 5 },
];

export default function ProductDetailPage({ 
  initialProduct, 
  relatedProducts 
}: { 
  initialProduct: Product, 
  relatedProducts: Product[] 
}) {
  const product = initialProduct;

  const { addItem } = useCart();
  const { toggle, isWishlisted } = useWishlist();
  const wishlisted = product ? isWishlisted(product.id) : false;

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "benefits" | "reviews" | "community">("description");
  const [addedToCart, setAddedToCart] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [reviewFilter, setReviewFilter] = useState("all");

  const related = relatedProducts;
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#7A5C3A] mb-10">
          <Link href="/" className="hover:text-[#C65A00] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#C65A00] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#2B1B12] font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F5E6C8]">
              <Image
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {discount && (
                <span className="absolute top-5 left-5 bg-[#C65A00] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  -{discount}% OFF
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${
                      selectedImage === i ? "border-[#C65A00] shadow-md" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C65A00] font-medium">{product.category}</span>
              <button
                onClick={() => toggle(product)}
                className={`p-2 rounded-full transition-all duration-300 ${
                  wishlisted ? "bg-[#C65A00] text-white" : "bg-[#F5E6C8] text-[#7A5C3A] hover:bg-[#C65A00] hover:text-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
              </button>
            </div>

            <h1 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className={`w-4 h-4 ${s <= Math.round(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#E8D5B0]"}`} />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#2B1B12]">{product.rating}</span>
              <span className="text-sm text-[#7A5C3A]">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-serif text-4xl font-bold text-[#C65A00]">₹{(product.price * 100).toFixed(0)}</span>
              {product.originalPrice && (
                <span className="text-xl text-[#B09070] line-through">₹{(product.originalPrice * 100).toFixed(0)}</span>
              )}
              <span className="text-sm text-[#7A5C3A]">/ {product.weight}</span>
            </div>

            <p className="text-[#7A5C3A] leading-relaxed text-sm mb-8">
              {product.shortDescription}
            </p>

            {/* Origin */}
            <div className="flex items-center gap-2 bg-[#F5E6C8] rounded-xl px-4 py-3 mb-8 w-fit">
              <MapPin className="w-4 h-4 text-[#C65A00]" />
              <span className="text-sm font-medium text-[#2B1B12]">Origin:</span>
              <span className="text-sm text-[#7A5C3A]">{product.origin}</span>
            </div>

            {/* Subscribe & Save */}
            {product.subscribeAndSaveDiscount && (
              <div className="bg-white rounded-xl p-4 mb-6 border-2 border-[#E8D5B0] overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-[#C65A00] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Save {product.subscribeAndSaveDiscount}%</div>
                <label className="flex items-center gap-3 cursor-pointer mb-3">
                  <input type="radio" checked={!isSubscribed} onChange={() => setIsSubscribed(false)} className="accent-[#C65A00] w-4 h-4" />
                  <span className="text-sm font-medium text-[#2B1B12]">One-time purchase: ₹{(product.price * 100).toFixed(0)}</span>
                </label>
                <div className="h-px bg-[#E8D5B0] w-full my-2"></div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" checked={isSubscribed} onChange={() => setIsSubscribed(true)} className="accent-[#C65A00] w-4 h-4" />
                  <span className="text-sm font-medium text-[#2B1B12]">
                    Subscribe & Deliver Every 30 Days: <span className="text-[#C65A00]">
                      ₹{(product.price * (1 - (product.subscribeAndSaveDiscount || 0) / 100) * 100).toFixed(0)}
                    </span>
                  </span>
                </label>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border-2 border-[#E8D5B0] rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-[#2B1B12] hover:bg-[#F5E6C8] transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 font-semibold text-[#2B1B12] min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-[#2B1B12] hover:bg-[#F5E6C8] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  addedToCart
                    ? "bg-green-600 text-white"
                    : product.inStock
                    ? "bg-[#C65A00] text-white hover:bg-[#2B1B12] shadow-lg hover:shadow-[#C65A00]/20 hover:shadow-xl"
                    : "bg-[#E8D5B0] text-[#7A5C3A] cursor-not-allowed"
                }`}
              >
                {addedToCart ? (
                  <><CheckCircle className="w-5 h-5" /> Added to Cart!</>
                ) : (
                  <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
                )}
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {product.tags.map((tag) => (
                <span key={tag} className="text-xs bg-[#F5E6C8] text-[#7A5C3A] px-3 py-1.5 rounded-full capitalize">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#E8D5B0]">
              {[
                { icon: Leaf, label: "100% Organic" },
                { icon: Package, label: "Eco Packaging" },
                { icon: CheckCircle, label: "Quality Tested" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-10 h-10 bg-[#F5E6C8] rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C65A00]" />
                  </div>
                  <span className="text-xs text-[#7A5C3A] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20">
          <div className="flex gap-0 border-b border-[#E8D5B0]">
            {(["description", "benefits", "reviews", "community"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium capitalize transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-[#C65A00] text-[#C65A00]"
                    : "border-transparent text-[#7A5C3A] hover:text-[#2B1B12]"
                }`}
              >
                {tab === "benefits" ? "Health Benefits" : tab}
                {tab === "reviews" && <span className="ml-2 text-xs bg-[#F5E6C8] px-2 py-0.5 rounded-full">{product.reviewCount}</span>}
              </button>
            ))}
          </div>

          <div className="py-10">
            {activeTab === "description" && (
              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                  <div className="max-w-3xl">
                    <h3 className="font-serif text-2xl text-[#2B1B12] mb-4">The Story</h3>
                    <p className="text-[#7A5C3A] leading-relaxed text-base">{product.description}</p>
                  </div>

                  {/* Flavor Profile (Sensory Gap) */}
                  {product.flavorProfile && (
                    <div className="max-w-3xl">
                      <h3 className="font-serif text-2xl text-[#2B1B12] mb-6">Flavor Profile</h3>
                      <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8D5B0]">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <FlavorVisualizer
                            aroma={product.flavorProfile.aroma * 20}
                            pungency={product.flavorProfile.spiciness * 20}
                            earthiness={product.flavorProfile.notes.some(n => n.includes("Earthy") || n.includes("Woody")) ? 80 : 40}
                            sweetness={product.flavorProfile.notes.some(n => n.includes("Sweet") || n.includes("Floral")) ? 75 : 20}
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-[#2B1B12] mb-3 uppercase tracking-wider">Tasting Notes</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.flavorProfile.notes.map((note) => (
                                <span key={note} className="px-3 py-1 bg-[#FFF7E6] text-[#C65A00] text-xs font-medium rounded-full border border-[#E8D5B0]">
                                  {note}
                                </span>
                              ))}
                            </div>
                            <p className="mt-6 text-sm text-[#7A5C3A] leading-relaxed">
                              Experience a comprehensive view of the sensory notes defining this authentic spice.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Grinding Video */}
                  {product.grindingVideoUrl && (
                    <div className="max-w-3xl">
                      <h3 className="font-serif text-2xl text-[#2B1B12] mb-4">Small-Batch Milling Process</h3>
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                        <video 
                          src={product.grindingVideoUrl} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-8">
                  {/* Shop the Recipe */}
                  {product.recipe && (
                    <div className="bg-[#2B1B12] rounded-2xl p-6 text-white text-center">
                      <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2">Shop The Recipe</p>
                      <h4 className="font-serif text-xl mb-4">{product.recipe.name}</h4>
                      <div className="text-sm text-white/80 space-y-2 mb-6">
                        {product.recipe.ingredients.map((ing, i) => (
                          <div key={i} className="flex justify-between border-b border-white/10 pb-1">
                            <span>{ing.name}</span>
                            <span className="font-medium text-[#D4AF37]">{ing.quantity}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-3 bg-[#C65A00] hover:bg-[#D4AF37] text-white rounded-full text-sm font-semibold transition-colors">
                        Add Recipe to Cart
                      </button>
                    </div>
                  )}

                  {/* Best Kept (Storage) */}
                  {product.storageTips && (
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                      <h4 className="font-serif text-lg text-blue-900 mb-2 flex items-center gap-2">
                        <Package className="w-5 h-5 text-blue-600" /> Best Kept
                      </h4>
                      <p className="text-sm text-blue-800/80 leading-relaxed">
                        {product.storageTips}
                      </p>
                    </div>
                  )}

                  {/* Traceability */}
                  {product.traceability && (
                    <div className="bg-[#F5E6C8] rounded-2xl p-6 border border-[#E8D5B0]">
                      <h4 className="font-serif text-lg text-[#2B1B12] mb-4">Trace Your Batch</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#7A5C3A]">Batch No.</span>
                          <span className="font-mono font-medium text-[#2B1B12]">{product.traceability.batchNo}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7A5C3A]">Harvest Date</span>
                          <span className="font-medium text-[#2B1B12]">{product.traceability.harvestDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#7A5C3A]">Farm / Estate</span>
                          <span className="font-medium text-[#2B1B12]">{product.traceability.farmName}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "benefits" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
                {product.healthBenefits.map((benefit, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-[#E8D5B0]">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center mb-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="font-serif text-sm font-semibold text-[#2B1B12]">{benefit}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="max-w-3xl space-y-6">
                <div className="flex gap-2 mb-8 border-b border-[#E8D5B0] pb-4 overflow-x-auto no-scrollbar">
                  {[
                    { id: "all", label: "All Reviews" },
                    { id: "aroma", label: "High Aroma" },
                    { id: "freshness", label: "Extra Fresh" },
                    { id: "spiciness", label: "High Spiciness" }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setReviewFilter(filter.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                        reviewFilter === filter.id
                          ? "bg-[#C65A00] text-white"
                          : "bg-white text-[#7A5C3A] border border-[#E8D5B0] hover:border-[#C65A00]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {mockReviews
                  .filter(r => {
                    if (reviewFilter === "aroma") return r.aroma >= 4;
                    if (reviewFilter === "freshness") return r.freshness >= 4;
                    if (reviewFilter === "spiciness") return r.spiciness && r.spiciness >= 4;
                    return true;
                  })
                  .map((review) => (
                  <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden">
                          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-serif font-semibold text-[#2B1B12] text-sm">{review.name}</p>
                          <p className="text-xs text-[#7A5C3A]">{review.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[1,2,3,4,5].map((s) => (
                          <Star key={s} className={`w-3.5 h-3.5 ${s <= review.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-[#E8D5B0]"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#7A5C3A] leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16 pt-16 border-t border-[#E8D5B0]">
            <h2 className="font-serif text-3xl text-[#2B1B12] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartItemCard, type CartItemType } from "@/components/ui/CartItemCard";
import { OrderSummary } from "@/components/ui/OrderSummary";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { state, updateQuantity, removeItem, totalPrice } = useCart();
  
  // Transform CartContext items into the UI's expected format
  const items: CartItemType[] = state.items.map(item => ({
    id: item.product.id,
    name: item.product.name,
    description: item.product.shortDescription || item.product.category,
    price: item.product.price,
    quantity: item.quantity,
    image: item.product.image || (item.product.images && item.product.images[0]) || ""
  }));

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const subtotal = totalPrice;
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5;
  const total = items.length > 0 ? subtotal + shipping : 0;

  return (
    <main className="min-h-screen bg-[#FFF7E6] flex flex-col justify-between">
      <Navbar />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex-1">
        {items.length === 0 ? (
          <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-sm border border-[#E8D5B0] my-8 text-center">
            <div className="w-24 h-24 bg-[#FFF7E6] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#E8D5B0]">
              <ShoppingBag className="w-10 h-10 text-[#C65A00]" />
            </div>
            <h1 className="text-3xl font-serif font-bold text-[#2B1B12] mb-3">Your cart is empty</h1>
            <p className="text-[#7A5C3A] mb-8 text-center max-w-md text-sm leading-relaxed">
              Looks like you haven&apos;t added any spices to your cart yet. Discover our pure farm-sourced collection and elevate your cooking.
            </p>
            <Link href="/shop" className="block">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C65A00] text-white rounded-full font-semibold text-sm hover:bg-[#2B1B12] transition-colors shadow-md">
                Browse All Spices <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-8 border-b border-[#E8D5B0] pb-6">
              <h1 className="font-serif text-4xl text-[#2B1B12] font-bold">Shopping Cart</h1>
              <p className="text-sm text-[#7A5C3A] mt-1">
                {items.reduce((acc, item) => acc + item.quantity, 0)} items in your cart
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              {/* Cart Items Section */}
              <div className="flex-1 w-full space-y-4">
                <div className="flex justify-between items-center border-b border-[#E8D5B0] pb-3 mb-4">
                  <h2 className="text-lg font-serif font-semibold text-[#2B1B12]">
                    Selected Spices
                  </h2>
                  <Link href="/shop" className="text-xs font-semibold text-[#C65A00] hover:text-[#2B1B12] transition-colors">
                    + Add More Spices
                  </Link>
                </div>
                
                <div className="flex flex-col gap-4">
                  {items.map(item => (
                    <CartItemCard 
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemove}
                    />
                  ))}
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="w-full lg:w-[380px] shrink-0">
                <div className="sticky top-28 bg-white p-6 rounded-3xl shadow-sm border border-[#E8D5B0]">
                  <OrderSummary 
                    items={items.map(item => ({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      quantity: item.quantity,
                    }))}
                    subtotal={subtotal}
                    shipping={shipping}
                    total={total}
                    className="mb-6 rounded-2xl"
                  />
                  <Link href="/checkout" className="block">
                    <button className="w-full py-4 bg-[#C65A00] hover:bg-[#2B1B12] text-white font-semibold rounded-full text-base transition-colors shadow-lg shadow-[#C65A00]/25 cursor-pointer">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

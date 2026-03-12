"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartSidebar() {
  const { state, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          state.isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FFF7E6] z-50 shadow-2xl flex flex-col transition-transform duration-400 ease-in-out ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8D5B0] bg-[#2B1B12]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-serif text-xl text-white">Your Cart</h2>
            <span className="bg-[#C65A00] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {state.items.reduce((s, i) => s + i.quantity, 0)}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-1.5 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag className="w-16 h-16 text-[#E8D5B0] mb-4" />
              <p className="font-serif text-xl text-[#2B1B12] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#7A5C3A] mb-6">Add some premium spices to get started</p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-[#C65A00] text-white rounded-full text-sm font-medium hover:bg-[#2B1B12] transition-colors"
              >
                Browse Spices
              </button>
            </div>
          ) : (
            state.items.map((item) => (
              <div key={item.product.id} className="flex gap-4 bg-white rounded-xl p-3 shadow-sm">
                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-semibold text-[#2B1B12] truncate">{item.product.name}</h4>
                  <p className="text-xs text-[#7A5C3A] mb-2">{item.product.weight}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 border border-[#E8D5B0] rounded-full">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#C65A00] hover:bg-[#FFF7E6] rounded-full transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-medium text-[#2B1B12]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-[#C65A00] hover:bg-[#FFF7E6] rounded-full transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-sm font-bold text-[#C65A00]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.product.id)}
                  className="self-start p-1 text-[#7A5C3A] hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-[#E8D5B0] p-6 space-y-4 bg-white">
            <div className="flex items-center justify-between text-sm text-[#7A5C3A]">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-[#7A5C3A]">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free over $40</span>
            </div>
            <div className="flex items-center justify-between font-serif text-lg font-bold text-[#2B1B12] border-t border-[#E8D5B0] pt-3">
              <span>Total</span>
              <span className="text-[#C65A00]">${totalPrice.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="block w-full py-3.5 bg-[#C65A00] text-white text-center font-medium rounded-full hover:bg-[#2B1B12] transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={closeCart}
              className="block w-full py-3 text-[#7A5C3A] text-sm text-center hover:text-[#2B1B12] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

"use client"
import * as React from "react"
import Link from "next/link"
import { ShoppingBag, ArrowRight } from "lucide-react"
import { CartItemCard, type CartItemType } from "@/components/ui/CartItemCard"
import { OrderSummary } from "@/components/ui/OrderSummary"
import { PrimaryButton } from "@/components/ui/PrimaryButton"
import { useCart } from "@/contexts/CartContext"

export default function CartPage() {
  const { state, updateQuantity, removeItem, totalPrice } = useCart()
  
  // Transform CartContext items into the UI's expected format
  const items: CartItemType[] = state.items.map(item => ({
    id: item.product.id,
    name: item.product.name,
    description: item.product.shortDescription || item.product.category,
    price: item.product.price,
    quantity: item.quantity,
    image: item.product.image || (item.product.images && item.product.images[0]) || ""
  }))

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity)
  }

  const handleRemove = (id: string) => {
    removeItem(id)
  }

  const subtotal = totalPrice
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5
  // If no items, total is 0
  const total = items.length > 0 ? subtotal + shipping : 0

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-white">
        <div className="w-24 h-24 bg-[#FEF2F2] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#F87171]/20">
          <ShoppingBag className="w-10 h-10 text-[#DC2626]" />
        </div>
        <h1 className="text-3xl font-bold text-[#450A0A] mb-3 font-satoshi">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Looks like you haven't added any spices to your cart yet. Discover our premium collection and add some flavor to your life.
        </p>
        <Link href="/shop" className="block">
          <PrimaryButton className="w-full sm:w-auto flex items-center gap-2">
            Continue Shopping <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </Link>
      </div>
    )
  }

  // Convert for OrderSummary which expects OrderItem
  const orderItems = items.map(item => ({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
  }))

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#450A0A] mb-8 font-satoshi tracking-tight">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-end border-b border-[#F87171]/20 pb-4 mb-6">
              <h2 className="text-2xl font-semibold text-[#450A0A]">
                {items.reduce((acc, item) => acc + item.quantity, 0)} Items
              </h2>
              <Link href="/shop" className="text-md font-semibold text-[#DC2626] hover:text-[#450A0A] transition-colors pb-1 border-b-2 border-transparent hover:border-[#DC2626]">
                Continue Shopping
              </Link>
            </div>
            
            <div className="flex flex-col gap-6">
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
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="sticky top-24">
              <OrderSummary 
                items={orderItems}
                subtotal={subtotal}
                shipping={shipping === 0 ? 0 : shipping}
                total={total}
                className="mb-6 rounded-2xl"
              />
              <Link href="/checkout" className="block">
                <PrimaryButton className="w-full text-lg py-4">
                  Proceed to Checkout
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

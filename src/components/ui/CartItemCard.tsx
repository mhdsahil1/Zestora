"use client"
import * as React from "react"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { QuantitySelector } from "./QuantitySelector"
import { cn } from "@/lib/utils"

export interface CartItemType {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  image: string
}

export interface CartItemCardProps {
  item: CartItemType
  onUpdateQuantity: (id: string, newQuantity: number) => void
  onRemove: (id: string) => void
  className?: string
}

export function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
  className
}: CartItemCardProps) {
  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-5 p-5 bg-[#FEF2F2] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-[2px] transition-all duration-200 border border-[#F87171]/20 cursor-default",
      className
    )}>
      {/* Product Image */}
      <div className="relative w-full sm:w-28 h-28 rounded-lg overflow-hidden shrink-0 bg-white shadow-sm">
        <Image 
          src={item.image} 
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Details & Actions */}
      <div className="flex flex-col sm:flex-row flex-1 justify-between gap-4">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-[#450A0A] line-clamp-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
          </div>
          <div className="font-semibold text-lg text-[#DC2626] mt-3">
            ₹{(item.price * 100).toFixed(0)}
          </div>
        </div>
        
        <div className="flex sm:flex-col justify-between items-center sm:items-end gap-4 mt-2 sm:mt-0">
          <QuantitySelector 
            quantity={item.quantity} 
            onQuantityChange={(q) => onUpdateQuantity(item.id, q)} 
          />
          <div className="flex items-center gap-4">
            <span className="font-bold text-md text-[#450A0A] hidden sm:inline-block">
              Subtotal: ₹{((item.price * item.quantity) * 100).toFixed(0)}
            </span>
            <button 
              onClick={() => onRemove(item.id)}
              className="text-[#F87171] hover:text-[#DC2626] transition-colors p-2 rounded-full hover:bg-white cursor-pointer"
              aria-label="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

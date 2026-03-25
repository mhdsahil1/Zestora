"use client"
import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (newQuantity: number) => void
  min?: number
  max?: number
  className?: string
}

export function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  className
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) onQuantityChange(quantity - 1)
  }
  
  const handleIncrement = () => {
    if (quantity < max) onQuantityChange(quantity + 1)
  }

  return (
    <div className={cn("flex items-center border border-[#E2E8F0] rounded-lg overflow-hidden h-10 w-[110px] bg-white shadow-sm", className)}>
      <button 
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="w-1/3 h-full flex items-center justify-center text-[#450A0A] hover:bg-[#F87171]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <Minus className="w-4 h-4" />
      </button>
      <div className="w-1/3 h-full flex items-center justify-center text-sm font-semibold text-[#450A0A] border-x border-[#E2E8F0]">
        {quantity}
      </div>
      <button 
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-1/3 h-full flex items-center justify-center text-[#450A0A] hover:bg-[#F87171]/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}

import * as React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Separator } from "./separator"
import { cn } from "@/lib/utils"

export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface OrderSummaryProps {
  items?: OrderItem[]
  subtotal?: number
  shipping?: number
  total?: number
  className?: string
}

const defaultItems: OrderItem[] = [
  { id: "1", name: "Premium Saffron Threads", price: 25.00, quantity: 1 },
  { id: "2", name: "Organic Turmeric Powder", price: 12.50, quantity: 2 },
]

export function OrderSummary({
  items = defaultItems,
  subtotal = 50.00,
  shipping = 0,
  total = 50.00,
  className
}: OrderSummaryProps) {
  return (
    <Card className={cn("w-full bg-[#FEF2F2] border-[#F87171]/20 shadow-md", className)}>
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[#450A0A]">Order Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-center text-sm">
            <div className="flex flex-col">
              <span className="font-medium text-[#450A0A]">{item.name}</span>
              <span className="text-muted-foreground text-xs">Qty: {item.quantity}</span>
            </div>
            <span className="font-semibold text-[#450A0A]">₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <Separator className="my-2 bg-[#F87171]/30" />

        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium text-[#450A0A]">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium text-[#450A0A]">
            {shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}
          </span>
        </div>
      </CardContent>

      <Separator className="my-0 bg-[#F87171]/30" />

      <CardFooter className="pt-4 flex justify-between items-center">
        <span className="font-bold text-lg text-[#450A0A]">Total</span>
        <span className="font-bold text-xl text-[#DC2626]">₹{total.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}

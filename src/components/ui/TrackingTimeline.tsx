"use client";

import * as React from "react"
import { CheckCircle2, Package, Truck, PackageCheck, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const activeSteps = [
  { status: 'Order Placed', icon: CheckCircle2, label: 'Order Placed' },
  { status: 'Processing', icon: Package, label: 'Processing' },
  { status: 'Shipped', icon: Truck, label: 'Shipped' },
  { status: 'Delivered', icon: PackageCheck, label: 'Delivered' }
]

export function TrackingTimeline({ currentStatus }: { currentStatus: string }) {
  if (currentStatus === 'CANCELLED' || currentStatus === 'Cancelled') {
    return (
      <div className="flex items-center justify-center py-8">
         <div className="flex flex-col items-center gap-3 text-red-600">
            <XCircle size={48} />
            <span className="font-bold text-xl font-satoshi">Order Cancelled</span>
         </div>
      </div>
    );
  }

  const currentIndex = activeSteps.findIndex(s => s.status === currentStatus) || 0;
  
  return (
    <div className="flex items-center justify-between relative mt-8 mb-16 mx-4 sm:mx-12">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-[#F5E6C8] z-0 rounded-full" />
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-[#C65A00] z-0 rounded-full transition-all duration-700 ease-in-out"
        style={{ width: `${(Math.max(currentIndex, 0) / (activeSteps.length - 1)) * 100}%` }}
      />
      {activeSteps.map((step, idx) => {
        const Icon = step.icon;
        const isActive = currentIndex >= idx;
        const isCurrent = currentIndex === idx;
        
        return (
          <div key={step.status} className="relative z-10 flex flex-col items-center gap-2">
             <div className={cn(
               "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold transition-all duration-500",
               isActive ? "bg-[#C65A00] text-white shadow-lg" : "bg-white text-[#7A5C3A] border-4 border-[#F5E6C8]",
               isCurrent ? "ring-4 ring-[#C65A00]/20 ring-offset-2 scale-110" : ""
             )}>
               <Icon size={24} className={isActive ? "animate-in zoom-in duration-300" : ""} />
             </div>
             <span className={cn(
               "text-xs sm:text-sm font-semibold absolute top-16 text-center w-32 -mx-10 whitespace-nowrap",
               isActive ? "text-[#2B1B12]" : "text-[#7A5C3A]",
               isCurrent ? "font-bold" : ""
             )}>
               {step.label}
             </span>
          </div>
        )
      })}
    </div>
  )
}

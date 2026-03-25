"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { StepIndicator } from "@/components/ui/StepIndicator"
import { OrderSummary } from "@/components/ui/OrderSummary"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CreditCard, Banknote, Smartphone } from "lucide-react"

export default function PaymentMethodPage() {
  const router = useRouter()
  const [selectedMethod, setSelectedMethod] = useState<string>("card")

  const methods = [
    {
      id: "upi",
      title: "UPI",
      description: "Pay via Google Pay, PhonePe, Paytm",
      icon: <Smartphone className="h-6 w-6" />,
      tag: "Fastest"
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      description: "Visa, MasterCard, RuPay, Amex",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay at your doorstep",
      icon: <Banknote className="h-6 w-6" />,
      note: "Extra $2 handling charge applies."
    }
  ]

  const handleContinue = () => {
    // In a real flow, you might save the chosen method to a global state/context
    router.push(`/checkout/review?method=${selectedMethod}`)
  }

  return (
    <div className="min-h-screen bg-[#FEF2F2] pt-12 pb-24 font-sans text-[#450A0A]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <StepIndicator currentStep={2} />

        <h1 className="text-3xl font-bold mb-8 text-center text-[#450A0A]">Select Payment Method</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Payment Options */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {methods.map((method) => {
              const isSelected = selectedMethod === method.id

              return (
                <Card 
                  key={method.id}
                  className={cn(
                    "cursor-pointer transition-all duration-300 transform hover:scale-[1.01] overflow-hidden group",
                    isSelected 
                      ? "border-[#CA8A04] shadow-lg ring-2 ring-[#CA8A04]/20" 
                      : "border-gray-200 hover:border-[#F87171] hover:shadow-md"
                  )}
                  onClick={() => setSelectedMethod(method.id)}
                >
                  <CardContent className="p-6 flex items-start sm:items-center gap-4 relative">
                    {/* Animated background on selection */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r from-[#CA8A04]/10 to-transparent opacity-0 transition-opacity duration-500",
                      isSelected && "opacity-100"
                    )}/>

                    <div className={cn(
                      "h-12 w-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 relative z-10",
                      isSelected ? "bg-[#CA8A04] text-white shadow-md shadow-[#CA8A04]/30" : "bg-gray-100 text-gray-500 group-hover:bg-[#F87171]/20 group-hover:text-[#DC2626]"
                    )}>
                      {method.icon}
                    </div>
                    
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg text-[#450A0A]">{method.title}</h3>
                        {method.tag && (
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-[#DC2626]/20 text-[#DC2626] px-2 py-0.5 rounded-full">
                            {method.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{method.description}</p>
                      {method.note && (
                        <p className="text-xs text-[#CA8A04] mt-2 font-medium">{method.note}</p>
                      )}
                    </div>

                    <div className="relative z-10 self-center">
                      <div className={cn(
                        "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
                        isSelected ? "border-[#CA8A04] bg-[#CA8A04]" : "border-gray-300 group-hover:border-[#CA8A04]/50"
                      )}>
                        {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-white shadow-sm" />}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white"
                onClick={() => router.push("/checkout/address")} // Example back address route
              >
                Back to Address
              </Button>
              <Button 
                className="bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white px-8 h-12 text-lg shadow-md shadow-[#CA8A04]/20"
                onClick={handleContinue}
              >
                Continue to Review
              </Button>
            </div>
          </div>

          {/* Right Column - Order Summary sidebar */}
          <div className="lg:col-span-4 sticky top-10">
            <OrderSummary 
              shipping={selectedMethod === "cod" ? 2.00 : 0} 
              total={selectedMethod === "cod" ? 52.00 : 50.00}
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

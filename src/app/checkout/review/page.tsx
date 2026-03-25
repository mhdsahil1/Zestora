"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { StepIndicator } from "@/components/ui/StepIndicator"
import { OrderSummary } from "@/components/ui/OrderSummary"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, CreditCard, Banknote, Smartphone, CheckCircle, ShieldCheck } from "lucide-react"
import { Suspense } from "react"

function ReviewPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const method = searchParams.get("method") || "card"

  const getMethodDetails = () => {
    switch (method) {
      case "upi":
        return { title: "UPI (Google Pay, PhonePe)", icon: <Smartphone className="h-5 w-5 text-[#DC2626]" /> }
      case "cod":
        return { title: "Cash on Delivery", icon: <Banknote className="h-5 w-5 text-[#DC2626]" /> }
      default:
        return { title: "Credit / Debit Card", icon: <CreditCard className="h-5 w-5 text-[#DC2626]" /> }
    }
  }

  const handleProceed = () => {
    // In a real app we'd trigger the payment gateway here
    router.push(`/payment/sandbox?method=${method}`)
  }

  return (
    <div className="min-h-screen bg-[#FEF2F2] pt-12 pb-24 font-sans text-[#450A0A]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <StepIndicator currentStep={3} />

        <h1 className="text-3xl font-bold mb-8 text-center text-[#450A0A]">Review Your Order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 flex flex-col gap-6">
            <Card className="border-[#F87171]/20 shadow-md">
              <CardHeader className="bg-white rounded-t-xl border-b border-gray-100 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-[#450A0A]">
                  <MapPin className="h-5 w-5 text-[#DC2626]" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 bg-[#FEF2F2]/50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[16px] mb-1">John Doe</h3>
                    <p className="text-sm text-gray-600 mb-1">123 Spice Lane, Suite 4B</p>
                    <p className="text-sm text-gray-600 mb-2">New York, NY 10001</p>
                    <p className="text-sm text-gray-600 font-medium">Ph: +1 234 567 8900</p>
                  </div>
                  <Button variant="ghost" className="text-[#DC2626] font-medium" onClick={() => router.push("/checkout/address")}>Change</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F87171]/20 shadow-md">
              <CardHeader className="bg-white rounded-t-xl border-b border-gray-100 pb-4">
                <CardTitle className="text-xl flex items-center gap-2 text-[#450A0A]">
                  {getMethodDetails().icon}
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 bg-[#FEF2F2]/50">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">{getMethodDetails().title}</span>
                  <Button variant="ghost" className="text-[#DC2626] font-medium" onClick={() => router.push("/checkout/payment")}>Change</Button>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between items-center mt-4">
              <Button 
                variant="outline" 
                className="border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626] hover:text-white"
                onClick={() => router.push("/checkout/payment")}
              >
                Back to Payment
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <OrderSummary 
              shipping={method === "cod" ? 2.00 : 0} 
              total={method === "cod" ? 52.00 : 50.00}
            />
            
            <Button 
              className="w-full bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white h-14 text-lg shadow-lg shadow-[#CA8A04]/30 transform hover:-translate-y-1 transition-all"
              onClick={handleProceed}
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Proceed to Payment
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span>Secure & Encrypted Checkout</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default function ReviewOrderPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FEF2F2] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DC2626]"></div>
      </div>
    }>
      <ReviewPageContent />
    </Suspense>
  )
}

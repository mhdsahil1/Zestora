"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Package, Receipt } from "lucide-react"
import { Suspense, useEffect } from "react"
import confetti from "canvas-confetti"

function SuccessPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || "ZST-284910"

  useEffect(() => {
    // Trigger confetti on mount
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#DC2626', '#CA8A04', '#F87171']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#DC2626', '#CA8A04', '#F87171']
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#FEF2F2] pt-16 pb-24 px-4 font-sans text-[#450A0A]">
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl relative">
          
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#DC2626]/10 to-transparent" />

          <CardContent className="pt-12 pb-8 px-6 sm:px-12 flex flex-col items-center relative z-10">
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#DC2626] rounded-full blur-xl opacity-20 animate-pulse" />
              <CheckCircle2 className="w-24 h-24 text-[#DC2626] relative z-10 drop-shadow-md" />
            </div>
            
            <h1 className="text-3xl font-bold text-[#450A0A] mb-2 text-center">Payment Successful!</h1>
            <p className="text-gray-500 text-center mb-8 max-w-sm">
              Thank you for your purchase. We've received your order and will begin processing it right away.
            </p>

            <div className="w-full bg-[#FEF2F2]/50 rounded-xl p-6 border border-[#F87171]/20 mb-8 space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#F87171]/20">
                <span className="text-gray-500 flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#CA8A04]" /> Order ID
                </span>
                <span className="font-semibold text-[#450A0A]">{orderId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#CA8A04]" /> Expected Delivery
                </span>
                <span className="font-medium text-[#450A0A]">Within 3-5 days</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <Button 
                className="w-full bg-[#CA8A04] hover:bg-[#CA8A04]/90 text-white h-14 text-lg shadow-lg shadow-[#CA8A04]/20 transition-all transform hover:-translate-y-1"
                onClick={() => router.push("/account?tab=orders")}
              >
                View Orders
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="w-full border-[#DC2626] text-[#DC2626] hover:bg-[#DC2626]/5 h-14 text-lg"
                onClick={() => router.push("/")}
              >
                Continue Shopping
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FEF2F2] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DC2626]"></div>
      </div>
    }>
      <SuccessPageContent />
    </Suspense>
  )
}

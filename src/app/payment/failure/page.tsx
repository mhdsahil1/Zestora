"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle, RefreshCcw, ArrowLeft } from "lucide-react"
import { Suspense } from "react"

function FailurePageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const reason = searchParams.get("reason") || "An unexpected error occurred during processing."

  return (
    <div className="min-h-screen bg-[#FEF2F2] pt-16 pb-24 px-4 font-sans text-[#450A0A]">
      <div className="max-w-2xl mx-auto">
        <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-xl relative">
          
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#DC2626]/20 to-transparent" />

          <CardContent className="pt-12 pb-8 px-6 sm:px-12 flex flex-col items-center relative z-10">
            
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#DC2626] rounded-full blur-xl opacity-20 animate-pulse" />
              <XCircle className="w-24 h-24 text-[#DC2626] relative z-10 drop-shadow-md" />
            </div>
            
            <h1 className="text-3xl font-bold text-[#450A0A] mb-2 text-center">Payment Failed</h1>
            <p className="text-[#DC2626] text-center mb-8 max-w-sm font-medium">
              We couldn't process your payment.
            </p>

            <div className="w-full bg-[#FEF2F2]/80 rounded-xl p-6 border border-[#DC2626]/20 mb-8 items-center text-center">
              <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider">Error Details</span>
              <p className="font-medium text-[#450A0A] mt-2">{reason}</p>
            </div>

            <p className="text-sm text-gray-500 text-center mb-8 max-w-sm">
              Please check your payment details and try again, or select a different payment method.
            </p>

            <div className="w-full space-y-3 flex flex-col sm:flex-row sm:space-y-0 sm:gap-4">
              <Button 
                className="w-full sm:flex-1 bg-[#DC2626] hover:bg-[#DC2626]/90 text-white h-14 text-lg shadow-lg shadow-[#DC2626]/20 transition-all transform hover:-translate-y-1"
                onClick={() => router.push("/checkout")}
              >
                <RefreshCcw className="mr-2 h-5 w-5" />
                Try Again
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 h-14 text-lg"
                onClick={() => router.push("/checkout")}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Checkout
              </Button>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function FailurePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FEF2F2] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DC2626]"></div>
      </div>
    }>
      <FailurePageContent />
    </Suspense>
  )
}

"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import { ShieldAlert, CreditCard, Lock, Loader2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

function SandboxContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const router = useRouter();
  const { clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!orderId) {
       toast.error("Valid Order ID required.");
       router.push("/shop");
    }
  }, [orderId, router]);

  const handleSimulatePayment = async (status: "SUCCESS" | "FAILED") => {
    if (!orderId) return;
    setIsProcessing(true);
    
    // Slight delay to simulate network/processing
    await new Promise(r => setTimeout(r, 1500));

    try {
      const res = await fetch("/api/payment/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, status }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to process simulation");
        setIsProcessing(false);
        return;
      }

      if (status === "SUCCESS") {
        toast.success("Payment Successful!");
        clearCart();
        router.push(`/checkout/success/${orderId}`);
      } else {
        toast.error("Payment Failed");
        router.push(`/payment/failure/${orderId}`);
      }
    } catch (error) {
      toast.error("An error occurred connecting to the sandbox.");
      setIsProcessing(false);
    }
  };

  if (!orderId) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#E8D5B0] overflow-hidden">
      <div className="bg-[#C65A00] p-6 text-white text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <ShieldAlert size={32} className="text-white" />
          </div>
        </div>
        <h1 className="text-2xl font-bold font-serif">Zestora Sandbox</h1>
        <p className="opacity-90 mt-1">Test environment for staging payments</p>
      </div>

      <div className="p-8 space-y-8">
        <div className="text-center space-y-2">
           <p className="text-lg text-[#2B1B12] font-semibold">Testing Order: <span className="text-[#C65A00]">{orderId.slice(-6).toUpperCase()}</span></p>
           <p className="text-sm text-[#7A5C3A]">Use the buttons below to simulate a payment outcome. No real money will be charged.</p>
        </div>

        <div className="border border-[#E8D5B0] rounded-xl p-5 bg-[#FFF7E6]/50">
           <div className="flex items-center gap-3 text-[#2B1B12] mb-4">
             <CreditCard size={20} className="text-[#C65A00]" />
             <span className="font-semibold">Mock Payment Details</span>
           </div>
           <div className="space-y-3 opacity-60 pointer-events-none">
             <input type="text" value="4111 1111 1111 1111" readOnly className="w-full px-4 py-3 bg-white border border-[#E8D5B0] rounded-lg text-sm" />
             <div className="flex gap-4">
                <input type="text" value="12/28" readOnly className="w-1/2 px-4 py-3 bg-white border border-[#E8D5B0] rounded-lg text-sm" />
                <input type="text" value="123" readOnly className="w-1/2 px-4 py-3 bg-white border border-[#E8D5B0] rounded-lg text-sm" />
             </div>
           </div>
           <div className="mt-4 flex items-center gap-2 text-xs text-green-700 font-medium">
             <Lock size={14} /> End-to-end sandbox encryption
           </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => handleSimulatePayment("FAILED")}
            disabled={isProcessing}
            className="flex-1 px-4 py-3 border-2 border-red-200 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors disabled:opacity-50"
          >
            Simulate Failure
          </button>
          <button 
            onClick={() => handleSimulatePayment("SUCCESS")}
            disabled={isProcessing}
            className="flex-1 px-4 py-3 bg-[#C65A00] text-white font-semibold rounded-xl hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isProcessing ? <Loader2 className="w-5 h-5 animate-spin" /> : "Simulate Success"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSandboxPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />
      <div className="pt-32 pb-12 px-4 max-w-xl mx-auto">
        <Suspense fallback={<div className="flex items-center justify-center min-h-[400px]"><Loader2 className="w-8 h-8 animate-spin text-[#C65A00]" /></div>}>
          <SandboxContent />
        </Suspense>
      </div>
    </main>
  );
}

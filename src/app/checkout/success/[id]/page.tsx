"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Package, MapPin, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

export default function OrderSuccessPage() {
  const { id } = useParams();
  const [mounted, setMounted] = useState(false);
  const { clearCart } = useCart();
  
  useEffect(() => {
    setMounted(true);
    // Use setTimeout to allow the initial render to complete before clearing cart
    // This prevents any instantaneous re-render loops during hydration
    const timer = setTimeout(() => {
      clearCart();
    }, 100);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-24 pb-12 flex flex-col items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white p-8 md:p-12 text-center z-10 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4A373] via-[#8B5A2B] to-[#4A3B32]"></div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
          >
            <Check className="text-white" size={32} strokeWidth={3} />
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#4A3B32] mb-3"
        >
          Order Placed Successfully!
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#8C7A6B] text-lg mb-8"
        >
          Thank you for choosing Zestora. Your flavor journey begins soon.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-[#FAF8F5] rounded-2xl p-6 mb-8 border border-[#E8E1D9] text-left grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <p className="text-sm font-medium text-[#8C7A6B] mb-1">Order ID</p>
            <p className="font-mono font-bold text-[#4A3B32] bg-white px-3 py-1.5 rounded-lg border border-[#E8E1D9] inline-block">{id}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-[#8C7A6B] mb-1">Estimated Delivery</p>
            <p className="font-bold text-[#4A3B32] text-lg">3-5 Business Days</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/account"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#4A3B32] text-white rounded-xl font-medium hover:bg-[#3A2D25] transition-colors flex items-center justify-center gap-2 group"
          >
            <Package size={20} />
            Track Order
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#4A3B32] border border-[#E8E1D9] rounded-xl font-medium hover:bg-[#FAF8F5] transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

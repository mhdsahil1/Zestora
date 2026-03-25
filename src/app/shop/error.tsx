"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function ShopError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Shop Boundary]:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-2xl border border-[#E8D5B0] my-12 mx-4 sm:mx-auto max-w-2xl shadow-sm">
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8 text-red-500" />
      </div>
      <h2 className="font-serif text-2xl text-[#2B1B12] mb-3">Unable to Load Spices</h2>
      <p className="text-[#7A5C3A] mb-8">
        We ran into a slight issue loading our collection. Please try refreshing.
      </p>
      
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={() => reset()}
          className="flex items-center gap-2 px-6 py-2.5 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#2B1B12] transition-colors"
        >
          <RefreshCcw className="w-4 h-4" /> Try Again
        </button>
        <Link 
          href="/"
          className="flex items-center gap-2 px-6 py-2.5 bg-[#FFF7E6] text-[#C65A00] rounded-full font-medium hover:bg-[#E8D5B0] hover:text-[#2B1B12] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

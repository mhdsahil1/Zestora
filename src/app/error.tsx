"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error securely to an error reporting service in production
    console.error("[Global Error Boundary]:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#FFF7E6] flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center pt-32">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="font-serif text-4xl text-[#2B1B12] mb-4">Something went wrong</h1>
        <p className="text-[#7A5C3A] max-w-md mb-8">
          We encountered an unexpected error. Our team has been notified.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#2B1B12] transition-colors"
          >
            <RefreshCcw className="w-4 h-4" /> Try Again
          </button>
          
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-[#E8D5B0] text-[#7A5C3A] rounded-full font-medium hover:border-[#C65A00] hover:text-[#C65A00] transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

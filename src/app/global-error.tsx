"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development, send to error tracking service in production
    console.error("[Global Error]:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="bg-[#FFF7E6]">
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-[#2B1B12] mb-4">
            Something went wrong
          </h1>

          <p className="text-[#7A5C3A] max-w-md mb-8">
            We encountered an unexpected error. Please try again.
          </p>

          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#2B1B12] transition-colors"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
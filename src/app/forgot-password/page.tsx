"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    toast.success("Reset link sent!");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
          <div className="p-8 pb-6 text-center">
            <div className="w-16 h-16 bg-[#FAF8F5] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#E8E1D9]">
              <Mail className="text-[#D4A373]" size={28} />
            </div>
            <h1 className="text-3xl font-serif text-[#4A3B32] font-bold mb-2">Forgot Password</h1>
            <p className="text-[#8C7A6B]">
              {isSubmitted 
                ? "Check your email for a password reset link." 
                : "Enter your email and we'll send you a link to reset your password."}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="p-8 pt-0 space-y-5">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#4A3B32] ml-1">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C7A6B] group-focus-within:text-[#D4A373] transition-colors">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] focus:border-transparent outline-none transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-[#4A3B32] text-white py-3.5 rounded-xl font-medium transition-all hover:bg-[#3A2D25] flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                Send Reset Link <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <div className="p-8 pt-0 space-y-5">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="w-full relative group overflow-hidden bg-[#FAF8F5] text-[#4A3B32] border border-[#E8E1D9] py-3.5 rounded-xl font-medium transition-all hover:bg-white flex items-center justify-center gap-2"
              >
                Try Another Email
              </button>
            </div>
          )}

          <div className="px-8 py-5 bg-[#FAF8F5]/80 border-t border-[#E8E1D9] text-center">
            <Link href="/login" className="inline-flex items-center gap-2 text-sm text-[#8C7A6B] hover:text-[#4A3B32] transition-colors font-medium">
              <ArrowLeft size={16} /> Back to Sign in
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

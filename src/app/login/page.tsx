"use client";

import { useState, Suspense } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { toast } from "sonner";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/account";
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (res?.error) {
        toast.error("Invalid credentials.");
      } else {
        toast.success("Welcome back!");
        router.push(callbackUrl);
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B5A2B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
          <div className="p-8 pb-6 text-center">
            <h1 className="text-3xl font-serif text-[#4A3B32] font-bold mb-2">Welcome Back</h1>
            <p className="text-[#8C7A6B]">Sign in to your Zestora account</p>
          </div>

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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] focus:border-transparent outline-none transition-all"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-[#4A3B32]">Password</label>
                <Link href="/forgot-password" className="text-sm text-[#D4A373] hover:text-[#8B5A2B] transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C7A6B] group-focus-within:text-[#D4A373] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8C7A6B] hover:text-[#4A3B32] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative group overflow-hidden bg-[#4A3B32] text-white py-3.5 rounded-xl font-medium transition-all hover:bg-[#3A2D25] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-[#E8E1D9]"></div>
              <span className="flex-shrink-0 mx-4 text-sm text-[#8C7A6B]">Or continue with</span>
              <div className="flex-grow border-t border-[#E8E1D9]"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl text-[#4A3B32] font-medium hover:bg-white hover:shadow-sm transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl text-[#4A3B32] font-medium hover:bg-white hover:shadow-sm transition-all opacity-50 cursor-not-allowed"
                title="OTP Login coming soon"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Phone
              </button>
            </div>
          </form>

          <div className="px-8 py-5 bg-[#FAF8F5]/80 border-t border-[#E8E1D9] text-center">
            <p className="text-sm text-[#8C7A6B]">
              New to Zestora?{" "}
              <Link href={`/signup?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-[#D4A373] font-semibold hover:text-[#8B5A2B] transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LoginSkeleton() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#8B5A2B] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-md relative z-10 animate-pulse">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
          <div className="p-8 pb-6 text-center flex flex-col items-center">
            <div className="h-8 bg-[#E8E1D9] rounded-lg w-48 mb-3"></div>
            <div className="h-4 bg-[#E8E1D9]/70 rounded-md w-64"></div>
          </div>

          <div className="p-8 pt-0 space-y-5">
            <div className="space-y-2">
              <div className="h-4 bg-[#E8E1D9] rounded-md w-24 ml-1"></div>
              <div className="h-12 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl w-full"></div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <div className="h-4 bg-[#E8E1D9] rounded-md w-20"></div>
                <div className="h-4 bg-[#E8E1D9]/70 rounded-md w-16"></div>
              </div>
              <div className="h-12 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl w-full"></div>
            </div>

            <div className="h-14 bg-[#E8E1D9] rounded-xl w-full mt-2"></div>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-[#E8E1D9]"></div>
              <div className="h-3 bg-[#E8E1D9] rounded-md w-24 mx-4"></div>
              <div className="flex-grow border-t border-[#E8E1D9]"></div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl w-full"></div>
              <div className="h-12 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl w-full"></div>
            </div>
          </div>

          <div className="px-8 py-5 bg-[#FAF8F5]/80 border-t border-[#E8E1D9] flex justify-center">
            <div className="h-4 bg-[#E8E1D9] rounded-md w-56"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginContent />
    </Suspense>
  );
}

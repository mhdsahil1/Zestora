"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import { toast } from "sonner";

function SignupContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/account";
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Basic password strength logic
  const calculateStrength = (pass: string) => {
    let score = 0;
    if (pass.length > 5) score++;
    if (pass.length > 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };
  const strength = calculateStrength(formData.password);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (strength < 2) {
      toast.error("Please use a stronger password");
      return;
    }
    
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Account created successfully! Signing you in...");
        const signInRes = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        });
        if (!signInRes?.error) {
          router.push(callbackUrl);
        } else {
          router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
        }
      } else {
        toast.error(data.message || "Failed to create account.");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4 pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B5A2B] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg z-10 my-8"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40">
          <div className="p-8 pb-4 text-center">
            <h1 className="text-3xl font-serif text-[#4A3B32] font-bold mb-2">Create Account</h1>
            <p className="text-[#8C7A6B]">Join Zestora and elevate your culinary experience</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 pt-0 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-[#4A3B32] ml-1">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C7A6B] group-focus-within:text-[#D4A373] transition-colors">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-[#4A3B32] ml-1">Phone Number</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8C7A6B] group-focus-within:text-[#D4A373] transition-colors">
                    <Phone size={18} />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl focus:ring-2 focus:ring-[#D4A373] focus:border-transparent outline-none transition-all"
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
            </div>

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
              <label className="text-sm font-medium text-[#4A3B32] ml-1">Password</label>
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
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8C7A6B] hover:text-[#4A3B32] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password.length > 0 && (
                <div className="flex gap-1 mt-2 px-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div 
                      key={level} 
                      className={`h-1.5 w-full rounded-full transition-all duration-300 ${
                        strength >= level 
                          ? level <= 2 ? 'bg-[#D4A373]' : level === 3 ? 'bg-[#b8a741]' : 'bg-[#4A3B32]'
                          : 'bg-[#E8E1D9]'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 relative group overflow-hidden bg-[#4A3B32] text-white py-3.5 rounded-xl font-medium transition-all hover:bg-[#3A2D25] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="px-8 py-5 bg-[#FAF8F5]/80 border-t border-[#E8E1D9] text-center">
            <p className="text-sm text-[#8C7A6B]">
              Already have an account?{" "}
              <Link href={`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`} className="text-[#D4A373] font-semibold hover:text-[#8B5A2B] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}

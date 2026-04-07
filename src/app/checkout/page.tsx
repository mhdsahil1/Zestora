"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Banknote,
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  Lock,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import Script from "next/script";
import Image from "next/image";

const steps = ["Delivery Address", "Payment Method"];

type PaymentMethod = "UPI" | "CARD" | "COD" | "";

export default function CheckoutPage() {
  const { state, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { data: session, status } = useSession();

  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [razorpayReady, setRazorpayReady] = useState(false);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");

  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Please login to checkout");
      router.push("/login?callbackUrl=/checkout");
    }
  }, [status, router]);

  useEffect(() => {
    if (state.items.length === 0 && !isProcessing) {
      router.push("/shop");
    }
  }, [state.items.length, router, isProcessing]);

  if (status === "loading" || state.items.length === 0) return null;

  const handleNextStep = () => {
    if (currentStep === 0) {
      const { fullName, phone, addressLine, city, state: st, pincode } = address;
      if (!fullName || !phone || !addressLine || !city || !st || !pincode) {
        toast.error("Please fill in all address fields");
        return;
      }
      if (!/^\d{10,15}$/.test(phone)) {
        toast.error("Please enter a valid phone number (10–15 digits)");
        return;
      }
      if (!/^\d{4,10}$/.test(pincode)) {
        toast.error("Please enter a valid pincode");
        return;
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      toast.error("Please select a payment method");
      return;
    }

    if (paymentMethod !== "COD" && !razorpayReady) {
      toast.error("Payment gateway is still loading. Please wait a moment.");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: state.items.map((i) => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
          paymentMethod,
          deliveryAddress: address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to create order. Please try again.");
        setIsProcessing(false);
        return;
      }

      // ── COD Flow ──────────────────────────────────────────────────────
      if (paymentMethod === "COD") {
        clearCart();
        router.push(`/checkout/success/${data.orderId}`);
        return;
      }

      // ── Razorpay Online Flow ──────────────────────────────────────────
      if (!data.razorpayOrderId) {
        toast.error("Unable to initialize Razorpay. Please try COD or contact support.");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,           // in paise
        currency: "INR",
        name: "Zestora",
        description: "Premium Spices Purchase",
        image: "/favicon.ico",
        order_id: data.razorpayOrderId,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          try {
            toast.loading("Verifying payment...", { id: "verify" });

            const verifyRes = await fetch("/api/payment/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: data.orderId,
              }),
            });

            const verifyData = await verifyRes.json();
            toast.dismiss("verify");

            if (verifyRes.ok && verifyData.success) {
              clearCart();
              router.push(`/checkout/success/${data.orderId}`);
            } else {
              toast.error(verifyData.message || "Payment verification failed. Please contact support.");
              setIsProcessing(false);
            }
          } catch {
            toast.dismiss("verify");
            toast.error("Payment verification failed. Please contact support.");
            setIsProcessing(false);
          }
        },
        prefill: {
          name: address.fullName,
          contact: address.phone,
          email: session?.user?.email ?? "",
        },
        notes: {
          orderId: data.orderId,
        },
        theme: {
          color: "#C65A00",
        },
        modal: {
          backdropclose: false,
          ondismiss: function () {
            toast.warning("Payment was cancelled. Your order has been saved.");
            setIsProcessing(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        toast.error(`Payment failed: ${response.error.description}`);
        setIsProcessing(false);
      });

      rzp.open();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      setIsProcessing(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl focus:ring-2 focus:ring-[#C65A00] focus:border-transparent outline-none transition-all text-[#2B1B12] placeholder:text-[#A08060]";

  const paymentOptions: {
    id: PaymentMethod;
    label: string;
    sublabel: string;
    icon: React.ReactNode;
  }[] = [
    {
      id: "UPI",
      label: "UPI Payment",
      sublabel: "GPay, PhonePe, Paytm & more",
      icon: <Smartphone size={22} className="text-[#C65A00]" />,
    },
    {
      id: "CARD",
      label: "Credit / Debit Card",
      sublabel: "Visa, Mastercard, RuPay & more",
      icon: <CreditCard size={22} className="text-[#C65A00]" />,
    },
    {
      id: "COD",
      label: "Cash on Delivery",
      sublabel: "Pay when your order arrives",
      icon: <Banknote size={22} className="text-[#C65A00]" />,
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      {/* Load Razorpay SDK via next/script for reliability */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
        onLoad={() => setRazorpayReady(true)}
        onError={() => toast.error("Failed to load payment gateway. Please refresh.")}
      />

      <Navbar />

      <div className="pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/shop"
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2B1B12] shadow-sm hover:shadow-md transition-shadow"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-serif text-[#2B1B12] font-bold leading-tight">Checkout</h1>
            <p className="text-sm text-[#7A5C3A] mt-0.5 flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-green-500" />
              Secure & encrypted checkout
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step Indicator */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0]">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-[20px] w-full h-1 bg-[#F5E6C8] z-0 rounded-full" />
                <motion.div
                  className="absolute left-0 top-[20px] h-1 bg-gradient-to-r from-[#C65A00] to-[#D4AF37] z-0 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: currentStep === 0 ? "0%" : "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                {steps.map((step, idx) => (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                        currentStep >= idx
                          ? "bg-gradient-to-br from-[#C65A00] to-[#D4AF37] text-white shadow-lg shadow-[#C65A00]/30"
                          : "bg-white text-[#7A5C3A] border-2 border-[#E8D5B0]"
                      }`}
                    >
                      {currentStep > idx ? <CheckCircle2 size={20} /> : idx + 1}
                    </div>
                    <span
                      className={`text-sm font-medium ${currentStep >= idx ? "text-[#2B1B12]" : "text-[#7A5C3A]"}`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E8D5B0] overflow-hidden">
              <AnimatePresence mode="wait">
                {/* ── Step 1: Delivery Address ── */}
                {currentStep === 0 && (
                  <motion.div
                    key="step-address"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#2B1B12]">Delivery Address</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[#2B1B12]">Full Name *</label>
                        <input
                          type="text"
                          value={address.fullName}
                          onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                          className={inputClass}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[#2B1B12]">Phone Number *</label>
                        <input
                          type="tel"
                          value={address.phone}
                          onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                          className={inputClass}
                          placeholder="9876543210"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-[#2B1B12]">Address Line *</label>
                      <input
                        type="text"
                        value={address.addressLine}
                        onChange={(e) => setAddress({ ...address, addressLine: e.target.value })}
                        className={inputClass}
                        placeholder="House/Flat No., Street Name, Landmark"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[#2B1B12]">City *</label>
                        <input
                          type="text"
                          value={address.city}
                          onChange={(e) => setAddress({ ...address, city: e.target.value })}
                          className={inputClass}
                          placeholder="Mumbai"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[#2B1B12]">State *</label>
                        <input
                          type="text"
                          value={address.state}
                          onChange={(e) => setAddress({ ...address, state: e.target.value })}
                          className={inputClass}
                          placeholder="Maharashtra"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[#2B1B12]">Pincode *</label>
                        <input
                          type="text"
                          value={address.pincode}
                          onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                          className={inputClass}
                          placeholder="400001"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        onClick={handleNextStep}
                        className="bg-gradient-to-r from-[#C65A00] to-[#D4AF37] text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md shadow-[#C65A00]/20"
                      >
                        Continue to Payment <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── Step 2: Payment Method ── */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#2B1B12]">Payment Method</h2>

                    <div className="space-y-3">
                      {paymentOptions.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                            paymentMethod === option.id
                              ? "border-[#C65A00] bg-[#FFF7E6] shadow-sm shadow-[#C65A00]/10"
                              : "border-[#E8D5B0] hover:border-[#C65A00]/50 bg-white"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={option.id}
                            checked={paymentMethod === option.id}
                            onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                            className="w-4 h-4 text-[#C65A00] focus:ring-[#C65A00] accent-[#C65A00]"
                          />
                          <div className="w-10 h-10 rounded-full bg-[#FFF7E6] flex items-center justify-center flex-shrink-0">
                            {option.icon}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-[#2B1B12]">{option.label}</p>
                            <p className="text-xs text-[#7A5C3A] mt-0.5">{option.sublabel}</p>
                          </div>
                          {paymentMethod === option.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-5 h-5 bg-[#C65A00] rounded-full flex items-center justify-center flex-shrink-0"
                            >
                              <CheckCircle2 size={14} className="text-white" />
                            </motion.div>
                          )}
                        </label>
                      ))}
                    </div>

                    {/* Trust badges */}
                    <div className="flex items-center gap-6 pt-2 border-t border-[#E8D5B0]">
                      <div className="flex items-center gap-1.5 text-xs text-[#7A5C3A]">
                        <Lock size={12} className="text-green-500" />
                        256-bit SSL secured
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#7A5C3A]">
                        <Zap size={12} className="text-[#D4AF37]" />
                        Powered by Razorpay
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#7A5C3A]">
                        <ShieldCheck size={12} className="text-blue-500" />
                        PCI DSS compliant
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-[#E8D5B0]">
                      <button
                        onClick={handlePrevStep}
                        className="text-[#7A5C3A] font-medium hover:text-[#2B1B12] transition-colors flex items-center gap-2"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>

                      <button
                        onClick={handlePlaceOrder}
                        disabled={isProcessing || !paymentMethod}
                        className="relative overflow-hidden bg-gradient-to-r from-[#C65A00] to-[#D4AF37] text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2.5 hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#C65A00]/25 min-w-[180px] justify-center"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Lock size={16} />
                            {paymentMethod === "COD" ? "Place Order" : `Pay ₹${totalPrice.toFixed(2)}`}
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Order Summary Sidebar ── */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] sticky top-24">
              <h3 className="text-lg font-bold text-[#2B1B12] mb-5 pb-4 border-b border-[#E8D5B0]">
                Order Summary
              </h3>

              <div className="space-y-4 mb-5 max-h-[40vh] overflow-y-auto pr-1 scrollbar-thin">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-start">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#FFF7E6] flex-shrink-0 border border-[#E8D5B0] relative">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#C65A00] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#2B1B12] text-sm leading-snug line-clamp-2">
                        {item.product.name}
                      </h4>
                      <div className="text-xs text-[#7A5C3A] mt-0.5">Qty: {item.quantity}</div>
                      <div className="font-bold text-[#C65A00] text-sm mt-1">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 py-4 border-t border-b border-[#E8D5B0] text-sm">
                <div className="flex justify-between text-[#7A5C3A]">
                  <span>Subtotal ({state.items.reduce((a, i) => a + i.quantity, 0)} items)</span>
                  <span className="font-medium text-[#2B1B12]">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#7A5C3A]">
                  <span>Delivery</span>
                  <span className="text-green-600 font-semibold">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-[#2B1B12]">Total</span>
                <span className="text-xl font-bold text-[#C65A00]">₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-start gap-2">
                <ShieldCheck size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-green-700 leading-relaxed">
                  Your payment is protected by Razorpay with bank-grade encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

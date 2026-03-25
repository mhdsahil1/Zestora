"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CreditCard, Banknote, Smartphone, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";

const steps = ["Delivery Address", "Payment Method"];

export default function CheckoutPage() {
  const { state, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const { data: session, status } = useSession();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

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
      if (!address.fullName || !address.phone || !address.addressLine || !address.city || !address.state || !address.pincode) {
        toast.error("Please fill in all address fields");
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

    if (paymentMethod === "COD" && totalPrice < 5000) {
      toast.error("Cash on Delivery is only available for orders above ₹5000");
      return;
    }

    setIsProcessing(true);

    try {
      if (paymentMethod !== "COD") {
        toast.info("Creating order & redirecting to gateway...");
      }

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: state.items.map(i => ({
            productId: i.product.id,
            quantity: i.quantity,
          })),
          paymentMethod,
          deliveryAddress: address,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to place order");
        setIsProcessing(false);
        return;
      }

      // Handle Razorpay Flow
      if (data.razorpayOrderId) {
        if (!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID) {
           // Fallback to the Fake Payment Sandbox since Razorpay isn't configured
           router.push(`/payment/sandbox?orderId=${data.orderId}`);
           return;
        }

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: "INR",
          name: "Zestora",
          description: "Premium Spices Purchase",
          order_id: data.razorpayOrderId,
          handler: async function (response: any) {
            toast.info("Verifying payment...");
            try {
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

              if (verifyRes.ok) {
                clearCart();
                router.push(`/checkout/success/${data.orderId}`);
              } else {
                toast.error("Payment verification failed. Please contact support.");
                setIsProcessing(false);
              }
            } catch (err) {
              toast.error("Payment verification failed. Please contact support.");
              setIsProcessing(false);
            }
          },
          prefill: {
            name: address.fullName,
            contact: address.phone,
          },
          theme: {
            color: "#C65A00",
          },
          modal: {
            ondismiss: function() {
              toast.error("Payment cancelled");
              setIsProcessing(false);
            }
          }
        };

        const rzp1 = new (window as any).Razorpay(options);
        rzp1.open();
      } else if (paymentMethod !== "COD") {
        // Fallback to Sandbox if Razorpay ID wasn't generated by the backend
        router.push(`/payment/sandbox?orderId=${data.orderId}`);
      } else {
        // COD Success
        clearCart();
        router.push(`/checkout/success/${data.orderId}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
      setIsProcessing(false);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl focus:ring-2 focus:ring-[#C65A00] outline-none transition-all";

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <Navbar />
      <div className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Checkout Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/shop" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2B1B12] shadow-sm hover:shadow-md transition-shadow">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-serif text-[#2B1B12] font-bold">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Steps Indicator */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] mb-6">
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#F5E6C8] z-0 rounded-full" />
                <motion.div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#C65A00] z-0 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: currentStep === 0 ? "0%" : "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
                
                {steps.map((step, idx) => (
                  <div key={step} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-500 ${currentStep >= idx ? 'bg-[#C65A00] text-white shadow-md' : 'bg-white text-[#7A5C3A] border-2 border-[#E8D5B0]'}`}>
                      {currentStep > idx ? <CheckCircle2 size={20} /> : idx + 1}
                    </div>
                    <span className={`text-sm font-medium ${currentStep >= idx ? 'text-[#2B1B12]' : 'text-[#7A5C3A]'}`}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Forms Container */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-[#E8D5B0] overflow-hidden">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#2B1B12] mb-4">Delivery Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-[#2B1B12] ml-1">Full Name</label>
                        <input type="text" value={address.fullName} onChange={(e) => setAddress({...address, fullName: e.target.value})} className={inputClass} required />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-[#2B1B12] ml-1">Phone Number</label>
                        <input type="tel" value={address.phone} onChange={(e) => setAddress({...address, phone: e.target.value})} className={inputClass} required />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-[#2B1B12] ml-1">Address Line</label>
                      <input type="text" value={address.addressLine} onChange={(e) => setAddress({...address, addressLine: e.target.value})} className={inputClass} placeholder="House/Flat No., Street Name, Landmark" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-[#2B1B12] ml-1">City</label>
                        <input type="text" value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} className={inputClass} required />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-[#2B1B12] ml-1">State</label>
                        <input type="text" value={address.state} onChange={(e) => setAddress({...address, state: e.target.value})} className={inputClass} required />
                      </div>
                      <div className="space-y-1">
                        <label className="text-sm font-medium text-[#2B1B12] ml-1">Pincode</label>
                        <input type="text" value={address.pincode} onChange={(e) => setAddress({...address, pincode: e.target.value})} className={inputClass} required />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button onClick={handleNextStep} className="bg-[#C65A00] text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors">
                        Continue to Payment <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5"
                  >
                    <h2 className="text-xl font-bold text-[#2B1B12] mb-4">Select Payment Method</h2>
                    
                    <div className="space-y-4">
                      {/* UPI */}
                      <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'UPI' ? 'border-[#C65A00] bg-[#FFF7E6] ring-1 ring-[#C65A00]' : 'border-[#E8D5B0] hover:border-[#C65A00]'}`}>
                        <input type="radio" name="payment" value="UPI" checked={paymentMethod === 'UPI'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-[#C65A00] focus:ring-[#C65A00]" />
                        <span className="ml-4 flex items-center gap-3">
                          <Smartphone size={24} className="text-[#C65A00]" />
                          <span className="font-medium text-[#2B1B12]">UPI Payment</span>
                        </span>
                      </label>

                      {/* Card */}
                      <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'CARD' ? 'border-[#C65A00] bg-[#FFF7E6] ring-1 ring-[#C65A00]' : 'border-[#E8D5B0] hover:border-[#C65A00]'}`}>
                        <input type="radio" name="payment" value="CARD" checked={paymentMethod === 'CARD'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-[#C65A00] focus:ring-[#C65A00]" />
                        <span className="ml-4 flex items-center gap-3">
                          <CreditCard size={24} className="text-[#C65A00]" />
                          <span className="font-medium text-[#2B1B12]">Credit / Debit Card</span>
                        </span>
                      </label>

                      {/* COD */}
                      <div className="relative">
                        <label className={`flex items-center p-4 border rounded-xl transition-all ${totalPrice < 5000 ? 'opacity-50 border-[#E8D5B0] cursor-not-allowed bg-gray-50' : paymentMethod === 'COD' ? 'border-[#C65A00] bg-[#FFF7E6] ring-1 ring-[#C65A00] cursor-pointer' : 'border-[#E8D5B0] hover:border-[#C65A00] cursor-pointer'}`}>
                          <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} disabled={totalPrice < 5000} className="w-5 h-5 text-[#C65A00] focus:ring-[#C65A00] disabled:opacity-50" />
                          <span className="ml-4 flex items-center justify-between flex-1">
                            <span className="flex items-center gap-3">
                              <Banknote size={24} className="text-[#C65A00]" />
                              <span className="font-medium text-[#2B1B12]">Cash on Delivery (COD)</span>
                            </span>
                          </span>
                        </label>
                        {totalPrice < 5000 && (
                          <div className="mt-2 text-sm text-red-500 flex items-center gap-1.5 ml-2">
                            <AlertCircle size={14} /> Cash on Delivery is available only for orders above ₹5000.
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-[#E8D5B0]">
                      <button onClick={handlePrevStep} className="text-[#7A5C3A] font-medium hover:text-[#2B1B12] transition-colors">
                        Back to Address
                      </button>
                      <button 
                        onClick={handlePlaceOrder} 
                        disabled={isProcessing || !paymentMethod}
                        className="bg-[#C65A00] text-white px-8 py-3 rounded-xl font-medium flex items-center gap-2 hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                      >
                         <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        {isProcessing ? "Processing Order..." : "Place Order"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Checkout Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E8D5B0] sticky top-24">
              <h3 className="text-xl font-bold text-[#2B1B12] mb-6 border-b border-[#E8D5B0] pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-6 max-h-[30vh] overflow-y-auto pr-2">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#FFF7E6] flex-shrink-0 border border-[#E8D5B0]">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#2B1B12] text-sm line-clamp-2">{item.product.name}</h4>
                      <div className="text-[#7A5C3A] text-xs mt-1">Qty: {item.quantity}</div>
                      <div className="font-bold text-[#C65A00] mt-1">${item.product.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 py-4 border-t border-b border-[#E8D5B0] text-sm">
                <div className="flex justify-between text-[#7A5C3A]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#2B1B12]">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#7A5C3A]">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-[#2B1B12]">Total</span>
                <span className="text-xl font-bold text-[#C65A00]">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RotateCcw, CheckCircle, Clock, ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Return & Refund Policy | Zestora",
  description: "Learn about Zestora's 100% freshness guarantee, simple 14-day return procedure, and refund processing.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2B1B12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">Satisfaction Guaranteed</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Return &amp; Refund Policy</h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Our 100% freshness commitment: if your spices aren&apos;t extraordinary, we make it right.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E8D5B0] space-y-8 text-[#2B1B12]">
          <div className="flex items-center gap-4 p-5 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
            <ShieldCheck className="w-9 h-9 text-[#C65A00] flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2B1B12]">14-Day Freshness Guarantee</h3>
              <p className="text-xs sm:text-sm text-[#7A5C3A] mt-1">
                We take immense pride in our farm-to-table spices. If your package arrives damaged, unsealed, or does not meet your expectations, notify us within 14 days of delivery.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-[#C65A00]" /> 1. How to Initiate a Return or Replacement
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed mb-4">
              Returning or replacing a product is straightforward:
            </p>
            <ol className="list-decimal pl-5 text-sm text-[#7A5C3A] space-y-2">
              <li>Send an email to <a href="mailto:orders@zestora.com" className="text-[#C65A00] font-semibold">orders@zestora.com</a> or WhatsApp <a href="tel:+919900629597" className="text-[#C65A00] font-semibold">+919900629597</a>.</li>
              <li>Include your Order ID (e.g. ORD-123456) and a brief photo of the item/packaging.</li>
              <li>Our team will arrange a free reverse pickup or send an instant replacement without delay.</li>
            </ol>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#C65A00]" /> 2. Refund Processing Time
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              Once approved, refunds are credited back to your original payment method (UPI, Bank Account, or Card) within 3-5 business days. For Cash on Delivery orders, refunds are issued via direct bank transfer or UPI ID.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#C65A00]" /> 3. Damaged or Defective Goods
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              If an item arrives damaged in transit, we will immediately ship a brand new fresh batch at zero additional cost to you.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E8D5B0] flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div>
              <p className="text-xs text-[#7A5C3A]">Questions about an existing order?</p>
              <p className="text-sm font-semibold text-[#2B1B12]">Contact our care desk anytime</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#C65A00] text-white rounded-full text-xs font-semibold hover:bg-[#2B1B12] transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

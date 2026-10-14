import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Scale, CheckCircle, PackageCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Zestora",
  description: "Read the terms of service governing the purchase, delivery, and usage of Zestora organic spices and products.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2B1B12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">Legal Agreement</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Guidelines and legal provisions governing your journey with Zestora.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E8D5B0] space-y-8 text-[#2B1B12]">
          <div className="flex items-center gap-4 p-4 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
            <Scale className="w-8 h-8 text-[#C65A00] flex-shrink-0" />
            <p className="text-sm text-[#7A5C3A]">
              By accessing or purchasing from Zestora, you agree to abide by these Terms of Service and all applicable consumer regulations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12]">1. Product Authenticity &amp; Sourcing</h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              All Zestora spices are genuine, non-irradiated, and sourced directly from verified partner estates. Because our spices are 100% natural and free of artificial coloring, subtle variations in shade and granule size may occur between seasonal harvests.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12]">2. Pricing &amp; Payments</h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              All prices are listed in Indian Rupees (₹) and include applicable taxes unless indicated otherwise. We reserve the right to modify prices without prior notice; however, completed orders will always be honored at the price quoted during checkout.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12]">3. Shipping &amp; Delivery</h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              We dispatch orders via reliable courier partners within 24-48 hours of order confirmation. Delivery transit times range between 2 to 5 business days depending on location. Tracking information is sent immediately upon dispatch.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12]">4. Customer Support</h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              For any questions concerning these terms or your orders, our support team can be reached at{" "}
              <a href="mailto:zestoraspicesindia@gmail.com" className="text-[#C65A00] font-semibold hover:underline">
                zestoraspicesindia@gmail.com
              </a>{" "}
              or by phone at{" "}
              <a href="tel:+919900629597" className="text-[#C65A00] font-semibold hover:underline">
                +919900629597
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

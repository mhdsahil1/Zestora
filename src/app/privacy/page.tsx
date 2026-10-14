import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Zestora",
  description: "Learn how Zestora protects your personal data, secures online transactions, and respects your privacy rights.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2B1B12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">Transparency &amp; Trust</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Last updated: October 2026. How we collect, safeguard, and use your information.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E8D5B0] space-y-8 text-[#2B1B12]">
          <div className="flex items-center gap-4 p-4 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
            <ShieldCheck className="w-8 h-8 text-[#C65A00] flex-shrink-0" />
            <p className="text-sm text-[#7A5C3A]">
              At Zestora, we value your trust. We never sell your personal data to third parties, and all payment data is processed through industry-standard PCI-DSS compliant gateways.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#C65A00]" /> 1. Information We Collect
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed mb-3">
              When you purchase our farm-fresh spices or create an account, we collect necessary details such as your name, delivery address, phone number, and email address. This ensures safe delivery and prompt order notifications.
            </p>
            <ul className="list-disc pl-5 text-sm text-[#7A5C3A] space-y-1">
              <li>Contact details (name, email, phone number) for delivery updates.</li>
              <li>Shipping address for dispatching your spice orders.</li>
              <li>Account credentials for secure authentication.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#C65A00]" /> 2. Payment Security
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              We partner with trusted payment gateways including Razorpay for UPI, credit card, and net banking transactions. Zestora does not store full credit card numbers or banking passwords on our servers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C65A00]" /> 3. How We Use Your Data
            </h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed mb-3">
              Your details are used exclusively to fulfill your orders, provide customer support, and, with your permission, send newsletter updates with recipes and special spice harvests.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {["Order processing & delivery", "Real-time SMS/Email order alerts", "Curated spice recipe recommendations", "Dedicated customer assistance"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#2B1B12] font-medium bg-[#FFF7E6] p-3 rounded-xl border border-[#E8D5B0]">
                  <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold mb-3 text-[#2B1B12]">4. Your Rights &amp; Contact</h2>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">
              You can request access, corrections, or deletion of your personal data at any time by contacting us at{" "}
              <a href="mailto:zestoraspicesindia@gmail.com" className="text-[#C65A00] font-semibold hover:underline">
                zestoraspicesindia@gmail.com
              </a>{" "}
              or calling{" "}
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

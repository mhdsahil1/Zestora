import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Newspaper, Download, Award, ArrowUpRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media Center | Zestora",
  description: "Official press releases, media assets, news coverage, and company backgrounders for Zestora Organic Spices.",
};

const pressArticles = [
  {
    outlet: "The Culinary Tribune",
    title: "How Zestora Is Bringing Real Single-Origin Terroir to Everyday Home Pantries",
    date: "February 2026",
    summary: "A deep dive into how small-batch on-demand milling preserves up to 300% more volatile aromatic oils compared to industrial grocery brands."
  },
  {
    outlet: "Food & Organic Living",
    title: "The Zero-Synthetic Promise: From Kerala Hills to Global Kitchens",
    date: "December 2025",
    summary: "Profiling Zestora's direct-trade relationship with 500+ heritage growers across the Western Ghats and Kashmir valleys."
  },
  {
    outlet: "Indian Spice Journal",
    title: "Cardamom and Saffron: Preserving India's Ancient Spice Routes",
    date: "September 2025",
    summary: "Recognized for reviving native heritage cultivars without chemical pesticides or industrial irradiation."
  }
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2B1B12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">News &amp; Stories</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Press &amp; Media Center</h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            Official announcements, media kits, and story leads on sustainable agriculture and culinary innovation.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {/* Media Contact Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8D5B0] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFF7E6] text-[#C65A00] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                <Newspaper className="w-3.5 h-3.5" /> Media Relations
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2B1B12]">Press Inquiries &amp; Interviews</h2>
              <p className="text-sm text-[#7A5C3A] mt-1 max-w-md">
                For journalist questions, interview requests with our founders, or high-res photo requests, reach out directly.
              </p>
            </div>
            <a
              href="mailto:zestoraspicesindia@gmail.com?subject=Press / Media Inquiry"
              className="px-6 py-3 bg-[#C65A00] text-white rounded-full text-xs font-semibold hover:bg-[#2B1B12] transition-colors whitespace-nowrap flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Contact Media Desk
            </a>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#2B1B12] pt-4">Featured Coverage</h3>

          <div className="space-y-4">
            {pressArticles.map((article, i) => (
              <div 
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#E8D5B0] hover:border-[#C65A00] transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-[#7A5C3A] mb-2">
                  <span className="font-semibold text-[#C65A00] uppercase tracking-wider">{article.outlet}</span>
                  <span>{article.date}</span>
                </div>
                <h4 className="font-serif font-bold text-xl text-[#2B1B12] mb-3 leading-snug">
                  {article.title}
                </h4>
                <p className="text-sm text-[#7A5C3A] leading-relaxed">
                  {article.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Brand Assets */}
          <div className="bg-[#F5E6C8] rounded-3xl p-8 border border-[#E8D5B0]">
            <h3 className="font-serif text-2xl font-bold text-[#2B1B12] mb-2 flex items-center gap-2">
              <Award className="w-6 h-6 text-[#C65A00]" /> Brand Assets &amp; Guidelines
            </h3>
            <p className="text-sm text-[#7A5C3A] leading-relaxed mb-6">
              Download official vector logos, brand colors, farm imagery, and founder bios for publication and broadcast.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/icon.svg"
                download="Zestora-Logo-Vector.svg"
                className="px-5 py-2.5 bg-white border border-[#E8D5B0] text-[#2B1B12] rounded-full text-xs font-semibold hover:bg-[#C65A00] hover:text-white hover:border-[#C65A00] transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" /> Vector Logo (SVG)
              </a>
              <Link
                href="/about"
                className="px-5 py-2.5 bg-white border border-[#E8D5B0] text-[#2B1B12] rounded-full text-xs font-semibold hover:bg-[#C65A00] hover:text-white hover:border-[#C65A00] transition-colors flex items-center gap-2"
              >
                Founder Story &amp; Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

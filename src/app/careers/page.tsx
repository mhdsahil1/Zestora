import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Briefcase, Heart, Sparkles, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Join Our Team | Zestora",
  description: "Explore career opportunities at Zestora. Join our mission to revolutionize farm-sourced organic spices and sustainable agriculture.",
};

const openRoles = [
  {
    title: "Culinary Quality Specialist",
    department: "Quality & Agronomy",
    location: "Kochi, Kerala (On-site)",
    type: "Full-Time",
    desc: "Evaluate incoming small-batch spice harvests for volatile essential oil content, aroma, and moisture purity."
  },
  {
    title: "Brand Storyteller & Community Lead",
    department: "Marketing",
    location: "Bengaluru / Hybrid",
    type: "Full-Time",
    desc: "Connect home cooks and chefs with the generational heritage of our partner spice farming communities."
  },
  {
    title: "Supply Chain & Farm Partnership Manager",
    department: "Operations",
    location: "Kochi, Kerala",
    type: "Full-Time",
    desc: "Expand and nurture our fair-trade grower cooperatives across Kerala, Kashmir, and Tamil Nadu."
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#2B1B12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">Work With Purpose</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Join The Zestora Team</h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto">
            We are building the future of authentic, sustainable spices. Bring your curiosity and passion for culinary heritage.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8D5B0] text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1B12] mb-3">Why Join Zestora?</h2>
            <p className="text-[#7A5C3A] text-sm max-w-2xl mx-auto leading-relaxed mb-6">
              Founded in 2009, Zestora connects authentic farm-to-table culinary experiences with conscious growers. We offer flexible work arrangements, continuous learning stipends, and healthy, spice-infused work culture.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8D5B0]">
              <div className="p-4 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
                <Heart className="w-6 h-6 text-[#C65A00] mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-[#2B1B12]">People-First Culture</h4>
                <p className="text-xs text-[#7A5C3A] mt-1">Holistic wellness &amp; fair growth</p>
              </div>
              <div className="p-4 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
                <Sparkles className="w-6 h-6 text-[#C65A00] mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-[#2B1B12]">True Craftsmanship</h4>
                <p className="text-xs text-[#7A5C3A] mt-1">Single-origin culinary excellence</p>
              </div>
              <div className="p-4 bg-[#FFF7E6] rounded-2xl border border-[#E8D5B0]">
                <Briefcase className="w-6 h-6 text-[#C65A00] mx-auto mb-2" />
                <h4 className="font-semibold text-sm text-[#2B1B12]">Direct Impact</h4>
                <p className="text-xs text-[#7A5C3A] mt-1">Empowering 500+ heritage farmers</p>
              </div>
            </div>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#2B1B12] pt-6">Current Openings</h3>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] hover:border-[#C65A00] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-[#2B1B12]">{role.title}</h4>
                    <p className="text-xs text-[#C65A00] font-medium mt-0.5">{role.department}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-[#FFF7E6] border border-[#E8D5B0] text-[#7A5C3A] px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C65A00]" /> {role.location}
                    </span>
                    <span className="text-xs bg-green-50 text-green-700 font-semibold px-3 py-1 rounded-full">
                      {role.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#7A5C3A] leading-relaxed mb-4">{role.desc}</p>
                <a
                  href={`mailto:zestoraspicesindia@gmail.com?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C65A00] hover:text-[#2B1B12] transition-colors"
                >
                  Apply via Email <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="bg-[#2B1B12] text-white rounded-3xl p-8 text-center mt-12">
            <h4 className="font-serif text-2xl font-bold mb-2">Don&apos;t see your dream role?</h4>
            <p className="text-white/60 text-sm max-w-md mx-auto mb-5">
              We are always excited to hear from talented people passionate about sustainable food and pure spices.
            </p>
            <a
              href="mailto:zestoraspicesindia@gmail.com?subject=General Career Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C65A00] text-white font-semibold rounded-full text-xs hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors"
            >
              Send Us Your Resume <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

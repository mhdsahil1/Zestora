import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroKinetic from "@/components/story/HeroKinetic";
import FarmParallax from "@/components/story/FarmParallax";
import InteractiveTimeline from "@/components/story/InteractiveTimeline";

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] selection:bg-[#D97706] selection:text-white relative min-h-screen">
      {/* We add sticky navbar, ensuring z-index is above page backgrounds */}
      <div className="relative z-50">
        <Navbar />
      </div>

      <HeroKinetic />
      <FarmParallax />
      <InteractiveTimeline />
      
      {/* Footer placed with a sleek transition */}
      <div className="relative z-10 bg-[#0A0A0A] border-t border-white/10 mt-20">
        <Footer />
      </div>
    </main>
  );
}

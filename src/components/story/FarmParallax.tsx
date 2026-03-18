"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FarmParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background smooth crossfade configuration
  const imgAOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const imgBOpacity = useTransform(scrollYProgress, [0.4, 0.55, 1], [0, 1, 1]);

  // Card Y positions and opacities for sequential reveal
  const card1Y = useTransform(scrollYProgress, [0, 0.2, 0.4], [100, 0, -100]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.45], [0, 1, 1, 0]);

  const card2Y = useTransform(scrollYProgress, [0.45, 0.65, 0.85], [100, 0, -100]);
  const card2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 0.95], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        
        {/* Background Image A: Kochi Spice Gardens */}
        <motion.div 
          style={{ opacity: imgAOpacity, willChange: "opacity" }}
          className="absolute inset-0"
        >
          {/* Using Unsplash placeholder logic, replace with high-res later */}
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80" 
            alt="Kochi Spice Gardens"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
        </motion.div>

        {/* Background Image B: Sun-drying Spices */}
        <motion.div 
          style={{ opacity: imgBOpacity, willChange: "opacity" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80" 
            alt="Sun drying spices"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-[#0A0A0A]/80" />
        </motion.div>

        {/* Global grain map to blend backgrounds seamlessly */}
        <div className="absolute inset-0 futuristic-grain opacity-20 mix-blend-overlay pointer-events-none" />

        {/* Content Overlays */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          
          <motion.div 
            style={{ y: card1Y, opacity: card1Opacity, willChange: "transform, opacity" }}
            className="absolute max-w-2xl w-full p-8 md:p-14 rounded-3xl bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[#D97706] tracking-[0.2em] uppercase text-xs md:text-sm font-bold mb-6">Phase 1: The Origin</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">Deep in the Western Ghats.</h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
              We started by walking the narrow paths of Kerala's cardamom hills. Total immersion allowed us to form unbreakable bonds with master farmers who understand the soil better than anyone.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: card2Y, opacity: card2Opacity, willChange: "transform, opacity" }}
            className="absolute max-w-2xl w-full p-8 md:p-14 rounded-3xl bg-black/30 backdrop-blur-2xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          >
            <p className="text-[#D97706] tracking-[0.2em] uppercase text-xs md:text-sm font-bold mb-6">Phase 2: The Harvest</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-8 leading-tight">Sun. Skill. Patience.</h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">
              True flavor cannot be rushed. Our harvest relies on generations of ancestral knowledge, ensuring each spice is picked and sun-dried at the exact moment of peak chemical complexity.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

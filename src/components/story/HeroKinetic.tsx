"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroKinetic() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#0A0A0A]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle grain texture */}
        <div className="absolute inset-0 futuristic-grain opacity-20 pointer-events-none mix-blend-screen" />
        
        {/* Background glow behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="w-[60vw] h-[60vw] max-w-3xl max-h-3xl bg-[#D97706] blur-[150px] opacity-[0.05] rounded-full" />
        </div>

        <motion.div 
          style={{ scale, opacity, y, willChange: "transform, opacity" }}
          className="text-center z-10 px-4 flex flex-col items-center justify-center"
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            From the Soil.<br/>
            <span className="text-[#E8D5B0]">To the Soul.</span>
          </h1>
          <p className="mt-8 text-sm md:text-lg text-white/50 font-medium tracking-[0.3em] uppercase">
            A Journey of True Flavor
          </p>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4">Scroll to discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#D97706] to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}

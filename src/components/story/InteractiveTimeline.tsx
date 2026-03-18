"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineData = [
  { year: "2009", title: "Hand-harvested Roots", align: "left", desc: "Arjun Menon spends decades exploring the hidden spice trails of India, leading to our first partnered harvests." },
  { year: "2013", title: "Direct-Sourcing Ecosystem", align: "right", desc: "Cut out all intermediaries to directly empower farmers and transport fresh crops within 48 hours." },
  { year: "2017", title: "Zero Additives Promise", align: "left", desc: "Implemented comprehensive lab testing on every batch to guarantee organic integrity." },
  { year: "2024", title: "Small-batch Milled", align: "right", desc: "Launched our on-demand milling centers. Spices are ground just prior to shipping, maximizing volatile oils." }
];

interface TimelineNodeType {
  year: string;
  title: string;
  align: string;
  desc: string;
}

function TimelineNode({ node }: { node: TimelineNodeType }) {
  const isLeft = node.align === "left";
  
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      className={`relative flex flex-col md:flex-row items-center justify-between mb-32 md:mb-48 last:mb-0`}
    >
      {/* Left Side Content */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 pl-4 md:pl-0 pt-8 md:pt-0 ${isLeft ? 'md:text-right text-left' : 'md:opacity-0 md:order-last text-left'}`}>
        {isLeft && (
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            style={{ willChange: "transform, opacity" }}
            className="relative"
          >
            <span className="text-7xl sm:text-8xl lg:text-9xl font-serif font-black text-white/[0.03] absolute -top-12 sm:-top-16 md:-top-20 md:-right-4 tracking-tighter mix-blend-screen pointer-events-none select-none">{node.year}</span>
            <h3 className="relative font-serif text-3xl md:text-4xl text-white font-bold mt-2 mb-4 drop-shadow-md z-10">{node.title}</h3>
            <p className="relative text-white/60 text-lg md:text-xl leading-relaxed font-light z-10">{node.desc}</p>
          </motion.div>
        )}
      </div>

      {/* Glowing Node Marker */}
      <motion.div 
        className="absolute left-[19.5px] md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#111] border-[4px] border-[#D97706] z-10 shadow-[0_0_20px_rgba(217,119,6,0)]"
        variants={{
          hidden: { scale: 0.5, borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 0px rgba(217,119,6,0)" },
          visible: { scale: 1, borderColor: "#D97706", boxShadow: "0 0 30px rgba(217,119,6,1)", backgroundColor: "#FFF", transition: { duration: 0.5 } }
        }}
      />

      {/* Right Side Content */}
      <div className={`w-full md:w-5/12 ml-12 md:ml-0 pl-4 md:pl-0 pt-8 md:pt-0 ${!isLeft ? 'md:text-left text-left' : 'md:opacity-0'}`}>
        {!isLeft && (
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            style={{ willChange: "transform, opacity" }}
            className="relative"
          >
            <span className="text-7xl sm:text-8xl lg:text-9xl font-serif font-black text-white/[0.03] absolute -top-12 sm:-top-16 md:-top-20 md:-left-4 tracking-tighter mix-blend-screen pointer-events-none select-none">{node.year}</span>
            <h3 className="relative font-serif text-3xl md:text-4xl text-white font-bold mt-2 mb-4 drop-shadow-md z-10">{node.title}</h3>
            <p className="relative text-white/60 text-lg md:text-xl leading-relaxed font-light z-10">{node.desc}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function InteractiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 futuristic-grain mix-blend-overlay opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-12">
        <div className="text-center mb-32 md:mb-48 relative z-10">
          <p className="text-[#D97706] tracking-[0.2em] uppercase text-xs md:text-sm font-bold mb-6">Phase 3: The Impact</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tight">The Evolution of Quality.</h2>
        </div>

        <div className="relative pb-32">
          {/* Main vertical line background */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          
          {/* Animated vertical line fill */}
          <motion.div 
            style={{ scaleY, originY: 0, willChange: "transform" }}
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D97706] via-[#D97706]/50 to-transparent md:-translate-x-1/2 z-0" 
          />

          {timelineData.map((node, i) => (
            <TimelineNode key={i} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";

export default function BentoGridFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Large Feature: 100% Organic */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-2 relative overflow-hidden bg-[#0A0A0A] rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-end group border border-white/5"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30 group-hover:scale-105 transition-transform duration-1000 ease-in-out futuristic-grain" />
        
        <div className="relative z-20 max-w-lg">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 bg-[#D97706]/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-[#D97706]/30 shadow-[0_0_20px_rgba(217,119,6,0.2)]"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#D97706]" fill="currentColor">
              <path d="M17.6 3.6C16.2 3.2 14.5 3.5 13 4.4C10.7 5.8 9.5 8.2 9.5 10.7C9.5 12.5 10.3 14.2 11.5 15.4L6.3 20.6C5.9 21 5.9 21.6 6.3 22C6.5 22.2 6.8 22.3 7 22.3C7.2 22.3 7.5 22.2 7.7 22L12.9 16.8C14.7 17.6 16.8 17.6 18.6 16.5C21.8 14.6 22.9 10.6 21 7.4L21.3 7.1C21.7 6.7 21.7 6.1 21.3 5.7C20.9 5.3 20.3 5.3 19.9 5.7L19.6 6C18.4 4.5 17.8 4 17.6 3.6z" />
            </svg>
          </motion.div>
          <h3 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-4">100% Organic Purity.</h3>
          <p className="text-white/70 text-lg">Untouched by synthetics. We let nature do the work so you can taste the absolute truth of every spice.</p>
        </div>
      </motion.div>

      {/* Medium Feature: Farm Sourced */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative overflow-hidden bg-[#0A0A0A] rounded-3xl p-8 border border-white/5 flex flex-col justify-between group min-h-[400px]"
      >
        <div className="absolute inset-0 futuristic-grain opacity-5" />
        
        <div>
          <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 backdrop-blur-md">
            <MapPin className="w-6 h-6 text-[#D97706]" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-white mb-4">Farm Sourced.</h3>
          <p className="text-white/70">Directly from the estates in Kerala, Kashmir, and beyond. Total traceability attached to every batch.</p>
        </div>

        {/* Interactive GPS display */}
        <div className="mt-8 bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-lg flex items-center justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D97706]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#D97706] animate-[spin_10s_linear_infinite]" />
            <div className="font-mono text-white/90 text-sm tracking-wider">
              10°05'23.4"N <br/> 77°03'45.1"E
            </div>
          </div>
          <div className="relative z-10 w-2 h-2 rounded-full bg-[#D97706] animate-pulse shadow-[0_0_10px_#D97706]" />
        </div>
      </motion.div>

      {/* Small Feature: Fresh Ground */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="md:col-span-2 lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-[#1C120C] to-[#0A0A0A] rounded-3xl p-8 lg:p-12 border border-[#D97706]/20 flex flex-col md:flex-row items-center gap-12 group"
      >
        <div className="flex-1 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D97706]/20 border border-[#D97706]/40 rounded-full px-4 py-1.5 text-[#D97706] text-xs uppercase tracking-[0.2em] font-medium">
            Small Batch Milling
          </div>
          <h3 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight">Milled to order.<br/>Never before.</h3>
          <p className="text-white/70 text-lg max-w-md">Our spices are ground just before shipping to lock in volatile essential oils, maximizing extreme aromas and pungency.</p>
        </div>
        
        <div className="flex-1 w-full relative h-[250px] bg-black/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm flex items-center justify-center">
           {/* Abstract Milling Animation */}
           <div className="absolute inset-0 futuristic-grain opacity-20" />
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="w-48 h-48 border-[1px] border-dashed border-[#D97706]/40 rounded-full absolute"
           />
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="w-32 h-32 border border-[#D97706]/60 rounded-full absolute flex items-center justify-center"
           >
             <div className="w-16 h-16 bg-[#D97706] rounded-full blur-[20px] opacity-40 animate-pulse" />
           </motion.div>
           <div className="w-16 h-16 bg-[#0A0A0A] border-2 border-[#D97706] rounded-full z-10 shadow-[0_0_30px_rgba(217,119,6,0.4)] flex items-center justify-center">
             <div className="w-4 h-4 bg-[#D97706] rounded-full" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}

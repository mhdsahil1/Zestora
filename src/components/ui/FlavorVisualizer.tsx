"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function FlavorVisualizer({ 
  aroma = 0, 
  pungency = 0, 
  earthiness = 0, 
  sweetness = 0 
}: { 
  aroma?: number; 
  pungency?: number; 
  earthiness?: number; 
  sweetness?: number;
}) {
  const size = 300;
  const center = size / 2;
  const radius = (size / 2) - 40; // 110

  // 4 corners: top, right, bottom, left
  const getCoordinates = (value: number, index: number) => {
    const angle = (Math.PI / 2) * index - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + Math.cos(angle) * distance,
      y: center + Math.sin(angle) * distance,
    };
  };

  const points = useMemo(() => {
    const p1 = getCoordinates(aroma, 0);
    const p2 = getCoordinates(sweetness, 1);
    const p3 = getCoordinates(earthiness, 2);
    const p4 = getCoordinates(pungency, 3);
    return `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`;
  }, [aroma, pungency, earthiness, sweetness]);

  return (
    <div className="relative w-full aspect-square bg-[#0A0A0A]/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden futuristic-grain">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background webs */}
        {[0.25, 0.5, 0.75, 1].map((r: number, i: number) => (
          <path
            key={i}
            d={`M ${center} ${center - radius * r} 
               L ${center + radius * r} ${center} 
               L ${center} ${center + radius * r} 
               L ${center - radius * r} ${center} Z`}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
        ))}
        {/* Axes */}
        <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

        {/* Labels */}
        <text x={center} y={center - radius - 15} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" className="uppercase tracking-[0.2em] font-mono">Aroma</text>
        <text x={center + radius + 15} y={center + 4} textAnchor="start" fill="rgba(255,255,255,0.6)" fontSize="12" className="uppercase tracking-[0.2em] font-mono">Sweet</text>
        <text x={center} y={center + radius + 25} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="12" className="uppercase tracking-[0.2em] font-mono">Earth</text>
        <text x={center - radius - 15} y={center + 4} textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize="12" className="uppercase tracking-[0.2em] font-mono">Pungent</text>

        {/* Polygon Data */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          points={points}
          fill="rgba(217, 119, 6, 0.15)"
          stroke="#D97706"
          strokeWidth="2"
          style={{ filter: "drop-shadow(0 0 10px rgba(217,119,6,0.8))", transformOrigin: "center" }}
        />
        {/* Polygon Points */}
        {[aroma, sweetness, earthiness, pungency].map((val, i) => {
          const { x, y } = getCoordinates(val, i);
          return (
            <motion.circle
              key={i}
              initial={{ r: 0 }}
              animate={{ r: 4 }}
              transition={{ delay: 0.5 }}
              cx={x}
              cy={y}
              fill="#FFFFFF"
              style={{ filter: "drop-shadow(0 0 6px #D97706)" }}
            />
          );
        })}
      </svg>
      {/* Decorative grain / glow gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/10 to-transparent rounded-3xl pointer-events-none mix-blend-screen" />
    </div>
  );
}

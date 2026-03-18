"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ShoppingBag, Info, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useMagnetic } from "@/hooks/useMagnetic";

function NavItem({ href, icon: Icon, label, badge }: { href: string; icon: any; label: string; badge?: number }) {
  const { ref, position } = useMagnetic<HTMLAnchorElement>(40);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative z-10"
    >
      <Link
        ref={ref}
        href={href}
        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white/70 hover:text-white transition-colors group"
      >
        <Icon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {badge !== undefined && badge > 0 && (
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-[#D97706] text-[10px] font-bold text-white z-20 shadow-[0_0_10px_rgba(217,119,6,0.5)]"
          >
            {badge}
          </motion.span>
        )}
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              layoutId="nav-pill-background"
              className="absolute inset-0 bg-white/10 rounded-full -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}

export default function FloatingIslandNav() {
  const { totalItems } = useCart();
  const cartCount = totalItems;

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
    >
      <NavItem href="/" icon={Home} label="Home" />
      <NavItem href="/shop" icon={ShoppingBag} label="Shop" />
      <NavItem href="/about" icon={Info} label="About" />
      <NavItem href="/cart" icon={ShoppingCart} label="Cart" badge={cartCount} />
    </motion.nav>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, Check, Loader2 } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail("");
      toast.success("Thank you for subscribing! Your 10% discount code is ZESTORA10.");
    }, 600);
  };

  return (
    <footer className="bg-[#2B1B12] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D4AF37] mb-3 font-medium">Stay Connected</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">
                Get 10% Off Your First Order
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Subscribe to receive exclusive offers, spice tips, and farm-to-table stories delivered to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubscribe}>
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/40 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-4 bg-[#C65A00] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-all duration-300 text-sm whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : subscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      Subscribed!
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
              <p className="text-white/40 text-xs mt-3 ml-2">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-5 group" aria-label="Zestora Home">
              <Logo className="text-3xl text-white transition-opacity hover:opacity-90" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Pure spices. Real flavor. Sourced directly from farms across India and the world.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/zestoraspices", label: "Instagram" },
                { icon: Twitter, href: "https://twitter.com/zestoraspices", label: "Twitter" },
                { icon: Facebook, href: "https://facebook.com/zestoraspices", label: "Facebook" },
                { icon: Youtube, href: "https://youtube.com/@zestoraspices", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#C65A00] hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-5">Shop</h4>
            <ul className="space-y-3">
              {[
                { href: "/shop", label: "All Spices" },
                { href: "/shop?category=Exotic", label: "Exotic Spices" },
                { href: "/shop?category=Roots", label: "Roots & Turmeric" },
                { href: "/shop?category=Seeds", label: "Seeds & Pods" },
                { href: "/shop?category=Pepper", label: "Pepper Collection" },
                { href: "/shop?category=Chilli", label: "Chilli & Paprika" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Our Story" },
                { href: "/about#sourcing", label: "Farm Sourcing" },
                { href: "/about#sustainability", label: "Sustainability" },
                { href: "/contact", label: "Contact Us" },
                { href: "/careers", label: "Careers" },
                { href: "/press", label: "Press & Media" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-[#C65A00] flex-shrink-0 mt-0.5" />
                <span>12 Spice Garden Lane, Kochi, Kerala 682001, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-[#C65A00] flex-shrink-0" />
                <a 
                  href="mailto:zestoraspicesindia@gmail.com" 
                  className="hover:text-[#D4AF37] transition-colors break-all"
                  aria-label="Email Zestora"
                >
                  zestoraspicesindia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-[#C65A00] flex-shrink-0" />
                <a 
                  href="tel:+919900629597" 
                  className="hover:text-[#D4AF37] transition-colors"
                  aria-label="Call Zestora customer care"
                >
                  +919900629597
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left" suppressHydrationWarning>
            © {new Date().getFullYear()} Zestora. All rights reserved. Pure Spices. Real Flavor.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/returns", label: "Return Policy" },
            ].map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-white/40 text-xs hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

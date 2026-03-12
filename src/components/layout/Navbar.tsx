"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Search, Menu, X, Leaf, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import CartSidebar from "./CartSidebar";
import SearchOverlay from "./SearchOverlay";
import { useSession } from "next-auth/react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { data: session } = useSession();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = scrolled || !isHome
    ? "bg-[#2B1B12]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Logo className="text-3xl text-white transition-opacity hover:opacity-90" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group ${
                    pathname === link.href ? "text-[#D4AF37]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link href="/wishlist" className="relative p-2 text-white/80 hover:text-white transition-colors duration-200">
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#D4AF37] text-[#2B1B12] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              
              <Link href={session ? "/account" : "/login"} className="p-2 text-white/80 hover:text-white transition-colors duration-200">
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={toggleCart}
                className="relative p-2 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#C65A00] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <Link
                href="/shop"
                className="hidden md:inline-flex items-center gap-1.5 ml-2 px-5 py-2 bg-[#C65A00] text-white text-sm font-medium tracking-wide rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-all duration-300"
              >
                Shop Now
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80" : "max-h-0"}`}>
          <div className="bg-[#2B1B12] border-t border-white/10 px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-medium tracking-widest uppercase border-b border-white/10 ${
                  pathname === link.href ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href={session ? "/account" : "/login"}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium tracking-widest uppercase border-b border-white/10 ${
                pathname === "/account" ? "text-[#D4AF37]" : "text-white/70 hover:text-white"
              }`}
            >
              Account
            </Link>
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 py-3 text-center bg-[#C65A00] text-white text-sm font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </header>

      <CartSidebar />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

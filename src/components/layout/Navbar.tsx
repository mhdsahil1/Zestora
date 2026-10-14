"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingCart, Heart, Search, Menu, X, User, Phone, Mail, 
  Home, ShoppingBag, Sparkles, ChevronRight, LogIn
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import CartSidebar from "./CartSidebar";
import SearchOverlay from "./SearchOverlay";
import { useSession } from "next-auth/react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/about", label: "About", icon: Sparkles },
  { href: "/contact", label: "Contact", icon: Phone },
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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg = scrolled || !isHome
    ? "bg-[#2B1B12]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="Zestora Home">
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
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Search spices"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link 
                href="/wishlist" 
                className="relative p-2 text-white/80 hover:text-white transition-colors duration-200"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#D4AF37] text-[#2B1B12] text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              
              <Link 
                href={session ? "/account" : "/login"} 
                className="p-2 text-white/80 hover:text-white transition-colors duration-200"
                aria-label={session ? "Account" : "Sign In"}
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                onClick={toggleCart}
                className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#C65A00] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-scale-in">
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

              {/* Mobile menu hamburger button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 text-white hover:text-[#D4AF37] transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── FULL MOBILE MENU DRAWER ─── */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-visibility duration-300 ${
          mobileOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <aside 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#1C120C] text-white shadow-2xl flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-out border-l border-white/10 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile Navigation"
        >
          {/* Top section: Header & Search */}
          <div>
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <Logo className="text-2xl text-white" />
              </Link>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search button */}
            <div className="p-4 border-b border-white/10">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/60 hover:text-white hover:border-[#D4AF37]/50 transition-colors text-sm text-left"
              >
                <Search className="w-4 h-4 text-[#D4AF37]" />
                <span>Search spices, blends, origins...</span>
              </button>
            </div>

            {/* Main Navigation Links */}
            <nav className="p-4 space-y-1">
              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/70">
                Menu
              </p>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#C65A00] text-white font-semibold shadow-md"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${active ? "text-white" : "text-[#D4AF37]"}`} />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </Link>
                );
              })}

              <div className="pt-3 my-2 border-t border-white/10" />

              <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/70">
                Customer Services
              </p>

              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/cart" ? "bg-[#C65A00] text-white" : "text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-4 h-4 text-[#D4AF37]" />
                  <span>My Cart</span>
                </div>
                {totalItems > 0 && (
                  <span className="bg-[#C65A00] text-white text-xs px-2 py-0.5 rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link
                href="/wishlist"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/wishlist" ? "bg-[#C65A00] text-white" : "text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-[#D4AF37]" />
                  <span>Saved Items</span>
                </div>
                {wishlistItems.length > 0 && (
                  <span className="bg-[#D4AF37] text-[#2B1B12] text-xs px-2 py-0.5 rounded-full font-bold">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>

              <Link
                href={session ? "/account" : "/login"}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/account" || pathname === "/login" ? "bg-[#C65A00] text-white" : "text-white/80 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  {session ? <User className="w-4 h-4 text-[#D4AF37]" /> : <LogIn className="w-4 h-4 text-[#D4AF37]" />}
                  <span>{session ? `Account (${session.user?.name || "Profile"})` : "Sign In / Register"}</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            </nav>
          </div>

          {/* Bottom section: CTA & Clickable Contact Links */}
          <div className="p-6 border-t border-white/10 bg-black/20 space-y-4">
            <Link
              href="/shop"
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3.5 text-center bg-[#C65A00] text-white text-sm font-semibold rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-colors shadow-lg shadow-[#C65A00]/20"
            >
              Shop All Spices
            </Link>

            <div className="space-y-2 pt-2">
              <a
                href="tel:+919900629597"
                className="flex items-center gap-2.5 text-xs text-white/70 hover:text-[#D4AF37] transition-colors py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call Us: +919900629597</span>
              </a>

              <a
                href="mailto:zestoraspicesindia@gmail.com"
                className="flex items-center gap-2.5 text-xs text-white/70 hover:text-[#D4AF37] transition-colors py-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="truncate">zestoraspicesindia@gmail.com</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <CartSidebar />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

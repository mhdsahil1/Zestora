"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Leaf, Award, Truck, Shield, ChevronRight, Play } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products, categories, testimonials, stats } from "@/data/products";

// Intersection Observer hook for scroll animations
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// Animated counter
function Counter({ value }: { value: string }) {
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, num]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const featuredProducts = products.filter((p) => p.featured);

const trustLogos = [
  { name: "USDA Organic", bg: "bg-green-50" },
  { name: "Non-GMO Project", bg: "bg-blue-50" },
  { name: "ISO Certified", bg: "bg-amber-50" },
  { name: "Fair Trade", bg: "bg-rose-50" },
  { name: "100% Natural", bg: "bg-emerald-50" },
];

export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=90"
            alt="Premium spices"
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${heroLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B1B12]/90 via-[#2B1B12]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12]/40 to-transparent" />
        </div>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 bg-[#C65A00]/20 border border-[#C65A00]/40 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
            >
              <Leaf className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium">
                100% Organic · Farm Sourced
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-6 animate-fade-in-up">
              Pure Spices.
              <br />
              <span className="gradient-text">Real Flavor.</span>
            </h1>

            <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 animate-fade-in-up delay-200 max-w-xl">
              Authentic spices sourced directly from the world&apos;s finest farms. Experience the difference of true freshness in every pinch.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C65A00] text-white font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-all duration-300 shadow-lg hover:shadow-[#C65A00]/30 hover:shadow-2xl"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4 fill-current" />
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-[#2B1B12] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2">
                  <Counter value={stat.value} />
                </p>
                <p className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST LOGOS ─── */}
      <section className="py-12 border-b border-[#E8D5B0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-[#7A5C3A] mb-8">
            Certified &amp; Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {trustLogos.map((logo, i) => (
              <div
                key={i}
                className={`${logo.bg} px-6 py-3 rounded-full text-sm font-semibold text-[#2B1B12] border border-[#E8D5B0]`}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED SPICES ─── */}
      <FeaturedSection />

      {/* ─── CATEGORIES ─── */}
      <CategoriesSection />

      {/* ─── WHY ZESTORA ─── */}
      <WhyZestoraSection />

      {/* ─── BRAND STORY ─── */}
      <BrandStorySection />

      {/* ─── TESTIMONIALS ��── */}
      <TestimonialsSection />

      {/* ─── HOW TO USE GUIDE ─── */}
      <HowToUseSection />

      {/* ─── SPICE COLLECTIONS ─── */}
      <CollectionsSection />

      {/* ─── QUALITY ASSURANCE ─── */}
      <QualitySection />

      {/* ─── NEWSLETTER (handled in footer) ─── */}

      <Footer />
    </main>
  );
}

// ─── FEATURED PRODUCTS SECTION ───
function FeaturedSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">
          Handpicked For You
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">
          Featured Spices
        </h2>
        <div className="section-divider mx-auto mb-5" />
        <p className="text-[#7A5C3A] max-w-xl mx-auto text-sm leading-relaxed">
          Each spice in our collection is sourced directly from farmers, ensuring unmatched freshness and provenance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
        {featuredProducts.map((product, i) => (
          <div
            key={product.id}
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-[#C65A00] text-[#C65A00] font-medium rounded-full hover:bg-[#C65A00] hover:text-white transition-all duration-300"
        >
          Explore All Spices
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ─── CATEGORIES SECTION ───
function CategoriesSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#2B1B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">
            Browse By Category
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">
            Featured Categories
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.name}`}
              className={`group relative overflow-hidden rounded-2xl aspect-[3/4] transition-all duration-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-serif text-xl text-white font-bold mb-1">{cat.name}</h3>
                <p className="text-white/50 text-xs mb-3">{cat.count} varieties</p>
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Explore</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY ZESTORA SECTION ───
function WhyZestoraSection() {
  const { ref, inView } = useInView();
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "Every spice we source is certified organic, grown without pesticides or synthetic fertilizers. Nature's way, always.",
      color: "bg-green-50 text-green-700",
    },
    {
      icon: Award,
      title: "Farm Sourced",
      description: "We partner directly with farmers across India, Sri Lanka, and Vietnam—cutting out middlemen for fresher spices.",
      color: "bg-amber-50 text-amber-700",
    },
    {
      icon: Shield,
      title: "Fresh Ground",
      description: "Ground to order in small batches to preserve maximum volatile oils, aroma, and nutritional potency.",
      color: "bg-orange-50 text-orange-700",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $40. Delivered in eco-friendly, airtight packaging to lock in freshness.",
      color: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image collage */}
        <div className={`relative transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=400&q=80"
                    alt="Spice farm"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80"
                    alt="Turmeric"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80"
                    alt="Cardamom"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative h-52 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80"
                    alt="Black pepper"
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-[#C65A00] text-white rounded-2xl p-5 shadow-xl">
            <p className="font-serif text-3xl font-bold">15+</p>
            <p className="text-xs text-white/70 mt-1">Years of<br/>Expertise</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-4">
            Why Choose Zestora
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-5 leading-tight">
            Quality You Can Taste,
            <br />
            <span className="gradient-text">Trust You Can Feel</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#7A5C3A] leading-relaxed mb-10 text-sm">
            We believe the best cooking starts with the best ingredients. Every spice in our collection is traceable to its source, handled with care, and delivered at peak freshness.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feat, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`${feat.color} p-3 rounded-xl flex-shrink-0`}>
                  <feat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#2B1B12] mb-1">{feat.title}</h4>
                  <p className="text-xs text-[#7A5C3A] leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BRAND STORY SECTION ───
function BrandStorySection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80"
          alt="Spice market"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2B1B12]/80" />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto text-center px-4 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-medium mb-6">
          Our Story
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-8 leading-tight">
          Born from a Passion for
          <br />
          <span className="gradient-text">Authentic Flavors</span>
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Zestora was founded in 2009 with one belief: that great food begins with extraordinary spices. We traveled to the source—Kerala&apos;s cardamom hills, Kashmir&apos;s saffron fields, Tamil Nadu&apos;s turmeric farms—to bring you spices as nature intended them.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-medium rounded-full hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-all duration-300"
        >
          Read Our Full Story
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS SECTION ───
function TestimonialsSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">
            What Our Customers Say
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">
            Stories of Flavor
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <blockquote className="text-[#2B1B12] text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.review}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pt-4 border-t border-[#E8D5B0]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-serif font-semibold text-[#2B1B12] text-sm">{t.name}</p>
                  <p className="text-xs text-[#7A5C3A]">{t.role}</p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-[10px] uppercase tracking-wide text-[#C65A00] bg-[#FFF7E6] px-3 py-1 rounded-full font-medium">
                    {t.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW TO USE GUIDE SECTION ───
function HowToUseSection() {
  const { ref, inView } = useInView();
  const guides = [
    {
      number: "01",
      title: "Storage Tips",
      description: "Store spices in airtight containers away from heat, light, and moisture. Keep in a cool, dark place to preserve freshness and potency for up to 2 years.",
      color: "bg-blue-50 text-blue-700",
    },
    {
      number: "02",
      title: "Toasting Spices",
      description: "Toast whole spices in a dry pan over medium heat for 2-3 minutes to unlock deeper flavors. Grind immediately after toasting for maximum aroma.",
      color: "bg-amber-50 text-amber-700",
    },
    {
      number: "03",
      title: "Measuring Guide",
      description: "Use 1 tsp per 2 servings as a starting point. Start with less and add more to taste. Ground spices are more potent than whole varieties.",
      color: "bg-green-50 text-green-700",
    },
    {
      number: "04",
      title: "Flavor Pairings",
      description: "Combine complementary spices: turmeric + cumin for curries, cardamom + cinnamon for baking, and black pepper + paprika for savory dishes.",
      color: "bg-rose-50 text-rose-700",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">
          Expert Guidance
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">
          How to Use Spices Like a Pro
        </h2>
        <div className="section-divider mx-auto mb-5" />
        <p className="text-[#7A5C3A] max-w-xl mx-auto text-sm leading-relaxed">
          Master the art of spice usage with our expert tips and techniques to elevate your cooking.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((guide, i) => (
          <div
            key={i}
            className={`${guide.color} rounded-2xl p-8 transition-all duration-700 hover:shadow-lg ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-4xl font-serif font-bold mb-3 opacity-20">{guide.number}</div>
            <h3 className="font-serif text-xl font-semibold mb-3 text-[#2B1B12]">{guide.title}</h3>
            <p className="text-sm text-[#2B1B12] opacity-75 leading-relaxed">{guide.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SPICE COLLECTIONS SECTION ───
function CollectionsSection() {
  const { ref, inView } = useInView();
  const collections = [
    {
      title: "Cooking Essentials",
      description: "The foundation spices every kitchen needs",
      spices: ["Turmeric", "Cumin", "Coriander", "Black Pepper"],
      color: "from-orange-500 to-red-500",
      icon: "🍳",
    },
    {
      title: "Baking & Sweets",
      description: "Perfect for desserts and sweet dishes",
      spices: ["Cinnamon", "Cardamom", "Nutmeg", "Cloves"],
      color: "from-amber-500 to-yellow-500",
      icon: "🍰",
    },
    {
      title: "Health & Wellness",
      description: "Spices celebrated for health benefits",
      spices: ["Turmeric", "Ginger", "Cinnamon", "Fenugreek"],
      color: "from-green-500 to-emerald-500",
      icon: "⚕️",
    },
    {
      title: "Exotic & Rare",
      description: "Premium spices for gourmet cooking",
      spices: ["Saffron", "Asafoetida", "Mace", "Star Anise"],
      color: "from-purple-500 to-pink-500",
      icon: "✨",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#2B1B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">
            Curated Collections
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">
            Spice Collections by Purpose
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`bg-gradient-to-br ${collection.color} h-full rounded-2xl p-6 text-white relative z-10`}>
                <div className="text-3xl mb-3">{collection.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{collection.title}</h3>
                <p className="text-sm text-white/80 mb-4">{collection.description}</p>
                <div className="space-y-1">
                  {collection.spices.map((spice, j) => (
                    <div key={j} className="text-xs text-white/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      {spice}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── QUALITY ASSURANCE SECTION ───
function QualitySection() {
  const { ref, inView } = useInView();
  const qualityPoints = [
    {
      title: "Direct Sourcing",
      description: "We work directly with farmers and cooperative farms to ensure fair practices and maximum freshness.",
      icon: "🌾",
    },
    {
      title: "Rigorous Testing",
      description: "Every batch undergoes laboratory testing for purity, potency, and absence of contaminants.",
      icon: "🔬",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "Our sustainable packaging preserves spice quality while minimizing environmental impact.",
      icon: "♻️",
    },
    {
      title: "Traceability",
      description: "Know exactly where your spices come from with full batch traceability and origin documentation.",
      icon: "📍",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">
          Quality Commitment
        </p>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">
          Our Quality Promise
        </h2>
        <div className="section-divider mx-auto mb-5" />
        <p className="text-[#7A5C3A] max-w-xl mx-auto text-sm leading-relaxed">
          We maintain the highest standards in sourcing, testing, and delivering premium spices to your kitchen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {qualityPoints.map((point, i) => (
          <div
            key={i}
            className={`flex gap-6 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="text-5xl flex-shrink-0">{point.icon}</div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#2B1B12] mb-2">{point.title}</h3>
              <p className="text-[#7A5C3A] text-sm leading-relaxed">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#C65A00] text-[#C65A00] font-medium rounded-full hover:bg-[#C65A00] hover:text-white transition-all duration-300"
        >
          Learn About Our Process
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

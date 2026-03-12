"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Heart, Globe, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Founded in Kochi, Kerala by spice trader Arjun Menon after a decade traveling India's spice routes." },
  { year: "2013", title: "First Farm Partnership", desc: "Signed direct partnerships with 5 farms in Kerala, Tamil Nadu and Karnataka—our direct-sourcing model was born." },
  { year: "2017", title: "Organic Certification", desc: "Received USDA Organic and Non-GMO Project certifications across our entire product range." },
  { year: "2020", title: "Global Expansion", desc: "Extended our farm network to Sri Lanka, Vietnam, and Spain, adding 30+ new spice varieties." },
  { year: "2024", title: "10,000 Happy Customers", desc: "Reached a milestone of 10,000+ customers across 25 countries, all experiencing true spice freshness." },
];

const team = [
  { name: "Arjun Menon", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80", bio: "15+ years traversing India's spice trade routes." },
  { name: "Kavya Nair", role: "Head of Sourcing", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80", bio: "Agricultural scientist specializing in organic farming." },
  { name: "Rohan Das", role: "Quality Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80", bio: "Certified food safety specialist with 12 years of experience." },
];

const values = [
  { icon: Leaf, title: "Organic First", desc: "Every product is certified organic. We never compromise on what goes into our spices or onto your table.", color: "bg-green-50 text-green-700" },
  { icon: Heart, title: "Farmer Welfare", desc: "We pay fair premiums to our farm partners, investing in their families, communities, and land.", color: "bg-rose-50 text-rose-700" },
  { icon: Globe, title: "Sustainability", desc: "All packaging is 100% compostable or recyclable. We aim to be carbon-neutral by 2027.", color: "bg-blue-50 text-blue-700" },
  { icon: Award, title: "Uncompromised Quality", desc: "Every batch is tested in our lab for purity, potency, and the absence of contaminants.", color: "bg-amber-50 text-amber-700" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=90"
            alt="Spice farm"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B12] via-[#2B1B12]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3 animate-fade-in">Our Story</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white mb-4 animate-fade-in-up">
            From Farm to<br />
            <span className="gradient-text">Your Kitchen</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl animate-fade-in-up delay-200">
            A journey born from passion for authentic flavor, direct relationships with farmers, and a commitment to purity.
          </p>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-6">Our Mission</p>
        <blockquote className="font-serif text-3xl lg:text-4xl xl:text-5xl text-[#2B1B12] leading-tight">
          &ldquo;To connect every kitchen with the pure, authentic flavors that the world&apos;s finest spice-growing regions have to offer.&rdquo;
        </blockquote>
        <div className="section-divider mx-auto mt-8" />
      </section>

      {/* Brand Story */}
      <section id="sourcing" className="py-16 bg-[#2B1B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-4">Our Sourcing Story</p>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6 leading-tight">
                We Go to the Source
              </h2>
              <div className="space-y-5 text-white/60 text-sm leading-relaxed">
                <p>
                  In 2009, our founder Arjun Menon walked through the cardamom hills of Idukki, Kerala, and had a revelation: the spices being sold in supermarkets bore no resemblance to what he was tasting at the source. He decided to change that.
                </p>
                <p>
                  Today, Zestora works with 15+ farm families across India, Sri Lanka, Vietnam, and Spain. We visit each farm personally, verify organic practices, and build long-term relationships—not one-time transactions.
                </p>
                <p>
                  When you open a jar of Zestora spice, you&apos;re experiencing the direct result of those relationships: spices harvested at peak ripeness, processed minimally, and rushed to your door before their volatile oils can fade.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[#C65A00] text-white rounded-full font-medium hover:bg-[#D4AF37] hover:text-[#2B1B12] transition-all duration-300"
              >
                Shop Our Collection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
                "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
              ].map((src, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? "mt-6" : ""}`} style={{ aspectRatio: "1" }}>
                  <Image src={src} alt="Farm" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <ValuesSection />

      {/* Timeline */}
      <TimelineSection />

      {/* Team */}
      <TeamSection />

      {/* Sustainability */}
      <SustainabilitySection />

      <Footer />
    </main>
  );
}

function ValuesSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">What We Stand For</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">Our Core Values</h2>
        <div className="section-divider mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl p-7 shadow-sm border border-[#E8D5B0] hover:shadow-lg transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`${v.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
              <v.icon className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-[#2B1B12] mb-3">{v.title}</h3>
            <p className="text-sm text-[#7A5C3A] leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 bg-[#F5E6C8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">Our Journey</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">15 Years of Excellence</h2>
          <div className="section-divider mx-auto" />
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[90px] sm:left-1/2 top-0 bottom-0 w-px bg-[#E8D5B0]" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex gap-8 sm:gap-0 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`sm:w-1/2 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0]">
                    <span className="font-serif text-3xl font-bold text-[#C65A00]">{item.year}</span>
                    <h3 className="font-serif text-lg font-semibold text-[#2B1B12] mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-[#7A5C3A] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="absolute left-[84px] sm:left-1/2 sm:-translate-x-1/2 top-6 w-4 h-4 bg-[#C65A00] rounded-full border-4 border-[#F5E6C8] shadow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-3">The People Behind Zestora</p>
        <h2 className="font-serif text-4xl lg:text-5xl text-[#2B1B12] mb-4">Meet Our Team</h2>
        <div className="section-divider mx-auto" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <div
            key={i}
            className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-[#E8D5B0]">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-[#2B1B12] mb-1">{member.name}</h3>
            <p className="text-sm text-[#C65A00] font-medium mb-3">{member.role}</p>
            <p className="text-sm text-[#7A5C3A]">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SustainabilitySection() {
  const { ref, inView } = useInView();
  const points = [
    "100% compostable packaging by end of 2025",
    "Carbon-neutral shipping on all orders",
    "1% of revenue donated to farmer education programs",
    "Zero food waste policy — all offcuts composted",
    "Renewable energy in our processing facility",
  ];

  return (
    <section ref={ref} id="sustainability" className="py-24 bg-[#2B1B12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-4">Our Commitment</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Sustainability is
              <br />
              <span className="gradient-text">Not Optional</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              We believe a spice brand that damages the environment it sources from is fundamentally broken. Every decision we make—packaging, logistics, farming practices—is filtered through this lens.
            </p>
            <ul className="space-y-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={`relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&q=80"
                alt="Sustainable farming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2B1B12]/20" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-[#2B1B12] rounded-2xl p-5 shadow-xl">
              <p className="font-serif text-3xl font-bold">2027</p>
              <p className="text-xs font-medium mt-1">Carbon Neutral<br/>Target Year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

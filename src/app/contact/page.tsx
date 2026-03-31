"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Instagram, Twitter, Facebook, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["12 Spice Garden Lane", "Kochi, Kerala 682001", "India"],
      color: "bg-orange-50 text-[#C65A00]",
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["zestoraspicesindia@gmail.com", "orders@zestora.com"],
      color: "bg-amber-50 text-amber-700",
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+919900629597", "Mon–Sat, 9am–6pm IST"],
      color: "bg-green-50 text-green-700",
    },
    {
      icon: Clock,
      title: "Business Hours",
      lines: ["Monday–Friday: 9am–6pm", "Saturday: 10am–4pm", "Sunday: Closed"],
      color: "bg-blue-50 text-blue-700",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-[#2B1B12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C65A00 0%, transparent 60%), radial-gradient(circle at 70% 50%, #D4AF37 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3 animate-fade-in">Get In Touch</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-white mb-5 animate-fade-in-up">We&apos;d Love to Hear</h1>
          <h1 className="font-serif text-5xl lg:text-6xl gradient-text mb-6 animate-fade-in-up delay-100">From You</h1>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed animate-fade-in-up delay-200">
            Whether you have a question about our spices, need help with an order, or just want to share your cooking story — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactInfo.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] text-center">
              <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-semibold text-[#2B1B12] mb-2">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-xs text-[#7A5C3A] leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#E8D5B0]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-[#2B1B12] mb-3">Message Sent!</h3>
                <p className="text-[#7A5C3A] text-sm mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-6 py-3 bg-[#C65A00] text-white rounded-full text-sm font-medium hover:bg-[#2B1B12] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-2">Contact Form</p>
                <h2 className="font-serif text-3xl text-[#2B1B12] mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Arjun Kumar"
                        className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] outline-none focus:border-[#C65A00] transition-colors text-sm appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject...</option>
                      <option value="order">Order Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="bulk">Bulk / Wholesale</option>
                      <option value="partnership">Farm Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#C65A00] text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[#2B1B12] transition-all duration-300 shadow-lg hover:shadow-[#C65A00]/20"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + Map */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="relative rounded-3xl overflow-hidden h-80 bg-[#F5E6C8]">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location map"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-5 shadow-xl text-center">
                  <div className="w-12 h-12 bg-[#C65A00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-serif font-semibold text-[#2B1B12] text-sm">Zestora HQ</p>
                  <p className="text-xs text-[#7A5C3A]">Kochi, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-[#2B1B12] rounded-3xl p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">Follow Us</p>
              <h3 className="font-serif text-2xl text-white mb-5">Join Our Community</h3>
              <p className="text-white/50 text-sm mb-6">
                Follow @ZestoraSpices for recipes, farm stories, and exclusive offers.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "@ZestoraSpices", href: "#" },
                  { icon: Twitter, label: "@Zestora", href: "#" },
                  { icon: Facebook, label: "Zestora Spices", href: "#" },
                ].map(({ icon: Icon, label, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex-1 flex flex-col items-center gap-2 py-3 bg-white/10 rounded-xl text-white/70 hover:bg-[#C65A00] hover:text-white transition-all duration-300 text-xs font-medium"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:block text-center">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ teaser */}
            <div className="bg-[#F5E6C8] rounded-3xl p-8 border border-[#E8D5B0]">
              <h3 className="font-serif text-xl text-[#2B1B12] mb-2">Quick Answers</h3>
              <p className="text-sm text-[#7A5C3A] mb-4">Most questions are answered in our help center.</p>
              <div className="space-y-2">
                {["How long does shipping take?", "Do you offer bulk discounts?", "What is your return policy?"].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#2B1B12] font-medium cursor-pointer hover:text-[#C65A00] transition-colors">
                    <CheckCircle className="w-4 h-4 text-[#C65A00] flex-shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

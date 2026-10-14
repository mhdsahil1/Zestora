"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mail, MapPin, Phone, Clock, Instagram, Twitter, Facebook, 
  Send, CheckCircle, ChevronDown, HelpCircle, Loader2 
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders are milled and dispatched within 24-48 hours. Standard domestic delivery takes 2-4 business days across India. Express shipping is also available at checkout."
  },
  {
    q: "Do you offer bulk or wholesale discounts?",
    a: "Yes! We partner with artisanal restaurants, culinary institutes, and boutique retailers. Select 'Bulk / Wholesale' in the contact form or email orders@zestora.com."
  },
  {
    q: "What is your return policy?",
    a: "We offer a 100% freshness guarantee. If you are unsatisfied with your spices for any reason, contact us within 14 days of delivery for a replacement or full refund."
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Message sent! Our spice specialists will reply within 24 hours.");
    }, 600);
  };

  return (
    <main className="min-h-screen bg-[#FFF7E6]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-[#2B1B12] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C65A00 0%, transparent 60%), radial-gradient(circle at 70% 50%, #D4AF37 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3 animate-fade-in">Get In Touch</p>
          <h1 className="font-serif text-5xl lg:text-6xl text-white mb-5 animate-fade-in-up">We&apos;d Love to Hear</h1>
          <h2 className="font-serif text-5xl lg:text-6xl gradient-text mb-6 animate-fade-in-up delay-100">From You</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up delay-200">
            Whether you have a question about our spices, need help with an order, or want to discuss a custom blend — we are here for you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Visit Us */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] text-center">
            <div className="bg-orange-50 text-[#C65A00] w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-[#2B1B12] mb-2">Visit Us</h3>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">12 Spice Garden Lane</p>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">Kochi, Kerala 682001</p>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">India</p>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] text-center">
            <div className="bg-amber-50 text-amber-700 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-[#2B1B12] mb-2">Email Us</h3>
            <p className="text-xs leading-relaxed mb-1">
              <a 
                href="mailto:zestoraspicesindia@gmail.com" 
                className="text-[#C65A00] hover:text-[#2B1B12] font-medium transition-colors break-all"
                aria-label="Send email to zestoraspicesindia@gmail.com"
              >
                zestoraspicesindia@gmail.com
              </a>
            </p>
            <p className="text-xs leading-relaxed">
              <a 
                href="mailto:orders@zestora.com" 
                className="text-[#7A5C3A] hover:text-[#C65A00] transition-colors"
                aria-label="Send email to orders@zestora.com"
              >
                orders@zestora.com
              </a>
            </p>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] text-center">
            <div className="bg-green-50 text-green-700 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-[#2B1B12] mb-2">Call Us</h3>
            <p className="text-xs leading-relaxed mb-1">
              <a 
                href="tel:+919900629597" 
                className="text-[#C65A00] hover:text-[#2B1B12] font-semibold transition-colors"
                aria-label="Call +919900629597"
              >
                +919900629597
              </a>
            </p>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">Mon–Sat, 9am–6pm IST</p>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E8D5B0] text-center">
            <div className="bg-blue-50 text-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-semibold text-[#2B1B12] mb-2">Business Hours</h3>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">Mon–Fri: 9am–6pm</p>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">Saturday: 10am–4pm</p>
            <p className="text-xs text-[#7A5C3A] leading-relaxed">Sunday: Closed</p>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-[#E8D5B0]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5 border border-green-200">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-3xl text-[#2B1B12] mb-3">Message Sent!</h3>
                <p className="text-[#7A5C3A] text-sm max-w-sm mb-6 leading-relaxed">
                  Thank you for reaching out. A Zestora spice specialist will get in touch with you within 24 business hours.
                </p>
                <button
                  onClick={() => { 
                    setSubmitted(false); 
                    setForm({ name: "", email: "", subject: "", message: "" }); 
                  }}
                  className="px-8 py-3.5 bg-[#C65A00] text-white rounded-full text-sm font-semibold hover:bg-[#2B1B12] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C65A00] font-medium mb-2">Direct Inquiry</p>
                <h2 className="font-serif text-3xl text-[#2B1B12] mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Arjun Menon"
                        className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. arjun@domain.com"
                        className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">
                      Inquiry Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] outline-none focus:border-[#C65A00] transition-colors text-sm cursor-pointer"
                    >
                      <option value="">Select a topic...</option>
                      <option value="order">Order Tracking & Shipping</option>
                      <option value="product">Spice Provenance & Quality</option>
                      <option value="bulk">Bulk / Restaurant Wholesale</option>
                      <option value="partnership">Farm Partnership</option>
                      <option value="other">General Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#7A5C3A] mb-2 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your culinary questions or details about your spice requirements..."
                      className="w-full px-4 py-3 bg-[#FFF7E6] border border-[#E8D5B0] rounded-xl text-[#2B1B12] placeholder-[#B09070] outline-none focus:border-[#C65A00] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#C65A00] text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#2B1B12] transition-all duration-300 shadow-lg hover:shadow-[#C65A00]/20 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + Map + FAQ */}
          <div className="space-y-6">
            {/* Map / Location Graphic */}
            <div className="relative rounded-3xl overflow-hidden h-72 bg-[#F5E6C8] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Zestora HQ Location Map"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl text-center border border-[#E8D5B0]">
                  <div className="w-12 h-12 bg-[#C65A00] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-serif font-bold text-[#2B1B12] text-base">Zestora Experience Center</p>
                  <p className="text-xs text-[#7A5C3A] mt-1">Kochi, Kerala, India</p>
                  <p className="text-[11px] text-[#C65A00] font-semibold mt-2">Visits by appointment</p>
                </div>
              </div>
            </div>

            {/* Social Community */}
            <div className="bg-[#2B1B12] rounded-3xl p-8 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium mb-3">Follow Us</p>
              <h3 className="font-serif text-2xl text-white mb-3">Join Our Community</h3>
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Follow @ZestoraSpices for recipes, farm updates, and culinary tutorials.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: "Instagram", href: "https://instagram.com/zestoraspices" },
                  { icon: Twitter, label: "Twitter", href: "https://twitter.com/zestoraspices" },
                  { icon: Facebook, label: "Facebook", href: "https://facebook.com/zestoraspices" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center gap-2 py-3 bg-white/10 rounded-xl text-white/80 hover:bg-[#C65A00] hover:text-white transition-all duration-300 text-xs font-medium"
                    aria-label={`Visit Zestora on ${label}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Answers FAQ Accordion */}
            <div className="bg-[#F5E6C8] rounded-3xl p-8 border border-[#E8D5B0]">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#C65A00]" />
                <h3 className="font-serif text-xl text-[#2B1B12] font-bold">Frequently Asked</h3>
              </div>
              <p className="text-sm text-[#7A5C3A] mb-5">Quick answers to common questions:</p>
              
              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div 
                      key={i} 
                      className="bg-white rounded-xl border border-[#E8D5B0] overflow-hidden transition-shadow hover:shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium text-sm text-[#2B1B12] hover:text-[#C65A00] transition-colors cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <span className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-[#C65A00] flex-shrink-0" />
                          {faq.q}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-[#7A5C3A] transition-transform duration-200 ${isOpen ? "rotate-180 text-[#C65A00]" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-[#7A5C3A] leading-relaxed border-t border-[#E8D5B0]/50 animate-fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-[#E8D5B0] text-center">
                <Link 
                  href="/returns" 
                  className="text-xs font-semibold text-[#C65A00] hover:text-[#2B1B12] transition-colors"
                >
                  View complete return and refund terms →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

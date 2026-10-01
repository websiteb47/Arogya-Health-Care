"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Skin Care", href: "/treatments#skin-care" },
  { name: "Hair Care", href: "/treatments#hair-care" },
  { name: "Cosmetology", href: "/treatments#cosmetology" },
  { name: "Gallery", href: "/gallery" },
  { name: "Doctor", href: "/doctor" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#FAEFD9]/90 backdrop-blur-md shadow-sm" : "bg-[#FAEFD9]"
        }`}
      >
        {/* Top Info Bar */}
        {/* Top Info Bar */}
        <div className={`bg-[#593d31] text-[#fdf9f4] font-medium text-xs transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-auto py-2.5 opacity-100'}`}>
          <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sattenapalli, Palnadu Dist.</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="tel:+919959333820" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span>09959-333820</span>
              </a>
              <div className="flex items-center gap-3 border-l border-white/20 pl-4">
                <a href="#" className="hover:text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <span className="text-white/30 text-xs">|</span>
                <a href="#" className="hover:text-white"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className={`container mx-auto px-4 lg:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
          <Link href="/" className="flex items-center gap-2 z-50 py-1">
            <div className="relative h-14 w-48 lg:h-16 lg:w-56">
              <Image 
                src="/logo.png" 
                alt="Arogya Health Care Logo" 
                fill
                className="object-contain object-left" 
                priority 
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-8 text-[15px] font-extrabold text-[#2a1708] tracking-wide">
            {navLinks.filter(l => ["Home", "About", "Treatments", "Contact"].includes(l.name)).map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-[#d46a48] transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA (Appointment only) */}
          {/* Desktop CTA (Appointment only) */}
          <div className="hidden xl:flex items-center z-50">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#8a5d3f] via-[#c89972] to-[#8a5d3f] hover:brightness-110 text-white px-7 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all active:scale-95 shadow-md border border-white/20"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden z-50 p-2 text-navy hover:text-teal-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 xl:hidden flex flex-col pt-2"
            >
              <nav className="flex flex-col px-6 pb-6 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-navy/90 hover:text-teal-500 py-2 border-b border-gray-50 last:border-none"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-2" />
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919959333820"
                    className="flex items-center justify-center gap-2 bg-teal-50 text-teal-700 font-semibold rounded-full py-3 hover:bg-teal-100 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call 9959 333 820
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center bg-gradient-to-r from-[#94612e] via-[#c6894c] to-[#94612e] transition-all hover:brightness-110 text-white font-medium rounded-full py-3 shadow-md"
                  >
                    Book Appointment
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

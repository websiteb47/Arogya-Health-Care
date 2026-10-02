"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./icons/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { treatmentCategories } from "../data/treatments";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { 
    name: "Service", 
    href: "/treatments",
    isMega: true
  },
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
          <div className="container mx-auto px-2 sm:px-4 lg:px-8 flex justify-between items-center gap-4 whitespace-nowrap overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Desktop Only: Address and Time */}
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Sattenapalli, Palnadu Dist.</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>10:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Mobile: Full Width Phone & Socials. Desktop: Right aligned Phone & Socials */}
            <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
              <a href="tel:+919959333820" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                <span>09959-333820</span>
              </a>
              <div className="flex items-center gap-4 sm:border-l border-white/20 sm:pl-4">
                <a href="https://www.facebook.com/arogyahealthcaresattenapalli" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon className="w-4 h-4" /></a>
                <a href="https://www.instagram.com/aarogyahealthcare.sattenapalli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon className="w-4 h-4" /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors"><TwitterIcon className="w-4 h-4" /></a>
                <a href="https://www.youtube.com/@arogyahealthcare-u3c" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition-colors"><YoutubeIcon className="w-4 h-4" /></a>
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
          <nav className="hidden xl:flex flex-1 justify-center items-center gap-6 text-[14px] lg:text-[15px] font-extrabold text-[#2a1708] tracking-wide">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link href={link.href} className="flex items-center gap-1 hover:text-[#d46a48] transition-colors whitespace-nowrap py-4">
                  {link.name}
                  {link.isMega && <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>
                {link.isMega && (
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[700px] bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl shadow-[#4a4240]/10 border border-[#e3d5c5]/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                    <div className="p-6 grid grid-cols-3 gap-6">
                      {treatmentCategories.map((category) => (
                        <div key={category.title}>
                          <Link href={`/treatments#${category.title.toLowerCase().replace(' ', '-')}`} className="block font-bold text-[#d46a48] mb-3 pb-2 border-b border-[#e3d5c5]/40 hover:text-[#4a4240] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                            {category.title}
                          </Link>
                          <div className="flex flex-col gap-2.5">
                            {category.items.map((item) => (
                              <Link key={item.slug} href={`/treatments/${item.slug}`} className="text-[13px] text-[#4a4240] hover:text-[#d46a48] transition-colors font-semibold whitespace-nowrap overflow-hidden text-ellipsis block">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 xl:hidden flex flex-col pt-2 max-h-[85vh] overflow-y-auto"
            >
              <nav className="flex flex-col px-6 pb-6 gap-3">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-gray-50 last:border-none">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-bold text-navy/90 hover:text-teal-500 py-2 w-full flex justify-between items-center"
                    >
                      {link.name}
                      {link.isMega && <ChevronDown className="w-5 h-5 opacity-50" />}
                    </Link>
                    {link.isMega && (
                      <div className="flex flex-col pl-4 border-l-2 border-[#e3d5c5]/40 ml-2 mb-3 mt-2 gap-5">
                        {treatmentCategories.map((cat) => (
                          <div key={cat.title}>
                            <Link href={`/treatments#${cat.title.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="font-bold text-[#d46a48] mb-3 block">
                              {cat.title}
                            </Link>
                            <div className="flex flex-col gap-3 pl-3 border-l border-gray-200">
                               {cat.items.map(item => (
                                 <Link key={item.slug} href={`/treatments/${item.slug}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-navy/70 hover:text-[#d46a48]">
                                   {item.name}
                                 </Link>
                               ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
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

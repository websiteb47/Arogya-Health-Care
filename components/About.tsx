"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-[#fcf5eb] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#e3d5c5]/20 relative shadow-xl z-20">
              <Image
                src="/clinic image.png"
                alt="Arogya Health Care Clinic"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            {/* Dynamic Backlight Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fbdfde] via-[#f9e9e6] to-[#e3d5c5] rounded-3xl blur-[40px] opacity-0 group-hover:opacity-70 transition-opacity duration-700 z-10" />
            {/* Static accent glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#fbdfde]/50 rounded-full blur-3xl z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">About Arogya Health Care</h2>
            <p className="text-lg text-navy/70 leading-relaxed mb-6">
              Arogya Health Care is a skin, hair and cosmetic care centre focused on providing professional dermatology and cosmetology services.
            </p>
            <p className="text-lg text-navy/70 leading-relaxed mb-8">
              Our treatment offerings cover skin conditions, hair concerns, cosmetic procedures and selected laser-based treatments to help you achieve your aesthetic and dermatological goals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {['Skin Care', 'Hair Care', 'Laser Treatments', 'Cosmetology'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c89972] flex-shrink-0" />
                  <span className="font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#8a5d3f] font-bold hover:text-[#4a4240] transition group"
            >
              Know More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

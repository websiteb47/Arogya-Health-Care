"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
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
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
              {/* Image Placeholder - Clinic Image */}
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-teal-100 rounded-full blur-2xl z-0" />
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
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="font-semibold text-navy">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition group"
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

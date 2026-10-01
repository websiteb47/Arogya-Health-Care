"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  {
    title: "Personalized Care",
    desc: "Treatment recommendations based on individual skin and hair concerns."
  },
  {
    title: "Comprehensive Services",
    desc: "Skin, hair, laser and cosmetic treatments in one centre."
  },
  {
    title: "Professional Consultation",
    desc: "Treatment begins with thorough assessment and consultation."
  },
  {
    title: "Modern Treatment Options",
    desc: "Access to cosmetic and dermatological treatment options represented in the clinic's service materials."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-[#ffedf8]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-4">Why Choose Arogya Health Care?</h2>
          <p className="text-lg text-navy/60">Dedicated to providing professional dermatological and cosmetic solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#fcf5eb]/80 rounded-2xl p-8 border border-[#e3d5c5]/40 hover:border-teal-200 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
              <p className="text-navy/70 text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

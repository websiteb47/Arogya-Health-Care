"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Scissors, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Skin Care",
    description: "Advanced solutions for common and cosmetic skin concerns.",
    icon: Sparkles,
  },
  {
    title: "Hair Care",
    description: "Treatment options for hair fall, dandruff and hair-related concerns.",
    icon: Scissors,
  },
  {
    title: "Laser & Cosmetic Care",
    description: "Modern cosmetic and laser-based procedures tailored to your needs.",
    icon: Zap,
  },
  {
    title: "Personalized Treatment",
    description: "Treatment plans customized based on individual assessment.",
    icon: ShieldCheck,
  }
];

export default function ServiceCards() {
  return (
    <section className="py-20 bg-[#ffedf8] relative z-20 -mt-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#fcf5eb] rounded-2xl p-8 border border-[#e3d5c5]/40 shadow-xl shadow-[#4a4240]/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-500 mb-6 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-navy/60 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

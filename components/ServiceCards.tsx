"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Skin Care",
    description: "Advanced solutions for common and cosmetic skin concerns.",
    image: "/treatments/skin-after.png",
  },
  {
    title: "Hair Care",
    description: "Treatment options for hair fall, dandruff and hair-related concerns.",
    image: "/treatments/hair-after.png",
  },
  {
    title: "Laser & Cosmetic Care",
    description: "Modern cosmetic and laser-based procedures tailored to your needs.",
    image: "/treatments/cosmo-after.png",
  },
  {
    title: "Personalized Treatment",
    description: "Treatment plans customized based on individual assessment.",
    image: "/treatments/medi-facial.png",
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
              className="relative rounded-2xl overflow-hidden shadow-xl shadow-[#4a4240]/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-80 group cursor-pointer border border-[#e3d5c5]/20"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black via-black/50 transition-all duration-500" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#f8d8c0] transition-colors duration-300">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

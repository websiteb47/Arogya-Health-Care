"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Leaf, ShieldPlus } from 'lucide-react';

const reasons = [
  {
    title: "Personalized Care",
    desc: "Treatment recommendations based on individual skin and hair concerns.",
    icon: Sparkles,
    blobColor: "bg-[#e5a8a1]/35",
    borderColor: "border-[#156e75]/60",
    iconColor: "text-[#156e75]",
    offset: "lg:-translate-y-8"
  },
  {
    title: "Professional Consultation",
    desc: "Treatment begins with thorough assessment and consultation.",
    icon: HeartHandshake,
    blobColor: "bg-[#b78486]/35",
    borderColor: "border-[#7b323e]/60",
    iconColor: "text-[#7b323e]",
    offset: "lg:translate-y-8"
  },
  {
    title: "Comprehensive Services",
    desc: "Skin, hair, laser and cosmetic treatments in one centre.",
    icon: Leaf,
    blobColor: "bg-[#8cb78d]/40",
    borderColor: "border-[#4a724d]/60",
    iconColor: "text-[#4a724d]",
    offset: "lg:-translate-y-8"
  },
  {
    title: "Modern Treatment Options",
    desc: "Access to cosmetic and dermatological treatment options throughout.",
    icon: ShieldPlus,
    blobColor: "bg-[#f5c6a5]/40",
    borderColor: "border-[#b84c26]/60",
    iconColor: "text-[#b84c26]",
    offset: "lg:translate-y-8"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-36 bg-[#edf1f2] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#203138] mb-4">Why Choose Arogya?</h2>
          <p className="text-lg text-[#203138]/60 font-medium">Dedicated to providing professional dermatological and cosmetic solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-y-0">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`bg-white/80 backdrop-blur-xl rounded-xl p-8 border-2 ${reason.borderColor} shadow-2xl shadow-indigo-900/5 relative overflow-hidden group ${reason.offset} h-full md:min-h-[220px]`}
            >
              {/* Blur Blob */}
              <div className={`absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 rounded-full blur-[40px] translate-x-1/4 -translate-y-1/4 ${reason.blobColor} -z-10 group-hover:scale-150 transition-transform duration-700 ease-out`} />
              
              <div className="mb-5 relative z-10">
                 <reason.icon className={`w-8 h-8 ${reason.iconColor} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className={`text-xl font-bold ${reason.iconColor} mb-3 relative z-10`}>{reason.title}</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed relative z-10 font-medium">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


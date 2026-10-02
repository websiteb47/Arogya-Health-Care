"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Reddy",
    text: "I had severe acne issues for years, but the treatments here completely transformed my skin. The doctors are incredibly patient and professional.",
    rating: 5,
    treatment: "Acne Treatment"
  },
  {
    name: "Ravi Kumar",
    text: "The hair fall treatment worked wonders for me. I started seeing results within a few months. Highly recommend their personalized care.",
    rating: 5,
    treatment: "Hair Care"
  },
  {
    name: "Sowmya Sharma",
    text: "Recently visited for a medi-facial before my wedding. My skin was glowing! The ambiance of the clinic is very relaxing and premium.",
    rating: 5,
    treatment: "Cosmetology"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-[#FFF2EE] overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fde2e4] rounded-full blur-[80px] opacity-40 -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e3d5c5] rounded-full blur-[80px] opacity-20 -z-0" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#203138] mb-4">Patient Stories</h2>
          <p className="text-lg text-[#203138]/60 font-medium">Real stories from people who experienced our premium care</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-indigo-900/5 relative group flex flex-col h-full hover:shadow-2xl hover:shadow-[#c89972]/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#e3d5c5] mb-6 transition-colors duration-300 group-hover:text-[#c45330]/20">
                <Quote className="w-10 h-10 rotate-180" />
              </div>
              
              <p className="text-[#203138]/80 text-[15px] leading-relaxed mb-8 flex-1 italic font-medium">
                "{testi.text}"
              </p>

              <div className="pt-6 border-t border-[#e3d5c5]/30">
                <div className="flex gap-1 mb-3">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                  ))}
                </div>
                <h4 className="font-bold text-[#203138] text-lg mb-1">{testi.name}</h4>
                <p className="text-[13px] text-[#b84c26] font-semibold uppercase tracking-wider">{testi.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

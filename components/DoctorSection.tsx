"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DoctorSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#faf7f2] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Image with Intense Backlight Glow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pr-4 pb-4 lg:pr-8"
          >
            {/* Bright Cyan/Teal Backlight Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[100%] h-[100%] bg-cyan-400 blur-[80px] opacity-[0.35] rounded-full z-0 pointer-events-none" />
            
            {/* Image Container with Thick White Border */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl bg-gray-100 z-10">
              <Image
                src="/dr-rajeswari.png"
                alt="Dr. K. Raja Rajeshwari"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side: Text Content Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start z-10"
          >
            <div className="inline-block bg-[#eaf4f4] text-[#044c53] px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-6">
              OUR EXPERT & VISIONARY
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#044c53] mb-5 leading-tight tracking-tight">
              Dr. K. Raja <span className="text-[#044c53]">Rajeshwari</span>
            </h2>
            
            {/* Highlight Divider Line */}
            <div className="w-16 h-1.5 bg-cyan-400 mb-8 rounded"></div>
            
            <p className="text-[17px] text-gray-700 mb-6 leading-relaxed">
              Under the dynamic leadership and unparalleled medical vision of our founder, <strong>Dr. K. Raja Rajeshwari (MBBS, MD, DVL, FIADVL)</strong>, Arogya Health Care was established to redefine aesthetic standards. What began as a profound desire to provide accessible, world-class skin and hair treatments quickly transformed into the premier medical institution in Palnadu.
            </p>
            
            <p className="text-[17px] text-gray-700 leading-relaxed mb-6">
              Her core philosophy is simple: <span className="italic">"Aesthetic care should not be a luxury; it must be a service driven by clinical precision, deep compassion, and absolute medical excellence."</span>
            </p>

            <p className="text-[17px] text-gray-700 leading-relaxed mb-8">
              With this guiding principle, Dr. Rajeshwari aggressively invested in cutting-edge, FDA-approved medical technology and state-of-the-art infrastructure. Supported by highly skilled clinical protocols, she ensures that every single patient receives the safest, most effective dermatological care possible.
            </p>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

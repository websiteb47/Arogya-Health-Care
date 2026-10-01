"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-[#FFF2EE]">
      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f9e9e6]/60 rounded-full blur-3xl -z-0 opacity-70" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h1 className="text-[32px] md:text-6xl lg:text-7xl xl:text-[85px] font-bold text-[#3d2f2b] leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 tracking-tight">
              <span className="flex items-center gap-2 md:gap-4 flex-wrap">
                ADVANCED
                <span className="font-serif italic font-medium text-[#5c4a45]">CARE</span>
              </span>
              <span className="flex items-center gap-2 md:gap-4 flex-wrap mt-2">
                FOR SKIN
                <span className="font-serif italic font-medium text-[#5c4a45]">&</span>
                HAIR
              </span>
            </h1>

            <p className="text-[15px] md:text-xl text-gray-700 font-medium mb-8 md:mb-10 max-w-xl leading-relaxed">
              We offer advanced skin and hair treatments to help you look radiant and feel empowered.
            </p>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#8a5d3f] via-[#c89972] to-[#8a5d3f] hover:brightness-110 text-white px-10 py-4 lg:py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl border border-white/20"
            >
              Book Now
            </Link>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* The soft pinkish background arch/circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[450px] lg:w-[450px] lg:h-[550px] bg-[#fbdfde] rounded-[150px] -z-10" />

            <div className="relative w-[320px] h-[450px] lg:w-[420px] lg:h-[580px] z-10 overflow-hidden rounded-t-[200px] rounded-b-[40px] shadow-2xl">
              {/* Re-using our skin care image for the main model */}
              <Image
                src="/skinny lady.png"
                alt="Arogya Beautiful Skin"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating Badge (Spinning) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute -left-10 lg:-left-20 top-1/4 w-32 h-32 md:w-36 md:h-36 z-20 bg-[#fc6c98] rounded-full flex items-center justify-center shadow-lg text-white font-bold text-center border-2 border-white/30"
              style={{
                clipPath: "polygon(50% 0%, 61% 15%, 80% 12%, 84% 31%, 100% 39%, 93% 57%, 100% 74%, 81% 83%, 72% 100%, 53% 92%, 35% 100%, 25% 82%, 6% 75%, 11% 57%, 0% 41%, 17% 29%, 20% 10%, 39% 14%)"
              }}
            >
              <div className="flex flex-col items-center rotate-12">
                <span className="text-xs tracking-widest uppercase">Premium</span>
                <span className="text-xl font-serif">Care</span>
                <span className="text-xs tracking-widest uppercase">Since 2024</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

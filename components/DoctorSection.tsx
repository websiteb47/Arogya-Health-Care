"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function DoctorSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#fcf5eb] container mx-auto px-4 lg:px-8">
      <div className="bg-navy rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2">

          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6">
                MEET OUR EXPERT
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Dr. K. Raja Rajeshwari</h2>
              <div className="text-xl text-teal-400 font-medium mb-6">MBBS, MD, DVL, FIADVL</div>
              <p className="text-lg text-white/80 font-medium mb-8">
                Dermatology / Skin & Hair Care
              </p>

              <Link
                href="/contact"
                className="inline-flex bg-teal-500 hover:bg-teal-400 text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-lg self-start"
              >
                Book Consultation
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-teal-900/10 min-h-[400px] lg:min-h-[500px]"
          >
            <Image
              src="/dr-rajeswari.png"
              alt="Dr. K. Raja Rajeshwari"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

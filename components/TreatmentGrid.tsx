"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { treatmentCategories } from '@/data/treatments';

export default function TreatmentGrid({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className="py-20 lg:py-32 bg-[#ffedf8]" id="treatments">
      <div className="container mx-auto px-4 lg:px-8">
        {!hideHeading && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-4">Our Treatments</h2>
            <p className="text-lg text-navy/60">Comprehensive Skin, Hair & Cosmetic Care</p>
          </div>
        )}

        {treatmentCategories.map((cat, catIdx) => (
          <div key={cat.title} className="mb-20 last:mb-0" id={cat.title.toLowerCase().replace(' ', '-')}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-[#203138]">{cat.title}</h3>
              <div className="h-px bg-[#e3d5c5] flex-1"></div>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.items.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                  className="block h-full"
                >
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#e3d5c5]/30 flex flex-col h-full hover:-translate-y-1"
                  >
                    <div className="w-full h-56 relative overflow-hidden bg-gray-50 shrink-0">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h4 className="text-lg font-bold text-[#203138] mb-2 group-hover:text-[#c45330] transition-colors">{item.name}</h4>
                      <p className="text-[15px] text-gray-600 line-clamp-2 leading-relaxed">{item.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

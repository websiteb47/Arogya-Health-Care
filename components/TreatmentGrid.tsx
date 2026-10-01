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
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-navy">{cat.title}</h3>
              <div className="h-px bg-[#e3d5c5] flex-1"></div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.items.map((item, idx) => (
                <Link
                  href={`/treatments/${item.slug}`}
                  key={item.name}
                  className="block group bg-[#fcf5eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e3d5c5]/50 flex flex-col"
                >
                  <div className="w-full h-48 relative overflow-hidden bg-gray-100 shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-navy mb-2 group-hover:text-teal-600 transition-colors">{item.name}</h4>
                    <p className="text-sm text-navy/60 line-clamp-2">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

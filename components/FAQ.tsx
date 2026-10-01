"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    v: "What treatments does Arogya Health Care provide?",
    a: "Arogya Health Care provides professional skin, hair, laser and cosmetic treatment services tailored to your individual needs."
  },
  {
    q: "Do I need a consultation before treatment?",
    a: "Yes, a professional consultation with our dermatologist is recommended before beginning any treatment to assess your specific condition and suitability."
  },
  {
    q: "Do treatments work for everyone?",
    a: "Results vary depending on the individual's condition, skin type, hair characteristics and treatment plan. Everyone's response to treatment is unique."
  },
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment by calling 9959 333 820, using our WhatsApp service, or filling out the appointment form on this website."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const q = faq.q || faq.v;
            return (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-navy text-lg pr-8">{q}</span>
                  <span className="flex-shrink-0 text-teal-500">
                    {openIdx === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-navy/70 leading-relaxed border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

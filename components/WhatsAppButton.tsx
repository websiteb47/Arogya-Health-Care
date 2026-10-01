"use client";
import React from 'react';

import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex items-center justify-center w-14 h-14 group cursor-pointer">
      <a
        href="https://wa.me/919959333820?text=Hello%20Arogya%20Health%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20skin%20and%20hair%20treatments."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-full h-full relative"
      >
        {/* Outer Glow / Halo Effect */}
        <span className="absolute -inset-3 bg-[#25D366] opacity-30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] group-hover:opacity-40 transition-all duration-300"></span>
        <span className="absolute -inset-3 bg-[#25D366] opacity-30 rounded-full group-hover:scale-105 transition-all duration-300"></span>
        
        {/* Inner Solid Button */}
        <span className="absolute inset-0 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 z-10">
          <WhatsAppIcon className="w-8 h-8" />
        </span>
      </a>
    </div>
  );
}

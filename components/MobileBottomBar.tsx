"use client";
import React from 'react';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomBar() {
  const pathname = usePathname();

  // Optionally hide on some pages, e.g., if bottom bar overlaps footer too much, or keep it sticky everywhere on mobile.
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 px-2 py-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="flex justify-around items-center">
        <a 
          href="tel:+919959333820"
          className="flex flex-col items-center justify-center text-teal-600 gap-1"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        
        <a 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://wa.me/919959333820?text=Hello%20Arogya%20Health%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20skin%20and%20hair%20treatments."
          className="flex flex-col items-center justify-center text-[#25D366] gap-1"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        
        <Link 
          href="/contact"
          className="flex flex-col items-center justify-center text-navy gap-1"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-medium">Appointment</span>
        </Link>
      </div>
    </div>
  );
}

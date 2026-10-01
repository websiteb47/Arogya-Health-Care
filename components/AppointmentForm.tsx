"use client";
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export default function AppointmentForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, send form data to API.
    setStatus('Request submitted. We will contact you shortly.');
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="py-20 lg:py-32 bg-[#fcf5eb]" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-navy mb-6">Book Your Consultation</h2>
            <p className="text-lg text-navy/70 leading-relaxed mb-8">
              Take the first step towards healthier skin and hair. Fill out the form, and our team will get back to you to confirm your appointment.
            </p>
            
            <div className="flex flex-col gap-6">
              <a 
                href="tel:+919959333820"
                className="flex items-center gap-4 p-6 bg-teal-50 rounded-2xl border border-teal-100 hover:border-teal-300 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Phone className="w-6 h-6 text-teal-500 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy/60">Call Us Directly</p>
                  <p className="text-xl font-bold text-navy">9959 333 820</p>
                </div>
              </a>
              
              <a 
                href="https://wa.me/919959333820?text=Hello%20Arogya%20Health%20Care,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-colors group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy/60">WhatsApp Us</p>
                  <p className="text-xl font-bold text-navy">Click to Chat</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-[#ffedf8] p-8 lg:p-10 rounded-3xl shadow-xl shadow-navy/5 border border-[#e3d5c5]/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-navy text-left block">Name</label>
                  <input required id="name" type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-navy text-left block">Phone Number</label>
                  <input required id="phone" type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="9959 333 820" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-navy text-left block">Email (Optional)</label>
                  <input id="email" type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-semibold text-navy text-left block">Preferred Date</label>
                  <input id="date" type="date" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="treatment" className="text-sm font-semibold text-navy text-left block">Preferred Treatment</label>
                <select id="treatment" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                  <option value="">Select Treatment (Optional)</option>
                  <option value="skin">Skin Care</option>
                  <option value="hair">Hair Care</option>
                  <option value="laser">Laser Treatment</option>
                  <option value="cosmetology">Cosmetology</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-navy text-left block">Message</label>
                <textarea id="message" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all" placeholder="Briefly describe your concern..."></textarea>
              </div>

              <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-[0.98]">
                Request Appointment
              </button>
              
              {status && (
                <div className="p-4 bg-teal-100 text-teal-800 rounded-xl text-center font-medium">
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

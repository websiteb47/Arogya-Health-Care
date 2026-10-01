import React from 'react';
import AppointmentForm from '@/components/AppointmentForm';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';

export const metadata = {
  title: 'Contact & Book Appointment | Arogya Health Care',
  description: 'Book your consultation at Arogya Health Care. Call 9959 333 820 or reach out on WhatsApp.',
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-[#ffedf8]">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Contact Us</h1>
          <p className="text-lg text-navy/70">
            We are here to help you with your dermatological and cosmetic needs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#ffedf8]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            <div className="bg-[#fcf5eb] rounded-2xl p-8 hover:shadow-lg shadow-[#4a4240]/5 transition-shadow border border-[#e3d5c5]/40 flex flex-col items-center text-center text-navy group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#e3d5c5]/40 group-hover:border-teal-300 transition-colors">
                <Phone className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-navy/70 mb-4">Talk to our front desk for bookings & inquiries.</p>
              <a href="tel:+919959333820" className="text-teal-600 font-bold hover:text-teal-700 mt-auto">9959 333 820</a>
            </div>

            <div className="bg-[#fcf5eb] rounded-2xl p-8 hover:shadow-lg shadow-[#4a4240]/5 transition-shadow border border-[#e3d5c5]/40 flex flex-col items-center text-center text-navy group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#e3d5c5]/40 group-hover:border-[#25D366]/30 transition-colors">
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-navy/70 mb-4">Send us a message for quick responses.</p>
              <a 
                href="https://wa.me/919959333820?text=Hello%20Arogya%20Health%20Care" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-bold hover:text-[#1cad52] mt-auto"
              >
                Chat with Us
              </a>
            </div>
            
            <div className="bg-[#fcf5eb] rounded-2xl p-8 hover:shadow-lg shadow-[#4a4240]/5 transition-shadow border border-[#e3d5c5]/40 flex flex-col items-center text-center text-navy group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#e3d5c5]/40 group-hover:border-teal-300 transition-colors">
                <MapPin className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Visit Clinic</h3>
              <p className="text-navy/70 mb-4">Arogya Health Care</p>
              <p className="text-sm font-semibold text-navy/60 mt-auto">Sattenapalli, Palnadu Dist.</p>
            </div>

            <div className="bg-[#fcf5eb] rounded-2xl p-8 hover:shadow-lg shadow-[#4a4240]/5 transition-shadow border border-[#e3d5c5]/40 flex flex-col items-center text-center text-navy group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#e3d5c5]/40 group-hover:border-teal-300 transition-colors">
                <Clock className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-navy/70 mb-4">Available during regular consultation hours</p>
              <p className="text-sm font-semibold text-navy/60 mt-auto">By Appointment</p>
            </div>

          </div>
        </div>
      </section>

      <AppointmentForm />

      <section className="py-16 bg-[#ffedf8] border-t border-[#e3d5c5]/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Us on the Map</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.582230359051!2d80.1492198!3d16.3952305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3581be724b5b45%3A0xea4978ce9d183cc1!2sAROGYA%20HEALTH%20CARE%20-%20Best%20Dermatologist%20In%20sattenapalli!5e0!3m2!1sen!2sin!4v1790835070483!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

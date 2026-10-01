import React from 'react';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata = {
  title: 'Gallery | Arogya Health Care',
  description: 'View photos of our clinic, treatments, and facilities.',
};

export default function GalleryPage() {
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    alt: `Gallery Image ${i + 1}`
  }));

  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Gallery</h1>
            <p className="text-lg text-navy/70">
              Take a look inside Arogya Health Care and our modern facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div 
                key={img.id} 
                className="aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow relative group"
              >
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500 bg-gray-300">
                  {img.alt}
                </div>
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <AppointmentForm />
    </>
  );
}

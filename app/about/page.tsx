import React from 'react';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata = {
  title: 'About | Arogya Health Care',
  description: 'Learn more about Arogya Health Care, our dermatology and cosmetic services, and our expert team.',
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-teal-50/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">About Us</h1>
          <p className="text-lg text-navy/70">
            Dedicated to bringing you the highest standard of skin, hair, laser, and cosmetology treatments.
          </p>
        </div>
      </section>
      
      <About />
      <WhyChooseUs />
      <AppointmentForm />
    </>
  );
}

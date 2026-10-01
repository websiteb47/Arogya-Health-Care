import React from 'react';
import DoctorSection from '@/components/DoctorSection';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata = {
  title: 'Our Doctor | Arogya Health Care',
  description: 'Meet Dr. K. Raja Rajeshwari - MBBS, MD, DVL, FIADVL.',
};

export default function DoctorPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Doctor</h1>
          <p className="text-lg text-navy/70">
            Expert care backed by deep dermatological expertise.
          </p>
        </div>
      </section>
      
      <DoctorSection />
      
      <section className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h3 className="text-2xl font-bold text-navy mb-4">A Note on Patient Care</h3>
          <p className="text-navy/70 leading-relaxed">
            At Arogya Health Care, we believe that understanding your unique skin and hair needs is the first step toward effective treatment. Our goal is to provide evidence-based care tailored to your individual health journey.
          </p>
        </div>
      </section>

      <AppointmentForm />
    </>
  );
}

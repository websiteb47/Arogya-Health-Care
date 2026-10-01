import React from 'react';
import TreatmentGrid from '@/components/TreatmentGrid';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata = {
  title: 'Treatments | Arogya Health Care',
  description: 'Explore comprehensive skin, hair, laser, and cosmetology treatments provided by Arogya Health Care.',
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="pt-32 pb-10 bg-teal-50/50">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Treatments</h1>
          <p className="text-lg text-navy/70">
            Professional solutions tailored to your unique skin and hair care needs.
          </p>
        </div>
      </section>
      
      <TreatmentGrid hideHeading={true} />
      <AppointmentForm />
    </>
  );
}

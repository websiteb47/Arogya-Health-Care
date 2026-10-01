import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import AppointmentForm from '@/components/AppointmentForm';
import { treatmentCategories } from '@/data/treatments';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

// Map through the hardcoded treatments in TreatmentGrid
function getTreatment(slug: string) {
  for (const category of treatmentCategories) {
    const item = category.items.find((i: { slug: string; name: string; desc: string; image?: string }) => i.slug === slug);
    if (item) return { ...item, category: category.title };
  }
  return null;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const treatment = getTreatment(params.slug);
  
  if (!treatment) {
    return { title: 'Treatment Not Found' };
  }

  return {
    title: `${treatment.name} | Arogya Health Care`,
    description: treatment.desc,
  };
}

// Generate static params for all treatments
export function generateStaticParams() {
  const paths = [];
  for (const category of treatmentCategories) {
    for (const item of category.items) {
      paths.push({ slug: item.slug });
    }
  }
  return paths;
}

export default async function TreatmentDetailPage(props: Props) {
  const params = await props.params;
  const treatment = getTreatment(params.slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-navy/60 hover:text-teal-600 transition-colors font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Treatments
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
                {treatment.category}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">{treatment.name}</h1>
              <p className="text-xl text-navy/70 leading-relaxed mb-8">
                {treatment.desc}
              </p>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-xl font-bold text-navy">What to Expect</h3>
                <ul className="space-y-3">
                  {['Professional consultation and evaluation', 'Personalized treatment recommendations', 'Guided care according to your condition'].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-navy/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 text-yellow-800 rounded-xl border border-yellow-200 text-sm">
                <span className="font-bold">Disclaimer: </span>
                Treatment suitability varies by skin type and condition. Consultation with a qualified dermatologist is recommended. Individual results may vary.
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl aspect-square overflow-hidden relative shadow-xl border-8 border-white">
              <Image
                src={treatment.image || '/treatments/acne.png'}
                alt={treatment.name}
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>
      
      <AppointmentForm />
    </>
  );
}

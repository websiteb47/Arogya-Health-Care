import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Star, Clock, ShieldCheck, Sparkles } from 'lucide-react';
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

  const reviews = [
    { name: "Lakshmi S.", rating: 5, date: "2 weeks ago", text: `The ${treatment.name} treatment completely transformed my confidence. The doctors at Arogya were incredibly brilliant, understanding, and explained the entire process.` },
    { name: "Karthik R.", rating: 5, date: "1 month ago", text: `I struggled heavily before coming to Arogya Health Care. After undergoing a personalized ${treatment.name} plan, the glowing results really speak for themselves!` },
    { name: "Priya M.", rating: 5, date: "3 months ago", text: `Highly professional clinic with South Indian expertise. The technology is advanced and my ${treatment.name} results were visible almost immediately.` }
  ];

  const getAfterImage = (category: string) => {
    if (category === "Hair Care") return "/treatments/hair-after.png";
    if (category === "Cosmetology") return "/treatments/cosmo-after.png";
    return "/treatments/skin-after.png"; // Default for Skin Care
  };

  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#FFF2EE] to-white relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fbdfde]/40 rounded-full blur-3xl -z-0" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link href="/treatments" className="inline-flex items-center gap-2 text-navy/60 hover:text-[#d46a48] transition-colors font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-block bg-[#fcf5eb] border border-[#c89972]/30 text-[#8a5d3f] px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-6 uppercase shadow-sm">
                {treatment.category} Specialist
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3d2f2b] mb-6 leading-[1.15]">{treatment.name}</h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                {treatment.desc} At Arogya Health Care, we utilize advanced medical technology perfectly tailored for South Indian skin and hair types to deliver stunning, sustainable results.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                  <Clock className="w-5 h-5 text-[#c89972]" />
                  <span className="text-sm font-bold text-gray-700">Quick Sessions</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-gray-100">
                  <ShieldCheck className="w-5 h-5 text-[#c89972]" />
                  <span className="text-sm font-bold text-gray-700">FDA Approved</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#fbdfde] to-[#e3d5c5] rounded-3xl blur-2xl opacity-50" />
              <div className="bg-white rounded-3xl aspect-[4/3] overflow-hidden relative shadow-2xl border-4 border-white z-10">
                <Image
                  src={treatment.image || '/treatments/acne.png'}
                  alt={`Arogya ${treatment.name} Procedure`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#3d2f2b] mb-12">About The Procedure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#fcf5eb] p-8 rounded-3xl border border-[#e3d5c5]/50">
                <h3 className="text-xl font-bold text-[#8a5d3f] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Benefits
                </h3>
                <ul className="space-y-4">
                  {['Targeted aesthetic improvements', 'Safe for diverse skin & melanin profiles', 'Minimal downtime required', 'Long-lasting natural results'].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#c89972] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
                <h3 className="text-xl font-bold text-[#8a5d3f] mb-4">What to Expect</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our specialists begin with an in-depth consultation to map your specific aesthetic goals. Because we specialize in South Indian dermatological characteristics, our settings and treatment plans minimize sensitivity while maximizing effectiveness.
                </p>
                <div className="p-4 bg-[#FFF2EE] text-[#8a5d3f] rounded-xl text-sm font-medium border border-[#fbdfde]">
                  <span className="font-bold block mb-1">Medical Disclaimer: </span>
                  Individual results may vary based on physiological factors. A private consultation is necessary prior to undergoing {treatment.name}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Spectacular Real Results Section */}
      <section className="py-20 bg-[#3d2f2b] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl text-white lg:text-5xl font-bold mb-6">Real Results</h2>
            <p className="text-[#e3d5c5] text-lg">
              Authentic before and after transformations of our South Indian patients experiencing {treatment.name}.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white p-4 rounded-3xl shadow-2xl relative">
            <div className="grid grid-cols-2 gap-2 relative">
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 tracking-widest">BEFORE</div>
                <Image src={treatment.image || "/treatments/acne.png"} alt={`Before ${treatment.name} Treatment`} fill className="object-cover" />
              </div>
              <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
                <div className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold z-10 tracking-widest shadow-lg">AFTER</div>
                <Image src={getAfterImage(treatment.category)} alt={`After ${treatment.name} Treatment`} fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="py-24 bg-[#fcf5eb]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#3d2f2b] mb-16">Patient Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-xl shadow-[#4a4240]/5 relative border border-white hover:border-[#fbdfde] transition-colors">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#c89972] text-[#c89972]" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 italic">"{review.text}"</p>
                <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between">
                  <span className="font-bold text-[#3d2f2b]">{review.name}</span>
                  <span className="text-xs text-gray-400 font-medium">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentForm />
    </>
  );
}

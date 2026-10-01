import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import About from "@/components/About";
import TreatmentGrid from "@/components/TreatmentGrid";
import DoctorSection from "@/components/DoctorSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AppointmentForm from "@/components/AppointmentForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <About />
      <TreatmentGrid />
      <DoctorSection />
      <WhyChooseUs />
      <AppointmentForm />
    </>
  );
}

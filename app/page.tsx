import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import About from "@/components/About";

import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <About />

      <WhyChooseUs />
      <Testimonials />
      <AppointmentForm />
    </>
  );
}

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyAkka from "@/components/WhyAkka";
import Process from "@/components/Process";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyAkka />
        <Process />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}

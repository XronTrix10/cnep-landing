import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Benefits from "@/views/sections/benefits";
import Feature from "@/views/sections/feature";
import HeroSection from "@/views/sections/hero";
import React, { type JSX } from "react";

/**
 * It is the landing page of the application
 * @returns {JSX.Element} The landing page of the application
 */
const LandingPage = (): JSX.Element => {
  return (
    <main className="min-h-[300vh] text-balance">
      <Navbar />

      <HeroSection />
      <Feature />
      <Benefits />

      <Footer />
    </main>
  );
};

export default LandingPage;

import HeroSection from "@/Components/HeroSection";
import FAQSection from "@/Components/FAQSection";

import FocusArea from "@/Components/FocusArea";
import StatsSection from "@/Components/StatsSection";
import NewsSection from "@/Components/NewsSection";
import InquiryCTA from "@/Components/InquiryCTA";
import FoundersSectionMain from "@/Components/FoundersSectionMain";
import AboutSection from "@/Components/AboutSection";
import WhatWeDoSection from "@/Components/WhatWeDoSection";
import OurWorkSection from "@/Components/OurWorkSection";


import ImpactSection from "@/Components/ImpactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Anuja Sushant Patil Global Foundation",
  description: "Anuja Sushant Patil Global Foundation (ASPGF) is committed to empowering communities through education, health, and sustainable social impact initiatives in Pune.",
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FocusArea />

      <WhatWeDoSection />
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12">
          <StatsSection />
        </div>
      </section>
      <OurWorkSection />

      <FoundersSectionMain />
      <NewsSection />
      <InquiryCTA />
      <ImpactSection />
      <FAQSection />


    </>
  );
}

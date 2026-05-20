import HeroSection from "@/sections/Home/HeroSection";
import FAQSection from "@/sections/Home/FAQSection";

import FocusArea from "@/sections/Home/FocusArea";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/sections/Home/NewsSection";
import InquiryCTA from "@/sections/Home/InquiryCTA";
import FoundersSectionMain from "@/sections/Home/FoundersSectionMain";
import AboutSection from "@/sections/Home/AboutSection";
import WhatWeDoSection from "@/sections/Home/WhatWeDoSection";
import OurWorkSection from "@/sections/Home/OurWorkSection";


import ImpactSection from "@/sections/Home/ImpactSection";
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
      {/* <InquiryCTA /> */}
      <ImpactSection />
      <FAQSection />


    </>
  );
}

import HeroSection from "@/Sections/Home/HeroSection";
import FAQSection from "@/Sections/Home/FAQSection";

import FocusArea from "@/Sections/Home/FocusArea";
import StatsSection from "@/Components/StatsSection";
import NewsSection from "@/Sections/Home/NewsSection";
import InquiryCTA from "@/Sections/Home/InquiryCTA";
import FoundersSectionMain from "@/Sections/Home/FoundersSectionMain";
import AboutSection from "@/Sections/Home/AboutSection";
import WhatWeDoSection from "@/Sections/Home/WhatWeDoSection";
import OurWorkSection from "@/Sections/Home/OurWorkSection";


import ImpactSection from "@/Sections/Home/ImpactSection";
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

"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Caveat, Nunito, Cabin } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState("mission");
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Left content animation
      gsap.from(".about-content > *", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        },
      });

      // Tab buttons animation
      gsap.from(".tab-btn", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".tab-btn-container",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Simple entry animation for tab content whenever it changes
    gsap.fromTo(
      ".fade-up",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:w-[45%] about-content">
          <p
            className={`${caveat.className} text-[#6F7775] text-3xl mb-4 font-normal`}
          >
            Our Approach
          </p>
          <h2
            className={`${nunito.className} text-[#0A2520] text-4xl font-extrabold mb-4`}
          >
            Building a Sustainable Future with Innovation
          </h2>
          <div className="h-1 w-40 bg-[#00735C] rounded-full mb-8"></div>

          <p className={`${cabin.className} text-gray-600 mb-8 font-normal`}>
            We believe transformation starts from the ground up. By fostering
            innovation and collaboration we empower communities for sustainable
            development.
          </p>

          {/* DOWNLOAD BROCHURE BUTTON */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <a
              href="/New_Brochure _ASPGF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${nunito.className} group relative inline-flex items-center gap-4 md:gap-5 bg-[#00735C] text-white px-7 py-3.5 md:px-10 md:py-5 rounded-full font-extrabold overflow-hidden transition-all duration-300 shadow-xl shadow-[#00735C]/20 hover:shadow-2xl hover:shadow-[#00735C]/40 hover:-translate-y-1 active:scale-95`}
            >
              {/* Subtle Hover Layer */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <span className="relative z-10 uppercase tracking-[0.1em] text-[12px] md:text-[13px]">
                Download Brochure
              </span>

              <div className="relative z-10 flex items-center justify-center bg-white/20 w-7 h-7 md:w-9 md:h-9 rounded-full group-hover:bg-white group-hover:text-[#00735C] transition-all duration-500">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT TABS */}
        <div className="lg:w-[55%]">
          {/* TAB BUTTONS */}
          <div className="flex bg-gray-100 rounded-xl p-2 mb-8 tab-btn-container">
            <button
              onClick={() => setActiveTab("mission")}
              className={`${nunito.className} tab-btn flex-1 py-4 rounded-lg font-extrabold transition-colors ${
                activeTab === "mission"
                  ? "bg-[#00735C] text-white"
                  : "text-[#0A2520] hover:text-[#00735C]"
              }`}
            >
              <Target className="mx-auto mb-1" />
              Mission
            </button>

            {/* DOWNLOAD BROCHURE BUTTON */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="/Brochure-ASPGF.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${nunito.className} group relative inline-flex items-center gap-4 md:gap-5 bg-[#00735C] text-white px-7 py-3.5 md:px-10 md:py-5 rounded-full font-extrabold overflow-hidden transition-all duration-300 shadow-xl shadow-[#00735C]/20 hover:shadow-2xl hover:shadow-[#00735C]/40 hover:-translate-y-1 active:scale-95`}
              ></a>
              {/* Subtle Hover Layer */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              <button
                onClick={() => setActiveTab("vision")}
                className={`${nunito.className} tab-btn flex-1 py-4 rounded-lg font-extrabold transition-colors ${
                  activeTab === "vision"
                    ? "bg-[#00735C] text-white"
                    : "text-[#0A2520] hover:text-[#00735C]"
                }`}
              >
                <Eye className="mx-auto mb-1" />
                Vision
              </button>

              <button
                onClick={() => setActiveTab("value")}
                className={`${nunito.className} tab-btn flex-1 py-4 rounded-lg font-extrabold transition-colors ${
                  activeTab === "value"
                    ? "bg-[#00735C] text-white"
                    : "text-[#0A2520] hover:text-[#00735C]"
                }`}
              >
                <Heart className="mx-auto mb-1" />
                Values
              </button>
            </div>

            {/* TAB CONTENT */}
            {activeTab === "mission" && (
              <div>
                <p
                  className={`${cabin.className} text-gray-600 mb-6 font-normal`}
                >
                  Our mission is to build inclusive platforms that empower
                  communities through education, healthcare, and sustainable
                  opportunities. Our mission is to build inclusive platforms
                  that empower communities through education, healthcare, and
                  sustainable opportunities.
                </p>

                <ul className="space-y-3">
                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To support students from financially challenged backgrounds
                    by providing educational scholarships.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To uplift vulnerable communities through social, emotional,
                    and psychological support.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To create safe and nurturing spaces for children, women, and
                    senior citizens.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To strengthen society with programs that promote mental
                    well-being, skill development, and sustainable progress.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="fade-up">
                <p
                  className={`${cabin.className} text-gray-600 mb-6 font-normal`}
                >
                  To build a society where education empowers, compassion
                  uplifts, and equal opportunities enable every individual to
                  lead a life of dignity, confidence, and self-reliance creating
                  a future where knowledge, innovation, and humanity work
                  together for the progress of all.
                </p>

                <ul className="space-y-3">
                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Ensure every child and student has access to quality
                    education and scholarships, regardless of financial
                    background.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Support senior citizens with a safe, respectful, and caring
                    environment for a dignified life.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Provide shelter, education, and protection for orphaned
                    children and destitute women to help them rebuild their
                    lives.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Build compassionate and inclusive communities where everyone
                    has the opportunity to grow with dignity and confidence.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "value" && (
              <div className="fade-up">
                <p
                  className={`${cabin.className} text-gray-600 mb-6 font-normal`}
                >
                  At Anuja Sushant Patil Global Foundation, our work is guided
                  by a strong commitment to integrity, compassion, and
                  sustainable social impact. We believe that meaningful change
                  begins with responsible action, inclusive opportunities, and a
                  deep respect for human dignity. Through our programs in
                  education, community welfare, and social development, we
                  strive to empower individuals and strengthen communities for a
                  better future.
                </p>

                <ul className="space-y-3">
                  {/* <li
                  className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                >
                  <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                  Upholding integrity and transparency in every initiative and
                  community partnership.
                </li> */}

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Expanding access to quality education and opportunities for
                    underserved communities.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Promoting equality, dignity, and respect for every
                    individual regardless of background.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Encouraging sustainable development and responsible
                    community engagement.
                  </li>

                  <li
                    className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}
                  >
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Creating long-term social impact through collaboration,
                    empathy, and innovation.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

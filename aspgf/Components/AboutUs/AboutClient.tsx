"use client";

import React, { useState, useEffect } from "react";
import { Target, Eye, Heart, ArrowRight, Download } from "lucide-react";
import { Caveat, Nunito, Cabin } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:w-[45%]">
          <p
            className={`${caveat.className} text-[#6F7775] text-3xl mb-4 font-normal reveal delay-100`}
          >
            Our Approach
          </p>
          <h2
            className={`${nunito.className} text-[#0A2520] text-4xl font-extrabold mb-4 reveal delay-200`}
          >
            Building a Sustainable Future with Innovation
          </h2>
          <div className="h-1 w-40 bg-[#00735C] rounded-full mb-8 reveal delay-300"></div>

          <p className={`${cabin.className} text-gray-600 mb-8 font-normal reveal delay-400`}>
            We believe transformation starts from the ground up. By fostering
            innovation and collaboration we empower communities for sustainable
            development.
          </p>

          {/* DOWNLOAD BROCHURE BUTTON */}
          <div className="pt-4 flex justify-center lg:justify-start">
            <a
              href="/Brochure-ASPGF.pdf"
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
          <div className="flex bg-gray-100 rounded-xl p-2 mb-8 reveal-right delay-200">
            <button
              onClick={() => setActiveTab("mission")}
              className={`${nunito.className} flex-1 py-4 rounded-lg font-extrabold transition-colors ${activeTab === "mission" ? "bg-[#00735C] text-white" : "text-[#0A2520] hover:text-[#00735C]"
                }`}
            >
              <Target className="mx-auto mb-1" />
              Mission
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`${nunito.className} flex-1 py-4 rounded-lg font-extrabold transition-colors ${activeTab === "vision" ? "bg-[#00735C] text-white" : "text-[#0A2520] hover:text-[#00735C]"
                }`}
            >
              <Eye className="mx-auto mb-1" />
              Vision
            </button>

            <button
              onClick={() => setActiveTab("value")}
              className={`${nunito.className} flex-1 py-4 rounded-lg font-extrabold transition-colors ${activeTab === "value" ? "bg-[#00735C] text-white" : "text-[#0A2520] hover:text-[#00735C]"
                }`}
            >
              <Heart className="mx-auto mb-1" />
              Values
            </button>
          </div>

          {/* TAB CONTENT */}
          <div className={`transition-all duration-500 transform ${isChanging ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
            {activeTab === "mission" && (
              <div>
                <p className={`${cabin.className} text-gray-600 mb-6 font-normal`}>
                  Our mission is to build inclusive platforms that empower
                  communities through education, healthcare, and sustainable
                  opportunities.
                </p>

                <ul className="space-y-3">
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To support students from financially challenged backgrounds
                    by providing educational scholarships.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To uplift vulnerable communities through social, emotional,
                    and psychological support.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To create safe and nurturing spaces for children, women, and
                    senior citizens.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    To strengthen society with programs that promote mental
                    well-being, skill development, and sustainable progress.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "vision" && (
              <div>
                <p className={`${cabin.className} text-gray-600 mb-6 font-normal`}>
                  To build a society where education empowers, compassion
                  uplifts, and equal opportunities enable every individual to
                  lead a life of dignity, confidence, and self-reliance.
                </p>

                <ul className="space-y-3">
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Ensure every child and student has access to quality education.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Support senior citizens with a safe, respectful environment.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Provide shelter, education, and protection for orphaned children and destitute women.
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "value" && (
              <div>
                <p className={`${cabin.className} text-gray-600 mb-6 font-normal`}>
                  At Anuja Sushant Patil Global Foundation, our work is guided by integrity, compassion, and sustainable social impact.
                </p>

                <ul className="space-y-3">
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Upholding integrity and transparency in every initiative.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Expanding access to quality education.
                  </li>
                  <li className={`${cabin.className} flex items-start gap-3 font-normal text-gray-700`}>
                    <ArrowRight className="text-[#00735C] w-5 h-5 min-w-[20px] mt-1 flex-shrink-0" />
                    Promoting equality, dignity, and respect for every individual.
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

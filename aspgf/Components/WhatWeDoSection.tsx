"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaPlay, FaTrophy } from "react-icons/fa";
import { Caveat, Nunito, Cabin } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function WhatWeDoSection() {
  const containerRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState<"Orphanage" | "Education" | "Counselling" | "Old Age">("Education");

  const tabContent: Record<string, { description: string; points: string[] }> =
    {
      Orphanage: {
        description:
          "We provide safe shelter, education, and emotional care for vulnerable individuals, ensuring they have the opportunity to grow, learn, and become confident members of society.",
        points: [
          "Support for orphaned children",
          "Shelter for destitute children",
          "Care and protection for women without family support",
          "Education and life development support",
        ],
      },
      Education: {
        description:
          "We believe education is the foundation of a nation, and every child deserves access to learning. ASPGF provides financial assistance to students facing financial challenges so their education continues without interruption.",
        points: [
          "Pre-Matric Scholarships (Class 1–10)",
          "Post-Matric Scholarships (Undergraduate & Postgraduate)",
          "Higher Education Scholarships",
          "Scholarships for Differently-Abled Students",
        ],
      },
      Counselling: {
        description:
          "Our counselling centre offers emotional and psychological support to help individuals build self-awareness, resilience, emotional balance, and healthy communication in their personal and professional lives.",
        points: [
          "Individual, family, and group counselling",
          "Academic and vocational guidance",
          "Mental health counselling for anxiety, depression, and stress",
          "Addiction counselling",
          "Relationship and social counselling",
        ],
      },
      "Old Age": {
        description:
          "ASPGF supports senior citizens by providing a secure, respectful, and caring environment where elders can live with dignity, companionship, and emotional well-being.",
        points: [
          "Comfortable accommodation",
          "Nutritious meals",
          "Medical care and health support",
          "Recreational and social activities",
          "Celebration of festivals and cultural programs",
        ],
      },
    };

  const tabs = ["Orphanage", "Education", "Counselling", "Old Age"] as const;

  const mainImages = [
    "/What-We-Do/20251115_121341.webp",
    "/What-We-Do/20251115_121248.webp",
    "/What-We-Do/20251115_121810.webp",
    "/What-We-Do/DSC04228.webp",
    "/What-We-Do/DSC04221.webp",
    "/What-We-Do/DSC04245.webp",
  ];

  const secondImages = [
    "/What-We-Do/20251115_121940.webp",
    "/What-We-Do/DSC04239.webp",
    "/What-We-Do/20251115_130823.webp",
    "/What-We-Do/DSC04221.webp",
    "/What-We-Do/20251115_131522.webp",
    "/What-We-Do/DSC04220.webp",
  ];

  const [mainIndex, setMainIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [isMainFading, setIsMainFading] = useState(false);
  const [isSecondFading, setIsSecondFading] = useState(false);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      setIsMainFading(true);
      setTimeout(() => {
        setMainIndex((prev) => (prev + 1) % mainImages.length);
        setIsMainFading(false);
      }, 700);
    }, 5000);

    const secondInterval = setInterval(() => {
      setIsSecondFading(true);
      setTimeout(() => {
        setSecondIndex((prev) => (prev + 1) % secondImages.length);
        setIsSecondFading(false);
      }, 600);
    }, 7200);

    return () => {
      clearInterval(mainInterval);
      clearInterval(secondInterval);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full px-6 md:px-20 lg:px-8 lg:pl-[120px] py-20 bg-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="reveal-left">
          {/* WHAT WE DO TAG */}
          <div className="flex items-center gap-3 mb-4">
            <p
              className={`${caveat.className} text-[#6f7775] font-bold text-[24px] mt-1`}
            >
              What We Do
            </p>
          </div>

          {/* HEADING */}
          <h2
            className={`${nunito.className} text-[#0b6a52] text-3xl md:text-5xl font-extrabold leading-[1.15] mb-8 pr-4`}
          >
            Empowering Communities for a Sustainable Tomorrow
          </h2>

          {/* TABS */}
          <div className="flex flex-wrap gap-3 mb-8 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${cabin.className} px-4 md:px-8 py-3 rounded-full font-extrabold text-[14px] md:text-[15px] tracking-wide transition-all duration-300 shadow-sm whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-[#0b6a52] text-white shadow-md"
                    : "bg-white text-[#1A2E35] border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* DESCRIPTION */}
          <p
            className={`${cabin.className} text-gray-500 leading-relaxed text-[15px] lg:text-[16px] mb-8 min-h-[60px]`}
          >
            {tabContent[activeTab].description}
          </p>

          {/* CHECK LIST */}
          <ul
            className={`${nunito.className} space-y-5 text-[#1A2E35] font-bold text-[16px]`}
          >
            {tabContent[activeTab].points.map((point, index) => (
              <li
                key={index}
                className={`flex items-start gap-4 transition-all duration-700 transform ${
                  true ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mt-1 bg-[#0b6a52]/10 p-1 rounded-full">
                  <FaCheckCircle className="text-[#0b6a52] text-[15px]" />
                </div>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative reveal-right">
          {/* Remaining UI unchanged */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="relative">
              {/* MAIN IMAGE */}
              <div
                className="relative w-[300px] h-[450px] md:w-[480px] md:h-[550px] overflow-hidden rounded-[40px]"
              >
                <div className={`relative w-full h-full transition-all duration-700 transform ${isMainFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                  <Image
                    src={mainImages[mainIndex]}
                    alt="Community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* SECOND IMAGE */}
              <div className="absolute bottom-[-20px] right-[-44px] md:bottom-[-60px] md:right-[-92px] md:mt-80 z-20">
                <div className="relative w-[185px] h-[240px] md:w-[300px] md:h-[350px]">
                  <div
                    className="relative w-full h-full rounded-t-[30px] md:rounded-t-[45px] overflow-hidden border-2 md:border-4 border-white bg-white"
                  >
                     <div className={`relative w-full h-full transition-all duration-500 transform ${isSecondFading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
                      <Image
                        src={secondImages[secondIndex]}
                        alt="Kids"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute bottom-[-2px] -left-5 -right-5 h-[45px] md:h-[70px] z-10">
                      <Image
                        src="/shape-3.svg"
                        alt="mask"
                        fill
                        className="object-cover scale-x-125"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE END */}
        </div>
      </div>
    </section>
  );
}

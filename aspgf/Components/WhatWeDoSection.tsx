"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaPlay, FaTrophy, FaTimes } from "react-icons/fa";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % mainImages.length);
        setIsFading(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
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

          {activeTab === "Education" && (
            <div className="mt-8 transition-all duration-700 transform opacity-100 translate-y-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`${cabin.className} bg-[#0b6a52] text-white px-8 py-3 rounded-full font-bold text-[15px] hover:bg-[#0a5a45] transition-colors shadow-md`}
              >
                Check Eligibility
              </button>
            </div>
          )}
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
                <div className={`relative w-full h-full transition-all duration-700 transform ${isFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                  <Image
                    src={mainImages[currentIndex]}
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
                     <div className={`relative w-full h-full transition-all duration-500 transform ${isFading ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}>
                      <Image
                        src={secondImages[currentIndex]}
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

      {/* SCHOLARSHIP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-wrap bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Peacock SVG Background */}
            <div className="absolute inset-0 opacity-30 pointer-events-none z-0 flex items-center justify-center">
              <Image 
                src="/Images/simple-peacock.svg" 
                alt="Peacock Background" 
                fill 
                className="object-contain scale-[0.8] md:scale-[0.7]"
              />
            </div>

            {/* Static Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 transition-colors bg-white/80 backdrop-blur-sm hover:bg-red-50 rounded-full z-20 shadow-sm border border-gray-100"
            >
              <FaTimes className="text-xl" />
            </button>
            
            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 md:p-10 scrollbar-hide relative z-10">
              <h3 className={`${nunito.className} text-[#0b6a52] text-2xl md:text-3xl font-extrabold mb-6 pr-8`}>
              Eligibility Criteria for (ASPG) Scholarship
            </h3>
            
            <ul className={`${cabin.className} space-y-4 text-[#2b2b2b] text-[16px] md:text-[18px] mb-10`}>
              <li>The applicant must generally be an Indian citizen.</li>
              <li>The family's annual income should not exceed a specified limit.</li>
              <li>The student must have obtained minimum qualifying marks in the previous examination.</li>
            </ul>

            <h3 className={`${nunito.className} text-[#0b6a52] text-2xl md:text-3xl font-extrabold mb-6`}>
              Documents Required for Scholarship Application
            </h3>
            
            <ul className={`${cabin.className} space-y-3 text-[#2b2b2b] text-[16px] md:text-[18px] list-none`}>
              {[
                { label: "Bonafide Certificate", desc: "Bonafide certificate from the educational institution." },
                { label: "Admission Fee Receipt", desc: "Proof of admission to the educational institution." },
                { label: "Marksheet", desc: "Previous exam marksheet (10th or 12th)." },
                { label: "Aadhaar Card", desc: "Student's Aadhaar card." },
                { label: "Income Certificate", desc: "Issued by the Tehsildar or competent authority." },
                { label: "Sources of Income", desc: "" },
                { label: "Bank Account Details", desc: "Student's bank account and passbook." },
                { label: "Residence Certificate", desc: "Proof of residential address." },
                { label: "Passport Size Photo", desc: "Recent passport size photo of the student." },
                { label: "Other Documents", desc: "" },
                { label: "Hostel Receipt", desc: "If staying in a hostel." },
              ].map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-400 mt-[2px] text-sm leading-none">•</span>
                  <div>
                    <span className="font-bold text-[#0b6a52]">{doc.label}</span>
                    {doc.desc && <span className="">: {doc.desc}</span>}
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

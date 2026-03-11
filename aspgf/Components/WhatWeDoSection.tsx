"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaPlay, FaTrophy } from "react-icons/fa";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

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
      //   Education: {
      //   description:
      //     "Our primary focus area is education, where we support students through scholarships, mentorship, and academic resources. The ASPG Foundation aims to create equal opportunities for deserving students and promote access to quality education for sustainable community development.",
      //   points: [
      //     "Eligibility: Applicant must generally be an Indian citizen.",
      //     "Family's annual income should not exceed the specified scholarship limit.",
      //     "Student must have obtained the required minimum qualifying marks in the previous examination.",
      //     "Scholarship support for deserving students to continue higher education.",
      //   ],
      // },
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

  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Education");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(rightRef.current, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      /* CHECKLIST STAGGER ANIMATION */
      gsap.from(listRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

  const mainImageRef = useRef<HTMLDivElement>(null);
  const secondImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mainInterval = setInterval(() => {
      gsap.to(mainImageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => {
          setMainIndex((prev) => (prev + 1) % mainImages.length);

          gsap.fromTo(
            mainImageRef.current,
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
          );
        },
      });
    }, 5000);

    const secondInterval = setInterval(() => {
      gsap.to(secondImageRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          setSecondIndex((prev) => (prev + 1) % secondImages.length);

          gsap.fromTo(
            secondImageRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          );
        },
      });
    }, 7200);

    return () => {
      clearInterval(mainInterval);
      clearInterval(secondInterval);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-6 md:px-20 lg:px-8 lg:pl-[120px] py-20 bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div ref={leftRef}>
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
          <div className="grid grid-cols-4 gap-2 mb-8 md:flex md:flex-wrap md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${cabin.className} w-full md:w-auto px-2 md:px-8 py-3 rounded-full font-extrabold text-[14px] md:text-[15px] tracking-wide transition-all duration-300 shadow-sm ${
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
            ref={listRef}
            className={`${nunito.className} space-y-5 text-[#1A2E35] font-bold text-[16px]`}
          >
            {tabContent[activeTab].points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4 animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
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
        <div ref={rightRef} className="relative">
          {/* Remaining UI unchanged */}
          <div className="relative flex items-center justify-center lg:justify-start">
            <div className="relative">
              {/* MAIN IMAGE */}
              <div
                ref={mainImageRef}
                className="relative w-[300px] h-[450px] md:w-[480px] md:h-[550px] overflow-hidden rounded-[40px]"
              >
                <Image
                  src={mainImages[mainIndex]}
                  alt="Community"
                  fill
                  className="object-cover"
                />
              </div>

              {/* SERVING SINCE */}
              {/* <div className="absolute bottom-[20%] -left-16 md:-left-28 bg-[#0b6a52] md:h-16  text-white p-4 md:p-5 rounded-xl shadow-lg w-[180px] md:w-[190px] z-30 flex items-center gap-3">
                <div className="w-6 h-7 md:w-8 md:h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaTrophy className="text-white text-lg md:text-xl" />
                </div>
                <div>
                  <p
                    className={`${cabin.className} text-[12px] md:text-[12px] font-bold tracking-wide leading-tight`}
                  >
                    Serving Since 2024
                  </p>
                  <p
                    className={`${cabin.className} text-[10px] md:text-[12px] opacity-80 font-medium`}
                  >
                    Committed to Social Impact.
                  </p>
                </div>
              </div> */}

              {/* SERVING COMMUNITIES */}
              {/* <div className="absolute top-[12%] -right-22  md:-right-38 bg-[#0b6a52] text-white p-2 pl-2 md:p-5 rounded-xl shadow-lg h-32 md:h-26 w-[130px] md:w-[190px] z-30">
                <p
                  className={`${nunito.className} text-[12px] md:text-[14px] font-bold leading-tight tracking-wide`}
                >
                  Serving Communities <br />
                  Through Compassion, <br />
                  Action & Sustainable <br />
                  Impact.
                </p>
              </div> */}

              {/* SECOND IMAGE */}
              <div className="absolute bottom-[-20px] right-[-44px] md:bottom-[-60px] md:right-[-92px] md:mt-80 z-20">
                <div className="relative w-[185px] h-[240px] md:w-[300px] md:h-[350px]">
                  <div
                    ref={secondImageRef}
                    className="relative w-full h-full rounded-t-[30px] md:rounded-t-[45px] overflow-hidden border-2 md:border-4 border-white bg-white"
                  >
                    <Image
                      src={secondImages[secondIndex]}
                      alt="Kids"
                      fill
                      className="object-cover"
                    />

                    <div className="absolute bottom-[-2px] -left-5 -right-5 h-[45px] md:h-[70px] z-10">
                      <Image
                        src="/images/shape-3.svg"
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

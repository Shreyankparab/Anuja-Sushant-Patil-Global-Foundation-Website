"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function StoryChapters() {
  const containerRef = useRef<HTMLElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [threadTop, setThreadTop] = useState(0);
  const [pathLength, setPathLength] = useState(0);

  // Intersection Observers for each Chapter row
  const ch1Obs = useIntersectionObserver({ rootMargin: "-100px" });
  const ch2Obs = useIntersectionObserver({ rootMargin: "-100px" });
  const ch3Obs = useIntersectionObserver({ rootMargin: "-100px" });

  useEffect(() => {
    const updateThreadPos = () => {
      if (nodeRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const nodeRect = nodeRef.current.getBoundingClientRect();
        setThreadTop(nodeRect.top - containerRect.top + nodeRect.height / 2);
      }
    };

    updateThreadPos();
    window.addEventListener("resize", updateThreadPos);

    // Catch layout shifts right after load
    const timeoutId = setTimeout(updateThreadPos, 500);
    return () => {
      window.removeEventListener("resize", updateThreadPos);
      clearTimeout(timeoutId);
    };
  }, []);

  // Native Scroll-Linked Progress calculation for the spine
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const sectionTop = rect.top + scrollTop;
      const sectionHeight = rect.height;

      // offset: ["start start", "end end"]
      const startScroll = sectionTop;
      const endScroll = sectionTop + sectionHeight - window.innerHeight;

      if (scrollTop <= startScroll) {
        setPathLength(0);
      } else if (scrollTop >= endScroll) {
        setPathLength(1);
      } else {
        const progress = (scrollTop - startScroll) / (endScroll - startScroll);
        setPathLength(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col space-y-32 md:space-y-48 pb-20">

      {/* ── Progress Thread (The Spine of the Story) ── */}
      <div
        className="absolute left-8 md:left-1/2 bottom-0 w-px -translate-x-[0.5px] z-0 hidden sm:block pointer-events-none"
        style={{ top: threadTop }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          <line x1="0" y1="0" x2="0" y2="100%" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="8 8" />
          <line
            x1="0" y1="0" x2="0" y2={`${pathLength * 100}%`}
            stroke="#00735C" strokeWidth="2"
          />
        </svg>
      </div>

      {/* Chapter 1 */}
      <div ref={ch1Obs.ref} className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter One</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Assignment</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
          <div
            className={`w-full md:w-1/2 flex justify-end transition-all duration-[800ms] ease-out ${
              ch1Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform -rotate-2 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-1.webp" alt="School Assignment" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">A simple question</div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 md:pl-10 relative transition-all duration-[800ms] delay-200 ease-out ${
              ch1Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Thread Node */}
            <div ref={nodeRef} className="hidden sm:block absolute sm:left-8 sm:-translate-x-1/2 md:left-[-24px] md:-translate-x-1/2 lg:left-[-48px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

            <div className="hidden md:block">
              <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-3">Chapter One</p>
              <h2 className="font-nunito text-3xl md:text-5xl font-extrabold text-[#0A2520] mb-6">The Assignment</h2>
            </div>

            <div className="font-cabin text-lg text-gray-600 leading-[1.8] space-y-6">
              <p>
                <span className="float-left text-7xl font-bold text-[#00735C] pr-3 pb-2 leading-[0.8] mt-1 font-nunito">O</span>
                ne day, Master Atharv Sushant Patil returned home from school with a project question his teacher had given the class:
              </p>
              <blockquote className="font-caveat text-2xl md:text-3xl text-[#0A2520] pl-6 border-l-2 border-[#00b874] py-2">
                "What can you do for the education of underprivileged children? What are their needs, and how can you help them?"
              </blockquote>
              <p>
                The question seemed simple enough for a school project. But it deeply touched Atharv's heart in a way no assignment had before. It wasn't just homework anymore; it was an awakening.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div ref={ch2Obs.ref} className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter Two</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Conversation</h2>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 relative">
          <div
            className={`w-full md:w-1/2 flex justify-start transition-all duration-[800ms] ease-out ${
              ch2Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform rotate-2 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-2.webp" alt="The Conversation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">A heartfelt chat</div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 md:pr-10 md:text-right relative transition-all duration-[800ms] delay-200 ease-out ${
              ch2Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Thread Node */}
            <div className="hidden sm:block absolute sm:left-8 sm:right-auto sm:-translate-x-1/2 md:left-auto md:right-[-24px] md:translate-x-1/2 lg:right-[-48px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

            <div className="hidden md:block">
              <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-3">Chapter Two</p>
              <h2 className="font-nunito text-3xl md:text-5xl font-extrabold text-[#0A2520] mb-6">The Conversation</h2>
            </div>

            <div className="font-cabin text-lg text-gray-600 leading-[1.8] space-y-6 md:text-right">
              <p>
                After coming home, Atharv sat down with his parents and began sharing the weight of what was on his mind.
              </p>
              <p className="italic text-[#0A2520] bg-white/50 p-6 rounded-2xl md:rounded-bl-none shadow-sm text-center md:text-right">
                "Mom, many children in school face so many difficulties. Some have no notebooks, no pencils. Some carry torn school bags. And for some, even paying school fees is almost impossible for their parents."
              </p>
              <p>
                Behind his words was one innocent, earnest question - <span className="font-bold text-[#00735C]">"Can we do something for these children?"</span> He wasn't asking for himself. He was asking for his peers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div ref={ch3Obs.ref} className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter Three</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Decision</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
          <div
            className={`w-full md:w-1/2 flex justify-end transition-all duration-[800ms] ease-out ${
              ch3Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform -rotate-1 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-3.webp" alt="The Decision" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">The foundation begins</div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 md:pl-10 relative transition-all duration-[800ms] delay-200 ease-out ${
              ch3Obs.isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Thread Node */}
            <div className="hidden sm:block absolute sm:left-8 sm:-translate-x-1/2 md:left-[-24px] md:-translate-x-1/2 lg:left-[-48px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

            <div className="hidden md:block">
              <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-3">Chapter Three</p>
              <h2 className="font-nunito text-3xl md:text-5xl font-extrabold text-[#0A2520] mb-6">The Decision</h2>
            </div>

            <div className="font-cabin text-lg text-gray-600 leading-[1.8] space-y-6">
              <p>
                That very evening, looking into Atharv's hopeful eyes, a small but resolute decision was made  -  to help underprivileged children in whatever way possible. It wasn't a grand corporate strategy. It was a family's answer to a child's compassion.
              </p>
              <p>
                From this single, sincere moment of care, the <strong className="text-[#0A2520] bg-[#00b874]/10 px-2 py-1 rounded">Anuja Sushant Patil Global Foundation</strong> was born. Seeds were planted that would soon grow into trees of opportunity for countless children.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

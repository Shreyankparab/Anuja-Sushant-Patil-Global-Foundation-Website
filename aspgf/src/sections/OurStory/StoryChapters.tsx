"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryChapters() {
  const containerRef = useRef<HTMLElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [threadTop, setThreadTop] = useState(0);

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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col space-y-32 md:space-y-48 pb-20">

      {/* ── Progress Thread (The Spine of the Story) ── */}
      <div
        className="absolute left-8 md:left-1/2 bottom-0 w-px -translate-x-[0.5px] z-0 hidden sm:block pointer-events-none"
        style={{ top: threadTop }}
      >
        <svg className="w-full h-full" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          <line x1="0" y1="0" x2="0" y2="100%" stroke="#e5e5e5" strokeWidth="2" strokeDasharray="8 8" />
          <motion.line
            x1="0" y1="0" x2="0" y2="100%"
            stroke="#00735C" strokeWidth="2"
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* Chapter 1 */}
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter One</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Assignment</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
          <motion.div
            className="w-full md:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform -rotate-2 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-1.png" alt="School Assignment" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">A simple question</div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 md:pl-10 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Thread Node */}
            <div ref={nodeRef} className="hidden sm:block absolute left-[-22px] md:left-[-48px] lg:left-[-60px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

            <div className="hidden md:block">
              <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-3">Chapter One</p>
              <h2 className="font-nunito text-3xl md:text-5xl font-extrabold text-[#0A2520] mb-6">The Assignment</h2>
            </div>

            <div className="font-cabin text-lg text-gray-600 leading-[1.8] space-y-6">
              <p>
                <span className="float-left text-7xl font-bold text-[#00735C] pr-3 pb-2 leading-[0.8] mt-1 font-serif">O</span>
                ne day, Master Atharv Sushant Patil returned home from school with a project question his teacher had given the class:
              </p>
              <blockquote className="font-caveat text-2xl md:text-3xl text-[#0A2520] pl-6 border-l-2 border-[#00b874] py-2">
                "What can you do for the education of underprivileged children? What are their needs, and how can you help them?"
              </blockquote>
              <p>
                The question seemed simple enough for a school project. But it deeply touched Atharv's heart in a way no assignment had before. It wasn't just homework anymore; it was an awakening.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chapter 2 */}
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter Two</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Conversation</h2>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 relative">
          <motion.div
            className="w-full md:w-1/2 flex justify-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform rotate-2 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-2.png" alt="The Conversation" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">A heartfelt chat</div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 md:pr-10 md:text-right relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Thread Node */}
            <div className="hidden sm:block absolute right-[-22px] md:right-[-48px] lg:right-[-60px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

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
          </motion.div>
        </div>
      </div>

      {/* Chapter 3 */}
      <div className="flex flex-col gap-8 md:gap-0">
        <div className="md:hidden text-center z-10 px-4">
          <p className="font-cabin text-[#00b874] uppercase tracking-widest text-sm font-bold mb-2">Chapter Three</p>
          <h2 className="font-nunito text-4xl font-extrabold text-[#0A2520]">The Decision</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
          <motion.div
            className="w-full md:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-sm transform -rotate-1 bg-white p-3 shadow-xl shadow-black/5 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image src="/images/our-story/story-3.png" alt="The Decision" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="font-caveat text-center mt-3 text-lg text-gray-500">The foundation begins</div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 md:pl-10 relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Thread Node */}
            <div className="hidden sm:block absolute left-[-22px] md:left-[-48px] lg:left-[-60px] top-4 w-4 h-4 rounded-full bg-[#FAF9F6] border-4 border-[#00735C] z-10 shadow-[0_0_0_8px_#FAF9F6]" />

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
          </motion.div>
        </div>
      </div>

    </section>
  );
}

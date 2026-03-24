"use client";

import React from "react";
import Image from "next/image";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import { BookMarked } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/story-hero-bg.png"
          alt="Children studying"
          fill
          priority
          className="object-cover opacity-15 sepia-[.3] mix-blend-multiply filter"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/80 via-[#FAF9F6]/40 to-[#FAF9F6]" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <BookMarked className="w-12 h-12 text-[#00735C] mb-6 opacity-80" />
        <p className={`${caveat.className} text-[#00b874] text-3xl md:text-4xl mb-4 font-bold tracking-wider`}>
          A Small Thought, A Big Mission
        </p>
        <h1 className={`${nunito.className} text-[44px] sm:text-[60px] md:text-[80px] font-[900] leading-[1.05] text-[#0A2520] tracking-tight mb-8 drop-shadow-sm`}>
          Our Inspiring <br className="hidden sm:block" />
          <span className="text-[#00735C] relative inline-block">
            Beginning
            <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#00b874]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className={`${cabin.className} text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed`}>
          The founding story of ASPGF  -  written not in boardrooms, but through the compassionate eyes of a child.
        </p>

        <div className="mt-16 animate-bounce text-[#00735C]/50">
          <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v32M6 28l6 8 6-8" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}

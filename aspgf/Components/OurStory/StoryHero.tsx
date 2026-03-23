"use client";

import Image from "next/image";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[520px] overflow-hidden flex items-center">
      {/* Background with zoom-in animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <Image
          src="/Images/story-hero-bg.png"
          alt="Children studying - Our Inspiring Beginning"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay matching AboutHero gradient style */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/30 md:to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:pl-[120px] lg:pr-10">
        <div className="max-w-4xl">
          {/* Caveat subtitle - matching AboutHero */}
          <motion.div
            className="flex flex-col mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <p className={`${caveat.className} text-[#00b874] text-[28px] md:text-[40px] leading-none mb-1`}>
              A Small Thought, A Big Mission
            </p>
            <div className="h-[3px] w-24 bg-[#00735C] rounded-full" />
          </motion.div>

          {/* H1 - matching AboutHero exactly */}
          <motion.h1
            className={`${nunito.className} text-white text-[34px] sm:text-[44px] md:text-[68px] font-[900] leading-[1.05] mb-8 tracking-tighter`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            Our Inspiring <br />
            <span className="text-[#00b874]">Beginning</span>
          </motion.h1>

          {/* Description - matching AboutHero */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
          >
            <div className="h-[2px] w-12 bg-white/30 mb-6 hidden md:block" />
            <p className={`${cabin.className} text-white/90 text-[18px] md:text-[22px] font-medium leading-[1.6] tracking-wide`}>
              The story of a small thought that became a big mission
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-10 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="w-px h-12 bg-white/30" />
            <p className={`${cabin.className} text-white/50 text-sm tracking-widest uppercase`}>
              Scroll to read
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

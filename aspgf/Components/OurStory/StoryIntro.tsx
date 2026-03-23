"use client";

import { Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryIntro() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Ornamental line */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-[#00735C]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00735C]" />
          <div className="h-px w-16 bg-[#00735C]/20" />
        </div>

        <blockquote>
          <p className={`${nunito.className} text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0A2520] leading-[1.25] mb-6`}>
            "Every great initiative begins with a{" "}
            <span className="text-[#00735C]">small, innocent thought.</span>"
          </p>
          <footer className={`${cabin.className} text-gray-500 text-base md:text-lg mt-4`}>
            - The founding story of ASPGF
          </footer>
        </blockquote>

        {/* Ornamental line */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <div className="h-px w-16 bg-[#00735C]/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00735C]" />
          <div className="h-px w-16 bg-[#00735C]/20" />
        </div>
      </motion.div>
    </section>
  );
}

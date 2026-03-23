"use client";

import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function StorySignature() {
  return (
    <section className="bg-white py-20 md:py-24 px-6 border-t border-gray-100">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20 bg-[#00735C]/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00735C]" />
          <div className="h-px w-20 bg-[#00735C]/15" />
        </div>

        <p className={`${cabin.className} text-gray-400 text-sm tracking-widest uppercase mb-6`}>
          The story ends where the mission begins
        </p>

        <p className={`${cabin.className} text-gray-600 text-lg md:text-xl leading-relaxed mb-8 italic`}>
          "A small act of help can change a child's entire life."
        </p>

        {/* Signature block */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className={`${caveat.className} text-[#00735C] text-4xl md:text-5xl font-bold leading-tight`}>
            - Atharv Sushant Patil
          </p>
          <div className="h-[3px] w-32 bg-[#00735C] rounded-full mx-auto mt-4 mb-4" />
          <p className={`${nunito.className} text-gray-500 text-base font-bold tracking-wide`}>
            Anuja Sushant Patil Global Foundation
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

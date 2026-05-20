"use client";

import React from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StorySignature() {
  return (
    <section className="relative z-10 max-w-3xl mx-auto text-center px-6 pb-20">
      <motion.div
        className="bg-white p-12 rounded-2xl shadow-xl shadow-black/5"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className={`${cabin.className} uppercase text-xs tracking-widest text-gray-400 font-bold mb-6`}>
          The End is Just the Beginning
        </p>
        <p className={`${nunito.className} text-2xl md:text-4xl text-[#0A2520] font-extrabold leading-tight mb-12`}>
          "Every child has the right to learn. When given the right opportunity, every child can achieve their dreams."
        </p>

        <div className="flex flex-col items-center">
          <p className={`${caveat.className} text-[#00735C] text-5xl font-bold mb-4`}>
            Atharv Sushant Patil
          </p>
          <div className="h-px w-24 bg-[#00b874] mb-3" />
          <p className={`${cabin.className} text-gray-500 font-semibold tracking-wide uppercase text-sm`}>
            The spark behind ASPGF
          </p>
        </div>
      </motion.div>
    </section>
  );
}

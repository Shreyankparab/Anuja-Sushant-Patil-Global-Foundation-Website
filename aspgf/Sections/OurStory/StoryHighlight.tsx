"use client";

import React from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryHighlight() {
  return (
    <section className="relative z-10 w-full bg-[#0A2520] text-white py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <Heart className="w-10 h-10 text-[#00b874] mb-8 fill-[#00b874]" />
          <h3 className={`${caveat.className} text-[#00b874] text-3xl md:text-5xl mb-6`}>
            A moment that changed everything
          </h3>

          <div className={`${cabin.className} space-y-8 text-lg md:text-2xl leading-relaxed text-[#FAF9F6]/90 font-light max-w-3xl`}>
            <p>
              Among the children who received early support was a young girl whose parents had decided to pull her out of school. They simply could not afford the fees and saw no other way.
            </p>
            <p>
              When our foundation stepped in and paid her fees, their reaction was indescribable. Tears of absolute joy filled the parents' eyes. A new ray of hope began to shine  -  not just for their daughter's education, but for their entire family's belief in a better future.
            </p>
            <p className={`${nunito.className} text-xl md:text-3xl font-bold italic text-white leading-snug pt-6`}>
              "Witnessing those tears of joy  -  that single moment made us realize this small decision could change countless lives."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

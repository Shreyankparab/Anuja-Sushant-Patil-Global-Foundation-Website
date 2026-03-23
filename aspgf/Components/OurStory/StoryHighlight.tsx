"use client";

import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryHighlight() {
  return (
    <section className="bg-[#F0FAF5] py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#00735C]/10 mb-5">
            <Heart className="w-6 h-6 text-[#00735C]" fill="#00735C" />
          </div>
          <p className={`${caveat.className} text-[#00b874] text-2xl font-bold mb-3`}>
            A moment that changed everything
          </p>
          <h2 className={`${nunito.className} text-3xl md:text-4xl font-extrabold text-[#0A2520] leading-tight`}>
            The Girl Who Got to Stay in School
          </h2>
          <div className="h-1 w-16 bg-[#00735C] rounded-full mt-5" />
        </motion.div>

        {/* Story paragraphs */}
        <div className="space-y-6">
          {[
            "Among the children who received support was a young girl whose parents had stopped sending her to school. They simply could not afford the fees and saw no other way.",
            "When the foundation stepped in and paid her school fees, their reaction was indescribable. Tears of joy filled the parents' eyes. A new ray of hope began to shine - not just for their daughter, but for their entire family's belief in a better future.",
            "Witnessing those tears, that relief, that gratitude - it deeply moved everyone at ASPGF. It was in that moment that we understood: this is not just a project. This is a calling.",
          ].map((text, i) => (
            <motion.p
              key={i}
              className={`${cabin.className} text-gray-700 text-lg md:text-xl leading-[1.85]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          className="mt-14 pl-6 border-l-4 border-[#00735C]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className={`${nunito.className} text-[#0A2520] text-xl md:text-2xl font-bold italic leading-relaxed`}>
            "Witnessing those tears of joy - that single moment made us realize this small decision could change countless lives."
          </p>
        </motion.div>
      </div>
    </section>
  );
}

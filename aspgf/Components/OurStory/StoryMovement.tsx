"use client";

import React from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import { BookOpen, Backpack, Users, Sprout } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const stats = [
  { icon: BookOpen, title: "First chapters written", desc: "Atharv personally handed notebooks, pencils, and school supplies to children in need." },
  { icon: Backpack, title: "Lifting the heavy bags", desc: "Students received school bags and financial aid, covering fees for those whose families had given up hope." },
  { icon: Users, title: "A cast of characters grows", desc: "Gradually, the act inspired others. Volunteers, donors, and supporters joined the narrative." },
  { icon: Sprout, title: "A flourishing library", desc: "What began as one child's caring question became a formal foundation changing lives across the region." }
];

export default function StoryMovement() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-20">
        <p className={`${caveat.className} text-[#00735C] text-3xl md:text-4xl mb-4 font-bold`}>
          From one act to many
        </p>
        <h2 className={`${nunito.className} text-3xl md:text-5xl font-extrabold text-[#0A2520]`}>
          How a Story Became a Movement
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16">
        {stats.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              className="flex gap-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white border border-[#00735C]/20 flex items-center justify-center text-[#00735C] group-hover:bg-[#00735C] group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className={`${nunito.className} text-xl font-bold text-[#0A2520] mb-2`}>{item.title}</h4>
                <p className={`${cabin.className} text-gray-600 leading-relaxed`}>{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}
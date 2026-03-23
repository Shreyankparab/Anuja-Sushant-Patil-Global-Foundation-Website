"use client";

import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import { BookOpen, Backpack, Users, Sprout } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const milestones = [
  {
    icon: BookOpen,
    title: "First notebooks distributed",
    desc: "Atharv personally handed notebooks, pencils, and school supplies to children in need.",
  },
  {
    icon: Backpack,
    title: "School bags & scholarships",
    desc: "Students received school bags and financial aid, covering fees for those whose families had given up hope.",
  },
  {
    icon: Users,
    title: "People rallied together",
    desc: "Gradually, the act inspired others. Volunteers, donors, and supporters joined the mission.",
  },
  {
    icon: Sprout,
    title: "A movement was born",
    desc: "What began as one child's caring question became a formal foundation - ASPGF - changing lives across the region.",
  },
];

export default function StoryMovement() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={`${caveat.className} text-[#00b874] text-2xl font-bold mb-2`}>
            From one act to many
          </p>

          <h2 className={`${nunito.className} text-3xl md:text-4xl font-extrabold text-[#0A2520]`}>
            How a Small Act Became a Movement
          </h2>

          <div className="h-1.5 w-16 bg-[#00735C] rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {milestones.map((m, i) => {
            const Icon = m.icon;

            return (
              <motion.div
                key={i}
                className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >

                {/* Perfect Icon Box */}
                <div className="flex items-center justify-center w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl bg-[#00735C]/10 text-[#00735C] group-hover:bg-[#00735C] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Icon size={20} strokeWidth={2} />
                </div>

                {/* Content */}
                <div>
                  <h3 className={`${nunito.className} font-extrabold text-[#0A2520] text-lg mb-2`}>
                    {m.title}
                  </h3>

                  <p className={`${cabin.className} text-gray-500 text-base leading-relaxed`}>
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Quote */}
        <motion.p
          className={`${cabin.className} text-center text-gray-400 text-lg mt-14 max-w-2xl mx-auto italic`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          "What started as a small act slowly transformed into a meaningful social movement."
        </motion.p>

      </div>
    </section>
  );
}
"use client";

import { Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryBelief() {
  return (
    <section className="bg-[#00735C] py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Small label */}
        <motion.p
          className={`${cabin.className} text-[#00b874] text-sm tracking-widest uppercase font-semibold mb-6`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          Our Core Belief
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className={`${nunito.className} text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.3]`}>
            "Every child has the right to learn.
            <br className="hidden md:block" />
            <span className="text-[#00b874]"> When given the right opportunity,</span>
            <br className="hidden md:block" />
            every child can achieve their dreams."
          </p>
        </motion.blockquote>

        {/* Divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="h-px w-20 bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-[#00b874]" />
          <div className="h-px w-20 bg-white/20" />
        </motion.div>

        <motion.p
          className={`${cabin.className} text-white/70 text-base mt-8 max-w-xl mx-auto`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          This belief is not just our mission statement - it is the lived reality that every member of our foundation works toward every single day.
        </motion.p>
      </div>
    </section>
  );
}

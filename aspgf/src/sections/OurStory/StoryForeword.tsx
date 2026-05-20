"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StoryForeword() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <div className="text-6xl text-[#00735C]/20 leading-none mb-4 font-serif text-left">&ldquo;</div>
        <p className="font-caveat text-[32px] md:text-[44px] font-bold text-[#0A2520] leading-snug">
          Every great initiative begins with a <span className="text-[#00735C]">small, innocent thought.</span>
        </p>
        <div className="text-6xl text-[#00735C]/20 leading-none mt-2 font-serif text-right -translate-y-6">&rdquo;</div>
      </motion.div>
    </section>
  );
}

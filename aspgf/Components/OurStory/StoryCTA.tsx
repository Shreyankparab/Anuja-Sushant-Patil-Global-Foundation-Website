"use client";

import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function StoryCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#F8FAFC]">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00b874]/10 rounded-full blur-3xl" />

      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* Tagline */}
        <p className={`${caveat.className} text-[#00b874] text-2xl font-bold mb-3`}>
          Be part of the mission
        </p>

        {/* Heading */}
        <h2
          className={`${nunito.className} text-3xl md:text-5xl font-extrabold text-[#0A2520] leading-tight mb-5`}
        >
          A Small Step Today Can Change <br />
          <span className="text-[#00735C]">a Child's Entire Future</span>
        </h2>

        {/* Description */}
        <p
          className={`${cabin.className} text-gray-500 text-lg mb-12 max-w-xl mx-auto`}
        >
          Your contribution helps provide education, essentials, and hope to children who need it the most.
        </p>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            href="/donate-us"
            className={`${nunito.className} group relative inline-flex items-center justify-center px-12 py-4 rounded-full font-extrabold text-white text-[14px] tracking-[0.12em] uppercase overflow-hidden transition-all duration-300 bg-[#00735C] shadow-xl shadow-[#00735C]/25 hover:shadow-2xl hover:shadow-[#00735C]/40`}
          >
            {/* Hover Overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Text */}
            <span className="relative z-10">Donate Now</span>
          </Link>
        </motion.div>

        {/* Trust Line (NEW - makes it feel real) */}
        <p className={`${cabin.className} text-sm text-gray-400 mt-6`}>
          100% transparency • Direct impact • Trusted support
        </p>
      </motion.div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { motion } from "framer-motion";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface ChapterProps {
  label: string;
  number: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

function Chapter({ label, number, title, paragraphs, image, imageAlt, reverse }: ChapterProps) {
  return (
    <div>
      {/* ── MOBILE ONLY: number → title (hidden on desktop) ── */}
      <div className="lg:hidden mb-5">
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
        >
          <span className={`${caveat.className} text-[#00715D] text-5xl font-bold leading-none`}>{number}</span>
          <div className="h-px flex-1 bg-gray-200" />
          <span className={`${cabin.className} text-gray-400 text-xs tracking-widest uppercase`}>{label}</span>
        </motion.div>

        <motion.h2
          className={`${nunito.className} text-2xl font-extrabold text-[#0A2520]`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-40px" }}
        >
          {title}
        </motion.h2>
      </div>

      {/* ── SHARED ROW: desktop alternating layout, mobile stacked ── */}
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}>

        {/* Image */}
        <motion.div
          className="w-full lg:w-[45%] flex-shrink-0"
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
            <Image
              src={image}
              alt={imageAlt}
              fill
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        </motion.div>

        {/* Text block - full on desktop, paragraphs-only on mobile */}
        <div className="w-full lg:w-[55%]">
          {/* Number + label + heading - DESKTOP ONLY */}
          <div className="hidden lg:block">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <span className={`${caveat.className} text-[#00715D] text-5xl font-bold leading-none`}>{number}</span>
              <div className="h-px flex-1 bg-gray-200" />
              <span className={`${cabin.className} text-gray-400 text-xs tracking-widest uppercase`}>{label}</span>
            </motion.div>

            <motion.h2
              className={`${nunito.className} text-2xl md:text-3xl font-extrabold text-[#0A2520] mb-5`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
            >
              {title}
            </motion.h2>
          </div>

          {/* Paragraphs - always visible */}
          <div className="space-y-4 mt-5 lg:mt-0">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className={`${cabin.className} text-gray-600 text-base md:text-lg leading-relaxed`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 + i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-60px" }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const chapters: ChapterProps[] = [
  {
    number: "01",
    label: "Chapter One",
    title: "The School Assignment",
    paragraphs: [
      "One day, Master Atharv Sushant Patil returned home from school with a project question his teacher had given the class:",
      "\"What can you do for the education of underprivileged children? What are their needs, and how can you help them?\"",
      "The question seemed simple. But it deeply touched Atharv's heart in a way no question had before.",
    ],
    image: "/Images/story-1.png",
    imageAlt: "A young student at her school desk, studying",
    reverse: false,
  },
  {
    number: "02",
    label: "Chapter Two",
    title: "The Conversation",
    paragraphs: [
      "After coming home, Atharv sat down with his parents and began sharing what was on his mind.",
      "\"Mom, many children in school face so many difficulties. Some have no notebooks, no pencils. Some carry torn school bags. And for some, even paying school fees is almost impossible for their parents.\"",
      "Behind his words was one innocent, earnest question - \"Can we do something for these children?\"",
    ],
    image: "/Images/story-2.png",
    imageAlt: "A family in a caring conversation at home",
    reverse: true,
  },
  {
    number: "03",
    label: "Chapter Three",
    title: "The Decision",
    paragraphs: [
      "That very evening, a small decision was made - to help underprivileged children in whatever way possible.",
      "From this single, sincere moment of compassion, the Anuja Sushant Patil Global Foundation was born.",
    ],
    image: "/Images/story-3.png",
    imageAlt: "Hands coming together in a moment of collective resolve",
    reverse: false,
  },
];

export default function StoryNarrative() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
        {chapters.map((chapter) => (
          <Chapter key={chapter.number} {...chapter} />
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function StorySignature() {
  const { ref, isIntersecting } = useIntersectionObserver({ rootMargin: "-100px" });

  return (
    <section ref={ref} className="relative z-10 max-w-3xl mx-auto text-center px-6 pb-20">
      <div
        className={`bg-white p-12 rounded-2xl shadow-xl shadow-black/5 transition-all duration-[800ms] ease-out ${
          isIntersecting ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <p className="font-cabin uppercase text-xs tracking-widest text-gray-400 font-bold mb-6">
          The End is Just the Beginning
        </p>
        <p className="font-nunito text-2xl md:text-4xl text-[#0A2520] font-extrabold leading-tight mb-12">
          "Every child has the right to learn. When given the right opportunity, every child can achieve their dreams."
        </p>

        <div className="flex flex-col items-center">
          <p className="font-caveat text-[#00735C] text-5xl font-bold mb-4">
            Atharv Sushant Patil
          </p>
          <div className="h-px w-24 bg-[#00b874] mb-3" />
          <p className="font-cabin text-gray-500 font-semibold tracking-wide uppercase text-sm">
            The spark behind ASPGF
          </p>
        </div>
      </div>
    </section>
  );
}

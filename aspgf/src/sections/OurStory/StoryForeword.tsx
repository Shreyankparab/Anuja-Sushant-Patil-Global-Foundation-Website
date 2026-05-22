"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function StoryForeword() {
  const { ref, isIntersecting } = useIntersectionObserver({ rootMargin: "-100px" });

  return (
    <section ref={ref} className="relative z-10 py-20 px-6 max-w-4xl mx-auto text-center">
      <div
        className={`transition-all duration-[1000ms] ease-out ${
          isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-6xl text-[#00735C]/20 leading-none mb-4 font-caveat text-left">&ldquo;</div>
        <p className="font-caveat text-[32px] md:text-[44px] font-bold text-[#0A2520] leading-snug">
          Every great initiative begins with a <span className="text-[#00735C]">small, innocent thought.</span>
        </p>
        <div className="text-6xl text-[#00735C]/20 leading-none mt-2 font-caveat text-right -translate-y-6">&rdquo;</div>
      </div>
    </section>
  );
}

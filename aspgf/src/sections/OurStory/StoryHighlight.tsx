"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Heart } from "lucide-react";

export default function StoryHighlight() {
  const { ref, isIntersecting } = useIntersectionObserver({ rootMargin: "-100px" });

  return (
    <section ref={ref} className="relative z-10 w-full bg-[#0A2520] text-white py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex flex-col items-center text-center transition-all duration-[1000ms] ease-out ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
          }`}
        >
          <Heart className="w-10 h-10 text-[#00b874] mb-8 fill-[#00b874]" />
          <h3 className="font-caveat text-[#00b874] text-3xl md:text-5xl mb-6">
            A moment that changed everything
          </h3>

          <div className="font-cabin space-y-8 text-lg md:text-2xl leading-relaxed text-[#FAF9F6]/90 font-light max-w-3xl">
            <p>
              Among the children who received early support was a young girl whose parents had decided to pull her out of school. They simply could not afford the fees and saw no other way.
            </p>
            <p>
              When our foundation stepped in and paid her fees, their reaction was indescribable. Tears of absolute joy filled the parents' eyes. A new ray of hope began to shine  -  not just for their daughter's education, but for their entire family's belief in a better future.
            </p>
            <p className="font-nunito text-xl md:text-3xl font-bold italic text-white leading-snug pt-6">
              "Witnessing those tears of joy  -  that single moment made us realize this small decision could change countless lives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

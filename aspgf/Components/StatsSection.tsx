"use client";

import React, { useEffect, useRef } from "react";
import { GraduationCap, Users, HandHeart } from "lucide-react";
import { Nunito, Cabin } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const cabin = Cabin({ subsets: ["latin"] });

const statsData = [
  {
    id: 1,
    icon: <GraduationCap className="w-8 h-8 text-[#00735C]" />,
    prefix: "₹",
    value: 10,
    suffix: "+ Lakhs",
    label: "Scholarships Provided",
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-[#00735C]" />,
    prefix: "",
    value: 2200,
    suffix: "+",
    label: "Peoples Benefited",
  },
  {
    id: 3,
    icon: <HandHeart className="w-8 h-8 text-[#00735C]" />,
    prefix: "₹",
    value: 5,
    suffix: "+ Lakhs",
    label: "Essentials Donated",
  },
];

const Counter = ({ target, duration = 2000, trigger }: { target: number, duration?: number, trigger: boolean }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return <>{count}</>;
};

export default function StatsSection() {
  const [hasIntersected, setHasIntersected] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24">
      {statsData.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex flex-col items-center transition-all duration-1000 transform ${hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#00735C]/30 flex items-center justify-center mb-6 shadow-sm">
            {stat.icon}
          </div>

          <div className={`${nunito.className} text-4xl md:text-5xl font-black text-[#1A2E35] mb-2 flex items-baseline`}>
            {stat.prefix && <span>{stat.prefix}</span>}
            <span>
              <Counter target={stat.value} trigger={hasIntersected} />
            </span>
            <span>{stat.suffix}</span>
          </div>

          <p className={`${cabin.className} text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

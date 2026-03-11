"use client";

import Image from "next/image";
import { Caveat, Nunito, Cabin } from "next/font/google";
import React, { useEffect } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const handleScroll = () => {
    const element = document.getElementById("our-work");
    if (element) {
      // offset calculation (optional but helpful if you have a fixed header)
      const topOffset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[90vh] overflow-hidden flex items-center"
    >
      {/* BACKGROUND IMAGE */}
      <div className={`absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out ${isLoaded ? 'scale-100' : 'scale-110'}`}>
        {/* Desktop Hero Image */}
        <Image
          src="/Images/hero5.svg"
          alt="Hero Background Desktop"
          fill
          priority
          className="hidden md:block object-cover"
        />
        {/* Mobile Hero Image */}
        <Image
          src="/Images/mobile-hero-img.svg"
          alt="Hero Background Mobile"
          fill
          priority
          className="block md:hidden object-cover"
        />
        {/* Optional overlay for better text contrast if needed */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1440px] w-full px-6 md:px-10 lg:pl-[120px]">
        <div className="max-w-3xl text-left">
          {/* SUBTITLE */}
          <p
            className={`${caveat.className} text-[#38b6a1] text-2xl md:text-3xl font-bold mb-4 tracking-wide transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Always Donate for Humanity
          </p>

          {/* TITLE */}
          <h1
            className={`${nunito.className} text-4xl md:text-6xl font-extrabold leading-[1.15] text-white mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="text-[#A828C6]">Empower change</span>, one act
            <br className="hidden md:block" /> of kindness at a time
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`${cabin.className} text-lg md:text-xl text-white/90 mt-4 md:mt-6 font-medium leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Working together to uplift communities and create lasting change.
          </p>

          {/* BUTTON */}
          <div className={`mt-8 md:mt-10 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={handleScroll}
              className={`${cabin.className} cursor-pointer px-10 py-4 font-extrabold text-white rounded-full text-lg bg-gradient-to-r from-[#00735C] to-[#00b874] shadow-lg shadow-[#00735C]/20 hover:shadow-xl hover:shadow-[#00735C]/40 hover:-translate-y-1 transition-all duration-300 transform tracking-wider uppercase`}
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

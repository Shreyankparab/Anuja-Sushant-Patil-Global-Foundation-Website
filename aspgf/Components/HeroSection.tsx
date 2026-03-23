"use client";

import Image from "next/image";
import { Caveat, Nunito, Cabin } from "next/font/google";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const slides = [
  {
    id: 1,
    subtitle: "Always Donate for Humanity",
    title: (
      <>
        <span className="text-[#A828C6]">Empower change</span>, one act
        <br className="hidden md:block" /> of kindness at a time
      </>
    ),
    description: '"Leading with Integrity, Serving with Empathy."',
    buttonText: "DISCOVER MORE",
    imageDesktop: "/Images/hero5.svg",
    imageMobile: "/Images/mobile-hero-img.svg",
    overlay: "bg-black/30",
    scrollId: "our-work",
    theme: "teal"
  },
  {
    id: 2,
    subtitle: "A Small Thought, A Big Mission",
    title: "Our Inspiring Beginning",
    description: "The story of a small thought that became a big mission",
    buttonText: "Read Our Story",
    imageDesktop: "/Images/story-hero-bg.png",
    imageMobile: "/Images/story-hero-bg.png",
    overlay: "bg-gradient-to-r from-[#003366]/90 via-[#003366]/50 to-transparent",
    link: "/our-story",
    theme: "blue"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startAutoPlay(); // Reset timer on manual click
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay(); // Reset timer on manual click
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay(); // Reset timer on manual click
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    startAutoPlay();
    return () => {
      clearTimeout(timer);
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [startAutoPlay]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full h-[90vh] overflow-hidden flex items-center group">
      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* BACKGROUND IMAGE */}
          <div className={`absolute inset-0 transition-transform duration-[3000ms] ease-out ${isLoaded && index === currentSlide ? 'scale-100' : 'scale-110'}`}>
            <Image
              src={slide.imageDesktop}
              alt={`Hero Slide ${slide.id}`}
              fill
              priority
              className="hidden md:block object-cover"
            />
            <Image
              src={slide.imageMobile}
              alt={`Hero Slide ${slide.id} Mobile`}
              fill
              priority
              className="block md:hidden object-cover"
            />
            <div className={`absolute inset-0 ${slide.overlay}`}></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-20 max-w-[1440px] w-full h-full flex items-center px-6 md:px-10 lg:pl-[120px] mx-auto">
            <div className="max-w-3xl text-left">
              {/* SUBTITLE */}
              {slide.subtitle && (
                <p
                  className={`${caveat.className} text-[#38b6a1] text-2xl md:text-3xl font-bold mb-4 tracking-wide transition-all duration-1000 ${
                    index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  {slide.subtitle}
                </p>
              )}

              {/* TITLE */}
              <h1
                className={`${nunito.className} text-4xl md:text-6xl font-extrabold leading-[1.15] text-white mb-6 transition-all duration-1000 delay-200 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {slide.title}
              </h1>

              {/* DESCRIPTION */}
              <p
                className={`${cabin.className} text-lg md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {slide.description}
              </p>

              {/* BUTTON */}
              <div
                className={`mt-8 md:mt-10 transition-all duration-1000 delay-600 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                {slide.link ? (
                  <Link
                    href={slide.link}
                    className={`${cabin.className} inline-block cursor-pointer px-10 py-4 font-extrabold text-white rounded-full text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 tracking-wider uppercase bg-gradient-to-r from-[#00735C] to-[#00b874] shadow-[#00735C]/20 hover:shadow-[#00735C]/40`}
                  >
                    {slide.buttonText}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleScroll(slide.scrollId!)}
                    className={`${cabin.className} cursor-pointer px-10 py-4 font-extrabold text-white rounded-full text-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 tracking-wider uppercase bg-gradient-to-r from-[#00735C] to-[#00b874] shadow-[#00735C]/20 hover:shadow-[#00735C]/40`}
                  >
                    {slide.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* NAVIGATION ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-30 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-30 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-sm cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* PAGINATION DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full cursor-pointer ${
              index === currentSlide ? "w-10 h-3 bg-[#38b6a1]" : "w-3 h-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

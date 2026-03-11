"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutHero() {
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="relative w-full h-[100dvh] md:h-[650px] overflow-hidden flex items-end md:items-center pb-20 md:pb-0"
        >
            {/* Background Image - Full width and height */}
            <div className={`absolute inset-0 z-0 transition-transform duration-[3000ms] ease-out w-full h-full ${isLoaded ? 'scale-100' : 'scale-110'}`}>
                {/* Desktop Background Image */}
                <Image
                    src="/Images/About_Hero.webp"
                    alt="About Us Hero"
                    fill
                    className="hidden md:block object-cover object-center"
                    priority
                />
                {/* Mobile Background Image */}
                <Image
                    src="/Images/hero-image-about-us.svg"
                    alt="Happy children in community mobile"
                    fill
                    className="block md:hidden object-cover object-center"
                    priority
                />
                {/* Gradient overlay - smoother transition and better legibility */}
                <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/100 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/95 md:via-black/20 md:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:pl-[120px] lg:pr-10">
                <div className="max-w-4xl">
                    {/* Section Tag - 'About Us' moved to top for better hierarchy */}
                    <div className={`flex flex-col mb-4 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className={`${caveat.className} text-[#00b874] text-[32px] md:text-[42px] leading-none mb-1`}>
                            About Us
                        </p>
                        <div className="h-[3px] w-24 bg-[#00735C] rounded-full"></div>
                    </div>

                    {/* Main Headline - Bold and clean */}
                    <h1 className={`${nunito.className} text-white text-[38px] sm:text-[48px] md:text-[72px] font-[900] leading-[1.05] mb-8 tracking-tighter transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Committed to Purpose,<br />
                        Guided by <span className="text-[#00b874]">Integrity</span>
                    </h1>

                    {/* Description Paragraph - Sentence case and better spacing */}
                    <div className={`max-w-2xl transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="h-[2px] w-12 bg-white/30 mb-6 hidden md:block"></div>
                        <p className={`${cabin.className} text-white/90 text-[18px] md:text-[24px] font-medium leading-[1.6] tracking-wide`}>
                            Working towards inclusive development through education, outreach, and community engagement for a sustainable tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

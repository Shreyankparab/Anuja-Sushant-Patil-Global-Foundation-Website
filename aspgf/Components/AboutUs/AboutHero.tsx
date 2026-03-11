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
                {/* Gradient overlay to match the high-contrast aesthetic in the screenshot */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/20 md:to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-6 md:px-12 lg:pl-[120px] lg:pr-10">
                <div className="max-w-4xl mx-auto md:mx-0">
                    {/* Main Heading - Large and bold for mobile impact */}
                    <h1 className={`${nunito.className} text-white text-[38px] sm:text-[44px] md:text-[64px] font-extrabold leading-[1.1] mb-6 tracking-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Committed to Purpose,<br />
                        Guided by Integrity
                    </h1>

                    {/* Decorative White Line (matches screenshot spacing) */}
                    <div className={`h-[3px] w-full max-w-[320px] md:max-w-md bg-white opacity-100 mb-8 rounded-full transition-all duration-1000 delay-200 ${isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}></div>

                    {/* About Us Label - Signature Caveat font, large for mobile */}
                    <p className={`${caveat.className} text-white text-[56px] md:text-[64px] mb-4 font-normal transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        About Us
                    </p>

                    {/* Teal Accent Line (Design separator) */}
                    <div className={`h-[4px] w-full max-w-[280px] md:max-w-[400px] bg-[#00735C] opacity-100 mb-8 rounded-full transition-all duration-1000 delay-600 ${isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} origin-left`}></div>

                    {/* Description Paragraph - Clean and readable */}
                    <p className={`${cabin.className} text-white text-[16px] sm:text-[18px] md:text-[22px] font-medium leading-[1.5] max-w-2xl transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Working Towards Inclusive Development Through Education, Outreach, And Community Engagement
                    </p>
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-md transition-all duration-500">
            <div className="flex flex-col items-center gap-6 animate-float">

                {/* Minimalist Techy Loader Ring */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 border-t-2 border-r-2 border-[#00715D] rounded-full animate-spin" />

                    {/* Static Inner Ring */}
                    <div className="absolute inset-2 border border-[#00715D]/10 rounded-full" />

                    {/* Logo Center */}
                    <div className="relative w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center p-2">
                        <Image
                            src="/Images/loader-peacock.webp"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Minimalist Branding */}
                <div className="flex flex-col items-center gap-1">
                    <h2 className={`${nunito.className} text-[#073D30] text-sm font-extrabold tracking-[0.2em] uppercase`}>
                        ASPGF
                    </h2>
                    <div className="flex gap-1.5 mt-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#00715D] animate-bounce"
                                style={{ animationDelay: `${i * 0.15}s` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

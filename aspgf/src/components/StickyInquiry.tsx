"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquareText } from "lucide-react";
import { Nunito, Cabin } from "next/font/google";
import DonateForm from "@/sections/DonateUs/DonateForm";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const themeColors: Record<string, string> = {
    "/": "#00735C",
    "/about-us": "#00735C",
    "/our-work": "#00735C",
    "/news": "#00735C",
    "/gallery": "#00735C",
    "/impact": "#00735C",
    "/contact-us": "#00735C",
    "/donate-us": "#00735C",
};

export default function StickyInquiry() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [themeColor, setThemeColor] = useState("#1E40AF");

    useEffect(() => {
        // Find matching color based on path prefix
        const matchingPath = Object.keys(themeColors).find(path =>
            path === "/" ? pathname === "/" : pathname.startsWith(path)
        );
        const color = matchingPath ? themeColors[matchingPath] : themeColors["/"];
        setThemeColor(color);
    }, [pathname]);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Auto-open on scroll
    useEffect(() => {
        let hasAutoOpened = false;

        const handleScroll = () => {
            // Check if user scrolled more than 500px or 20% of the page
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
            
            if (!hasAutoOpened && (window.scrollY > 500 || scrollPercent > 20)) {
                setIsOpen(true);
                hasAutoOpened = true;
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Sticky Button */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9995] flex flex-col items-end">
                <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    onClick={() => setIsOpen(true)}
                    style={{
                        backgroundColor: themeColor,
                        boxShadow: `0 10px 30px ${themeColor}40`
                    }}
                    className="relative overflow-hidden flex items-center gap-3 py-6 px-3 rounded-l-2xl text-white group cursor-pointer"
                >
                    {/* Diagonal Shine Effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute -top-[200%] -left-[200%] w-[400%] h-[400%] bg-gradient-to-br from-transparent via-white/40 to-transparent transition-none group-hover:top-[100%] group-hover:left-[100%] group-hover:transition-all group-hover:duration-1000 group-hover:ease-in-out"></div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <MessageSquareText size={20} className="mb-2" />
                        <span className={`${nunito.className} font-black uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180 text-sm whitespace-nowrap`}>
                            Inquiry Now
                        </span>
                    </div>
                </motion.button>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[10000] flex justify-end items-start p-4 md:p-6 overflow-hidden pointer-events-none">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 50, y: -20, scale: 0.95 }}
                            className="relative w-full max-w-lg bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto"
                        >
                            {/* Form Section */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar relative">
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all group shadow-sm"
                                >
                                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <div className="mb-6">
                                    <span className={`${cabin.className} text-[#00735C] font-black uppercase tracking-[0.3em] text-[10px] mb-2 block`}>Get started</span>
                                    <h2 className={`${nunito.className} text-2xl font-black text-[#1A2E35] mb-2 leading-tight`}>
                                        Inquiry Form
                                    </h2>
                                    <div className="w-10 h-1 bg-[#00735C] rounded-full" />
                                </div>

                                <div className="w-full">
                                    <DonateForm />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

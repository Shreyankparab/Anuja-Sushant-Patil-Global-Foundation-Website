"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Phone, Mail, MapPin, Menu, X, HandHeart } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/" },

        { name: "About Us", href: "/about-us" },
        { name: "Our Work", href: "/our-work" },
        { name: "News", href: "/news" },
        { name: "Gallery", href: "/gallery" },
        { name: "Impact", href: "/impact" },
        { name: "Contact Us", href: "/contact-us" },

    ];

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                const currentScrollY = window.scrollY;

                // Threshold to prevent flickering (e.g., 50px)
                if (Math.abs(currentScrollY - lastScrollY) < 10) return;

                if (window.innerWidth >= 1000) {
                    if (currentScrollY > lastScrollY && currentScrollY > 150) {
                        setIsVisible(false); // Scrolling down
                    } else {
                        setIsVisible(true); // Scrolling up
                    }
                    setLastScrollY(currentScrollY);
                } else {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden"; // Also lock html tag
            document.body.style.touchAction = "none"; // Disable touch scroll
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.touchAction = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`font-cabin w-full bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-[10020] transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "nav:-translate-y-full"}`}
            >
                {/* LOGO - Hanging over Top and Nav Bar */}
                <div className="hidden nav:block absolute left-6 min-[1200px]:left-10 top-1/2 -translate-y-1/2 z-[10025]">
                    <div className="relative w-52 h-20 min-[1200px]:w-80 min-[1200px]:h-32">
                        <Link href="/">
                            <Image
                                src="/images/aspgf-logo.webp"
                                alt="ASPGF Logo"
                                fill
                                className="object-contain cursor-pointer"
                                priority
                            />
                        </Link>
                    </div>
                </div>

                {/* ================= TOP BAR ================= */}
                <div className="hidden nav:flex w-full px-6 lg:px-10 h-12 min-[1200px]:h-16 items-center justify-between relative">
                    <div>{/* Empty space for logo */}</div>

                    {/* CONTACT INFO */}
                    <div className="hidden nav:flex items-center gap-3 min-[1200px]:gap-6 ml-auto text-[11px] min-[1200px]:text-[12px]">
                        {/* CIN Number */}
                        <div className="flex items-center gap-1.5 min-[1200px]:gap-2">
                            <div className="w-7 h-7 min-[1200px]:w-8 min-[1200px]:h-8 rounded-full bg-[#00715D]/10 flex items-center justify-center shrink-0">
                                <span className="font-nunito text-[#00715D] font-black text-[9px] min-[1200px]:text-[10px]">CIN</span>
                            </div>
                            <div>
                                <p className="hidden min-[1200px]:block font-nunito text-gray-400 font-bold uppercase tracking-tighter">Corporate ID</p>
                                <p className="font-cabin font-extrabold text-[#1A2E35] text-[11px] min-[1200px]:text-[12px] tracking-tight">U85499PN2025NPL237590</p>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-200" />

                        {/* Phone */}
                        <div className="flex items-center gap-1.5 min-[1200px]:gap-2">
                            <Phone size={13} className="text-[#00715D] min-[1200px]:w-3.5 min-[1200px]:h-3.5 shrink-0" />
                            <div>
                                <p className="hidden min-[1200px]:block font-nunito text-gray-400 font-bold uppercase tracking-tighter">Helpline</p>
                                <a
                                    href="tel:+919011553365"
                                    className="hover:underline"
                                >
                                    <p
                                        className="font-cabin font-extrabold text-[#1A2E35] text-[11px] min-[1200px]:text-[12px]"
                                    >
                                        9011553365
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-200" />

                        {/* Email */}
                        <div className="flex items-center gap-1.5 min-[1200px]:gap-2">
                            <Mail size={13} className="text-[#00715D] min-[1200px]:w-3.5 min-[1200px]:h-3.5 shrink-0" />
                            <div>
                                <p className="hidden min-[1200px]:block font-nunito text-gray-400 font-bold uppercase tracking-tighter">Send email</p>
                                <a
                                    href="mailto:project.director@aspgf.org"
                                    className="hover:underline"
                                >
                                    <p
                                        className="font-cabin font-extrabold text-[#1A2E35] text-[11px] min-[1200px]:text-[12px] lowercase"
                                    >
                                        project.director<span className="font-nunito">@</span>aspgf.org
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="h-8 w-px bg-gray-200" />

                        {/* Location */}
                        <div className="flex items-center gap-1.5 min-[1200px]:gap-2">
                            <MapPin size={13} className="text-[#00715D] min-[1200px]:w-3.5 min-[1200px]:h-3.5 shrink-0" />
                            <div>
                                <p className="hidden min-[1200px]:block font-nunito text-gray-400 font-bold uppercase tracking-tighter">Balewadi</p>
                                <p
                                    className="font-cabin font-extrabold text-[#1A2E35] text-[11px] min-[1200px]:text-[12px]"
                                >
                                    Pune, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= NAV BAR ================= */}
                <div className="hidden nav:flex w-full items-stretch">
                    {/* LEFT SPACER (aligns curve visually) */}
                    <div className="hidden nav:block w-[4%] min-[1200px]:w-[15%] ml-52 min-[1200px]:ml-60" />

                    <nav className="bg-[#00735C] flex-1 flex items-center pl-12 pr-4 min-[1200px]:pl-16 min-[1200px]:pr-12 rounded-tl-[45px] h-12 min-[1200px]:h-16">
                        <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-16 text-white font-bold text-[13.5px] lg:text-[14px] xl:text-[15px] tracking-wide min-[1200px]:w-full min-[1200px]:justify-between">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li
                                        key={link.name}
                                        className="transition-colors hover:scale-110 hover:duration-100 group"
                                    >
                                        <Link
                                            href={link.href}
                                            className={`cursor-pointer whitespace-nowrap transition-all duration-300 ${isActive
                                                ? "text-white font-extrabold"
                                                : "text-white/70 hover:text-white font-bold"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* DONATE BUTTON */}
                    <Link
                        href="/donate-us"
                        className="h-12 min-[1200px]:h-16 px-5 lg:px-8 min-[1200px]:px-10 bg-[#A828C6] hover:bg-[#9122AB] transition-all flex items-center gap-2 text-white font-black text-xs lg:text-sm uppercase tracking-widest cursor-pointer whitespace-nowrap"
                    >
                        <HandHeart size={22} strokeWidth={2.5} />
                        <span>Donate</span>
                    </Link>

                </div>

                {/* ================= MOBILE HEADER ================= */}
                <div className="nav:hidden flex items-center justify-between px-6 md:px-10 h-20 bg-white shadow-sm">
                    <Link href="/" className="relative w-56 h-14 md:w-64 md:h-16">
                        <Image
                            src="/images/aspgf-logo.webp"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-[#00735C] hover:bg-gray-100 rounded-lg transition-all"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </header>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`nav:hidden fixed inset-0 bg-[#00000080] backdrop-blur-sm transition-all duration-300 z-[10010] ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />            <div
                className={`nav:hidden fixed top-0 right-0 h-full w-[85%] md:w-[400px] bg-white shadow-2xl transition-transform duration-500 ease-in-out z-[10015] ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-8 pt-24 flex flex-col h-full">
                    <ul className="flex flex-col gap-8 mb-12">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="font-nunito text-xl font-extrabold transition-colors flex items-center justify-between group text-[#1A2E35] nav:hover:text-[#00735C]"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                        <div
                                            className={`w-2 h-2 rounded-full bg-[#00735C] transition-opacity ${isActive ? "opacity-100" : "opacity-0 nav:group-hover:opacity-100"
                                                }`}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-auto space-y-6">
                        <Link
                            href="/donate-us"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full py-4 bg-[#A828C6] text-white rounded-2xl flex items-center justify-center gap-2 font-black uppercase tracking-[0.1em] shadow-lg shadow-purple-500/20"
                        >
                            <HandHeart size={22} strokeWidth={2.5} />
                            <span>Donate Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

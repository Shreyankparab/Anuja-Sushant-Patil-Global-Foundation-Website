"use client";

import React from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { Banknote, Building2, CreditCard, Landmark, X, HandHeart } from "lucide-react";
import DonateForm from "./DonateForm";
import Image from "next/image";
import { useState } from "react";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function DonateUsComponent() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <p className={`${caveat.className} text-[#00735C] text-3xl mb-4`}>
                        Make a Difference
                    </p>
                    <h1 className={`${nunito.className} text-[#0A2520] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight`}>
                        Your Support Fuels Our Mission for Change
                    </h1>
                    <p className={`${cabin.className} text-gray-600 text-lg leading-relaxed`}>
                        Join us in our journey to empower communities and create a lasting impact. Your generous contribution helps us provide education, healthcare, and support to those who need it most.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Side: Account Details & Why Donate */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        <div>
                            <h2 className={`${nunito.className} text-2xl font-extrabold text-[#1A2E35] mb-6 flex items-center gap-3`}>
                                <div className="w-10 h-10 rounded-full bg-[#D5EBE1] flex items-center justify-center">
                                    <Landmark className="text-[#00735C]" size={20} />
                                </div>
                                Bank Account Details
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Bank Name */}
                                <div className="bg-[#f8faf9] p-6 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md">
                                    <Building2 className="text-[#00735C] mb-3" size={24} />
                                    <p className={`${nunito.className} text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-1`}>Bank Name</p>
                                    <p className={`${cabin.className} text-[#1A2E35] font-bold text-base`}>HDFC BANK LTD</p>
                                </div>

                                {/* Account Holder */}
                                <div className="bg-[#f8faf9] p-6 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md">
                                    <CreditCard className="text-[#00735C] mb-3" size={24} />
                                    <p className={`${nunito.className} text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-1`}>Account Holder</p>
                                    <p className={`${cabin.className} text-[#1A2E35] font-bold text-base`}>Anuja Sushant Patil Global Foundation</p>
                                </div>

                                {/* Account Number */}
                                <div className="bg-[#f8faf9] p-6 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md">
                                    <Banknote className="text-[#00735C] mb-3" size={24} />
                                    <p className={`${nunito.className} text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-1`}>Account Number</p>
                                    <p className={`${cabin.className} text-[#1A2E35] font-extrabold text-lg tracking-wider`}>50200110314690</p>
                                </div>

                                {/* IFSC Code */}
                                <div className="bg-[#f8faf9] p-6 rounded-2xl border border-[#e8f1ec] transition-all hover:shadow-md">
                                    <Landmark className="text-[#00735C] mb-3" size={24} />
                                    <p className={`${nunito.className} text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-1`}>IFSC Code</p>
                                    <p className={`${cabin.className} text-[#1A2E35] font-extrabold text-lg tracking-wider`}>HDFC0002453</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#00735C] rounded-[32px] p-8 md:p-10 text-white relative overflow-hidden transition-all hover:shadow-xl hover:shadow-[#00735C]/20">
                            <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

                            <div className="flex flex-col md:flex-row gap-8 relative z-10 items-start">
                                {/* Left Content: Text + UPI */}
                                <div className="w-full md:w-full flex flex-col gap-10">
                                    <div className="md:w-[55%]">
                                        <h3 className={`${nunito.className} text-2xl font-bold mb-4`}>Support the Change</h3>
                                        <p className={`${cabin.className} text-white/90 mb-0 text-lg leading-relaxed italic`}>
                                            &quot;Your small contribution can bring a big change. Every single rupee donated goes directly towards empowering those in need and creating a better tomorrow.&quot;
                                        </p>
                                    </div>

                                    <a
                                        href="upi://pay?pa=anujasushantpatilglo.82069939@hdfcbank&pn=Anuja%20Sushant%20Patil%20Global%20Foundation"
                                        className="flex items-center gap-4 group/upi w-full md:w-fit hover:opacity-90 transition-all overflow-hidden"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover/upi:bg-white/30 transition-colors flex-shrink-0">
                                            <Landmark size={24} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Pay via UPI</p>
                                            <p className="font-bold text-sm md:text-lg break-all md:break-normal">anujasushantpatilglo.82069939@hdfcbank</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Right: QR Image (Absolute on Desktop for Size) */}
                                <div className="w-full md:absolute md:top-[-20px] md:right-0 md:w-auto flex flex-col items-center justify-center">
                                    <div
                                        onClick={() => setIsQRModalOpen(true)}
                                        className="bg-white p-5 rounded-[32px] shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer w-full max-w-[280px]"
                                    >
                                        <div className="relative p-2 bg-gray-50 rounded-2xl border border-gray-100">
                                            <Image
                                                src="/Images/qr-code-aspgf.png"
                                                alt="Donation QR Code"
                                                width={260}
                                                height={260}
                                                className="rounded-xl w-full h-auto"
                                            />
                                        </div>
                                        <p className={`${nunito.className} text-[#00735C] text-xs font-black text-center mt-4 uppercase tracking-[0.2em]`}>Scan to Support</p>
                                    </div>

                                    {/* Mobile Click to Pay Button */}
                                    <a
                                        href="upi://pay?pa=anujasushantpatilglo.82069939@hdfcbank&pn=Anuja%20Sushant%20Patil%20Global%20Foundation"
                                        className="md:hidden mt-8 w-full max-w-[280px] py-4 bg-white text-[#00735C] rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all border-2 border-transparent"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#00735C]/10 flex items-center justify-center">
                                            <Landmark size={18} />
                                        </div>
                                        <span>Donate Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Donation Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                            <div className="mb-8">
                                <h2 className={`${nunito.className} text-3xl font-extrabold text-[#1A2E35] mb-2`}>Inquiry</h2>
                                <p className={`${cabin.className} text-gray-500`}>Fill out this form and we'll get in touch with you regarding your contribution.</p>
                            </div>
                            <DonateForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* QR Modal Overlay */}
            {isQRModalOpen && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6"
                    onClick={() => setIsQRModalOpen(false)}
                >
                    {/* Backdrop - lightened opacity for better blur visibility of the website */}
                    <div className="absolute inset-0 bg-[#0A2520]/60 backdrop-blur-[12px] transition-opacity duration-300 ease-out qr-backdrop-fade"></div>

                    {/* Modal Content container with strict overflow-hidden to keep all elements inside */}
                    <div
                        className="relative bg-white rounded-[40px] md:rounded-[56px] shadow-2xl max-w-[480px] w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out qr-modal-zoom flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
                            <button
                                onClick={() => setIsQRModalOpen(false)}
                                className="w-10 h-10 md:w-12 md:h-12 bg-[#00735C] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#008a73] active:scale-90 transition-all group"
                            >
                                <X size={24} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Scrollable area within the fixed container */}
                        <div className="overflow-y-auto no-scrollbar p-6 md:p-10 flex flex-col items-center">
                            <div className={`${nunito.className} text-center mb-6`}>
                                <h3 className="text-xl md:text-2xl font-[900] text-[#0A2520] mb-1 tracking-tight">Scan & Support</h3>
                                <p className="text-[#00735C] font-bold opacity-70 text-[12px] md:text-sm">Anuja Sushant Patil Global Foundation</p>
                            </div>

                            {/* QR Container - Increased size for Desktop */}
                            <div className="bg-[#f8faf9] p-4 md:p-8 rounded-[32px] border-2 border-[#D5EBE1] w-full md:w-[90%] aspect-square relative mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/Images/qr-code-aspgf.png"
                                        alt="Donation QR Code"
                                        fill
                                        className="object-contain p-2 rounded-[24px]"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-col gap-3">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 bg-[#f0f9f6] p-4 rounded-2xl border border-[#D5EBE1]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 h-8 relative flex-shrink-0 opacity-90">
                                            <Image
                                                src="/Icons/upi_logo_icon_169316.svg"
                                                alt="UPI Logo"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1 text-center sm:text-left">
                                        <p className="text-[9px] font-[900] uppercase tracking-widest text-[#00735C] opacity-60 mb-0.5">UPI ID</p>
                                        <p className="font-bold text-[12px] md:text-[14px] text-[#0A2520] break-all leading-tight">anujasushantpatilglo.82069939@hdfcbank</p>
                                    </div>
                                </div>

                                {/* Mobile: Pay Button | Desktop: Instructions */}
                                <div className="block md:hidden mt-1">
                                    <a
                                        href="upi://pay?pa=anujasushantpatilglo.82069939@hdfcbank&pn=Anuja%20Sushant%20Patil%20Global%20Foundation"
                                        className="w-full py-3.5 bg-[#00735C] text-white rounded-2xl flex items-center justify-center gap-3 font-[900] uppercase tracking-widest shadow-lg active:scale-95 transition-all text-xs"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                                            <HandHeart size={14} />
                                        </div>
                                        <span>Click to Pay Directly</span>
                                    </a>
                                </div>

                                <p className={`${cabin.className} hidden md:block text-center text-gray-400 text-[11px] font-bold mt-1 opacity-80 leading-relaxed`}>
                                    Open any UPI app like GPay, PhonePe, or Paytm to scan and donate.
                                </p>
                            </div>
                        </div>
                    </div>


                    <style jsx>{`
                        .qr-backdrop-fade {
                            animation: fadeIn 0.4s ease-out forwards;
                        }
                        .qr-modal-zoom {
                            animation: zoomIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                        }
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }

                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes zoomIn {
                            from { 
                                opacity: 0;
                                transform: scale(0.8) translateY(20px);
                            }
                            to { 
                                opacity: 1;
                                transform: scale(1) translateY(0);
                            }
                        }
                    `}</style>
                </div>
            )}
        </section>
    );
}

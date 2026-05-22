import React from "react";
import { Metadata } from "next";
import { Banknote, Building2, CreditCard, Landmark, X, HandHeart } from "lucide-react";
// import DonateForm from "./DonateForm";
import Image from "next/image";
export const metadata: Metadata = {
    title: "Donate Us",
    description: "Support the mission of Anuja Sushant Patil Global Foundation. Your contribution helps us empower communities and create lasting impact through education and health programs.",
    openGraph: {
        title: "Donate Us | Anuja Sushant Patil Global Foundation",
        description: "Join us in our journey of empowerment. Every contribution makes a significant difference in someone's life.",
        url: "https://aspgf.org/donate-us",
    },
};

export default function DonateUsPage() {
    return (
        <>
            <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className="font-caveat text-[#00735C] text-3xl mb-4">
                            Make a Difference
                        </p>
                        <h1 className="font-nunito text-[#0A2520] text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Your Support Fuels Our Mission for Change
                        </h1>
                        <p className="font-cabin text-gray-600 text-lg leading-relaxed">
                            Join us in our journey to empower communities and create a lasting impact. Your generous contribution helps us provide education, healthcare, and support to those who need it most.
                        </p>
                    </div>

                    <div className="flex flex-col min-[1200px]:flex-row items-stretch gap-10 min-[1200px]:gap-14">

                        {/* LEFT SIDE */}
                        <div className="w-full min-[1200px]:w-1/2 flex flex-col justify-between">
                            <h2 className="font-nunito text-2xl md:text-3xl font-extrabold text-[#1A2E35] mb-8 flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-[#D5EBE1] flex items-center justify-center flex-shrink-0">
                                    <Landmark className="text-[#00735C]" size={22} />
                                </div>
                                Bank Account Details
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                {/* Bank Name */}
                                <div className="bg-[#f8faf9] p-6 rounded-3xl border border-[#e8f1ec] hover:shadow-lg transition-all flex flex-col h-full">
                                    <Building2 className="text-[#00735C] mb-3" size={24} />
                                    <p className="font-nunito text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-2">
                                        Bank Name
                                    </p>
                                    <p className="font-cabin text-[#1A2E35] font-bold text-base leading-relaxed">
                                        HDFC BANK LTD
                                    </p>
                                </div>

                                {/* Account Holder */}
                                <div className="bg-[#f8faf9] p-6 rounded-3xl border border-[#e8f1ec] hover:shadow-lg transition-all flex flex-col h-full">
                                    <CreditCard className="text-[#00735C] mb-3" size={24} />
                                    <p className="font-nunito text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-2">
                                        Account Holder
                                    </p>
                                    <p className="font-cabin text-[#1A2E35] font-bold text-base leading-relaxed">
                                        Anuja Sushant Patil Global Foundation
                                    </p>
                                </div>

                                {/* Account Number */}
                                <div className="bg-[#f8faf9] p-6 rounded-3xl border border-[#e8f1ec] hover:shadow-lg transition-all flex flex-col h-full">
                                    <Banknote className="text-[#00735C] mb-3" size={24} />
                                    <p className="font-nunito text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-2">
                                        Account Number
                                    </p>
                                    <p className="font-cabin text-[#1A2E35] font-bold text-base leading-relaxed break-all">
                                        50200110314690
                                    </p>
                                </div>

                                {/* IFSC */}
                                <div className="bg-[#f8faf9] p-6 rounded-3xl border border-[#e8f1ec] hover:shadow-lg transition-all flex flex-col h-full">
                                    <Landmark className="text-[#00735C] mb-3" size={24} />
                                    <p className="font-nunito text-xs font-extrabold text-[#00735C] uppercase tracking-wider mb-2">
                                        IFSC Code
                                    </p>
                                    <p className="font-cabin text-[#1A2E35] font-bold text-base leading-relaxed">
                                        HDFC0002453
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="w-full min-[1200px]:w-1/2">

                            <div className="bg-[#00735C] rounded-[36px] p-6 md:p-8 h-full relative overflow-hidden hover:shadow-2xl transition-all">

                                <div className="absolute right-[-40px] bottom-[-40px] w-56 h-56 bg-white/5 rounded-full blur-3xl"></div>

                                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 h-full">

                                    {/* LEFT CONTENT */}
                                    <div className="w-full lg:w-[58%] flex flex-col justify-center gap-6">

                                        <div>
                                            <h3 className="font-nunito text-2xl md:text-3xl font-extrabold text-white mb-3">
                                                Support the Change
                                            </h3>

                                            <p className="font-cabin text-white/90 text-base md:text-lg leading-relaxed">
                                                "Your small contribution can bring a big change.
                                                Every rupee donated directly empowers lives and
                                                helps create a brighter tomorrow."
                                            </p>
                                        </div>

                                        {/* UPI */}
                                        <a
                                            href="upi://pay?pa=anujasushantpatilglo.82069939@hdfcbank&pn=Anuja%20Sushant%20Patil%20Global%20Foundation"
                                            className="flex items-center gap-4 group w-full"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-white/30 transition-all flex-shrink-0">

                                                <div className="relative w-6 h-3">
                                                    <Image
                                                        src="/images/icons/upi-icon.svg"
                                                        alt="UPI"
                                                        fill
                                                        className="object-contain brightness-0 invert"
                                                    />
                                                </div>

                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70 mb-1">
                                                    Pay via UPI
                                                </p>

                                                <p className="font-bold text-sm md:text-base break-all text-white">
                                                    anujasushantpatilglo.82069939@hdfcbank
                                                </p>
                                            </div>
                                        </a>

                                    </div>

                                    {/* QR SECTION */}
                                    <div className="w-full lg:w-[42%] flex justify-center items-center">

                                        <a
                                            href="#open-qr-modal"
                                            className="bg-white p-4 rounded-[24px] shadow-2xl hover:scale-105 transition-all duration-500 w-full max-w-[210px]"
                                        >
                                            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-2">
                                                <Image
                                                    src="/images/donate-now/qr-code-aspgf.png"
                                                    alt="Donation QR"
                                                    width={200}
                                                    height={200}
                                                    className="rounded-xl w-full h-auto"
                                                />
                                            </div>

                                            <p className="font-nunito text-[#00735C] text-xs font-black text-center mt-3 uppercase tracking-[0.2em]">
                                                Scan to Support
                                            </p>
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                {/* QR Modal Overlay via Native CSS :target selectors */}
                <div
                    id="open-qr-modal"
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6 opacity-0 pointer-events-none target:opacity-100 target:pointer-events-auto transition-opacity duration-300 ease-out"
                >
                    {/* Backdrop Close Click Layer */}
                    <a href="#inquiry-form" className="absolute inset-0 bg-[#0A2520]/60 backdrop-blur-[12px]"></a>

                    {/* Modal Content container */}
                    <div className="relative bg-white rounded-[40px] md:rounded-[56px] shadow-2xl max-w-[480px] w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out flex flex-col translate-y-4 open-modal-animation">

                        {/* Close Button Button */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 z-50">
                            <a
                                href="#inquiry-form"
                                className="w-10 h-10 md:w-12 md:h-12 bg-[#00735C] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#008a73] active:scale-90 transition-all group"
                            >
                                <X size={24} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-300" />
                            </a>
                        </div>

                        {/* Scrollable interior */}
                        <div className="overflow-y-auto no-scrollbar p-6 md:p-10 flex flex-col items-center">
                            <div className="font-nunito text-center mb-6">
                                <h3 className="text-xl md:text-2xl font-[900] text-[#0A2520] mb-1 tracking-tight">Scan & Support</h3>
                                <p className="text-[#00735C] font-bold opacity-70 text-[12px] md:text-sm">Anuja Sushant Patil Global Foundation</p>
                            </div>

                            {/* QR Container */}
                            <div className="bg-[#f8faf9] p-4 md:p-8 rounded-[32px] border-2 border-[#D5EBE1] w-full md:w-[90%] aspect-square relative mb-6 shadow-inner overflow-hidden flex items-center justify-center">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/donate-now/qr-code-aspgf.png"
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
                                                src="/images/icons/upi-icon.svg"
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

                                {/* Mobile Pay Button */}
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

                                <p className="font-cabin hidden md:block text-center text-gray-400 text-[11px] font-bold mt-1 opacity-80 leading-relaxed">
                                    Open any UPI app like GPay, PhonePe, or Paytm to scan and donate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Embedded UI Specific Scopes */}
                <style>{`
        #open-qr-modal:target .open-modal-animation {
          transform: scale(1) translateY(0);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
            </section>
        </>
    )
}

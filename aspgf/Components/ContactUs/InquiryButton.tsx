"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLoading } from "../Common/LoadingHandler";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function InquiryButton() {
  const router = useRouter();
  const { startLoading } = useLoading();

  return (
    <div className="mt-2">
      <button
        onClick={() => {
          startLoading();
          router.push("/donate-us#inquiry-form");
        }}
        className={`${cabin.className} group relative flex items-center gap-4 px-8 py-4 font-black text-white rounded-full text-lg bg-gradient-to-r from-[#006e57] to-[#00b874] shadow-xl shadow-[#006e57]/20 hover:shadow-[#00b874]/30 transition-all duration-500 transform hover:-translate-y-1 tracking-widest uppercase overflow-hidden`}
      >
        <span className="relative z-10">Inquiry Form</span>
        <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
          <ArrowRight size={18} strokeWidth={3} />
        </div>
        {/* Glossy shine effect */}
        <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
      </button>
    </div>
  );
}

"use client";

import React from "react";
import { Caveat, Nunito, Cabin } from "next/font/google";
import { useRouter } from "next/navigation";
import { useLoading } from "./Common/LoadingHandler";
import { ArrowRight } from "lucide-react";

const caveat = Caveat({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function InquiryCTA() {
  const router = useRouter();
  const { startLoading } = useLoading();

  return (
    <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#00735C]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="w-full lg:w-2/3">
          <p className={`${caveat.className} text-[#6f7775] text-3xl md:text-4xl mb-6 font-medium`}>
            Get In Touch
          </p>
          <h2 className={`${nunito.className} text-[#0A2520] text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.15] tracking-tight`}>
            Feel free to reach out with <br className="hidden md:block" /> any questions or feedback.
          </h2>
          <p className={`${cabin.className} text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl opacity-90`}>
            Feel free to reach out with any questions, feedback, or partnership inquiries. 
            Whether you are interested in volunteering, supporting our initiatives, or learning more about the work of Anuja Sushant Patil Global Foundation, our team is always ready to connect and collaborate.
          </p>
        </div>
        
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <button
            onClick={() => {
              startLoading();
              router.push("/donate-us#inquiry-form");
            }}
            className={`${cabin.className} group relative flex items-center gap-6 px-10 py-5 font-black text-white rounded-full text-xl bg-gradient-to-r from-[#006e57] to-[#00b874] shadow-2xl shadow-[#006e57]/30 hover:shadow-[#00b874]/40 transition-all duration-500 transform hover:-translate-y-1 tracking-widest uppercase overflow-hidden`}
          >
            <span className="relative z-10">Inquiry Form</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:rotate-45">
              <ArrowRight size={22} strokeWidth={3} />
            </div>
            {/* Glossy shine effect */}
            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
}

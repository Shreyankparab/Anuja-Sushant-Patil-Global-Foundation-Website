"use client";

import React, { useState } from "react";
import { Cabin } from "next/font/google";
import { Loader2 } from "lucide-react";

const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactMap() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-80 sm:h-80 lg:h-[380px] bg-gray-100 rounded-[32px] overflow-hidden relative shadow-sm">
      {/* Loader */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-50/80 backdrop-blur-sm transition-opacity duration-500">
          <div className="relative">
            <Loader2 className="w-10 h-10 text-[#00735C] animate-spin" />
            <div className="absolute inset-0 w-10 h-10 border-4 border-[#00735C]/10 rounded-full"></div>
          </div>
          <p className={`${cabin.className} mt-4 text-[#00735C] font-bold text-xs uppercase tracking-[0.2em] animate-pulse`}>
            Loading Map...
          </p>
        </div>
      )}

      <iframe
        src="https://maps.google.com/maps?q=Seamedu%20%2F%20Toolbox%20Studio%2C%206th%20Floor%2C%20Solitaire%20Business%20Hub%2C%20Office%20No.%20612%2C%20Balewadi%20High%20St%2C%20Balewadi%2C%20Pune%2C%20Maharashtra%20411045&t=&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`grayscale-[0.1] contrast-[0.9] transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
      ></iframe>

      {/* Map Overlay */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-5 w-[80%] sm:w-[280px] bg-white/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-lg z-20">
        <div>
          <p className={`${cabin.className} text-[13px] font-extrabold text-[#1A2E35]`}>
            Solitaire Business Hub
          </p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className={`w-[5px] h-[5px] rounded-full ${new Date().getDay() !== 0 ? "bg-[#00735C] animate-pulse" : "bg-red-500"}`}></span>
            <p className={`${cabin.className} text-[10px] ${new Date().getDay() !== 0 ? "text-[#00735C]" : "text-red-500"} font-extrabold uppercase tracking-widest`}>
              {new Date().getDay() !== 0 ? "Open Now" : "Closed Now"}
            </p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Seamedu+%2F+Toolbox+Studio%2C+6th+Floor%2C+Solitaire+Business+Hub%2C+Office+No.+612%2C+Balewadi+High+St%2C+Balewadi%2C+Pune%2C+Maharashtra+411045"
          target="_blank"
          className={`${cabin.className} bg-[#00735C] text-white text-[9px] tracking-wider font-extrabold px-4 py-2.5 rounded-lg hover:bg-[#005c49] transition-colors`}
        >
          GET DIRECTIONS
        </a>
      </div>
    </div>
  );
}

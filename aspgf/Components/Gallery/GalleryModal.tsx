"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { Nunito, Cabin } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const cabin = Cabin({ subsets: ["latin"] });

export default function GalleryModal({
  isOpen,
  onClose,
  items,
  initialIndex,
}: any) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showInfo, setShowInfo] = useState(true);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(initialIndex);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, initialIndex]);

  const handlePrev = (e?: any) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? items.length - 1 : prev! - 1));
    setZoom(1);
  };

  const handleNext = (e?: any) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === items.length - 1 ? 0 : prev! + 1));
    setZoom(1);
  };

  if (!isOpen || selectedIndex === null) return null;
  const currentItem = items[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col md:flex-row bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-0 inset-x-0 h-20 flex items-center justify-between px-8 z-[50] pointer-events-none">
        <div
          className={`${cabin.className} text-white/50 text-sm font-bold pointer-events-auto `}
        >
          {selectedIndex + 1} / {items.length}
        </div>
        <button
          onClick={onClose}
          className="p-3  rounded-full  bg-white/10 text-white pointer-events-auto hover:bg-[#00735C] transition-colors"
        >
          <FiX size={24} />
        </button>
      </div>

      {/* Main Viewport */}
      <div className="relative flex-grow flex items-center justify-center p-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-4 z-50 p-4 rounded-full bg-black/50 text-white hover:bg-[#00735C] transition-all"
        >
          <FiArrowLeft size={24} />
        </button>

        <div
          className="relative w-full h-[80vh] transition-transform duration-500"
          style={{ transform: `scale(${zoom})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentItem.image}
            alt="Gallery"
            fill
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 z-50 p-4 rounded-full bg-black/50 text-white hover:bg-[#00735C] transition-all"
        >
          <FiArrowRight size={24} />
        </button>
      </div>

      {/* Right Sidebar */}
      <div
        className={`w-full md:w-[400px] bg-black/40 border-l border-white/10 p-8 transition-all ${showInfo ? "translate-x-0" : "translate-x-full hidden"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          className={`${nunito.className} text-white text-2xl font-black mb-6`}
        >
          {currentItem.title}
        </h2>
        <div className="flex flex-col gap-4 mb-8">
          <span
            className={`${cabin.className} text-[#3ed0a6] text-xs font-bold uppercase tracking-widest flex items-center gap-2`}
          >
            <FiCalendar /> {currentItem.date}
          </span>
          <span
            className={`${cabin.className} text-white/40 text-xs font-bold uppercase tracking-widest flex items-center gap-2`}
          >
            <FiMapPin /> {currentItem.location}
          </span>
        </div>
        <div className="w-16 h-1 bg-[#00735C] rounded-full mb-8" />

        {/* Thumbnails list */}
        <h3
          className={`${cabin.className} text-white/30 text-[10px] font-bold uppercase tracking-[0.3em] mb-4`}
        >
          Event Gallery
        </h3>
        <div className="grid grid-cols-4 gap-2 overflow-y-auto no-scrollbar">
          {items.map((item: any, idx: number) => (
            <div
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${idx === selectedIndex ? "border-[#00735C]" : "border-transparent"}`}
            >
              <Image
                src={item.image}
                alt="thumb"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

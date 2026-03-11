"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageContent } from "@/data/gallery";
import GalleryModal from "@/Components/Gallery/GalleryModal";
import { Nunito, Cabin, Caveat, Inter } from "next/font/google";
import { FiCalendar, FiMapPin, FiCamera, FiArrowRight } from "react-icons/fi";
import { ChevronDown, ChevronLeft, ChevronRight, Grid, Layout } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const nunito = Nunito({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function EventsGallery() {
  const { categories, events } = pageContent;

  /* ---------------- STATE ---------------- */
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const eventsPerPage = 4;

  const [modalData, setModalData] = useState({
    isOpen: false,
    items: [] as any[],
    index: 0,
  });

  /* ---------------- REFS ---------------- */
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  /* ---------------- FILTER ---------------- */
  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") return events;
    return events.filter((e) => {
      if (Array.isArray(e.categories)) return e.categories.includes(activeCategory);
      return e.categories === activeCategory;
    });
  }, [activeCategory, events]);

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  /* ---------------- ANIMATIONS ---------------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
    /* GRID ANIMATION */

      // Cards reveal
      ScrollTrigger.batch(".event-card", {
        onEnter: (elements) => {
          gsap.from(elements, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            overwrite: true
          });
        },
        once: true
      });
    });

    return () => ctx.revert();
  }, [paginatedEvents]);

  const openGallery = (images: string[], index: number, event: any) => {
    const formattedItems = images.map((img) => ({
      image: img,
      title: event.title,
      date: event.date,
      location: event.location,
    }));

    setModalData({
      isOpen: true,
      items: formattedItems,
      index,
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: contentRef.current?.offsetTop ? contentRef.current.offsetTop - 100 : 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#fafafa] overflow-hidden">
      {/* SIMPLE HEADER SECTION */}
      <div className="bg-[#0f766e] py-16 text-white text-center relative">
        <div className="flex justify-center mb-4">
          <span ref={tagRef} className={`${caveat.className} text-2xl text-white`}>
            Visual Journey
          </span>
        </div>

        <h2
          ref={headingRef}
          className={`${nunito.className} text-4xl font-bold`}
        >
          Capturing Moments of Impact.
        </h2>
      </div>

      {/* CATEGORY BAR */}
      <div className="py-8 bg-white border-b border-gray-100 px-6">
        {/* Mobile Dropdown */}
        <div className="md:hidden relative max-w-[280px] mx-auto z-30">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`${nunito.className} w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold text-[#1A2E35] shadow-sm transition-all focus:border-[#0f766e]`}
          >
            <span>{activeCategory}</span>
            <ChevronDown size={18} className={`text-[#0f766e] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute z-40 mt-2 w-full rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                  className={`${nunito.className} w-full text-left px-5 py-3.5 text-sm font-semibold transition-colors ${activeCategory === cat
                    ? "bg-[#0f766e]/5 text-[#0f766e]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#0f766e]"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold
                ${activeCategory === cat
                  ? "bg-[#0f766e] text-white shadow-md scale-105"
                  : "text-gray-400 hover:text-[#0f766e]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY GRID SECTION */}
      <section ref={contentRef} className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {paginatedEvents.length > 0 ? (
            paginatedEvents.map((event, idx) => (
              <div key={`${event.id}-${idx}`} className="event-card group">
                {/* Event Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-4 md:gap-6 border-l-4 border-[#0f766e] pl-4 md:pl-6 leading-none">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 text-[#0f766e] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-3">
                      <span className="px-2 py-0.5 bg-[#0f766e]/10 rounded">{event.categories}</span>
                    </div>
                    <h2 className={`${nunito.className} text-xl md:text-4xl font-black text-[#1A2E35] group-hover:text-[#0f766e] transition-colors duration-300`}>
                      {event.title}
                    </h2>
                  </div>

                  <div className={`${inter.className} flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-500 font-semibold mb-1`}>
                    <span className="flex items-center gap-2">
                      <FiCalendar className="text-[#0f766e]" /> {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <FiMapPin className="text-[#0f766e]" /> {event.location}
                    </span>
                  </div>
                </div>

                {/* Imagery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
                  {/* Feature Image - Span 2x2 */}
                  <div
                    onClick={() => openGallery(event.images, 0, event)}
                    className="relative col-span-2 row-span-2 aspect-[4/3] md:aspect-square rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-md group/img"
                  >
                    <Image
                      src={event.images[0]}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 text-white">
                      <span className="text-xs md:text-sm font-bold flex items-center gap-2">
                        View Full Gallery <FiArrowRight />
                      </span>
                    </div>
                  </div>

                  {/* Secondary Images */}
                  {event.images.slice(1, 9).map((src, i) => (
                    <div
                      key={i}
                      onClick={() => openGallery(event.images, i + 1, event)}
                      className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-sm group/thumb"
                    >
                      <Image
                        src={src}
                        alt={`${event.title} ${i + 2}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                      />
                      {/* More Count Overlay for the last thumbnail */}
                      {i === 7 && event.images.length > 9 && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center text-white font-black text-sm md:text-xl">
                          +{event.images.length - 9}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-40">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layout className="text-gray-300 w-10 h-10" />
              </div>
              <h3 className={`${nunito.className} text-2xl font-bold text-gray-400`}>No events found in this category</h3>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-[#0f766e] font-bold underline underline-offset-4"
              >
                Browse all categories
              </button>
            </div>
          )}
        </div>

        {/* PREMIUM PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-24 pt-10 border-t border-gray-100">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-4 rounded-2xl border border-gray-200 text-[#0f766e] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0f766e] hover:text-white transition-all duration-300 shadow-sm"
              title="Previous Page"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-12 h-12 rounded-2xl font-bold text-sm transition-all duration-300 shadow-sm
                    ${currentPage === page
                      ? "bg-[#0f766e] text-white scale-110"
                      : "bg-white text-gray-400 border border-gray-200 hover:border-[#0f766e] hover:text-[#0f766e]"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-4 rounded-2xl border border-gray-200 text-[#0f766e] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#0f766e] hover:text-white transition-all duration-300 shadow-sm"
              title="Next Page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* MODAL WINDOW */}
      <GalleryModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        items={modalData.items}
        initialIndex={modalData.index}
      />
    </main>
  );
}


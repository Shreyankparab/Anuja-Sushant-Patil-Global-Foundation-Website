"use client";

import Image from "next/image";
import { pageContent } from "@/data/gallery";
import GalleryModal from "@/Components/Gallery/GalleryModal";

import { Nunito, Cabin, Caveat } from "next/font/google";

import { useState, useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

import { FiCalendar, FiMapPin } from "react-icons/fi";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export default function EventsGallery() {
  /* ---------------- DATA ---------------- */
  const { categories, events } = pageContent;

  /* ---------------- STATE ---------------- */
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const eventsPerPage = 3;

  const gridRef = useRef<HTMLDivElement | null>(null);

  const [modalData, setModalData] = useState({
    isOpen: false,
    items: [] as any[],
    index: 0,
  });

  /* ---------------- FILTER ---------------- */
  const filteredEvents = useMemo(() => {
    if (activeCategory === "All") return events;

    return events.filter((events) => {
      if (Array.isArray(events.categories)) {
        return events.categories.includes(activeCategory);
      }
      return events.categories === activeCategory;
    });
  }, [activeCategory, events]);

  /* ---------------- PAGINATION ---------------- */

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;

  const paginatedEvents = filteredEvents.slice(
    startIndex,
    startIndex + eventsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  /* ---------------- HERO GSAP ---------------- */

  const tagRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateText = (el: HTMLElement | null) => {
        if (!el) return;

        const words = el.innerText.split(" ");

        el.innerHTML = words
          .map(
            (word) =>
              `<span style="display:inline-block;overflow:hidden">
                 <span style="display:inline-block">${word}&nbsp;</span>
               </span>`,
          )
          .join("");

        const inner = el.querySelectorAll("span span");

        gsap.from(inner, {
          y: 40,
          opacity: 100,
          stagger: 0.08,
          duration: 0.8,
          ease: "power3.out",
        });
      };

      animateText(tagRef.current);
      animateText(headingRef.current);
    });

    return () => ctx.revert();
  }, []);

  /* ---------------- OPEN MODAL ---------------- */

  const openGallery = (images: string[], index: number, events: any) => {
    const formattedItems = images.map((img) => ({
      image: img,
      title: events.title,
      date: events.date,
      location: events.location,
    }));

    setModalData({
      isOpen: true,
      items: formattedItems,
      index,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}

      <div className="bg-[#0f766e] py-16 text-white text-center relative">
        <div className="flex justify-center mb-4">
          <span ref={tagRef} className={`${caveat.className} text-2xl`}>
            Our Gallery
          </span>
        </div>

        <h2
          ref={headingRef}
          className={`${nunito.className} text-4xl font-bold px-4`}
        >
          Community-focused work for a better tomorrow.
        </h2>

        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#A828C6]" />
      </div>


      {/* CATEGORY FILTER */}

      <div className="mt-10 text-center px-6">
        {/* MOBILE DROPDOWN */}

        <div className="md:hidden  relative max-w-[280px] mx-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`${nunito.className} w-full flex items-center justify-between text-black rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold`}
          >
            <span className="">{activeCategory}</span>

            <ChevronDown
              size={18}
              className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute  w-full rounded-xl border bg-white shadow-xl overflow-hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm font-semibold ${activeCategory === cat
                    ? "bg-[#0f766e]/10 text-[#0f766e]"
                    : "text-black hover:bg-gray-50"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP CATEGORY */}

        <div className="hidden md:flex justify-center gap-10 flex-wrap ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${nunito.className} text-lg transition hover:scale-110 cursor-pointer ${activeCategory === cat
                ? "font-extrabold text-[#0f766e]"
                : "text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS */}

      <section className="container mx-auto px-6 py-16 text-gray-800">
        {paginatedEvents.length > 0 ? (
          paginatedEvents.map((event, eventIndex) => (
            <article key={`${event.id}-${eventIndex}`} className="mb-20">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-3 mb-8 gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />

                  <h2
                    className={`${cabin.className} text-sm font-bold uppercase`}
                  >
                    {event.title}
                  </h2>
                </div>

                <div
                  className={`${caveat.className} flex gap-6 md:gap-10 text-xs uppercase font-medium`}
                >
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={14} className="text-[#0f766e]" />
                    {event.location}
                  </span>
                  <span>Date: {event.date}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {event.images.slice(0, 16).map((src, index) => (
                  <div
                    key={`${event.id}-img-${index}`}
                    onClick={() =>
                      openGallery(event.images.slice(0, 16), index, event)
                    }
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={src}
                      alt={event.title}
                      fill
                      className="object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-20 text-black text-xl">
            No events found in "{activeCategory}"
          </div>
        )}

        {/* PAGINATION */}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pb-10">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm"
            >
              <ChevronLeft size={14} /> Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full ${currentPage === page ? "bg-[#0f766e] text-white" : "border"
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-full border text-sm"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}
      </section>

      {/* MODAL */}

      <GalleryModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        items={modalData.items}
        initialIndex={modalData.index}
      />
    </main>
  );
}

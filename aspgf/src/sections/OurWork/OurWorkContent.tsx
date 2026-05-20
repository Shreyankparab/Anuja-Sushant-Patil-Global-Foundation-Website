"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Nunito, Cabin } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

import { allWorkItems, WorkItem } from "@/data/ourWorkData";

const ITEMS_PER_PAGE = 6;

interface OurWorkContentProps {
    activeCategory: string;
    searchQuery: string;
}

const DESC_LIMIT = 130; // characters before "Read more" kicks in

export default function OurWorkContent({ activeCategory, searchQuery }: OurWorkContentProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
    const [highlightedId, setHighlightedId] = useState<number | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const toggleExpand = (id: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedIds((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    // Reset to page 1 when filtering changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery]);

    const filtered = allWorkItems.filter((item) => {
        const matchCategory =
            activeCategory === "All Category" ||
            item.category.toLowerCase() === activeCategory.toLowerCase();
        const matchSearch =
            searchQuery === "" ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    const isAllCategory = activeCategory === "All Category" && searchQuery === "";
    const featuredItem = filtered.find((i) => i.featured);
    const featured = isAllCategory ? featuredItem : null;
    const rest = featured ? filtered.filter((i) => i.id !== featured.id) : filtered;

    const totalPages = Math.ceil(rest.length / ITEMS_PER_PAGE);
    const paginated = rest.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    // Handle deep-link scrolling
    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash && hash.startsWith("#project-")) {
            const id = parseInt(hash.replace("#project-", ""));

            // Function to trigger highlight
            const triggerHighlight = () => {
                setHighlightedId(id);
                setTimeout(() => setHighlightedId(null), 1500);
            };

            // 1. Check if it's the featured item
            if (featured && featured.id === id) {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                        triggerHighlight();
                    }, 500);
                }
                return;
            }

            // 2. Check in the 'rest' items
            const index = rest.findIndex(i => i.id === id);
            if (index !== -1) {
                const targetPage = Math.floor(index / ITEMS_PER_PAGE) + 1;
                if (currentPage !== targetPage) {
                    setCurrentPage(targetPage);
                    // The scroll and highlight will happen in the targetPage update
                } else {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        setTimeout(() => {
                            element.scrollIntoView({ behavior: "smooth", block: "center" });
                            triggerHighlight();
                        }, 500);
                    }
                }
            }
        }
    }, [rest.length, activeCategory, featured, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div ref={containerRef} className={`${cabin.className} flex-1 min-w-0 scroll-mt-32`}>

            {/* Featured Card */}
            {featured && (
                <div
                    id={`project-${featured.id}`}
                    className={`mb-10 rounded-xl overflow-hidden border bg-white flex flex-col md:flex-row min-h-[350px] md:h-[450px] transition-all duration-500 ${highlightedId === featured.id ? "border-[#00735C] shadow-[0_0_30px_rgba(0,115,92,0.4)] scale-[1.01]" : "border-gray-100 shadow-md"
                        }`}
                >
                    <div className="relative w-full md:w-[60%] shrink-0 h-[280px] md:h-full p-3 md:p-4">
                        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-sm">
                            <Image
                                src={featured.image}
                                alt={featured.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                        <span className="inline-block text-[11px] font-extrabold tracking-[0.2em] uppercase bg-[#00735C]/10 text-[#00735C] rounded-full px-4 py-1.5 mb-6 w-fit">
                            Latest
                        </span>
                        <h2 className={`${nunito.className} text-3xl md:text-4xl font-extrabold text-[#1A2E35] mb-5 leading-tight`}>
                            {featured.title}
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed line-clamp-4 md:line-clamp-none font-medium">
                            {featured.description}
                        </p>
                    </div>
                </div>
            )}

            {/* Grid of cards */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                    {paginated.map((item) => (
                        <div
                            key={item.id}
                            id={`project-${item.id}`}
                            className={`rounded-xl overflow-hidden border bg-white transition-all duration-500 group flex flex-col h-full scroll-mt-20 ${expandedIds.has(item.id) ? "self-start w-full" : ""
                                } ${highlightedId === item.id ? "border-[#00735C] shadow-[0_0_30px_rgba(0,115,92,0.4)] scale-[1.02] z-10" : "border-gray-100 shadow-md hover:shadow-lg"
                                }`}
                        >
                            <div className="relative w-full h-60 sm:h-72 overflow-hidden shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#00735C]">
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {item.date}
                                    </span>
                                </div>
                                <h3 className={`${nunito.className} font-extrabold text-[#1A2E35] text-xl mb-3 leading-snug`}>
                                    {item.title}
                                </h3>
                                {item.description.length <= DESC_LIMIT ? (
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                ) : (
                                    <div>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {expandedIds.has(item.id)
                                                ? item.description
                                                : item.description.slice(0, DESC_LIMIT).trimEnd() + "…"}
                                        </p>
                                        <button
                                            onClick={(e) => toggleExpand(item.id, e)}
                                            className="mt-1.5 text-[#00735C] text-xs font-bold hover:underline focus:outline-none transition-colors duration-200"
                                        >
                                            {expandedIds.has(item.id) ? "Read less" : "Read more"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-400 font-semibold">
                    No results found.
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:border-[#00735C] hover:text-[#00735C] disabled:opacity-40 transition-all"
                    >
                        <ChevronLeft size={14} /> Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-9 h-9 rounded-full text-sm font-bold transition-all ${currentPage === page
                                ? "bg-[#00735C] text-white shadow-md"
                                : "border border-gray-200 text-gray-500 hover:border-[#00735C] hover:text-[#00735C]"
                                }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-500 hover:border-[#00735C] hover:text-[#00735C] disabled:opacity-40 transition-all"
                    >
                        Next <ChevronRight size={14} />
                    </button>
                </div>
            )}
        </div>
    );
}

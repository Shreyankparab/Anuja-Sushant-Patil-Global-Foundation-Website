import { Metadata } from "next";
import dynamic from "next/dynamic";
import AboutHero from "@/Components/AboutUs/AboutHero";
import AboutClient from "@/Components/AboutUs/AboutClient";

// Dynamic imports for "Instant Rendering" by splitting JS bundles
const StatsSection = dynamic(() => import("@/Components/StatsSection"), {
    ssr: true,
    loading: () => <div className="h-40 animate-pulse bg-gray-50 rounded-3xl" />
});

const LeadershipSection = dynamic(() => import("@/Components/AboutUs/LeadershipSection"), {
    ssr: true,
    loading: () => <div className="h-96 animate-pulse bg-gray-50 rounded-[40px]" />
});

const HistorySection = dynamic(() => import("@/Components/AboutUs/HistorySection"), {
    ssr: true,
    loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-[60px]" />
});

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Anuja Sushant Patil Global Foundation's mission, vision, and leadership committed to empowering communities through education, healthcare, and sustainable development.",
    openGraph: {
        title: "About Us | Anuja Sushant Patil Global Foundation",
        description:
            "Discover our mission, vision, and leadership driving sustainable social impact in our communities.",
        url: "https://aspgf.org/about-us",
    },
};

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            {/* HEROS - Loaded immediately with higher priority */}
            <AboutHero />

            {/* CLIENT SECTION - Essential content loaded immediately */}
            <AboutClient />

            {/* BELOW THE FOLD - Dynamically loaded for "Instant" feel while preserving design */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto py-12">
                    <StatsSection />
                </div>
            </section>

            <LeadershipSection />

            <HistorySection />
        </main>
    );
}
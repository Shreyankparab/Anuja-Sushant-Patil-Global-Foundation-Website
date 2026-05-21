import StatsSection from "@/components/StatsSection";
import ImpactComponent from "@/sections/Impact/ImpactComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Impact | Anuja Sushant Patil Global Foundation",
    description: "Discover the real change, key performance metrics, and positive community transformations created through the social initiatives of the Anuja Sushant Patil Global Foundation.",
    alternates: {
        canonical: "https://aspgf.org/impact",
    },
    openGraph: {
        title: "Our Impact | Anuja Sushant Patil Global Foundation",
        description: "See the tangible difference we are making in communities through our dedicated social development efforts.",
        url: "https://aspgf.org/impact",
        siteName: "Anuja Sushant Patil Global Foundation",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Impact | Anuja Sushant Patil Global Foundation",
        description: "See the tangible difference we are making in communities through our dedicated social development efforts.",
    },
};

export default function ImpactPage() {
    // Structured Data Schema for Non-Profit/NGO Impact Reporting
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Our Impact - Anuja Sushant Patil Global Foundation",
        "description": "Key statistics and records of real change and community transformation created by ASPGF.",
        "url": "https://aspgf.org/impact",
        "about": {
            "@type": "NGO",
            "name": "Anuja Sushant Patil Global Foundation",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        }
    };

    return (
        <>
            {/* Injecting Schema Markup for Google Search Bots */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main>
                <section className="py-20 px-6 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto text-center">

                        <div className="flex items-center justify-center gap-4 mb-2 animate-[fade-up_0.6s_ease-out_both]">
                            <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
                            <span className="font-caveat text-xl md:text-2xl text-[#6f7775] font-bold italic">
                                Proof of changes
                            </span>
                            <div className="h-[1px] w-12 md:w-20 bg-gray-300"></div>
                        </div>

                        {/* Changed from h2 to h1 for vital SEO semantic hierarchy without altering classes */}
                        <h1 className="font-nunito text-4xl md:text-6xl font-black text-[#00735C] mb-6 leading-tight uppercase animate-[fade-up_0.6s_ease-out_0.15s_both]">
                            Our <br className="hidden md:block" /> Impact
                        </h1>

                        <p className="font-cabin max-w-2xl mx-auto text-gray-600 text-base md:text-lg mb-16 leading-relaxed font-semibold animate-[fade-up_0.6s_ease-out_0.3s_both]">
                            Real change created through compassion, collaboration, and a shared
                            commitment to building stronger and more resilient communities.
                        </p>

                        <div className="mt-16 animate-[fade-up_0.6s_ease-out_0.45s_both]">
                            <StatsSection />
                        </div>

                    </div>
                </section>

                <ImpactComponent />
            </main>
        </>
    );
}
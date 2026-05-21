import EventsGallery from "@/sections/Gallery/GalleryComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Anuja Sushant Patil Global Foundation",
  description:
    "Explore our gallery of community events, social initiatives, and the tangible impact made across Pune and beyond by the Anuja Sushant Patil Global Foundation.",
  alternates: {
    canonical: "https://aspgf.org/gallery",
  },
  openGraph: {
    title: "Gallery | Anuja Sushant Patil Global Foundation",
    description: "A visual journey of our community initiatives, social work, and impactful events.",
    url: "https://aspgf.org/gallery",
    siteName: "Anuja Sushant Patil Global Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Anuja Sushant Patil Global Foundation",
    description: "A visual journey of our community initiatives, social work, and impactful events.",
  },
};

export default function GalleryPage() {
  // Structured Data Schema for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Anuja Sushant Patil Global Foundation Event Gallery",
    "description": "Visual journey of community initiatives and events by ASPGF.",
    "url": "https://aspgf.org/gallery",
    "provider": {
      "@type": "NGO",
      "name": "Anuja Sushant Patil Global Foundation",
      "url": "https://aspgf.org"
    }
  };

  return (
    <>
      {/* Injecting Schema Markup into the head for SEO crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <div className="bg-[#0f766e] py-16 text-white text-center relative overflow-hidden">

          {/* Subtitle Animation: Fades and slides in immediately */}
          <div className="flex justify-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <span className="font-caveat text-2xl text-white">
              Visual Journey
            </span>
          </div>

          {/* Heading Animation: Delayed by 200ms for a staggered look */}
          <h1 className="font-nunito text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both ease-out">
            Capturing Moments of Impact.
          </h1>

        </div>
        <EventsGallery />
      </main>
    </>
  );
}
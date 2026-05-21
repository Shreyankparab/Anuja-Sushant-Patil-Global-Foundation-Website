import NewsComponent from "@/sections/News/NewsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events | Anuja Sushant Patil Global Foundation",
  description: "Stay updated with the latest news, success stories, press releases, and upcoming community initiatives from the Anuja Sushant Patil Global Foundation.",
  alternates: {
    canonical: "https://aspgf.org/news",
  },
  openGraph: {
    title: "News & Events | Anuja Sushant Patil Global Foundation",
    description: "Stay informed about our latest activities, upcoming events, and positive stories from the community.",
    url: "https://aspgf.org/news",
    siteName: "Anuja Sushant Patil Global Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events | Anuja Sushant Patil Global Foundation",
    description: "Stay informed about our latest activities, upcoming events, and positive stories from the community.",
  },
};

export default function NewsPage() {
  // Structured Data Schema for News & Event Hubs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "News & Events Hub - Anuja Sushant Patil Global Foundation",
    "description": "Latest announcements, press releases, media updates, and community event listings from ASPGF.",
    "url": "https://aspgf.org/news",
    "publisher": {
      "@type": "NGO",
      "name": "Anuja Sushant Patil Global Foundation",
      "url": "https://aspgf.org"
    }
  };

  return (
    <>
      {/* Injecting Schema Markup into the page header for search engine discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        <div className="bg-[#0f766e] py-16 text-white text-center relative overflow-hidden">

          {/* Subtitle Animation: Fades and slides in immediately */}
          <div className="flex justify-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <span className="font-caveat text-2xl text-white">
              News & Events
            </span>
          </div>

          {/* Corrected tag from h2 to h1 for SEO crawlers. Layout styling matches original exactly */}
          <h1 className="font-nunito text-4xl font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both ease-out">
            Community-focused work for a better tomorrow.
          </h1>

        </div>
        <NewsComponent />
      </main>
    </>
  );
}
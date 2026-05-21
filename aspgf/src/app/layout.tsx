import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import LoadingHandler, { LoadingProvider } from "@/components/LoadingHandler";
import StickyInquiry from "@/components/StickyInquiry";

export const metadata: Metadata = {
  title: {
    default: "Anuja Sushant Patil Global Foundation (ASPGF)",
    template: "%s | Anuja Sushant Patil Global Foundation",
  },
  description: "Anuja Sushant Patil Global Foundation (ASPGF) is a non-profit organization dedicated to community-focused work, education, health, and sustainable development for a better tomorrow.",
  keywords: ["ASPGF", "Anuja Sushant Patil Global Foundation", "NGO Pune", "Social Impact", "Community Support", "Education Charity", "Health Initiatives", "Orphanage Support", "Old Age Home Support"],
  authors: [{ name: "Anuja Sushant Patil Global Foundation" }],
  creator: "Anuja Sushant Patil Global Foundation",
  publisher: "Anuja Sushant Patil Global Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aspgf.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anuja Sushant Patil Global Foundation",
    description: "Empowering communities through compassion and horizontal growth.",
    url: "https://aspgf.org",
    siteName: "ASPGF",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/aspgf-logo.webp",
        width: 1200,
        height: 630,
        alt: "Anuja Sushant Patil Global Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anuja Sushant Patil Global Foundation",
    description: "Empowering change through kindness and community support.",
    images: ["/images/aspgf-logo.webp"],
  },
  icons: {
    icon: "/images/home-page/simple-peacock.svg",
    shortcut: "/images/home-page/simple-peacock.svg",
    apple: "/images/home-page/simple-peacock.svg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className="antialiased overflow-x-hidden"
      >
        <LoadingProvider>
          <Suspense fallback={null}>
            <LoadingHandler />
          </Suspense>
          {/* Prevent horizontal overflow globally */}
          <div className="relative w-full overflow-x-hidden">

            {/* Fixed Header */}
            <div className="fixed inset-x-0 top-0 z-50">
              <Navbar />
            </div>

            {/* Page Content */}
            <main className="pt-20 xl:pt-28 w-full">
              {children}
            </main>

            <Footer />
            {/* <StickyInquiry /> */}

          </div>
        </LoadingProvider>      </body>
    </html>
  );
}

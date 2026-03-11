import EventsGallery from "@/Components/Gallery/GalleryComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the gallery of events, community initiatives, and the tangible impact made by the Anuja Sushant Patil Global Foundation.",
  openGraph: {
    title: "Gallery | Anuja Sushant Patil Global Foundation",
    description: "Visual journey of our community work and events.",
    url: "https://aspgf.org/gallery",
  },
};

export default function GalleryPage() {
  return <EventsGallery />;
}

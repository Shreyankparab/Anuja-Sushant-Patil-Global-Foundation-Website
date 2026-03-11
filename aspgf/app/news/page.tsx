import NewsComponent from "@/Components/News/NewsComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Stay updated with the latest news, success stories, and upcoming community initiatives from the Anuja Sushant Patil Global Foundation.",
  openGraph: {
    title: "News & Events | Anuja Sushant Patil Global Foundation",
    description: "Stay informed about our latest activities and positive stories from the community.",
    url: "https://aspgf.org/news",
  },
};

export default function NewsPage() {
  return <NewsComponent />;
}

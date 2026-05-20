import { Metadata } from "next";
import StoryHero from "@/Components/OurStory/StoryHero";
import StoryForeword from "@/Components/OurStory/StoryForeword";
import StoryChapters from "@/Components/OurStory/StoryChapters";
import StoryHighlight from "@/Components/OurStory/StoryHighlight";
import StoryMovement from "@/Components/OurStory/StoryMovement";
import StorySignature from "@/Components/OurStory/StorySignature";

export const metadata: Metadata = {
  title: "Our Story - The Narrative | Anuja Sushant Patil Global Foundation",
  description:
    "Read the inspiring founding story of ASPGF - how a young child's compassionate question sparked a movement to support underprivileged children's education across India.",
  openGraph: {
    title: "Our Inspiring Beginning | ASPGF",
    description:
      "The story of a small thought that became a big mission. Read how Master Atharv Sushant Patil's innocent question gave birth to the Anuja Sushant Patil Global Foundation.",
    url: "https://aspgf.org/our-story",
    images: [
      {
        url: "https://aspgf.org/images/home-page/story-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Our Inspiring Beginning - ASPGF Story",
      },
    ],
  },
};

export default function OurStoryPage() {
  return (
    <main className="w-full bg-[#FAF9F6] text-[#0A2520] pb-32 overflow-hidden">
      <StoryHero />
      <StoryForeword />
      <StoryChapters />
      <StoryHighlight />
      <StoryMovement />
      <StorySignature />
    </main>
  );
}

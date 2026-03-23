import { Metadata } from "next";
import StoryHero from "@/Components/OurStory/StoryHero";
import StoryIntro from "@/Components/OurStory/StoryIntro";
import StoryNarrative from "@/Components/OurStory/StoryNarrative";
import StoryHighlight from "@/Components/OurStory/StoryHighlight";
import StoryMovement from "@/Components/OurStory/StoryMovement";
import StoryBelief from "@/Components/OurStory/StoryBelief";
import StorySignature from "@/Components/OurStory/StorySignature";
import StoryCTA from "@/Components/OurStory/StoryCTA";

export const metadata: Metadata = {
  title: "Our Story | Anuja Sushant Patil Global Foundation",
  description:
    "Read the inspiring founding story of ASPGF - how a young child's compassionate question sparked a movement to support underprivileged children's education across India.",
  openGraph: {
    title: "Our Inspiring Beginning | ASPGF",
    description:
      "The story of a small thought that became a big mission. Read how Master Atharv Sushant Patil's innocent question gave birth to the Anuja Sushant Patil Global Foundation.",
    url: "https://aspgf.org/our-story",
    images: [
      {
        url: "https://aspgf.org/Images/story-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Our Inspiring Beginning - ASPGF Story",
      },
    ],
  },
};

export default function OurStoryPage() {
  return (
    <main className="w-full bg-white">
      <StoryHero />
      <StoryIntro />
      <StoryNarrative />
      <StoryHighlight />
      <StoryMovement />
      <StoryBelief />
      <StorySignature />
      <StoryCTA />
    </main>
  );
}

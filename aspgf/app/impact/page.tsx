import ImpactComponent from "@/Components/Impact/ImpactComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impact",
    description: "Discover the real change and positive community transformations created through the compassion and collaboration of Anuja Sushant Patil Global Foundation.",
    openGraph: {
        title: "Impact | Anuja Sushant Patil Global Foundation",
        description: "See the tangible difference we are making in the lives of people through our dedicated efforts.",
        url: "https://aspgf.org/impact",
    },
};

export default function ImpactPage() {
    return <ImpactComponent />;
}

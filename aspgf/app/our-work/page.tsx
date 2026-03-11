import OurWorkComponent from "@/Components/OurWork/OurWorkComponent";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore the various projects and initiatives by Anuja Sushant Patil Global Foundation in fields such as education, healthcare, and community support.",
    openGraph: {
        title: "Our Work | Anuja Sushant Patil Global Foundation",
        description: "Explore our dedicated efforts in community service and sustainable development.",
        url: "https://aspgf.org/our-work",
    },
};

export default function OurWorkPage() {
    return <OurWorkComponent />;
}

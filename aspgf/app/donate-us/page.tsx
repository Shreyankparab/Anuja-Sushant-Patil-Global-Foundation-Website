import DonateUsComponent from "@/Components/DonateUs/DonateUsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Donate Us",
    description: "Support the mission of Anuja Sushant Patil Global Foundation. Your contribution helps us empower communities and create lasting impact through education and health programs.",
    openGraph: {
        title: "Donate Us | Anuja Sushant Patil Global Foundation",
        description: "Join us in our journey of empowerment. Every contribution makes a significant difference in someone's life.",
        url: "https://aspgf.org/donate-us",
    },
};

export default function DonateUsPage() {
    return <DonateUsComponent />;
}

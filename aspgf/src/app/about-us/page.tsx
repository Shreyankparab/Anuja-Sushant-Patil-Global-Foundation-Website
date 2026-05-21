import { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import AboutClient from "@/sections/AboutUs/AboutClient";



import StatsSection from "@/components/StatsSection";
import HistorySection from "@/sections/AboutUs/HistorySection";


export const metadata: Metadata = {
    metadataBase: new URL("https://aspgf.org"),

    title: {
        default: "About Us | ASPGF",
        template: "%s | ASPGF",
    },

    description:
        "Learn about Anuja Sushant Patil Global Foundation mission, leadership, education initiatives, healthcare outreach, and sustainable community development programs.",

    keywords: [
        "ASPGF",
        "Anuja Sushant Patil Global Foundation",
        "NGO India",
        "Education NGO",
        "Healthcare NGO",
        "Community Development",
        "Sustainable Development",
        "Social Impact Foundation",
        "Empowering Communities",
        "Education Support",
        "Rural Development",
        "Women Empowerment",
    ],

    alternates: {
        canonical: "/about-us",
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        title:
            "About Us | Anuja Sushant Patil Global Foundation",

        description:
            "Empowering communities through education, healthcare and sustainable development.",

        url: "https://aspgf.org/about-us",

        siteName:
            "Anuja Sushant Patil Global Foundation",

        locale: "en_IN",

        type: "website",

        images: [
            {
                url:
                    "https://aspgf.org/images/seo/about-banner.jpg",

                width: 1200,
                height: 630,

                alt:
                    "Anuja Sushant Patil Global Foundation",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "About Us | ASPGF",

        description:
            "Discover our mission, vision and leadership driving sustainable social impact.",

        images: [
            "/images/seo/about-banner.jpg",
        ],
    },

    category: "Nonprofit",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#00735C",
};

function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",

        "@type": "NGO",

        name:
            "Anuja Sushant Patil Global Foundation",

        url: "https://aspgf.org",

        logo:
            "https://aspgf.org/images/aspgf-logo.png",

        description:
            "Empowering communities through education healthcare and sustainable development.",

        foundingDate: "2024",

        sameAs: [
            "https://www.youtube.com/@AnujaSushantPatilFoundation",
            "https://www.instagram.com/anuja_sushant_patil_foundation/"
        ],

        areaServed: "India",

        knowsAbout: [
            "Education",
            "Healthcare",
            "Women Empowerment",
            "Community Development",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <OrganizationSchema />


            {/* Hero Section  */}
            <section
                className="relative w-full h-[100dvh] md:h-[650px] overflow-hidden flex items-end md:items-center pb-20 md:pb-0"
            >
                {/* Background Image - Full width and height */}
                <div className="absolute inset-0 z-0 w-full h-full animate-hero-zoom">
                    {/* Desktop Background Image */}
                    <Image
                        src="/images/home-page/about-hero.webp"
                        alt="About Us Hero"
                        fill
                        sizes="100vw"
                        className="hidden md:block object-cover object-center"
                        priority
                    />
                    {/* Mobile Background Image */}
                    <Image
                        src="/images/about-us/hero-image-about-us.webp"
                        alt="Happy children in community mobile"
                        fill
                        sizes="100vw"
                        className="block md:hidden object-cover object-center"
                        priority
                    />
                    {/* Gradient overlay - smoother transition and better legibility */}
                    <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/100 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/95 md:via-black/20 md:to-transparent"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full px-6 md:px-12 lg:pl-[120px] lg:pr-10">
                    <div className="max-w-4xl">
                        {/* Section Tag - 'About Us' moved to top for better hierarchy */}
                        <div className="flex flex-col mb-4 animate-fade-in-up-300">
                            <p className="font-caveat text-[#00b874] text-[32px] md:text-[42px] leading-none mb-1">
                                About Us
                            </p>
                            <div className="h-[3px] w-24 bg-[#00735C] rounded-full"></div>
                        </div>

                        {/* Main Headline - Bold and clean */}
                        <h1 className="font-nunito text-white text-[38px] sm:text-[48px] md:text-[72px] font-[900] leading-[1.05] mb-8 tracking-tighter animate-fade-in-up-500">
                            Committed to Purpose,<br />
                            Guided by <span className="text-[#00b874]">Integrity</span>
                        </h1>

                        {/* Description Paragraph - Sentence case and better spacing */}
                        <div className="max-w-2xl animate-fade-in-up-700">
                            <div className="h-[2px] w-12 bg-white/30 mb-6 hidden md:block"></div>
                            <p className="font-cabin text-white/90 text-[18px] md:text-[24px] font-medium leading-[1.6] tracking-wide">
                                Working towards inclusive development through education, outreach, and community engagement for a sustainable tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <AboutClient />

            <section className="bg-white">
                <div className="max-w-7xl mx-auto py-12">
                    <StatsSection />
                </div>
            </section>


            {/* LeaderShip Section  */}
            <section className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-8 space-y-20">
                    {/* ================= SECTION 1: DR. SUSHANT PATIL ================= */}
                    <div id="sushant-patil" className="scroll-mt-32">
                        <div className="mb-12">
                            <h2
                                className="font-nunito text-[26px] text-black font-black tracking-tight leading-none pb-2"
                            >
                                MESSAGE FROM THE FOUNDER
                            </h2>
                            <div className="h-1.5 w-32 bg-black rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                            <div className="relative flex flex-col items-start">
                                <div className="relative group w-full aspect-square max-w-[400px]">
                                    {/* Trustworthy Badge - Floating Outside */}
                                    <div className="animate-float-subtle absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Trustworthy
                                    </div>

                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                        <Image
                                            src="/images/about-us/sushant-patil.webp"
                                            alt="Dr. Sushant Patil, Founder of Anuja Sushant Patil Global Foundation"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Vision & Aim Badge - Floating Outside */}
                                    <div className="animate-float-subtle-delayed absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="text-teal-500 text-[10px]">◈</span>
                                        Vision & Aim
                                    </div>
                                </div>

                                <div className="mt-6 text-left w-full max-w-[400px]">
                                    <h4
                                        className="font-nunito font-extrabold text-[18px] text-black"
                                    >
                                        Dr. Sushant Vijaykumar Patil
                                    </h4>
                                    <p
                                        className="font-cabin text-[14px] font-medium text-gray-600"
                                    >
                                        Founder, ASPGF
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    Every great change begins with a simple belief - that we can
                                    make a difference. The{" "}
                                    <strong className="text-[#0a7061]">
                                        Anuja Sushant Patil Global Foundation
                                    </strong>{" "}
                                    is not just an organization, it is a{" "}
                                    <strong className="text-[#0a7061]">
                                        movement to empower lives
                                    </strong>{" "}
                                    through
                                    <strong className="text-[#0a7061]">
                                        {" "}
                                        education, care, and opportunity
                                    </strong>
                                    .
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    Our vision is to create a society where <strong className="text-[#0a7061]">knowledge</strong> is not a
                                    privilege, but a right; where <strong className="text-[#0a7061]">helping the needful</strong> is not an act of charity, but a
                                    <strong className="text-[#0a7061]"> responsibility</strong> we
                                    all share. By <strong className="text-[#0a7061]">
                                        nurturing young minds
                                    </strong>
                                    , <strong className="text-[#0a7061]">
                                        supporting communities
                                    </strong>
                                    , and <strong className="text-[#0a7061]">
                                        encouraging self-reliance
                                    </strong>
                                    , we aim to build a world where progress is <strong className="text-[#0a7061]">
                                        inclusive and sustainable
                                    </strong>
                                    .
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify italic border-l-4 border-teal-600 pl-8 pt-4 relative"
                                >
                                    <span className="absolute left-2 top-0 text-4xl text-black/20 font-serif leading-none">
                                        "
                                    </span>
                                    <em>
                                        I believe that{" "}
                                        <strong className="text-[#0a7061]">true success</strong> is
                                        measured not by what we achieve for ourselves, but by what we{" "}
                                        <strong className="text-[#0a7061]">
                                            enable others to achieve
                                        </strong>
                                        . Through this foundation, we strive to sow{" "}
                                        <strong className="text-[#0a7061]">
                                            seeds of hope, dignity, and growth
                                        </strong>{" "}
                                        that will inspire generations to come.
                                        <span className="inline-block translate-y-2 ml-1 text-4xl text-black/20 font-serif leading-none">
                                            "
                                        </span>
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= SECTION 2: ANUJA PATIL ================= */}
                    <div id="anuja-patil" className="scroll-mt-32">
                        <div className="mb-12">
                            <h2
                                className="font-nunito text-[26px] text-black font-black tracking-tight leading-none pb-2"
                            >
                                MESSAGE FROM THE FOUNDER
                            </h2>
                            <div className="h-1.5 w-32 bg-black rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
                            {/* Image Side - First in DOM for Mobile */}
                            <div className="order-1 md:order-2 relative flex flex-col items-center md:items-end mt-8 md:mt-0">
                                <div className="relative group w-full aspect-square max-w-[400px]">
                                    {/* Compassionate Badge - Floating Outside */}
                                    <div className="animate-float-subtle absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Compassionate
                                    </div>

                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                        <Image
                                            src="/images/about-us/anuja-patil.webp"
                                            alt="Advocate Anuja Sushant Patil, Founder of Anuja Sushant Patil Global Foundation"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Empowering Badge - Floating Outside */}
                                    <div className="animate-float-subtle-delayed absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="text-teal-500 text-[10px]">◈</span>
                                        Empowering
                                    </div>
                                </div>
                                <div className="mt-6 text-left w-full max-w-[400px]">
                                    <h4
                                        className="font-nunito font-extrabold text-[18px] text-black"
                                    >
                                        Adv. Anuja Sushant Patil
                                    </h4>
                                    <p
                                        className="font-cabin text-[14px] font-medium text-gray-600"
                                    >
                                        Founder, ASPGF
                                    </p>
                                </div>
                            </div>

                            {/* Text Side - Second in DOM for Mobile */}
                            <div className="order-2 md:order-1 flex flex-col gap-4">
                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    At the heart of every great nation lies the{" "}
                                    <strong className="text-[#0a7061]">
                                        strength of its people
                                    </strong>
                                    , and that strength comes from{" "}
                                    <strong className="text-[#0a7061]">
                                        education, compassion, and opportunities to grow
                                    </strong>
                                    . With this belief, the{" "}
                                    <strong className="text-[#0a7061]">
                                        Anuja Sushant Patil Global Foundation
                                    </strong>{" "}
                                    was established as a humble step towards creating a society
                                    where{" "}
                                    <strong className="text-[#0a7061]">knowledge empowers</strong>,{" "}
                                    <strong className="text-[#0a7061]">kindness uplifts</strong>,
                                    and support reaches those who need it the most.
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    <strong className="text-[#0a7061]">Education</strong> is not
                                    just about academics - it is about <strong className="text-[#0a7061]">
                                        shaping confident, capable, and responsible individuals
                                    </strong> who can contribute positively to the world. We are committed to <strong className="text-[#0a7061]">
                                        nurturing young minds
                                    </strong>
                                    ,
                                    <strong className="text-[#0a7061]">
                                        {" "}
                                        supporting underprivileged communities
                                    </strong>
                                    , and building pathways where <strong className="text-[#0a7061]">
                                        hope transforms into reality
                                    </strong>
                                    .
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify italic border-l-4 border-teal-600 pl-8 pt-4 relative"
                                >
                                    <span className="absolute left-2 top-0 text-4xl text-black/20 font-serif leading-none">
                                        "
                                    </span>
                                    <em>
                                        Our mission goes{" "}
                                        <strong className="text-[#0a7061]">beyond charity</strong>; it
                                        is about{" "}
                                        <strong className="text-[#0a7061]">
                                            empowering people with dignity, skills, and confidence
                                        </strong>{" "}
                                        to stand tall and lead a better tomorrow. Together, with{" "}
                                        <strong className="text-[#0a7061]">
                                            collective effort and shared responsibility
                                        </strong>
                                        , we can create a future where{" "}
                                        <strong className="text-[#0a7061]">
                                            no dream is left behind
                                        </strong>{" "}
                                        and no individual is left <br />
                                        unseen.
                                        <span className="inline-block translate-y-2 ml-1 text-4xl text-black/20 font-serif leading-none">
                                            "
                                        </span>
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ================= SECTION 3: DR. SHRIRAM CHAVAN ================= */}
                    <div id="shriram-chavan" className="scroll-mt-32">
                        <div className="mb-12">
                            <h2
                                className="font-nunito text-[26px] text-black font-black tracking-tight leading-none pb-2"
                            >
                                MESSAGE FROM PROJECT DIRECTOR
                            </h2>
                            <div className="h-1.5 w-32 bg-black rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                            {/* RIGHT IMAGE SIDE (Moved to Left) */}
                            <div className="relative flex flex-col items-start">
                                <div className="relative group w-full aspect-square max-w-[400px]">
                                    {/* Impactful Badge - Floating Outside */}
                                    <div className="animate-float-subtle absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        Impactful
                                    </div>

                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                        <Image
                                            src="/images/about-us/shriram-sir.webp"
                                            alt="Dr. Shriram Chavan, Project Director of Anuja Sushant Patil Global Foundation"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 400px"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Action Oriented Badge - Floating Outside */}
                                    <div className="animate-float-subtle-delayed absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                        <span className="text-teal-500 text-[10px]">◈</span>
                                        Action Oriented
                                    </div>
                                </div>

                                <div className="mt-6 text-left w-full max-w-[400px]">
                                    <h4
                                        className="font-nunito font-extrabold text-[18px] text-black uppercase"
                                    >
                                        DR. SHRIRAM CHAVAN
                                    </h4>
                                    <p
                                        className="font-cabin text-[14px] font-medium text-gray-600 uppercase tracking-wide"
                                    >
                                        Project Director, ASPGF
                                    </p>
                                </div>
                            </div>

                            {/* LEFT CONTENT (Moved to Right) */}
                            <div className="flex flex-col gap-4">
                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    <strong className="text-[#0a7061]">Mr. Shriram Chavan</strong>{" "}
                                    is the{" "}
                                    <strong className="text-[#0a7061]">Project Director</strong> at{" "}
                                    <strong className="text-[#0a7061]">
                                        Anuja Sushant Patil Global Foundation
                                    </strong>
                                    , leading impactful initiatives in{" "}
                                    <strong className="text-[#0a7061]">
                                        education, healthcare, women empowerment, and rural
                                        development
                                    </strong>
                                    . With a strong commitment to{" "}
                                    <strong className="text-[#0a7061]">social welfare</strong>, he
                                    works to create{" "}
                                    <strong className="text-[#0a7061]">sustainable change</strong>{" "}
                                    and uplift communities through
                                    <strong className="text-[#0a7061]">
                                        {" "}
                                        strategic planning and compassionate leadership
                                    </strong>
                                    .
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify"
                                >
                                    Our vision is to build a society where{" "}
                                    <strong className="text-[#0a7061]">knowledge</strong> is accessible to
                                    everyone, not limited to a few; where{" "}
                                    <strong className="text-[#0a7061]">supporting those in need</strong>{" "}
                                    is not merely an act of kindness, but a
                                    <strong className="text-[#0a7061]"> shared responsibility</strong> of
                                    every individual. By{" "}
                                    <strong className="text-[#0a7061]">
                                        empowering young minds
                                    </strong>
                                    ,{" "}
                                    <strong className="text-[#0a7061]">
                                        uplifting communities
                                    </strong>
                                    , and{" "}
                                    <strong className="text-[#0a7061]">
                                        promoting self-reliance
                                    </strong>
                                    , we strive to create a future where growth is{" "}
                                    <strong className="text-[#0a7061]">
                                        inclusive, meaningful, and sustainable
                                    </strong>
                                    .
                                </p>

                                <p
                                    className="font-cabin text-[16px] text-gray-700 leading-relaxed text-justify italic border-l-4 border-teal-600 pl-8 pt-4 relative"
                                >
                                    <span className="absolute left-2 top-0 text-4xl text-black/20 font-serif leading-none">
                                        "
                                    </span>
                                    <em>
                                        I believe that{" "}
                                        <strong className="text-[#0a7061]">true success</strong> is
                                        measured not by what we achieve for ourselves, but by what we{" "}
                                        <strong className="text-[#0a7061]">
                                            enable others to achieve
                                        </strong>
                                        . Through this foundation, we strive to sow{" "}
                                        <strong className="text-[#0a7061]">
                                            seeds of hope, dignity, and growth
                                        </strong>{" "}
                                        that will inspire generations to come.
                                        <span className="inline-block translate-y-2 ml-1 text-4xl text-black/20 font-serif leading-none">
                                            "
                                        </span>
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HistorySection />
        </main>
    );
}
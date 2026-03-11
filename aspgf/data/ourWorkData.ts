export interface WorkItem {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
    featured?: boolean;
}

export const workCategories = [
    "All Category",
    "Health",
    "Education",
    "Old Age",
    "Orphanage",
];

export const allWorkItems: WorkItem[] = [
    {
        id: 1,
        image: "/Images/Gallery/variProgram/DSC02643.webp",
        category: "Health",
        date: "26/11/2025",
        title: "Vari Relief Program",
        description:
            "During the sacred Ashadhi Wari pilgrimage, our foundation organized a large-scale relief distribution program to support Warkaris walking long distances in challenging weather conditions.",
        featured: true,
    },


    {
        id: 2,
        image: "/Images/Gallery/Schoolrship-Distribution/04-Picsart-AiImageEnhancer - Copy.webp",
        category: "Education",
        date: "26/11/2025",
        title: "Scholarship Distribution Program",
        description:
            "To support education for deserving students, the foundation conducted a scholarship distribution program for...",
    },
    {
        id: 3,
        image: "/Images/Gallery/Begger/20251115_110959.webp",
        category: "Orphanage",
        date: "12/08/2025",
        title: "Beggar Rehabilitation Center",
        description:
            "A winter relief and community cleanliness initiative was conducted...",
        // featured: true,
    },
    {
        id: 4,
        image: "/Images/Gallery/Matruchhaya-Children-Home/20251025_115144(0).webp",
        category: "Orphanage",
        date: "20/10/2025",
        title: "Matruchhaya Children's Home",
        description:
            "Support provided to orphaned children for winter preparedness and daily sustenance.",
    },
    {
        id: 5,
        image: "/Images/Gallery/christmas/DSC00596.webp",
        category: "Orphanage",
        date: "12/08/2025",
        title: "Spreading Joy This Christmas: A Celebration with Children at Mauli Krupa",
        description:
            "A heartwarming Christmas celebration by Anuja Sushant Patil Global Foundation featuring stationery kit distribution.",
    },
    {
        id: 6,
        image: "/Images/Gallery/DSC04220.webp",
        category: "Old Age",
        date: "12/08/2025",
        title: "Swarnanagari Old Age Home",
        description:
            "Monthly support drive providing essential supplies and companionship to elderly residents at the old age home.",
    },
    // {
    //     id: 7,
    //     image: "/Images/Impact/impact-1.webp",
    //     category: "Health",
    //     date: "12/08/2025",
    //     title: "A Visit That Inspires: Poona Blind School & Home",
    //     description:
    //         "Empowering students with digital skills through hands-on workshops conducted at government schools.",
    // },
    {
        id: 7,
        image: "/Images/Gallery/Malhar-Bday/20251025_114825.webp",
        category: "Health",
        date: "15/09/2025",
        title: "Malhar Birthday Celebration",
        description:
            "Free meals served daily to underprivileged families and individuals in need across Pune.",
    },
    {
        id: 8,
        image: "/Images/Gallery/Schoolrship-Distribution/05-Picsart-AiImageEnhancer - Copy.webp",
        category: "Education",
        date: "26/11/2025",
        title: "Scholarship Distribution Program",
        description:
            "A seminar focused on skill development and entrepreneurship opportunities for underprivileged women.",
    },
];

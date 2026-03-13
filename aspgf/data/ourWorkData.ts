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
    "Charity",
    "Education",
    "Old Age",
    "Orphanage",
];

export const allWorkItems: WorkItem[] = [
    {
        id: 1,
        image: "/Images/Gallery/variProgram/aashadi_vari_image_7.webp",
        category: "Charity",
        date: "22/06/2025",
        title: "Vari Program",
        description:
            "During this program, the foundation distributed essential items to Warkari devotees. A total of 200 raincoats, 200 umbrellas, 1000 biscuit packets, drinking water bottles, tea, and 50 kg of sabudana khichdi  were distributed to support the pilgrims during their journey.",
        featured: true,
    },


    {
        id: 2,
        image: "/Images/Gallery/Schoolrship-Distribution/scholarship_image_1.webp",
        category: "Education",
        date: "08/07/2025",
        title: "Scholarship Distribution Program",
        description:
            "At Narayanrao Sanas Vidyalaya, Dhayari, the foundation provided financial assistance to needy students. A total scholarship amount of ₹5,13,000 was distributed to 116 students to support their Educational fees.",
    },
    {
        id: 3,
        image: "/Images/Gallery/Begger/begger_image_1.webp",
        category: "Orphanage",
        date: "15/11/2025",
        title: "Beggar Rehabilitation Center",
        description:
            "At the Beggar Rehabilitation Center in Phulenagar, the foundation distributed blankets to 100 people and sweaters to 22 individuals. Along with this, a cleanliness drive was conducted in the surrounding area with the help of NSS (National Service Scheme) volunteers. A total of 50 students from Dr. D. Y. Patil Engineering College and Ajeenkya D. Y. Patil College participated in shramdaan (voluntary service) and contributed to the cleanliness campaign.",
        // featured: true,
    },
    {
        id: 4,
        image: "/Images/Gallery/Matruchhaya-Children-Home/mch_image_1.webp",
        category: "Orphanage",
        date: "25/10/2025",
        title: "Malhar Birthday Celebration",
        description:
            "Alandi Road, Pune | 25 October 2025 On the occasion of Malhar’s birthday, son of Hon. Rajkunwar Tai Deshmukh-Gaikwad, the foundation distributed warm sweaters to 30 children at Matruchhaya Orphanage. Additionally, grocery supplies sufficient for two to three months were also provided to support the children.",
    },
    {
        id: 5,
        image: "/Images/Gallery/christmas/christmas_image_2.webp",
        category: "Orphanage",
        date: "24/12/2025",
        title: "Stationery Kit and Snacks Distribution Program on the Occasion of Christmas",
        description:
            "Through Mauli Krupa Orphan Children Ashram Annapurna Children’s Hostel, Wadgaon Road, Annapurna Nagar, Opposite Indrayani Clinic, Alandi (Devachi), Tal. Khed, Dist. Pune On the occasion of Christmas, a Stationery Kit and Snacks Distribution Program  has been organized at the above location.",
    },
    {
        id: 6,
        image: "/Images/Gallery/Old-Age/old_age_image_1.webp",
        category: "Old Age",
        date: "29/08/2025",
        title: "Swarnanagari Old Age Home Program",
        description:
            "The foundation distributed *grocery items worth ₹30,000 along with medicines and medical tablets to residents of Swarnangari Old Age Home. Approximately 60–65 elderly residents benefited from this initiative.",
    },
    // {
    //     id: 7,
    //     image: "/Images/Impact/impact-1.webp",
    //     category: "Charity",
    //     date: "12/08/2025",
    //     title: "A Visit That Inspires: Poona Blind School & Home",
    //     description:
    //         "Empowering students with digital skills through hands-on workshops conducted at government schools.",
    // },
    // {
    //     id: 7,
    //     image: "/Images/Gallery/Malhar-Bday/malhar_birthday_1.webp",
    //     category: "Charity",
    //     date: "15/09/2025",
    //     title: "Malhar Birthday Celebration",
    //     description:
    //         "Free meals served daily to underprivileged families and individuals in need across Pune.",
    // },
    // {
    //     id: 8,
    //     image: "/Images/Gallery/Schoolrship-Distribution/scholarship_image_2.webp",
    //     category: "Education",
    //     date: "26/11/2025",
    //     title: "Scholarship Distribution Program",
    //     description:
    //         "A seminar focused on skill development and entrepreneurship opportunities for underprivileged women.",
    // },
];

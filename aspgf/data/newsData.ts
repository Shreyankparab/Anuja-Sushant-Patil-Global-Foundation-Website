export type Category = "All" | "Health" | "Old Age" | "Education" | "Orphanage" | "Child_Labour";

export interface NewsItem {
    id: number;
    title: string;
    category: Category;
    image: string;
    location: string;
    date: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Scholarship Distribution Ceremony",
        category: "Education",
        image: "/Images/News/news1.webp",
        location: "Pune",
        date: "23/07/2025",
    },
    {
        id: 2,
        title: "Scholarship Distribution Ceremony",
        category: "Education",
        image: "/Images/News/news2.webp",
        location: "Alandi",
        date: "23/07/2025",
    },
    {
        id: 3,
        title: "Scholarship Distribution Ceremony",
        category: "Education",
        image: "/Images/News/news10.webp",
        location: "Alandi",
        date: "23/07/2025",
    },
    {
        id: 4,
        title: "Sanas School Scholarship Distribution Ceremony",
        category: "Education",
        image: "/Images/News/news4.webp",
        location: "Pune",
        date: "23/07/2025",
    },
    {
        id: 5,
        title: "Sweeter Distribution Ceremony",
        category: "Child_Labour",
        image: "/Images/News/news5.webp",
        location: "Mumbai",
        date: "10/08/2025",
    },
    {
        id: 6,
        title: "Sweeter Distribution Ceremony",
        category: "Child_Labour",
        image: "/Images/News/news6.webp",
        location: "Pune",
        date: "11/08/2025",
    },
    {
        id: 7,
        title: "Blanket, Sweeter Distribution Ceremony",
        category: "Orphanage",
        image: "/Images/News/news7.webp",
        location: "Nashik",
        date: "15/08/2025",
    },
    {
        id: 8,
        title: "Blanket and Sweeter Distribution)",
        category: "Orphanage",
        image: "/Images/News/news8.webp",
        location: "Pune",
        date: "23/07/2025",
    },
    {
        id: 9,
        title: "Scolarship Distribution Ceremony",
        category: "Education",
        image: "/Images/News/news3.webp",
        location: "Mumbai",
        date: "10/08/2025",
    },
    {
        id: 10,
        title: "Bal Ashram Food and Blanket Distribution",
        category: "Child_Labour",
        image: "/Images/News/news12.webp",
        location: "Pune",
        date: "11/08/2025",
    },
    // {
    //     id: 11,
    //     title: "Education awareness drive (Copy 1)",
    //     category: "Education",
    //     image: "/Images/News/news10.webp",
    //     location: "Nashik",
    //     date: "15/08/2025",
    // },
    // {
    //     id: 12,
    //     title: "Contrary to popular belief (Copy 2)",
    //     category: "Education",
    //     image: "/Images/News/news11.webp",
    //     location: "Pune",
    //     date: "23/07/2025",
    // },
    // {
    //     id: 13,
    //     title: "Medical support initiative (Copy 2)",
    //     category: "Health",
    //     image: "/Images/News/news12.webp",
    //     location: "Mumbai",
    //     date: "10/08/2025",
    // },
    // {
    //     id: 14,
    //     title: "Senior citizen welfare program (Copy 2)",
    //     category: "Old Age",
    //     image: "/Images/News.webp",
    //     location: "Pune",
    //     date: "11/08/2025",
    // },
    // {
    //     id: 15,
    //     title: "Education awareness drive (Copy 2)",
    //     category: "Education",
    //     image: "/Images/News.webp",
    //     location: "Nashik",
    //     date: "15/08/2025",
    // },
    // {
    //     id: 16,
    //     title: "Education awareness drive (Copy 2)",
    //     category: "Education",
    //     image: "/Images/News.webp",
    //     location: "Nashik",
    //     date: "15/08/2025",
    // },
    // {
    //     id: 17,
    //     title: "Education awareness drive (Copy 2)",
    //     category: "Education",
    //     image: "/Images/News.webp",
    //     location: "Nashik",
    //     date: "15/08/2025",
    // },
    // {
    //     id: 18,
    //     title: "Education awareness drive (Copy 2)",
    //     category: "Education",
    //     image: "/Images/News.webp",
    //     location: "Nashik",
    //     date: "15/08/2025",
    // },
];

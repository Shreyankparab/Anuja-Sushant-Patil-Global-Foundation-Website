export type Category = "All" | "Health" | "Old Age" | "Education";

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
    title: "There are many variations of",
    category: "Health",
    image: "/Images/News.webp",
    location: "Pune",
    date: "23/07/2025",
  },
  {
    id: 2,
    title: "Play for the world with us",
    category: "Old Age",
    image: "/Images/News.webp",
    location: "Alandi",
    date: "23/07/2025",
  },
  {
    id: 3,
    title: "Contrary to popular belief",
    category: "Education",
    image: "/Images/News.webp",
    location: "Pune",
    date: "23/07/2025",
  },
  {
    id: 4,
    title: "Medical support initiative",
    category: "Health",
    image: "/Images/News.webp",
    location: "Mumbai",
    date: "10/08/2025",
  },
  {
    id: 5,
    title: "Senior citizen welfare program",
    category: "Old Age",
    image: "/Images/News.webp",
    location: "Pune",
    date: "11/08/2025",
  },
  {
    id: 6,
    title: "Education awareness drive",
    category: "Education",
    image: "/Images/News.webp",
    location: "Nashik",
    date: "15/08/2025",
  },
  {
    id: 3,
    title: "Contrary to popular belief",
    category: "Education",
    image: "/Images/News.webp",
    location: "Pune",
    date: "23/07/2025",
  },
  {
    id: 4,
    title: "Medical support initiative",
    category: "Health",
    image: "/Images/News.webp",
    location: "Mumbai",
    date: "10/08/2025",
  },
  {
    id: 5,
    title: "Senior citizen welfare program",
    category: "Old Age",
    image: "/Images/News.webp",
    location: "Pune",
    date: "11/08/2025",
  },
  {
    id: 6,
    title: "Education awareness drive",
    category: "Education",
    image: "/Images/News.webp",
    location: "Nashik",
    date: "15/08/2025",
  },
  {
    id: 3,
    title: "Contrary to popular belief",
    category: "Education",
    image: "/Images/News.webp",
    location: "Pune",
    date: "23/07/2025",
  },
  {
    id: 4,
    title: "Medical support initiative",
    category: "Health",
    image: "/Images/News.webp",
    location: "Mumbai",
    date: "10/08/2025",
  },
  {
    id: 5,
    title: "Senior citizen welfare program",
    category: "Old Age",
    image: "/Images/News.webp",
    location: "Pune",
    date: "11/08/2025",
  },
  {
    id: 6,
    title: "Education awareness drive",
    category: "Education",
    image: "/Images/News.webp",
    location: "Nashik",
    date: "15/08/2025",
  },
];

import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aspgf.org";

  const routes = [
    {
      url: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "/about-us",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/our-story",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/our-work",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "/news",
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "/gallery",
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "/impact",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/contact-us",
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: "/donate-us",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "/privacy-policy",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: "/terms-of-service",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const formatDate = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return routes.map((route) => {
    let lastModified = new Date();
    try {
      const relativePath = route.url.replace(/^\//, "");
      const filePath = path.join(
        process.cwd(),
        "src",
        "app",
        relativePath === "" ? "page.tsx" : path.join(relativePath, "page.tsx")
      );
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        lastModified = stats.mtime;
      }
    } catch (e) {
      // fallback to current date if stats check fails
    }

    return {
      url: `${baseUrl}${route.url}`,
      lastModified: formatDate(lastModified),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    };
  });
}

import { loadPages } from "@/lib/content/loadContent";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = loadPages();
    const paths = Object.keys(pages);
    const baseUrl = "https://techi.co.kr";

    return paths.map((path) => ({
        url: `${baseUrl}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
    }));
}

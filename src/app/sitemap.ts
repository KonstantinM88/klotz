import type { MetadataRoute } from "next";
import { overviewPages } from "@/content/pages";
import { featuredArticles, featuredProjects } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl().origin;
  const paths = [
    "",
    "projekt-anfragen",
    ...overviewPages.map(({ slug }) => slug),
    ...featuredProjects.map(({ href }) => href.slice(1)),
    ...featuredArticles.map(({ href }) => href.slice(1)),
  ];
  return paths.map((path, index) => ({
    url: `${origin}/${path}`,
    lastModified: new Date("2026-09-24"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "projekt-anfragen" ? 0.9 : 0.7,
  }));
}

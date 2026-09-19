import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

/**
 * Static pages plus one entry per project, both derived from the project
 * source of truth so the sitemap can never drift from the real routes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${siteConfig.url}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...projectPages];
}
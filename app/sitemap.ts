import { MetadataRoute } from "next";
import { getAllSlugs } from "./data/blogData";
import { getAllPracticeAreaSlugs } from "./data/practiceAreasData";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://imassociates.in";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/practice-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/bar-council-compliance`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const practiceAreaPages: MetadataRoute.Sitemap = getAllPracticeAreaSlugs().map((slug) => ({
    url: `${base}/practice-areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...blogPages, ...practiceAreaPages];
}

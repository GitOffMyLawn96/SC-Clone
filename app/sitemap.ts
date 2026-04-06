import type { MetadataRoute } from "next";
import { siteConfig, useCases } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = ([
    { url: siteConfig.url, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${siteConfig.url}/highdra`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/use-cases`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/business-model`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteConfig.url}/technology`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${siteConfig.url}/careers`, changeFrequency: "weekly" as const, priority: 0.5 },
    { url: `${siteConfig.url}/news`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${siteConfig.url}/impressum`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${siteConfig.url}/terms`, changeFrequency: "yearly" as const, priority: 0.2 },
  ] as const).map((route) => ({ ...route, lastModified: now }));

  const useCaseRoutes: MetadataRoute.Sitemap = useCases.map((useCase) => ({
    url: `${siteConfig.url}/use-cases/${useCase.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...useCaseRoutes];
}

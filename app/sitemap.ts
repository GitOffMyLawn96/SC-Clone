import type { MetadataRoute } from "next";
import { siteConfig, useCases } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/highdra",
    "/business-model",
    "/use-cases",
    "/technology",
    "/about",
    "/careers",
    "/news",
    "/contact",
    "/privacy-policy",
    "/impressum",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));

  const useCaseRoutes = useCases.map((useCase) => ({
    url: `${siteConfig.url}/use-cases/${useCase.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...useCaseRoutes];
}

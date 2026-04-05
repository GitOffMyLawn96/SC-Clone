import { createClient } from "next-sanity";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-04-05",
  useCdn: true,
};

export const hasSanityConfig = Boolean(sanityConfig.projectId);

export const sanityClient = createClient({
  ...sanityConfig,
  projectId: sanityConfig.projectId || "placeholder",
  perspective: "published",
});

import { groq } from "next-sanity";

export const navigationQuery = groq`
  *[_type == "siteSettings"][0]{
    title,
    navigation,
    footerLinks
  }
`;

export const marketingPagesQuery = groq`
  *[_type == "marketingPage"]{
    slug,
    title,
    eyebrow,
    summary,
    sections[]
  }
`;

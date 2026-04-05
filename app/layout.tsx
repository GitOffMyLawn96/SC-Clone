import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@/components/system/analytics";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "starcopter | Premium Drone Systems",
    template: "%s | starcopter",
  },
  description: siteConfig.description,
  openGraph: {
    title: "starcopter | Premium Drone Systems",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "starcopter",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Starcopter premium HIGHDRA concept visual",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "starcopter | Premium Drone Systems",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Analytics } from "@/components/system/analytics";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "starcopter | High-Performance Drone Systems",
    template: "%s | starcopter",
  },
  description: siteConfig.description,
  openGraph: {
    title: "starcopter | High-Performance Drone Systems",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "starcopter",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Starcopter HIGHDRA drone system",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "starcopter | High-Performance Drone Systems",
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
    <html lang="en" className={oswald.variable} data-scroll-behavior="smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

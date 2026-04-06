import type { NextConfig } from "next";

const extraDevOrigins =
  process.env.NEXT_DEV_ALLOWED_ORIGINS?.split(",")
    .map((host) => host.trim().toLowerCase())
    .filter(Boolean) ?? [];

const nextConfig: NextConfig = {
  // Allow loading /_next/* dev assets when you open the site via LAN IP (e.g. http://192.168.0.50:3000).
  // Without this, scripts/HMR can be blocked and the page stays blank below the header.
  allowedDevOrigins: Array.from(
    new Set(["192.168.0.50", "127.0.0.1", ...extraDevOrigins]),
  ),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { footerLinks, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(0,10,28,0.98)] py-16">
      <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-6">
          <Image
            src="/starcopter-logo.png"
            alt="starcopter"
            width={160}
            height={42}
            className="h-8 w-auto opacity-80"
          />
          <p className="max-w-md text-sm font-extralight leading-7 text-white/55">
            High-performance drone systems for surveying, inspection, sensing,
            and transport missions. Made in Germany. Powered by Auterion.
          </p>
          <div className="text-sm font-extralight text-white/50">
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.locations.join(" / ")}</p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Explore
          </p>
          <div className="space-y-3">
            {footerLinks.company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-extralight text-white/60 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
            Legal
          </p>
          <div className="space-y-3">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-extralight text-white/60 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

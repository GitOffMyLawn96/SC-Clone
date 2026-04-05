import Link from "next/link";
import { Container } from "@/components/layout/container";
import { footerLinks, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(4,5,8,0.98)] py-16">
      <Container className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-5">
          <p className="font-display text-2xl uppercase tracking-[0.22em] text-white">
            starcopter
          </p>
          <p className="max-w-md text-sm leading-7 text-white/68">
            Premium drone capability for surveying, inspection, sensing, and
            transport-oriented missions. Engineered to feel like infrastructure,
            not a gadget.
          </p>
          <div className="text-sm text-white/60">
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
            <p>{siteConfig.contact.locations.join(" / ")}</p>
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/45">
            Explore
          </p>
          <div className="space-y-3">
            {footerLinks.company.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-white/72 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/45">
            Legal
          </p>
          <div className="space-y-3">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-white/72 transition hover:text-white"
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

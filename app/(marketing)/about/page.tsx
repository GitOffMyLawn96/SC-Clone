import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Timeline } from "@/components/marketing/timeline";
import { companyTimeline, siteConfig } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Starcopter"
        description="A premium product deserves a company story that feels equally credible: technically grounded, commercially smart, and ready to support real deployments."
        stat={siteConfig.contact.locations.join(" / ")}
      />

      <Timeline items={companyTimeline} />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Mission
            </p>
            <p className="mt-5 text-base leading-7 text-white/68">
              Democratize access to high-end data and operational drone
              capability by making premium performance more deployable and more
              commercially practical.
            </p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-blue)]">
              Brand Character
            </p>
            <p className="mt-5 text-base leading-7 text-white/68">
              Precise, engineered, performance-led, and intentionally premium.
              The company pages are set up to support recruiting, trust building,
              and future press content without falling back into a template look.
            </p>
          </article>
        </Container>
      </section>

      <CTABand
        eyebrow="Company Story"
        title="Support trust before the first sales call."
        description="The About page is built to scale into team profiles, partner modules, awards, certifications, and recruiting storytelling as the brand grows."
      />
    </>
  );
}

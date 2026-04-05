import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { MetricStrip } from "@/components/marketing/metric-strip";
import { Timeline } from "@/components/marketing/timeline";
import { Reveal } from "@/components/system/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { DroneHero } from "@/components/three/drone-hero";
import {
  capabilityCards,
  companyTimeline,
  heroMetrics,
  homepageHighlights,
  siteConfig,
  useCases,
} from "@/lib/site-data";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "starcopter",
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="premium-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(91,140,255,0.22),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(242,200,76,0.16),transparent_22%)]" />
        <Container className="relative grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <Reveal>
            <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-blue)]">
              High-Performance Drone Platform
            </p>
            <h1 className="mt-6 font-display text-6xl uppercase leading-none tracking-[0.04em] text-white md:text-8xl">
              Premium Aerial Capability. Built For Real Work.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72">
              The HIGHDRA is a premium drone system for buyers who need real-world
              endurance, heavy payload support, modular integration, and a
              commercial model that respects how serious operations actually run.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Request Quote</ButtonLink>
              <ButtonLink href="/highdra" variant="secondary">
                Explore HIGHDRA
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
                  Pay-Per-Use
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Commercial access that keeps capital focused on delivery, not idle hardware.
                </p>
              </div>
              <div>
                <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
                  Auterion
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Modern avionics and integration flexibility for demanding workflows.
                </p>
              </div>
              <div>
                <p className="font-display text-3xl uppercase tracking-[0.08em] text-white">
                  C3
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  Certification-led trust for operators and procurement teams.
                </p>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <DroneHero />
          </Reveal>
        </Container>
      </section>

      <MetricStrip metrics={heroMetrics} />

      <FeatureGrid
        eyebrow="Positioning"
        title="Designed To Feel Like Premium Infrastructure"
        description="The site experience translates Starcopter from a basic brochure presence into a premium system story built around engineering confidence, operational outcomes, and high-ticket buyer trust."
        features={homepageHighlights}
      />

      <FeatureGrid
        eyebrow="Payload And Sensor Flexibility"
        title="One Platform, Multiple High-Value Workflows"
        description="The HIGHDRA narrative is grounded in real use cases that matter to surveying, inspection, environmental sensing, and technical field teams."
        features={capabilityCards}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="A site structure built to scale with future subpages"
              description="Each use case can stand as a premium landing page, campaign page, or sales support entry point without redesigning the brand system."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Reveal key={useCase.slug} delay={index * 0.08}>
                <article
                key={useCase.slug}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {useCase.heroStat}
                  </p>
                  <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-white/68">{useCase.summary}</p>
                  <Link
                    href={`/use-cases/${useCase.slug}`}
                    className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-[var(--color-blue)]"
                  >
                    View Use Case
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Timeline items={companyTimeline} />

      <CTABand
        eyebrow="Next Step"
        title="Bring the premium story into the sales motion."
        description="This build is structured so homepage polish, product storytelling, and future content operations can evolve together instead of competing with each other."
      />
    </>
  );
}

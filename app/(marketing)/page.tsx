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

      <section className="relative overflow-hidden border-b border-white/8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="tech-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,124,176,0.16),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(252,185,0,0.1),transparent_22%)]" />
        <Container className="relative grid gap-14 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          <Reveal>
            <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-blue-light)]">
              High-Performance Drone Platform
            </p>
            <h1 className="mt-6 text-6xl font-extralight uppercase leading-none tracking-[0.04em] text-white md:text-8xl">
              The HIGHDRA. Built For Real Work.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-extralight leading-8 text-white/60">
              A new generation of high-performance drones for teams that need
              real-world endurance, heavy payload support, modular integration,
              and a commercial model built around how serious operations actually run.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Request Quote</ButtonLink>
              <ButtonLink href="/highdra" variant="secondary">
                Explore HIGHDRA
              </ButtonLink>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-extralight uppercase tracking-[0.08em] text-white">
                  Pay-Per-Use
                </p>
                <p className="mt-2 text-sm font-extralight leading-6 text-white/50">
                  Commercial access that keeps capital focused on delivery, not idle hardware.
                </p>
              </div>
              <div>
                <p className="text-3xl font-extralight uppercase tracking-[0.08em] text-white">
                  Auterion
                </p>
                <p className="mt-2 text-sm font-extralight leading-6 text-white/50">
                  Modern avionics and integration flexibility for demanding workflows.
                </p>
              </div>
              <div>
                <p className="text-3xl font-extralight uppercase tracking-[0.08em] text-white">
                  C3
                </p>
                <p className="mt-2 text-sm font-extralight leading-6 text-white/50">
                  Certification-ready for operators and procurement teams.
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
        eyebrow="Why HIGHDRA"
        title="Designed As A System, Not A Spec Sheet"
        description="Every layer of the platform supports reliability, flexibility, and the kind of operational confidence that enterprise buyers need."
        features={homepageHighlights}
      />

      <FeatureGrid
        eyebrow="Payload And Sensor Flexibility"
        title="One Platform, Multiple High-Value Workflows"
        description="Built for the real use cases that matter: surveying, inspection, environmental sensing, and technical field operations."
        features={capabilityCards}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Use Cases"
              title="Vertical solutions for demanding operations"
              description="Each use case is structured as an independent landing page that can grow with campaign-specific content and deeper industry storytelling."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Reveal key={useCase.slug} delay={index * 0.08}>
                <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/40">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {useCase.heroStat}
                  </p>
                  <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                    {useCase.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">{useCase.summary}</p>
                  <Link
                    href={`/use-cases/${useCase.slug}`}
                    className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-blue-light)] transition hover:text-white"
                  >
                    Learn More →
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
        title="Ready to talk about your next project?"
        description="Whether you need a quote, a demo, or a deeper technical conversation, our team is ready."
      />
    </>
  );
}

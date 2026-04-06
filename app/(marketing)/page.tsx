import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { MetricStrip } from "@/components/marketing/metric-strip";
import { Timeline } from "@/components/marketing/timeline";
import { CinematicHero } from "@/components/marketing/cinematic-hero";
import { DroneScrollSequence } from "@/components/marketing/drone-scroll-sequence";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticCard } from "@/components/ui/magnetic-card";
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

      {/* Cinematic full-viewport hero */}
      <CinematicHero />

      {/* Scroll-driven drone exploration sequence */}
      <DroneScrollSequence />

      {/* Animated metric counters */}
      <MetricStrip metrics={heroMetrics} />

      <FeatureGrid
        eyebrow="Why HIGHDRA"
        title="Designed As A System, Not A Spec Sheet"
        description="Every layer of the platform supports reliability, flexibility, and the kind of operational confidence that enterprise buyers need."
        features={homepageHighlights}
      />

      <ProductShowcase />

      <FeatureGrid
        eyebrow="Payload And Sensor Flexibility"
        title="One Platform, Multiple High-Value Workflows"
        description="Built for the real use cases that matter: surveying, inspection, environmental sensing, and technical field operations."
        features={capabilityCards}
      />

      {/* Use case cards with magnetic hover */}
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
                <MagneticCard>
                  <article className="group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] p-8 transition duration-300 hover:border-[var(--color-gold)]/40">
                    {/* Animated gradient background */}
                    <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_var(--angle,0deg),transparent,rgba(252,185,0,0.04),transparent)] transition-all duration-700 group-hover:[--angle:180deg]" />
                    <div className="relative">
                      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                        {useCase.heroStat}
                      </p>
                      <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                        {useCase.title}
                      </h3>
                      <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">
                        {useCase.summary}
                      </p>
                      <Link
                        href={`/use-cases/${useCase.slug}`}
                        className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:text-[var(--color-gold)]"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </article>
                </MagneticCard>
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

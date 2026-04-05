import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { useCases } from "@/lib/site-data";

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Use Cases"
        description="A scalable page system for specific industries and workflows gives Starcopter more than one entry point into premium B2B demand generation."
        stat="3 Priority Verticals"
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {useCase.kicker}
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-white">
                {useCase.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/68">{useCase.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/62">
                {useCase.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
              <Link
                href={`/use-cases/${useCase.slug}`}
                className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-[var(--color-blue)]"
              >
                Explore Page
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Future Scale"
        title="Built for campaigns, vertical pages, and sector-specific sales motion."
        description="The structure supports adding new industries, region-specific landing pages, and deeper technical storytelling without changing the brand foundation."
      />
    </>
  );
}

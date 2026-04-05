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
        description="Explore how the HIGHDRA supports high-value operations across surveying, inspection, and environmental sensing."
        stat="3 Priority Verticals"
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article
              key={useCase.slug}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {useCase.kicker}
              </p>
              <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                {useCase.title}
              </h2>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">{useCase.summary}</p>
              <ul className="mt-6 space-y-3 text-sm font-extralight text-white/50">
                {useCase.outcomes.map((outcome) => (
                  <li key={outcome}>• {outcome}</li>
                ))}
              </ul>
              <Link
                href={`/use-cases/${useCase.slug}`}
                className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-blue-light)] transition hover:text-white"
              >
                Learn More →
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Your Industry"
        title="Don't see your use case? Let's talk."
        description="The HIGHDRA supports a growing range of specialized operations. Contact us to discuss your specific requirements."
      />
    </>
  );
}

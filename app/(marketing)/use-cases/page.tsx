import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { Reveal } from "@/components/system/reveal";
import { useCases } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Use Cases | Commercial Drone Applications | Starcopter",
  description:
    "Explore how the HIGHDRA supports high-value operations across surveying and mapping, infrastructure inspection, and environmental sensing with PhaseOne, CHCNAV, and Workswell sensors.",
  openGraph: {
    title: "Use Cases | Commercial Drone Applications | Starcopter",
    description:
      "Surveying, inspection, and environmental sensing with the C3-certified HIGHDRA platform.",
  },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Use Cases"
        description="Enterprise buyers evaluate drones by the outcomes they deliver, not the aircraft itself. Explore how the HIGHDRA supports high-value operations across three priority verticals."
        stat="3 Priority Verticals"
      />

      <TrustStrip />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <Reveal key={useCase.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  {useCase.kicker}
                </p>
                <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {useCase.title}
                </h2>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  {useCase.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {useCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-extralight text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 flex-1 space-y-3 text-sm font-extralight text-white/50">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-blue)]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/use-cases/${useCase.slug}`}
                  className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-blue-light)] transition hover:text-white"
                >
                  Learn More &rarr;
                </Link>
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Your Industry"
        title="Don't see your use case? Let's talk."
        description="The HIGHDRA supports a growing range of specialized operations. Contact us to discuss your specific requirements and sensor needs."
      />
    </>
  );
}

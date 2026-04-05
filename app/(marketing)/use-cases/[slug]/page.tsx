import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { useCases } from "@/lib/site-data";

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export default async function UseCaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = useCases.find((entry) => entry.slug === slug);

  if (!useCase) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Use Case"
        title={useCase.title}
        description={useCase.summary}
        stat={useCase.heroStat}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Outcomes
            </p>
            <ul className="mt-6 space-y-4 text-[15px] font-extralight leading-7 text-white/55">
              {useCase.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Platform Relevance
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {useCase.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/8 bg-white/[0.04] px-4 py-2 text-sm font-extralight text-white/60"
                >
                  {technology}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[15px] font-extralight leading-7 text-white/55">
              Built to support case studies, vertical-specific forms, gated
              technical downloads, and targeted campaign content as the
              product evolves.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Engagement"
        title={`Discuss your ${useCase.title.toLowerCase()} requirements with our team.`}
        description="Get a quote, schedule a demo, or explore how the HIGHDRA fits your specific operational needs."
      />
    </>
  );
}

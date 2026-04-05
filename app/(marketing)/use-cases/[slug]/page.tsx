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
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-blue)]">
              Outcomes
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-white/68">
              {useCase.outcomes.map((outcome) => (
                <li key={outcome}>• {outcome}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Platform Relevance
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {useCase.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                >
                  {technology}
                </span>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-white/68">
              These pages are intentionally structured as scalable demand assets.
              They can later absorb case studies, vertical-specific forms, gated
              technical downloads, and CMS-driven campaigns.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Engagement"
        title={`Move ${useCase.title.toLowerCase()} buyers toward a live conversation.`}
        description="Each use-case page keeps the design premium while letting sales add more vertical detail over time through a reusable content system."
      />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { SectionHeading } from "@/components/ui/section-heading";
import { useCases } from "@/lib/site-data";

export function generateStaticParams() {
  return useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = useCases.find((entry) => entry.slug === slug);
  if (!useCase) return {};

  return {
    title: `${useCase.title} | HIGHDRA Use Case | Starcopter`,
    description: useCase.summary,
    openGraph: {
      title: `${useCase.title} | HIGHDRA Use Case | Starcopter`,
      description: useCase.summary,
    },
  };
}

const workflowSteps = [
  {
    step: "Plan",
    detail: "Define the mission area, select the right sensor payload, and configure flight parameters via Auterion Mission Control.",
  },
  {
    step: "Deploy",
    detail: "Unpack the HIGHDRA from its compact transport case and assemble tool-free in under five minutes.",
  },
  {
    step: "Capture",
    detail: "Execute the mission with up to 35 minutes of flight time and 10 kg payload capacity per sortie.",
  },
  {
    step: "Process",
    detail: "Transfer data through open interfaces. Seamless integration into your existing processing and analysis pipelines.",
  },
  {
    step: "Deliver",
    detail: "Generate deliverables \u2014 point clouds, orthomosaics, thermal reports, spectral indices \u2014 and return the system.",
  },
];

const useCaseContent: Record<
  string,
  { platformRelevance: string; keyStat: { value: string; label: string } }
> = {
  "surveying-and-mapping": {
    platformRelevance:
      "The HIGHDRA carries PhaseOne 150 MP cameras with mechanical shutters and RTK geotagging for survey-grade orthomosaics, alongside CHCNAV LiDAR for production-grade point cloud capture. With 35-minute mission windows under real payload, geospatial teams cover more ground per sortie with fewer compromises on sensor quality. The modular payload mount means switching between RGB and LiDAR takes minutes, not hours.",
    keyStat: { value: "150 MP", label: "Survey-Grade RGB" },
  },
  "inspection-and-infrastructure": {
    platformRelevance:
      "Workswell radiometric thermal cameras detect heat anomalies, energy leaks, and structural issues invisible to the naked eye. Combined with high-resolution RGB for visual documentation, the HIGHDRA delivers repeatable inspection data that teams can compare across cycles. Service-backed fleet readiness means scheduled inspection programs run on time, every time.",
    keyStat: { value: "Radiometric", label: "Thermal Imaging" },
  },
  "environment-and-agriculture": {
    platformRelevance:
      "Multi- and hyperspectral sensors capture calibrated reflectance data for NDVI mapping, crop health analysis, and environmental monitoring. Long-endurance flights cover large agricultural parcels efficiently, while the pay-per-use model eliminates capital commitment for operations that are inherently seasonal. The open software architecture ensures data flows directly into existing analysis tools.",
    keyStat: { value: "NDVI", label: "Calibrated Spectral" },
  },
};

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

  const content = useCaseContent[slug];

  return (
    <>
      <PageHero
        eyebrow="Use Case"
        title={useCase.title}
        description={useCase.summary}
        stat={useCase.heroStat}
      />

      {content && (
        <section className="border-y border-white/6 py-12 md:py-16">
          <Container>
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-5xl font-light uppercase tracking-[0.06em] text-white md:text-6xl">
                {content.keyStat.value}
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                {content.keyStat.label}
              </p>
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Outcomes
            </p>
            <ul className="mt-6 space-y-4 text-[15px] font-extralight leading-7 text-white/55">
              {useCase.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                  {outcome}
                </li>
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
            {content && (
              <p className="mt-6 text-[15px] font-extralight leading-7 text-white/55">
                {content.platformRelevance}
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Operational Workflow"
            title="From mission planning to deliverable"
            description="A repeatable five-step process that integrates the HIGHDRA into your existing operations."
          />
          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {workflowSteps.map((ws, index) => (
              <article
                key={ws.step}
                className="relative rounded-xl border border-white/8 bg-white/[0.03] p-6"
              >
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-blue)]/20 bg-[var(--color-blue)]/5">
                  <span className="text-xs font-medium text-[var(--color-blue-light)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-light uppercase tracking-[0.04em] text-white">
                  {ws.step}
                </h3>
                <p className="mt-3 text-[13px] font-extralight leading-6 text-white/50">
                  {ws.detail}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CTABand
        eyebrow="Engagement"
        title={`Discuss your ${useCase.title.toLowerCase()} requirements with our team.`}
        description="Get a quote, schedule a demo, or explore how the HIGHDRA fits your specific operational needs. Starting at approximately \u20AC100 per flight hour."
      />
    </>
  );
}

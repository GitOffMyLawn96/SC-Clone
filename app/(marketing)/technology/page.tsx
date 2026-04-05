import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { technologyPillars } from "@/lib/site-data";

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Technology"
        description="This page translates the product into a premium technology narrative covering structure, power, avionics, software, and long-term extensibility."
        stat="Modular By Design"
      />

      <FeatureGrid
        eyebrow="System Architecture"
        title="A platform story buyers can trust"
        description="Instead of isolated feature claims, the technology page explains how every layer of the platform supports reliability, flexibility, and future relevance."
        features={technologyPillars}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-3">
          {["Airframe", "Power Packs", "Software Layer"].map((item) => (
            <article
              key={item}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-blue)]">
                {item}
              </p>
              <p className="mt-5 text-base leading-7 text-white/68">
                This slot is designed for future deeper content modules such as
                exploded views, technical diagrams, architecture notes, or
                certification references connected through the CMS.
              </p>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Technical Sales"
        title="Use the technology page to answer deeper buyer questions."
        description="The structure supports future CAD visuals, certification modules, and richer engineering content while keeping the brand expression consistent."
      />
    </>
  );
}

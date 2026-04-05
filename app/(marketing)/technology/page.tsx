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
        description="Explore the engineering behind the HIGHDRA: structure, power systems, avionics, software, and long-term extensibility."
        stat="Modular By Design"
      />

      <FeatureGrid
        eyebrow="System Architecture"
        title="Every layer supports reliability and flexibility"
        description="Instead of isolated feature claims, every component of the platform works together to deliver consistent field performance."
        features={technologyPillars}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          {["Airframe", "Power Packs", "Software Layer"].map((item) => (
            <article
              key={item}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                {item}
              </p>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                Deeper technical content, exploded views, architecture diagrams,
                and certification references will expand this section as
                the platform evolves.
              </p>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Technical Questions"
        title="Want to go deeper on the technology?"
        description="Our engineering team can walk you through platform architecture, payload integration, and certification details."
      />
    </>
  );
}

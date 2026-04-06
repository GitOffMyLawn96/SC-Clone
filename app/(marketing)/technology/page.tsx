import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { StatBlock } from "@/components/marketing/stat-block";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  technologyPillars,
  technologyDetails,
  sensorPartners,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Technology | HIGHDRA Platform Engineering | Starcopter",
  description:
    "Explore the engineering behind the HIGHDRA: in-house hexacopter airframe, Auterion Skynode X avionics, automotive-inspired battery system with 1,000-cycle warranty, and an open sensor ecosystem featuring PhaseOne, CHCNAV, and Workswell.",
  openGraph: {
    title: "Technology | HIGHDRA Platform Engineering | Starcopter",
    description:
      "In-house hexacopter engineering, Auterion Skynode X avionics, 1,000-cycle battery warranty, and C3 EASA certification.",
  },
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="Developed Entirely In-House"
        description="From airframe and PCB design to power distribution and battery systems \u2014 every layer of the HIGHDRA was engineered by our team in Braunschweig. Powered by Auterion, certified by EASA, built for European data sovereignty."
        stat="EASA PR-371 Certified"
      />

      <StatBlock
        stats={[
          { value: "6", label: "Redundant Drive Units" },
          { value: "1,000", label: "Battery Cycle Warranty" },
          { value: "36", label: "Packs Charged Simultaneously" },
          { value: "<5 min", label: "Field Setup Time" },
        ]}
      />

      <FeatureGrid
        eyebrow="System Architecture"
        title="Every layer supports reliability and flexibility"
        description="Hardware, software, power, and avionics engineered as one integrated system \u2014 not assembled from off-the-shelf parts."
        features={technologyPillars}
      />

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Deep Dive"
            title="Engineering that earns trust in the field"
            description="Three pillars of in-house development that differentiate the HIGHDRA from assembled competitor platforms."
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {[
              technologyDetails.airframe,
              technologyDetails.sensors,
              technologyDetails.certification,
            ].map((section) => (
              <article
                key={section.title}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                  {section.title}
                </p>
                <ul className="mt-6 space-y-4">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[15px] font-extralight leading-7 text-white/55"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blue)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Sensor Ecosystem"
            title="World-class sensors, one universal mount"
            description="The HIGHDRA supports leading sensor manufacturers through an open payload interface."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {sensorPartners.map((partner) => (
              <article
                key={partner.name}
                className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
              >
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  {partner.type}
                </p>
                <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {partner.name}
                </h3>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  {partner.highlight}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CTABand
        eyebrow="Technical Questions"
        title="Schedule a technical deep-dive with our engineering team."
        description="From platform architecture and payload integration to certification details and custom workflows \u2014 our engineers can walk you through every layer."
      />
    </>
  );
}

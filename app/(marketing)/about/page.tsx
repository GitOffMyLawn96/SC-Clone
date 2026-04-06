import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { StatBlock } from "@/components/marketing/stat-block";
import { TeamGrid } from "@/components/marketing/team-grid";
import { Timeline } from "@/components/marketing/timeline";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { companyTimeline, companyStats, leadershipTeam } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About | Starcopter GmbH | Deep Tech Drone Startup from Germany",
  description:
    "Founded in 2017 in Braunschweig, Germany. Starcopter designs and manufactures the HIGHDRA \u2014 a C3-certified high-performance drone platform powered by Auterion. Meet the team behind Germany\u2019s first C3-certified multirotor.",
  openGraph: {
    title: "About | Starcopter GmbH",
    description:
      "Deep tech drone startup from Braunschweig, Germany. Makers of the HIGHDRA, Germany\u2019s first C3-certified multirotor.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Starcopter"
        description="A deep tech startup from Braunschweig designing and manufacturing electric-driven unmanned aerial systems with world-leading performance. Powered by Auterion. Certified by EASA. Made in Germany."
        stat="Founded 2017"
      />

      <StatBlock stats={companyStats} />

      <Timeline items={companyTimeline} />

      <TeamGrid
        eyebrow="Leadership"
        title="The team building the HIGHDRA"
        description="Engineers, software developers, and drone pilots working toward one goal: the next generation of European drone systems."
        members={leadershipTeam}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-xl border border-white/8 bg-white/[0.03] p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Mission
              </p>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                Democratize access to high-end data and operational drone
                capability by making high-performance systems more deployable
                and commercially practical. Build a credible European
                alternative &mdash; open, compatible, and ready for real-world
                operations without dependency on closed ecosystems.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full rounded-xl border border-white/8 bg-white/[0.03] p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                Approach
              </p>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                Every component built in-house: flight platform, PCB design,
                power distribution, battery system. Hardware, software, and
                service treated as one integrated system. Robust, scalable, and
                ready for the market &mdash; built by a team that flies what
                they build.
              </p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Press And Recognition"
              title="Building in public, earning trust in practice"
            />
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <Reveal>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Auterion Partnership
                </p>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  &ldquo;HIGHDRA showcases the power of open architectures and
                  regional manufacturing. A great example of how European-built
                  platforms can deliver compliant, scalable solutions without
                  compromise.&rdquo;
                </p>
                <p className="mt-4 text-xs font-medium text-white/35">
                  &mdash; Lorenz Meier, CEO of Auterion
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                  INTERGEO 2024
                </p>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  HIGHDRA was presented to the global geospatial and drone
                  community at INTERGEO in Stuttgart, introducing the
                  flight-hour pricing model alongside PhaseOne, CHCNAV, and
                  Workswell sensor integrations.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  BraWo Capital
                </p>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  Seed funding from BraWo Capital Group in 2023 enabled
                  Starcopter to accelerate HIGHDRA development and scale
                  in-house manufacturing at Rebenring 31, Braunschweig.
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CTABand
        eyebrow="Get In Touch"
        title="Want to learn more about Starcopter?"
        description="Whether you\u2019re exploring partnerships, discussing projects, or evaluating the platform \u2014 we\u2019re ready to talk."
      />
    </>
  );
}

"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";

type SpecRow = {
  label: string;
  highdra: string;
  competition: string;
  highdraPercent: number;
  competitionPercent: number;
  highlight?: boolean;
};

const specs: SpecRow[] = [
  {
    label: "Flight Time (loaded)",
    highdra: "35 min",
    competition: "~18 min",
    highdraPercent: 90,
    competitionPercent: 46,
    highlight: true,
  },
  {
    label: "Max Payload",
    highdra: "10 kg",
    competition: "~4 kg",
    highdraPercent: 85,
    competitionPercent: 34,
    highlight: true,
  },
  {
    label: "Battery Cycles",
    highdra: "2,000",
    competition: "~400",
    highdraPercent: 95,
    competitionPercent: 19,
    highlight: true,
  },
  {
    label: "Setup Time",
    highdra: "<5 min",
    competition: "~15 min",
    highdraPercent: 90,
    competitionPercent: 30,
  },
  {
    label: "Sensor Types",
    highdra: "4",
    competition: "1-2",
    highdraPercent: 80,
    competitionPercent: 35,
  },
  {
    label: "Certification",
    highdra: "C3",
    competition: "Varies",
    highdraPercent: 75,
    competitionPercent: 25,
  },
];

export function SpecsTable() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Specifications"
            title="Numbers That Matter In The Field"
            description="Side-by-side comparison with typical commercial platforms in the same weight class."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 px-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            <span>Specification</span>
            <span>HIGHDRA</span>
            <span>Typical</span>
          </div>

          {specs.map((spec, i) => (
            <Reveal key={spec.label} delay={i * 0.06}>
              <div
                className={`grid grid-cols-[1fr_1fr_1fr] items-center gap-4 rounded-xl border p-4 transition duration-300 ${
                  spec.highlight
                    ? "border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.03]"
                    : "border-white/8 bg-white/[0.02]"
                }`}
              >
                <span className="text-sm font-light text-white/70">{spec.label}</span>

                <div>
                  <AnimatedCounter
                    value={spec.highdra}
                    delay={i * 0.1}
                    className="text-lg font-extralight text-white"
                  />
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-[var(--color-blue)] transition-all duration-1000 ease-out"
                      style={{ width: `${spec.highdraPercent}%` }}
                    />
                  </div>
                </div>

                <div>
                  <span className="text-lg font-extralight text-white/40">{spec.competition}</span>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-white/20 transition-all duration-1000 ease-out"
                      style={{ width: `${spec.competitionPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

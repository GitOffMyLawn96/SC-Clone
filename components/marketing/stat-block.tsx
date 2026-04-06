"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";

type StatItem = {
  value: string;
  label: string;
};

type StatBlockProps = {
  stats: StatItem[];
};

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <section className="border-y border-white/6 py-12 md:py-16">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-light uppercase tracking-[0.06em] text-white md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.28em] text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

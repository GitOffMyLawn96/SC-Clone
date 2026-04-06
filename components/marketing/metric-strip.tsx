"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { type Metric } from "@/lib/site-data";

type MetricStripProps = {
  metrics: Metric[];
};

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <section className="border-y border-white/8 bg-white/[0.02] py-10">
      <Container className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.06} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-white/8 bg-white/[0.03] p-6">
              <AnimatedCounter
                value={metric.value}
                delay={index * 0.15}
                className="text-4xl font-extralight uppercase tracking-[0.08em] text-white"
              />
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                {metric.label}
              </p>
              <p className="mt-auto pt-3 text-sm font-extralight leading-6 text-white/50">
                {metric.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

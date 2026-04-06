"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/ui/tilt-card";
import { type FeatureCard } from "@/lib/site-data";

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  features: FeatureCard[];
};

export function FeatureGrid({
  eyebrow,
  title,
  description,
  features,
}: FeatureGridProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08} className="h-full">
              <TiltCard
                className="h-full"
                glowColor={
                  index % 2 === 0
                    ? "rgba(252,185,0,0.15)"
                    : "rgba(255,255,255,0.08)"
                }
              >
                <article className="group flex h-full flex-col rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 transition duration-300 hover:border-white/15">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-auto pt-4 text-[15px] font-extralight leading-7 text-white/55">
                    {feature.description}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

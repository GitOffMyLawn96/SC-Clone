"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProcessStep } from "@/lib/site-data";

type ProcessStepsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: ProcessStepsProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <article className="relative rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5">
                  <span className="text-lg font-light text-[var(--color-gold)]">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-light uppercase tracking-[0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-white/15 lg:block">
                    &rarr;
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

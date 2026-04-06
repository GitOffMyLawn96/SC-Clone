"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type ComparisonSide = {
  eyebrow: string;
  title: string;
  points: string[];
  accent: "muted" | "primary";
};

type ComparisonCardsProps = {
  eyebrow: string;
  title: string;
  description?: string;
  left: ComparisonSide;
  right: ComparisonSide;
};

export function ComparisonCards({
  eyebrow,
  title,
  description,
  left,
  right,
}: ComparisonCardsProps) {
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

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article
              className={`h-full rounded-xl border p-8 ${
                left.accent === "muted"
                  ? "border-white/6 bg-white/[0.02]"
                  : "border-[var(--color-blue)]/20 bg-[var(--color-blue)]/[0.04]"
              }`}
            >
              <p
                className={`text-xs font-medium uppercase tracking-[0.28em] ${
                  left.accent === "muted"
                    ? "text-white/35"
                    : "text-[var(--color-blue-light)]"
                }`}
              >
                {left.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                {left.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {left.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] font-extralight leading-7 text-white/55"
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        left.accent === "muted"
                          ? "bg-white/20"
                          : "bg-[var(--color-blue)]"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article
              className={`h-full rounded-xl border p-8 ${
                right.accent === "muted"
                  ? "border-white/6 bg-white/[0.02]"
                  : "border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.04]"
              }`}
            >
              <p
                className={`text-xs font-medium uppercase tracking-[0.28em] ${
                  right.accent === "muted"
                    ? "text-white/35"
                    : "text-[var(--color-gold)]"
                }`}
              >
                {right.eyebrow}
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                {right.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {right.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] font-extralight leading-7 text-white/55"
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        right.accent === "muted"
                          ? "bg-white/20"
                          : "bg-[var(--color-gold)]"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";

const trustItems = [
  { label: "Powered by Auterion", accent: "blue" },
  { label: "EASA C3 Certified", accent: "gold" },
  { label: "Made in Germany", accent: "blue" },
  { label: "EASA PR-371", accent: "gold" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/6 py-8">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustItems.map((item) => (
              <span
                key={item.label}
                className="text-xs font-medium uppercase tracking-[0.3em] text-white/40 transition hover:text-white/60"
              >
                <span
                  className={
                    item.accent === "gold"
                      ? "mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"
                      : "mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-blue)]"
                  }
                />
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

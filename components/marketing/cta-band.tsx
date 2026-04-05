"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { ShimmerButton } from "@/components/ui/shimmer-button";

type CTABandProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CTABand({ eyebrow, title, description }: CTABandProps) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,15,43,0.94),rgba(0,30,60,0.88))] p-8 shadow-[0_0_60px_rgba(0,124,176,0.06)] md:p-12">
            {/* Animated grain overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
              <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43IiBudW1PY3RhdmVzPSI0IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIxIi8+PC9zdmc+')] bg-repeat" />
            </div>

            {/* Floating accent dots */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-blue)]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[var(--color-gold)]/8 blur-3xl" />

            <p className="relative text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
              {eyebrow}
            </p>
            <div className="relative mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-light uppercase tracking-[0.06em] text-white md:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg font-extralight leading-8 text-white/60">{description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ShimmerButton href="/contact">Request Quote</ShimmerButton>
                <ShimmerButton href="/contact" variant="secondary">
                  Book Demo
                </ShimmerButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

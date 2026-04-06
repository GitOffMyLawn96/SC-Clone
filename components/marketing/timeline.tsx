"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.8,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Company"
            title="Built Around Operational Relevance"
            description="A credible company narrative grounded in product thinking and execution discipline."
          />
        </Reveal>

        {/* Desktop: spine with alternating cards */}
        <div className="relative mt-16">
          {/* Spine: dim base always visible; gradient layer draws on scroll (scaleY) */}
          <div className="pointer-events-none absolute left-1/2 z-[5] hidden h-full w-px -translate-x-1/2 lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/10 to-white/18" />
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[var(--color-blue)] via-[var(--color-gold)] to-[var(--color-blue)]"
            />
          </div>

          <div className="grid gap-12 lg:gap-20">
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="relative grid items-center lg:grid-cols-2">
                    {/* Node dot */}
                    <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                      <div className="timeline-node h-3 w-3 rounded-full border-2 border-[var(--color-gold)] bg-[#000f2b]" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-[var(--color-gold)]/20" />
                    </div>

                    <div
                      className={`${isLeft ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}`}
                    >
                      <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
                          {item.year}
                        </p>
                        <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                          {item.detail}
                        </p>
                      </article>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

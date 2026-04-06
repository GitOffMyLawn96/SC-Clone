"use client";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LeadershipMember } from "@/lib/site-data";

type TeamGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  members: LeadershipMember[];
};

export function TeamGrid({
  eyebrow,
  title,
  description,
  members,
}: TeamGridProps) {
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

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {members.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <span className="text-xl font-light text-white/60">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-2xl font-light uppercase tracking-[0.04em] text-white">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  {member.role}
                </p>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                  {member.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stat?: string;
};

export function PageHero({ eyebrow, title, description, stat }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,140,255,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(242,200,76,0.12),transparent_24%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.4fr_0.7fr] lg:items-end">
        <Reveal>
          <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-blue)]">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl uppercase tracking-[0.05em] text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">{description}</p>
          </div>
        </Reveal>
        {stat ? (
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Signal Metric</p>
              <p className="mt-4 font-display text-4xl uppercase tracking-[0.08em] text-white">
                {stat}
              </p>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

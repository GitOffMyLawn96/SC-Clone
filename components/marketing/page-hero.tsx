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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,124,176,0.14),transparent_35%),radial-gradient(circle_at_top_right,rgba(252,185,0,0.08),transparent_24%)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[1.4fr_0.7fr] lg:items-end">
        <Reveal>
          <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-light uppercase tracking-[0.05em] text-white md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-extralight leading-8 text-white/60">{description}</p>
          </div>
        </Reveal>
        {stat ? (
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">Key Metric</p>
              <p className="mt-4 text-4xl font-light uppercase tracking-[0.08em] text-white">
                {stat}
              </p>
            </div>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

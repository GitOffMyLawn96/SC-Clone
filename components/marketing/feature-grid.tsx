import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article className="group rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-8 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-blue)]/40">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[15px] font-extralight leading-7 text-white/55">
                  {feature.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

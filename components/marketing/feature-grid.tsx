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
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article
              key={feature.title}
              className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-8 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-blue)]"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-blue)]">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.06em] text-white">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white/68">
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

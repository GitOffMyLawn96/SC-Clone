import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Company"
            title="Built Around Operational Relevance"
            description="A premium platform story needs more than spec sheets. It needs a credible company narrative grounded in product thinking and execution discipline."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  {item.year}
                </p>
                <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white/68">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

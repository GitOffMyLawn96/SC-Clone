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
            description="A credible company narrative grounded in product thinking and execution discipline."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
                  {item.year}
                </p>
                <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

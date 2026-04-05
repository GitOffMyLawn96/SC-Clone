import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { type Metric } from "@/lib/site-data";

type MetricStripProps = {
  metrics: Metric[];
};

export function MetricStrip({ metrics }: MetricStripProps) {
  return (
    <section className="border-y border-white/8 bg-white/[0.02] py-8">
      <Container className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.06}>
            <div
            key={metric.label}
            className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6"
            >
              <p className="font-display text-4xl uppercase tracking-[0.08em] text-white">
                {metric.value}
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/85">
                {metric.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/58">{metric.detail}</p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

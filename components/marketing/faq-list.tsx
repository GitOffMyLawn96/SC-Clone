import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Common questions about performance, integration, and deployment."
        />
        <div className="mt-12 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-6 open:border-[var(--color-blue)]/40"
            >
              <summary className="cursor-pointer list-none text-xl font-light uppercase tracking-[0.04em] text-white">
                {item.question}
              </summary>
              <p className="mt-4 max-w-4xl text-[15px] font-extralight leading-7 text-white/55">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

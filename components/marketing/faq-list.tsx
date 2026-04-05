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
          title="Answers For Procurement, Operations, And Rollout"
          description="The site is designed to remove friction for buyers who need clarity on performance, integration, and deployment confidence."
        />
        <div className="mt-12 space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 open:border-[var(--color-blue)]"
            >
              <summary className="cursor-pointer list-none font-display text-2xl uppercase tracking-[0.05em] text-white">
                {item.question}
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-7 text-white/68">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

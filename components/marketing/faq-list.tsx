"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItem[];
};

export function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about performance, integration, and deployment."
          />
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.06}>
                <div
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-[var(--color-blue)]/40 bg-white/[0.04] shadow-[inset_3px_0_0_var(--color-blue)]"
                      : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-light uppercase tracking-[0.04em] text-white md:text-xl">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="ml-4 flex-shrink-0 text-xl text-white/40"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 max-w-4xl text-[15px] font-extralight leading-7 text-white/55">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

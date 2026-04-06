import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { Reveal } from "@/components/system/reveal";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Request Quote, Book Demo | Starcopter",
  description:
    "Request a quote, book a demo, or talk to our sales team about the HIGHDRA. Visit us in Braunschweig or request an on-site demo. We typically respond within 24 hours.",
  openGraph: {
    title: "Contact | Request Quote, Book Demo | Starcopter",
    description:
      "Request a quote, book a demo, or talk to our sales team about the HIGHDRA.",
  },
};

const contactFaqs = faqs.slice(0, 4);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Quote, Book Demo, Talk To Sales"
        description="Whether you\u2019re ready to deploy or still evaluating, our team can help you find the right path forward. We typically respond within 24 hours."
        stat="Direct Access"
      />

      <TrustStrip />

      <section className="py-20 md:py-28">
        <Container>
          <ContactForm />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/[0.04] p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Book A Demo
              </p>
              <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                See the HIGHDRA in action
              </h3>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                Visit us at our Braunschweig facilities for a live demonstration,
                or request an on-site demo at your location with advance
                planning. Experience tool-free assembly, sensor swaps, and
                flight operations firsthand.
              </p>
              <div className="mt-6 space-y-2 text-sm font-extralight text-white/50">
                <p>Starcopter GmbH, Rebenring 31, 38106 Braunschweig</p>
                <p>+49 531 428 78 50</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                Frequently Asked
              </p>
              <div className="mt-6 space-y-6">
                {contactFaqs.map((faq) => (
                  <div key={faq.question}>
                    <h4 className="text-sm font-medium text-white/75">
                      {faq.question}
                    </h4>
                    <p className="mt-2 text-[13px] font-extralight leading-6 text-white/45">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Timeline } from "@/components/marketing/timeline";
import { companyTimeline, siteConfig } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="About Starcopter"
        description="Technically grounded, commercially smart, and ready to support real deployments. Based in Germany, powered by Auterion."
        stat={siteConfig.contact.locations.join(" / ")}
      />

      <Timeline items={companyTimeline} />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Mission
            </p>
            <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
              Democratize access to high-end data and operational drone
              capability by making high-performance systems more deployable
              and commercially practical.
            </p>
          </article>
          <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Approach
            </p>
            <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
              Precise, engineered, performance-led. Hardware, software, and
              service treated as one integrated system. Built for teams that
              need more than headline specs.
            </p>
          </article>
        </Container>
      </section>

      <CTABand
        eyebrow="Get In Touch"
        title="Questions about Starcopter?"
        description="Whether you're exploring partnerships, discussing projects, or evaluating the platform, we're ready to talk."
      />
    </>
  );
}

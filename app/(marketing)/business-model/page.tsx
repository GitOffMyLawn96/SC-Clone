import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { businessModelCards } from "@/lib/site-data";

export default function BusinessModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Model"
        title="Pay-Per-Use Without The Ownership Drag"
        description="Access the HIGHDRA as an operating capability rather than a capital expense. Stay on current technology, reduce idle asset risk, and keep procurement simple."
        stat="Operational Flexibility"
      />

      <FeatureGrid
        eyebrow="Why It Matters"
        title="A pricing story built for serious operations"
        description="The business model speaks directly to buyers who care about uptime, procurement friction, lifecycle risk, and keeping technology current."
        features={businessModelCards}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <SectionHeading
              eyebrow="Procurement Advantage"
              title="A simpler path to capability"
              description="Instead of a capital purchase decision, Starcopter offers a more agile and strategic commercial relationship."
            />
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8 text-[15px] font-extralight leading-7 text-white/55">
            <p>
              Less downtime risk, less ownership overhead, faster access to
              capability, and an easier path to staying on current technology.
            </p>
            <p className="mt-5">
              The model also creates space for future additions like service
              tiers, enterprise packages, and industry-specific engagement
              options.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Sales Enablement"
        title="Turn the pricing model into a competitive advantage."
        description="Talk to our team about how pay-per-use can work for your operations and procurement requirements."
      />
    </>
  );
}

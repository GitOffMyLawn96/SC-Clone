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
        description="Starcopter can position the HIGHDRA as a premium operating capability rather than a one-time hardware transaction, helping buyers access high-end performance without tying up budget in idle assets."
        stat="Operational Flexibility"
      />

      <FeatureGrid
        eyebrow="Why It Matters"
        title="A pricing story built for serious operations"
        description="The business model is part of the premium value proposition. It speaks directly to buyers who care about uptime, procurement friction, lifecycle risk, and keeping technology current."
        features={businessModelCards}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <SectionHeading
              eyebrow="Procurement Advantage"
              title="A simpler path to capability"
              description="Instead of forcing every buyer into a capital purchase decision, the site can frame Starcopter as a more agile and strategic partner."
            />
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-base leading-7 text-white/68">
            <p>
              This page is built to give sales teams a premium way to explain why
              the offering is commercially smarter: less downtime risk, less
              ownership overhead, faster access to capability, and an easier path
              to staying on current technology.
            </p>
            <p className="mt-5">
              It also creates space for future additions like service tiers,
              procurement FAQs, enterprise packages, and industry-specific
              engagement models.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Sales Enablement"
        title="Turn the pricing model into a competitive advantage."
        description="The page structure is ready for future calculators, comparison modules, and CMS-managed sales messaging once those assets are available."
      />
    </>
  );
}

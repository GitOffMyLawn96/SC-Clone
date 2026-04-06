import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ComparisonCards } from "@/components/marketing/comparison-cards";
import { CTABand } from "@/components/marketing/cta-band";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  businessModelCards,
  rentalProcess,
  rentalRequirements,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Business Model | Pay-Per-Use Drone Rental | Starcopter",
  description:
    "Access the HIGHDRA from \u20AC100/flight hour. No upfront investment, no idle capital, no outdated tech. Pay-per-use commercial drone rental for surveying, inspection, and sensing operations in Europe.",
  openGraph: {
    title: "Business Model | Pay-Per-Use Drone Rental | Starcopter",
    description:
      "Access the HIGHDRA from \u20AC100/flight hour. No upfront investment, no idle capital, no outdated tech.",
  },
};

export default function BusinessModelPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Model"
        title="Fly Only When Your Projects Say So"
        description="Access the HIGHDRA as an operating capability rather than a capital expense. Starting at approximately \u20AC100 per flight hour \u2014 no purchase, no downtime costs, and always the latest technology."
        stat="From \u20AC100 / Flight Hour"
      />

      <FeatureGrid
        eyebrow="How It Works"
        title="Pay-per-use: efficiency meets cost-effectiveness"
        description="Inspired by aircraft engine pricing \u2014 you pay for capability when you need it, not for hardware sitting in a warehouse."
        features={businessModelCards}
      />

      <ProcessSteps
        eyebrow="Your Path To Flight"
        title="From first contact to airborne in days"
        description="A streamlined onboarding process gets the HIGHDRA to your project site quickly."
        steps={rentalProcess}
      />

      <ComparisonCards
        eyebrow="The Difference"
        title="Own a fleet vs. rent the HIGHDRA"
        description="Two approaches to commercial drone capability \u2014 one ties up capital, the other ties into your workflow."
        left={{
          eyebrow: "Traditional Ownership",
          title: "Buy and manage your own fleet",
          points: [
            "High upfront capital expenditure for each aircraft",
            "Depreciation and idle costs between projects",
            "Maintenance, calibration, and firmware updates are your burden",
            "Technology ages \u2014 replacement cycles add more cost",
            "Insurance, storage, and pilot training overhead",
          ],
          accent: "muted",
        }}
        right={{
          eyebrow: "HIGHDRA Pay-Per-Use",
          title: "Rent capability, not hardware",
          points: [
            "No upfront investment \u2014 from \u20AC100 per flight hour",
            "Pay only when the HIGHDRA is working for you",
            "Maintenance, readiness, and updates handled by Starcopter",
            "Always fly the current generation platform",
            "Delivery in 3 days, fly in under 5 minutes",
          ],
          accent: "primary",
        }}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <SectionHeading
              eyebrow="Requirements"
              title="What you need to get started"
              description="Getting access to the HIGHDRA fleet is straightforward."
            />
            <ul className="mt-8 space-y-4">
              {rentalRequirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3 text-[15px] font-extralight leading-7 text-white/55"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
            <SectionHeading
              eyebrow="Flexible Engagement"
              title="Beyond pay-per-use"
            />
            <div className="mt-6 space-y-5 text-[15px] font-extralight leading-7 text-white/55">
              <p>
                For longer periods of use, we offer system sale or leasing
                contracts that include maintenance. Your HIGHDRA is always
                mission-ready &mdash; you focus on the project, we handle the
                technology.
              </p>
              <p>
                Every project is different. Talk to us about your requirements
                and we will configure the right system with the best sensor
                technology for the job.
              </p>
              <p>
                Demos are available at our Braunschweig facilities. On-site
                demos are also possible with advance planning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CTABand
        eyebrow="Get Started"
        title="Get a quote for your next project."
        description="Tell us about your requirements, timeline, and sensor needs. We\u2019ll configure the right HIGHDRA package and get it to your site within days."
      />
    </>
  );
}

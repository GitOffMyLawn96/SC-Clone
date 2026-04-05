import { CTABand } from "@/components/marketing/cta-band";
import { FAQList } from "@/components/marketing/faq-list";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { MetricStrip } from "@/components/marketing/metric-strip";
import { PageHero } from "@/components/marketing/page-hero";
import { productFeatures, heroMetrics, faqs } from "@/lib/site-data";

export default function HighdraPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="HIGHDRA"
        description="A high-performance drone system for teams that need real payload capability, modular deployment, and credible endurance — designed around operational value rather than brochure promises."
        stat="35 min @ 7.5 kg"
      />
      <MetricStrip metrics={heroMetrics} />
      <FeatureGrid
        eyebrow="Core Advantages"
        title="Engineered as a system, not a spec sheet"
        description="What actually changes outcomes in the field: deployment speed, payload flexibility, battery life, serviceability, and platform maturity."
        features={productFeatures}
      />
      <FAQList items={faqs} />
      <CTABand
        eyebrow="Get Started"
        title="See the HIGHDRA in action."
        description="Request a demo flight, talk specs with our engineering team, or get a quote for your next project."
      />
    </>
  );
}

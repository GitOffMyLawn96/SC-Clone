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
        description="A premium drone platform for teams that need real payload capability, modular deployment, credible endurance, and a system designed around operational value rather than brochure promises."
        stat="35 min @ 7.5 kg"
      />
      <MetricStrip metrics={heroMetrics} />
      <FeatureGrid
        eyebrow="Core Advantages"
        title="Engineered as a system, not a spec sheet"
        description="The product story focuses on what actually changes outcomes in the field: deployment speed, payload flexibility, battery life, serviceability, and platform maturity."
        features={productFeatures}
      />
      <FAQList items={faqs} />
      <CTABand
        eyebrow="Product Conversion"
        title="Use the product page like a premium sales asset."
        description="The page is designed to support both first-touch discovery and later-stage buyer validation with stronger proof points, better hierarchy, and clearer conversion paths."
      />
    </>
  );
}

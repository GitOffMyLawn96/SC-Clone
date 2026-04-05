import { HighdraHero } from "@/components/marketing/highdra-hero";
import { HighdraExplorer } from "@/components/marketing/highdra-explorer";
import { SpecsTable } from "@/components/marketing/specs-table";
import { BatteryRace } from "@/components/marketing/battery-race";
import { PayloadCarousel } from "@/components/marketing/payload-carousel";
import { FAQList } from "@/components/marketing/faq-list";
import { CTABand } from "@/components/marketing/cta-band";
import { faqs } from "@/lib/site-data";

export default function HighdraPage() {
  return (
    <>
      {/* Full-viewport 3D product hero */}
      <HighdraHero />

      {/* Split-screen scroll-driven 3D explorer with exploded view */}
      <HighdraExplorer />

      {/* Animated specs comparison */}
      <SpecsTable />

      {/* Battery endurance race visualization */}
      <BatteryRace />

      {/* Interactive payload carousel */}
      <PayloadCarousel />

      {/* Enhanced FAQ accordion */}
      <FAQList items={faqs} />

      {/* Premium CTA */}
      <CTABand
        eyebrow="Get Started"
        title="See the HIGHDRA in action."
        description="Request a demo flight, talk specs with our engineering team, or get a quote for your next project."
      />
    </>
  );
}

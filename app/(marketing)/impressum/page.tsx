import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Impressum"
        description="Company registration and contact information."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-6 text-[15px] font-extralight leading-8 text-white/55">
          <p>
            This page will contain the final legal imprint, company registration,
            responsible parties, and contact information required for launch.
          </p>
        </Container>
      </section>
    </>
  );
}

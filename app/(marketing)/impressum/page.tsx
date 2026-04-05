import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Impressum"
        description="This template provides the final destination for the company’s required imprint information."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-6 text-base leading-8 text-white/68">
          <p>
            Replace this content with the final legal imprint, company registration,
            responsible parties, and contact information required for launch.
          </p>
          <p>
            The page is intentionally minimal so it can remain compliant without
            looking disconnected from the premium website system.
          </p>
        </Container>
      </section>
    </>
  );
}

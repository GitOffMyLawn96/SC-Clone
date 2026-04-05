import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description="This page is ready for final terms and conditions once the launch content has been approved."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-6 text-base leading-8 text-white/68">
          <p>
            Replace this placeholder with the final contract, commercial terms,
            website usage terms, or applicable conditions approved for launch.
          </p>
          <p>
            Keeping this template inside the same design system ensures the full
            public site remains consistent and trustworthy.
          </p>
        </Container>
      </section>
    </>
  );
}

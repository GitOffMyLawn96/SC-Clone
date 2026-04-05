import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This premium legal template is ready to be replaced with final counsel-approved privacy language."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-6 text-base leading-8 text-white/68">
          <p>
            Replace this placeholder with the final privacy notice covering
            website analytics, cookies, form processing, CRM routing, and all
            applicable regulatory requirements.
          </p>
          <p>
            The page is already styled as part of the main system so legal
            content can remain consistent with the brand while staying readable.
          </p>
        </Container>
      </section>
    </>
  );
}

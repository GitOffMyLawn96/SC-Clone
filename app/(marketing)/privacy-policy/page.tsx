import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Privacy notice for starcopter.com."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-6 text-[15px] font-extralight leading-8 text-white/55">
          <p>
            This page will contain the final privacy notice covering
            website analytics, cookies, form processing, and all
            applicable regulatory requirements.
          </p>
        </Container>
      </section>
    </>
  );
}

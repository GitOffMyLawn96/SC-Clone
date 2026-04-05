import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero } from "@/components/marketing/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Quote, Book Demo, Talk To Sales"
        description="Whether you're ready to deploy or still evaluating, our team can help you find the right path forward."
        stat="Direct Access"
      />

      <section className="py-20 md:py-28">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

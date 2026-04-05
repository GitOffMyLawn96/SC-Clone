import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero } from "@/components/marketing/page-hero";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request Quote, Book Demo, Talk To Sales"
        description="The contact experience is designed for high-ticket B2B conversion, with a premium presentation and a backend structure that can later plug into CRM and sales automation tools."
        stat="High-Touch Conversion"
      />

      <section className="py-20 md:py-28">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}

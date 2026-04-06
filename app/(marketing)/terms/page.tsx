import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Terms And Conditions | Starcopter GmbH",
  description:
    "Terms and conditions for starcopter.com and Starcopter GmbH drone rental and service agreements.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms And Conditions"
        description="General terms and conditions for starcopter.com and associated services."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-10 text-[15px] font-extralight leading-8 text-white/55">
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              1. Scope
            </h2>
            <p>
              These General Terms and Conditions (&ldquo;Terms&rdquo;) govern
              the use of the website starcopter.com and all services offered by
              Starcopter GmbH, Rebenring 31, 38106 Braunschweig, Germany
              (&ldquo;Starcopter&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
              By accessing our website or engaging our services, you agree to
              these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              2. Services
            </h2>
            <p>
              Starcopter provides commercial drone systems and associated
              services including pay-per-use rental, system sale, leasing, and
              technical support for the HIGHDRA platform. Specific service terms
              are defined in individual service agreements between Starcopter
              and the customer.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              3. Rental Terms
            </h2>
            <p>
              Access to the HIGHDRA fleet requires a registered company with a
              valid drone operator ID, liability insurance for drone operations,
              and at least one pilot holding a valid remote pilot certificate.
              The minimum rental period is one month. Detailed rental terms,
              pricing, and conditions are specified in the individual rental
              agreement.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              4. Liability
            </h2>
            <p>
              Starcopter is liable for damages caused intentionally or through
              gross negligence. In cases of slight negligence, Starcopter is
              only liable for breach of essential contractual obligations
              (cardinal obligations), and liability is limited to foreseeable,
              contract-typical damages. This limitation does not apply to
              damages arising from injury to life, body, or health.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, images, graphics,
              3D models, software, and design elements, is the intellectual
              property of Starcopter GmbH or its licensors. Reproduction,
              distribution, or public display of any content without prior
              written consent is prohibited.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              6. Data Protection
            </h2>
            <p>
              The handling of personal data is governed by our{" "}
              <a
                href="/privacy-policy"
                className="text-[var(--color-blue-light)] transition hover:text-white"
              >
                Privacy Policy
              </a>
              , which forms an integral part of these Terms.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              7. Governing Law And Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of
              Germany, excluding the United Nations Convention on Contracts for
              the International Sale of Goods (CISG). The exclusive place of
              jurisdiction for all disputes arising from or in connection with
              these Terms is Braunschweig, Germany, provided the customer is a
              merchant, a legal entity under public law, or a special fund
              under public law.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              8. Severability
            </h2>
            <p>
              If any provision of these Terms is or becomes invalid or
              unenforceable, the remaining provisions shall remain in full force
              and effect. The invalid provision shall be replaced by a valid
              provision that comes closest to the economic purpose of the
              invalid provision.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              9. Contact
            </h2>
            <p>
              For questions regarding these Terms, please contact:
            </p>
            <p className="mt-3">
              Starcopter GmbH<br />
              Rebenring 31, 38106 Braunschweig<br />
              Email: info@starcopter.com<br />
              Phone: +49 531 428 78 50
            </p>
          </div>

          <p className="text-xs text-white/30">
            Last updated: April 2026
          </p>
        </Container>
      </section>
    </>
  );
}

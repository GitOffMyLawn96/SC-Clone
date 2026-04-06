import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Impressum | Starcopter GmbH",
  description:
    "Legal imprint for Starcopter GmbH, Braunschweig, Germany. Company registration, contact information, and responsible parties.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Impressum"
        description="Legal imprint as required under German law (\u00A75 TMG)."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-10 text-[15px] font-extralight leading-8 text-white/55">
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Company Information
            </h2>
            <p>Starcopter GmbH</p>
            <p>Rebenring 31</p>
            <p>38106 Braunschweig</p>
            <p>Germany</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Represented By
            </h2>
            <p>Managing Director: Henner Niebuhr</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Contact
            </h2>
            <p>Phone: +49 531 428 78 50</p>
            <p>Email: info@starcopter.com</p>
            <p>Website: www.starcopter.com</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Commercial Register
            </h2>
            <p>Registered at: Amtsgericht Braunschweig (District Court of Braunschweig)</p>
            <p>Registration number: HRB 206998</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              VAT Identification Number
            </h2>
            <p>
              VAT identification number according to \u00A727a of the German VAT
              Act (Umsatzsteuergesetz): To be confirmed prior to launch.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              Responsible For Content
            </h2>
            <p>
              Responsible for content according to \u00A755 Abs. 2 RStV:
            </p>
            <p>Henner Niebuhr</p>
            <p>Starcopter GmbH</p>
            <p>Rebenring 31, 38106 Braunschweig</p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Dispute Resolution
            </h2>
            <p>
              The European Commission provides a platform for online dispute
              resolution (OS):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-blue-light)] transition hover:text-white"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="mt-3">
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

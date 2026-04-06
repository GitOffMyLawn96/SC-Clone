import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Starcopter GmbH",
  description:
    "Privacy policy for starcopter.com covering data collection, processing, cookies, analytics, and your rights under GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use, and protect your data on starcopter.com."
      />
      <section className="py-20 md:py-28">
        <Container className="max-w-4xl space-y-10 text-[15px] font-extralight leading-8 text-white/55">
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              1. Data Controller
            </h2>
            <p>
              The data controller responsible for data processing on this
              website is:
            </p>
            <p className="mt-3">
              Starcopter GmbH<br />
              Rebenring 31<br />
              38106 Braunschweig, Germany<br />
              Email: info@starcopter.com<br />
              Phone: +49 531 428 78 50
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              2. Data We Collect
            </h2>
            <p>We collect data in the following ways:</p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="text-white/70">Contact form submissions:</strong>{" "}
                Name, email address, company name, inquiry type, and message
                content when you submit our contact form.
              </li>
              <li>
                <strong className="text-white/70">Server logs:</strong>{" "}
                IP address, browser type, operating system, referral URL, pages
                visited, and timestamps are collected automatically by our
                hosting provider (Vercel).
              </li>
              <li>
                <strong className="text-white/70">Analytics:</strong>{" "}
                If enabled, Google Analytics collects anonymized usage data
                including pages visited, session duration, and device
                information.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              3. Legal Basis For Processing
            </h2>
            <p>
              We process your personal data based on the following legal grounds
              under GDPR:
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <strong className="text-white/70">Art. 6(1)(a) GDPR:</strong>{" "}
                Your consent, for example when submitting the contact form or
                accepting analytics cookies.
              </li>
              <li>
                <strong className="text-white/70">Art. 6(1)(b) GDPR:</strong>{" "}
                Performance of a contract or pre-contractual measures, such as
                responding to quote requests.
              </li>
              <li>
                <strong className="text-white/70">Art. 6(1)(f) GDPR:</strong>{" "}
                Legitimate interests, such as website security and performance
                optimization.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              4. Data Retention
            </h2>
            <p>
              Contact form submissions are retained for the duration necessary
              to respond to your inquiry and for up to 12 months thereafter for
              follow-up purposes. Server logs are retained by our hosting
              provider according to their retention policies. Analytics data is
              retained for up to 26 months.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              5. Your Rights
            </h2>
            <p>Under GDPR, you have the right to:</p>
            <ul className="mt-3 space-y-2">
              <li>Access your personal data (Art. 15 GDPR)</li>
              <li>Rectify inaccurate data (Art. 16 GDPR)</li>
              <li>Erase your data (Art. 17 GDPR)</li>
              <li>Restrict processing (Art. 18 GDPR)</li>
              <li>Data portability (Art. 20 GDPR)</li>
              <li>Object to processing (Art. 21 GDPR)</li>
              <li>Withdraw consent at any time (Art. 7(3) GDPR)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at
              info@starcopter.com.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              6. Cookies
            </h2>
            <p>
              This website uses technically necessary cookies to ensure proper
              functionality. Analytics cookies (Google Analytics) are only set
              with your explicit consent. You can manage cookie preferences in
              your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
              7. Third-Party Services
            </h2>
            <ul className="space-y-2">
              <li>
                <strong className="text-white/70">Vercel:</strong> Website
                hosting and CDN delivery. Privacy policy:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-blue-light)] transition hover:text-white"
                >
                  vercel.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong className="text-white/70">Google Analytics:</strong>{" "}
                Website usage analytics (if enabled). Privacy policy:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-blue-light)] transition hover:text-white"
                >
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
              8. Supervisory Authority
            </h2>
            <p>
              You have the right to lodge a complaint with a data protection
              supervisory authority. The competent authority for Starcopter GmbH
              is:
            </p>
            <p className="mt-3">
              Die Landesbeauftragte f&uuml;r den Datenschutz Niedersachsen<br />
              Prinzenstra&szlig;e 5<br />
              30159 Hannover<br />
              Germany
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

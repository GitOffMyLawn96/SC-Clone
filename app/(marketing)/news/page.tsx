import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/system/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { newsPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "News | Updates And Insights | Starcopter",
  description:
    "Product updates, certification milestones, and industry thinking from Starcopter. Follow the HIGHDRA journey from C3 certification to market launch.",
  openGraph: {
    title: "News | Updates And Insights | Starcopter",
    description:
      "Product updates, certification milestones, and industry thinking from Starcopter.",
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Updates And Insights"
        description="Product milestones, certification achievements, and industry thinking from the Starcopter team."
        stat={`${newsPosts.length} Featured Posts`}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          {newsPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                  {post.date}
                </p>
                <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-5 flex-1 text-[15px] font-extralight leading-7 text-white/55">
                  {post.excerpt}
                </p>
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold)] transition hover:text-white"
                  >
                    Read More &rarr;
                  </a>
                ) : (
                  <a
                    href="/contact"
                    className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold)] transition hover:text-white"
                  >
                    Read More &rarr;
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
              Media Inquiries
            </p>
            <h2 className="mt-4 text-3xl font-light uppercase tracking-[0.06em] text-white md:text-4xl">
              Press Kit And Media Contact
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] font-extralight leading-7 text-white/55">
              For press inquiries, interview requests, or high-resolution assets,
              contact our team directly at info@starcopter.com or call
              +49 531 428 78 50.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="mailto:info@starcopter.com">
                Media Contact
              </ButtonLink>
              <ButtonLink
                href="https://www.linkedin.com/company/starcopter"
                variant="secondary"
              >
                Follow On LinkedIn
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand
        eyebrow="Stay Updated"
        title="Want to hear about platform updates?"
        description="Get in touch and we\u2019ll keep you informed about new capabilities, certifications, and company developments."
      />
    </>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { newsPosts } from "@/lib/site-data";

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Updates, Thinking, And Product Signals"
        description="This page provides a premium home for announcements, thought leadership, recruiting signals, and future press content."
        stat={`${newsPosts.length} Featured Posts`}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-6 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-blue)]">
                {post.date}
              </p>
              <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-white">
                {post.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-white/68">{post.excerpt}</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]"
              >
                Ask About This
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Content Platform"
        title="A lightweight editorial system that can grow later."
        description="The news section can stay simple today and still evolve into a case study, insights, or press center without changing the frontend structure."
      />
    </>
  );
}

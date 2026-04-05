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
        title="Updates And Insights"
        description="Product updates, industry thinking, and company announcements."
        stat={`${newsPosts.length} Featured Posts`}
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-5 lg:grid-cols-3">
          {newsPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-blue-light)]">
                {post.date}
              </p>
              <h2 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                {post.title}
              </h2>
              <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">{post.excerpt}</p>
              <Link
                href="/contact"
                className="mt-8 inline-flex text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--color-gold)] transition hover:text-white"
              >
                Read More →
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Stay Updated"
        title="Want to hear about platform updates?"
        description="Get in touch and we'll keep you informed about new capabilities, use cases, and company developments."
      />
    </>
  );
}

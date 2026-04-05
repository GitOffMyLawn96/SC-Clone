import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { jobPostings } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build The Future Of Premium Drone Systems"
        description="This template gives Starcopter a premium recruiting presence without requiring a heavyweight careers platform on day one."
        stat={`${jobPostings.length} Open Roles`}
      />

      <section className="py-20 md:py-28">
        <Container className="space-y-5">
          {jobPostings.map((job) => (
            <article
              key={job.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="font-display text-3xl uppercase tracking-[0.05em] text-white">
                    {job.title}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/52">
                    {job.location} / {job.type}
                  </p>
                </div>
                <a
                  href="mailto:careers@starcopter.com"
                  className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:border-[var(--color-blue)] hover:text-white"
                >
                  Apply
                </a>
              </div>
              <p className="mt-5 max-w-3xl text-base leading-7 text-white/68">
                {job.summary}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Recruiting"
        title="Use a premium brand system to attract premium talent."
        description="The careers template is ready for CMS-driven job postings now and can later connect to an ATS without needing a redesign."
      />
    </>
  );
}

import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { jobPostings } from "@/lib/site-data";

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build The Future Of Drone Technology"
        description="Join a team that's rethinking how high-performance drone systems are built, deployed, and supported."
        stat={`${jobPostings.length} Open Roles`}
      />

      <section className="py-20 md:py-28">
        <Container className="space-y-4">
          {jobPostings.map((job) => (
            <article
              key={job.title}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
                    {job.title}
                  </h2>
                  <p className="mt-3 text-sm font-extralight uppercase tracking-[0.2em] text-white/45">
                    {job.location} / {job.type}
                  </p>
                </div>
                <a
                  href="mailto:careers@starcopter.com"
                  className="inline-flex rounded-lg border border-white/10 px-5 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-white/75 transition hover:border-[var(--color-blue)] hover:text-white"
                >
                  Apply
                </a>
              </div>
              <p className="mt-5 max-w-3xl text-[15px] font-extralight leading-7 text-white/55">
                {job.summary}
              </p>
            </article>
          ))}
        </Container>
      </section>

      <CTABand
        eyebrow="Join Us"
        title="Don't see your role? Reach out anyway."
        description="We're always interested in hearing from talented engineers, operators, and business builders."
      />
    </>
  );
}

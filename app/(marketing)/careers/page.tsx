import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CTABand } from "@/components/marketing/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { jobPostings } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers | Build The Future Of Drone Technology | Starcopter",
  description:
    "Join a deep tech startup in Braunschweig building Europe\u2019s next-generation drone platform. Open roles in flight systems, embedded software, and business development.",
  openGraph: {
    title: "Careers | Build The Future Of Drone Technology | Starcopter",
    description:
      "Join a deep tech startup in Braunschweig building Europe\u2019s next-generation drone platform.",
  },
};

const culturePoints = [
  {
    eyebrow: "In-House Engineering",
    description:
      "Airframe, PCB design, power distribution, battery systems, and software \u2014 we build every layer of the HIGHDRA ourselves.",
  },
  {
    eyebrow: "Small Team, Big Impact",
    description:
      "11 engineers building Germany\u2019s first C3-certified multirotor. Your work ships to real operators running real missions.",
  },
  {
    eyebrow: "Auterion Partnership",
    description:
      "Work alongside the team behind the world\u2019s leading open-source drone operating system. Enterprise-grade problems, startup-speed execution.",
  },
  {
    eyebrow: "Hybrid, From Germany",
    description:
      "Office in Braunschweig with flexible hybrid arrangements. Manufacturing, testing, and flight operations happen in-house.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build The Future Of Drone Technology"
        description="Join a deep tech startup rethinking how high-performance drone systems are built, deployed, and supported. Made in Germany, powered by Auterion."
        stat={`${jobPostings.length} Open Roles`}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Starcopter"
              title="A team that flies what they build"
              description="Engineers, software developers, and drone pilots working with a strong focus on one goal: the next generation of European drone systems that scale commercial operations."
            />
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {culturePoints.map((point, index) => (
              <Reveal key={point.eyebrow} delay={index * 0.08}>
                <article className="h-full rounded-xl border border-white/8 bg-white/[0.03] p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {point.eyebrow}
                  </p>
                  <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
                    {point.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="space-y-4">
          <Reveal>
            <SectionHeading
              eyebrow="Open Roles"
              title="Current opportunities"
            />
          </Reveal>

          <div className="mt-8 space-y-4">
            {jobPostings.map((job, index) => (
              <Reveal key={job.title} delay={index * 0.06}>
                <article className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow="Join Us"
        title="Don't see your role? Reach out anyway."
        description="We\u2019re always interested in hearing from talented engineers, operators, and business builders. Send your CV to careers@starcopter.com."
      />
    </>
  );
}

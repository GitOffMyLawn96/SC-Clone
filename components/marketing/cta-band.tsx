import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { ButtonLink } from "@/components/ui/button-link";

type CTABandProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CTABand({ eyebrow, title, description }: CTABandProps) {
  return (
    <section className="py-20">
      <Container>
        <Reveal>
          <div className="rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,15,43,0.94),rgba(0,30,60,0.88))] p-8 shadow-[0_0_60px_rgba(0,124,176,0.06)] md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
              {eyebrow}
            </p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-light uppercase tracking-[0.06em] text-white md:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg font-extralight leading-8 text-white/60">{description}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/contact">Request Quote</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Book Demo
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

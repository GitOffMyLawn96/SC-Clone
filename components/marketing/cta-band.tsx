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
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(10,14,20,0.94),rgba(17,23,34,0.88))] p-8 shadow-[0_0_80px_rgba(91,140,255,0.08)] md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-blue)]">
              {eyebrow}
            </p>
            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-white md:text-5xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">{description}</p>
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

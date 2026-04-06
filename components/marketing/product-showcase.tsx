"use client";

import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/system/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type SlotProps = {
  aspect: string;
  label: string;
  sublabel: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

function ImageSlot({ aspect, label, sublabel, src, alt, priority }: SlotProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/8 bg-white/[0.02] ${aspect}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-white/20"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
              {label}
            </p>
            <p className="mt-1 text-[11px] font-extralight text-white/15">
              {sublabel}
            </p>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  );
}

type ProductShowcaseProps = {
  heroImage?: string;
  detailImage1?: string;
  detailImage2?: string;
};

export function ProductShowcase({
  heroImage,
  detailImage1,
  detailImage2,
}: ProductShowcaseProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Product"
            title="Professional-Grade, Field-Ready"
            description="Purpose-built hardware designed for operators who measure success in uptime and data quality."
          />
        </Reveal>

        <div className="mt-12 grid gap-4">
          <Reveal>
            <ImageSlot
              aspect="aspect-[21/9]"
              label="Hero Product Shot"
              sublabel="2100 x 900 recommended"
              src={heroImage}
              alt="HIGHDRA drone hero shot"
              priority
            />
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            <Reveal delay={0.08}>
              <ImageSlot
                aspect="aspect-[4/3]"
                label="Detail Shot 1"
                sublabel="1200 x 900 recommended"
                src={detailImage1}
                alt="HIGHDRA detail view"
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ImageSlot
                aspect="aspect-[4/3]"
                label="Detail Shot 2"
                sublabel="1200 x 900 recommended"
                src={detailImage2}
                alt="HIGHDRA detail view"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

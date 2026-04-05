import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-blue)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl uppercase tracking-[0.06em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-white/70 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

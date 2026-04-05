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
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-light uppercase tracking-[0.06em] text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base font-extralight leading-7 text-white/60 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

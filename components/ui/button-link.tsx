import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium uppercase tracking-[0.18em] transition duration-300",
        variant === "primary" &&
          "bg-[linear-gradient(135deg,var(--color-blue),var(--color-gold))] text-[var(--color-ink)] shadow-[0_0_40px_rgba(91,140,255,0.35)] hover:scale-[1.02]",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white hover:border-[var(--color-blue)] hover:bg-white/8",
        variant === "ghost" && "text-white/72 hover:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}

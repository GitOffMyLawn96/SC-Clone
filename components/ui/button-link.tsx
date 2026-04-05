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
        "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[13px] font-medium uppercase tracking-[0.2em] transition duration-200",
        variant === "primary" &&
          "bg-[var(--color-blue)] text-white shadow-[0_2px_24px_rgba(0,124,176,0.3)] hover:bg-[var(--color-blue-light)]",
        variant === "secondary" &&
          "border border-white/12 bg-white/5 text-white/90 hover:border-[var(--color-blue)] hover:bg-white/8",
        variant === "ghost" && "text-white/65 hover:text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}

"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ShimmerButton({ href, children, variant = "primary", className }: ShimmerButtonProps) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--color-blue)] text-white hover:shadow-[0_0_30px_rgba(0,124,176,0.4)] hover:scale-[1.03]",
    secondary:
      "border border-white/15 bg-transparent text-white hover:border-white/30 hover:bg-white/5 hover:scale-[1.03]",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span className="relative z-10">{children}</span>
      <span className="shimmer-sweep absolute inset-0 z-0" />
    </Link>
  );
}

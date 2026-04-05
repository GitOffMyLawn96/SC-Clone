"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,7,11,0.72)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="starcopter home">
          <div className="h-10 w-10 rounded-full border border-white/15 bg-[radial-gradient(circle_at_top,var(--color-blue),transparent_65%),rgba(255,255,255,0.04)]" />
          <div>
            <div className="font-display text-xl uppercase tracking-[0.28em] text-white">
              starcopter
            </div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-white/45">
              Premium Drone Systems
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Request Quote</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-[rgba(5,7,11,0.98)] transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-5 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-white/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="w-full" variant="secondary">
            Request Quote
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}

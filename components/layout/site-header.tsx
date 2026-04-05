"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(0,15,43,0.82)] backdrop-blur-xl">
      <Container className="flex min-h-[72px] items-center justify-between">
        <Link href="/" className="flex shrink-0 items-center" aria-label="starcopter home">
          <Image
            src="/starcopter-logo.png"
            alt="starcopter"
            width={186}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-light uppercase tracking-[0.22em] text-white/65 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <ButtonLink href="/contact">Request Quote</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "overflow-hidden border-t border-white/8 bg-[rgba(0,15,43,0.98)] transition-[max-height] duration-300 xl:hidden",
          open ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light uppercase tracking-[0.2em] text-white/75"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-2 w-full" variant="secondary">
            Request Quote
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}

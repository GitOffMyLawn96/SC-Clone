import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-blue)]">
          404
        </p>
        <h1 className="mt-6 font-display text-6xl uppercase tracking-[0.06em] text-white">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg text-white/68">
          The requested page does not exist yet, but the design system is ready
          for future expansion.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/78 transition hover:border-[var(--color-blue)] hover:text-white"
        >
          Return Home
        </Link>
      </Container>
    </main>
  );
}

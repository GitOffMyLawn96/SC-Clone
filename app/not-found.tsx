import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-blue-light)]">
          404
        </p>
        <h1 className="mt-6 text-6xl font-extralight uppercase tracking-[0.06em] text-white">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg font-extralight text-white/55">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg border border-white/10 px-5 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:border-[var(--color-blue)] hover:text-white"
        >
          Return Home
        </Link>
      </Container>
    </main>
  );
}

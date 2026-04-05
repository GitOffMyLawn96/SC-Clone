"use client";

import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialState: FormState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, setState] = useState<FormState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "submitting", message: "" });

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        inquiryType: formData.get("inquiryType"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setState({
        status: "success",
        message:
          "Thanks. Your inquiry is staged successfully and ready for CRM or sales workflow integration.",
      });
      return;
    }

    const result = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    setState({
      status: "error",
      message:
        result?.message ??
        "Submission failed. Please email info@starcopter.com while the backend integration is being finalized.",
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/55">Name</span>
            <input
              required
              name="name"
              className="w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/55">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/55">Company</span>
            <input
              name="company"
              className="w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/55">
              Inquiry Type
            </span>
            <select
              name="inquiryType"
              className="w-full rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 text-white outline-none transition focus:border-[var(--color-blue)]"
            >
              <option value="request-quote">Request Quote</option>
              <option value="book-demo">Book Demo</option>
              <option value="talk-to-sales">Talk To Sales</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="text-xs uppercase tracking-[0.28em] text-white/55">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full rounded-[1.5rem] border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-4 text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={state.status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-blue),var(--color-gold))] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)] disabled:opacity-50"
          >
            {state.status === "submitting" ? "Sending..." : "Send Inquiry"}
          </button>
          <p
            className={
              state.status === "error" ? "text-sm text-red-300" : "text-sm text-white/60"
            }
          >
            {state.message || "Responses can be wired into HubSpot or a custom sales backend."}
          </p>
        </div>
      </form>

      <aside className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
          High-Touch Sales Motion
        </p>
        <h3 className="mt-4 font-display text-3xl uppercase tracking-[0.05em] text-white">
          Built for premium B2B conversion.
        </h3>
        <p className="mt-5 text-base leading-7 text-white/68">
          The contact flow is designed so a future CRM, sales ops layer, or
          marketing automation platform can drop in without rebuilding the page
          system.
        </p>
        <div className="mt-8 space-y-4 text-sm text-white/68">
          <p>Phone: +49 531 428 78 50</p>
          <p>Email: info@starcopter.com</p>
          <p>Locations: Braunschweig / Kassel</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="mailto:info@starcopter.com" variant="secondary">
            Email Directly
          </ButtonLink>
        </div>
      </aside>
    </div>
  );
}

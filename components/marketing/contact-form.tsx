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
        message: "Thank you. We'll be in touch shortly.",
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
        "Submission failed. Please email info@starcopter.com directly.",
    });
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">Name</span>
            <input
              required
              name="name"
              className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 font-extralight text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">Email</span>
            <input
              required
              type="email"
              name="email"
              className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 font-extralight text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">Company</span>
            <input
              name="company"
              className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 font-extralight text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
          <label className="space-y-2">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
              Inquiry Type
            </span>
            <select
              name="inquiryType"
              className="w-full rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-3 font-extralight text-white outline-none transition focus:border-[var(--color-blue)]"
            >
              <option value="request-quote">Request Quote</option>
              <option value="book-demo">Book Demo</option>
              <option value="talk-to-sales">Talk To Sales</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">Message</span>
            <textarea
              required
              name="message"
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-[rgba(255,255,255,0.04)] px-4 py-4 font-extralight text-white outline-none transition focus:border-[var(--color-blue)]"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={state.status === "submitting"}
            className="inline-flex items-center justify-center rounded-lg bg-[var(--color-blue)] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_2px_24px_rgba(0,124,176,0.3)] disabled:opacity-50"
          >
            {state.status === "submitting" ? "Sending..." : "Send Inquiry"}
          </button>
          <p
            className={
              state.status === "error" ? "text-sm font-extralight text-red-300" : "text-sm font-extralight text-white/50"
            }
          >
            {state.message}
          </p>
        </div>
      </form>

      <aside className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
          Direct Contact
        </p>
        <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.04em] text-white md:text-3xl">
          Prefer to talk directly?
        </h3>
        <p className="mt-5 text-[15px] font-extralight leading-7 text-white/55">
          Call us, send an email, or visit our offices in Braunschweig
          or Kassel. We respond quickly.
        </p>
        <div className="mt-8 space-y-4 text-sm font-extralight text-white/55">
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

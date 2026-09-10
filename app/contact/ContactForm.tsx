"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/api";
import { EnquiryPayload } from "@/types";

export default function ContactForm() {
  const [form, setForm] = useState<EnquiryPayload>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const result = await submitEnquiry(form);
    setResponseMessage(result.message);
    setStatus("success");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-secondary-100 bg-secondary-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-secondary-600" />
        <p className="font-display text-lg text-ink">Enquiry Sent</p>
        <p className="max-w-sm text-sm text-ink-light/70">{responseMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Name</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink">Phone</label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
            placeholder="+91 00000 00000"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Subject</label>
        <input
          required
          type="text"
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
          placeholder="What is this regarding?"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-primary-100 bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-secondary"
          placeholder="Tell us more..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primary-600 disabled:opacity-70"
      >
        {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

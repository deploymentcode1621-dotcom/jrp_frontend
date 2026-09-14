import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Get in touch with Swami Vivekanand Institute of Nursing, Latur, for admissions enquiries, campus visits, and general information.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Jeevan Rekha Pratishthan Campus, Latur, Maharashtra 413512",
  },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "info@svinlatur.edu.in" },
  { icon: Clock, label: "Office hours", value: "Mon – Sat, 9:00 AM – 5:00 PM" },
];

const mapSrc =
  "https://www.google.com/maps?q=Jeevan+Rekha+Pratishthan+Campus,+Latur,+Maharashtra+413512&output=embed";

export default function ContactPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#16302B] py-24 sm:py-28">
        {/* heartbeat / pulse-line texture — ties the hero to the subject matter */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-10 h-24 w-full opacity-[0.14]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60H260L300 60L330 20L365 100L400 60H1200"
            stroke="#C9A468"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="container-custom relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm text-[#C9A468]">Get in touch</p>
            <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-[#F5F1E8] sm:text-5xl">
              We&apos;d love to hear from you
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#F5F1E8]/70">
              Have a question about admissions, courses, or campus visits?
              Reach out and our team will respond promptly.
            </p>

            {/* practical status line, not just decoration */}
            <div className="mt-8 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A468] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C9A468]" />
              </span>
              <p className="text-sm text-[#F5F1E8]/60">
                Enquiry desk open Mon – Sat, 9:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* lobby-directory style quick actions */}
          <div className="border-t border-[#F5F1E8]/15 pt-6">
            <dl className="divide-y divide-[#F5F1E8]/10">
              <a href="tel:+919876543210" className="group flex items-baseline justify-between gap-6 py-4">
                <dt className="font-display text-base text-[#F5F1E8]">Call</dt>
                <dd className="text-[15px] text-[#F5F1E8]/60 transition-colors group-hover:text-[#C9A468]">
                  +91 98765 43210
                </dd>
              </a>
              <a href="mailto:info@svinlatur.edu.in" className="group flex items-baseline justify-between gap-6 py-4">
                <dt className="font-display text-base text-[#F5F1E8]">Write</dt>
                <dd className="text-[15px] text-[#F5F1E8]/60 transition-colors group-hover:text-[#C9A468]">
                  info@svinlatur.edu.in
                </dd>
              </a>
              <a
                href="https://www.google.com/maps?q=Jeevan+Rekha+Pratishthan+Campus,+Latur,+Maharashtra+413512"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <dt className="font-display text-base text-[#F5F1E8]">Visit</dt>
                <dd className="text-[15px] text-[#F5F1E8]/60 transition-colors group-hover:text-[#C9A468]">
                  Get directions
                </dd>
              </a>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Left: details + map */}
          <div>
            <h2 className="font-display text-xl text-ink">Reach us directly</h2>
            <div className="mt-6 divide-y divide-primary-100 border-y border-primary-100">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4 py-5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A9793C]/30 text-[#A9793C]">
                    <detail.icon className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm text-ink-light/50">{detail.label}</p>
                    <p className="mt-0.5 text-[15px] text-ink">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="group mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-primary-100 sm:aspect-video">
              <iframe
                src={mapSrc}
                title="Map to Swami Vivekanand Institute of Nursing, Latur"
                loading="lazy"
                className="h-full w-full grayscale transition-[filter] duration-500 group-hover:grayscale-0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: enquiry form */}
          <div className="rounded-2xl border border-primary-100 bg-white p-8 sm:p-10">
            <h2 className="font-display text-xl text-ink">Send an enquiry</h2>
            <p className="mt-1 mb-8 text-sm text-ink-light/70">
              Fill in the form below and we&apos;ll get back to you shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-primary-100 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-light/40 outline-none transition-colors focus:border-[#A9793C]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full rounded-lg border border-primary-100 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-light/40 outline-none transition-colors focus:border-[#A9793C]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-primary-100 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-light/40 outline-none transition-colors focus:border-[#A9793C]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full rounded-lg border border-primary-100 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-light/40 outline-none transition-colors focus:border-[#A9793C]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us more..."
                  className="w-full resize-none rounded-lg border border-primary-100 bg-canvas px-4 py-3 text-sm text-ink placeholder:text-ink-light/40 outline-none transition-colors focus:border-[#A9793C]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-ink py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0B1A2E]"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
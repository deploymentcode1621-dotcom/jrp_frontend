import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

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
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 9:00 AM – 5:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            Get in Touch
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            We'd love to hear from you
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            Have a question about admissions, courses, or campus visits?
            Reach out and our team will respond promptly.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="space-y-5">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 rounded-2xl border border-primary-100 bg-white p-5 shadow-card"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <detail.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink-light/60">
                      {detail.label}
                    </p>
                    <p className="mt-0.5 text-sm text-ink">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-primary-100 bg-primary-50">
              <div className="flex h-full w-full items-center justify-center text-sm text-ink-light/50">
                Google Map placeholder — embed map here
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary-100 bg-white p-8 shadow-card">
            <h2 className="font-display text-xl text-ink">Send an Enquiry</h2>
            <p className="mt-1 mb-6 text-sm text-ink-light/70">
              Fill in the form below and we'll get back to you shortly.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

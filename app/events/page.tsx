import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEvents } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import EmptyState from "@/components/common/EmptyState";

export const metadata: Metadata = {
  title: "Events | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Catch up on campus events, ceremonies, and announcements from Swami Vivekanand Institute of Nursing, Latur.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            Campus Life
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Events & Announcements
          </h1>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom">
          {events.length === 0 ? (
            <EmptyState title="No events yet" description="New campus events will be listed here soon." />
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-card transition-shadow hover:shadow-cardHover"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-primary">
                      {event.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium text-secondary-600">
                      {formatDate(event.date)}
                    </p>
                    <h2 className="mt-2 font-display text-lg text-ink">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-light/75">
                      {event.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

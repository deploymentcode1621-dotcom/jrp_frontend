"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getEvents } from "@/lib/api";
import { EventItem } from "@/types";
import { formatDate } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export default function EventsPreview() {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Campus Life"
            title="Campus Life, Events & Announcements"
          />
          <Button href="/events" variant="ghost" withArrow className="shrink-0">
            View All Events
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-primary-100 shadow-card transition-shadow hover:shadow-cardHover"
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
                <h3 className="mt-2 font-display text-lg text-ink">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light/75">
                  {event.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

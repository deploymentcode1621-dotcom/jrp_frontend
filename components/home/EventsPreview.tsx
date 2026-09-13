"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { getEvents } from "@/lib/api";
import { EventItem } from "@/types";
import Button from "@/components/common/Button";

// Splits an ISO date into a day number + month/year for the timeline column.
function splitDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    rest: d.toLocaleDateString("en-GB", { month: "short", year: "numeric" }),
  };
}

export default function EventsPreview() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 80%", "end 60%"],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="flex flex-col gap-4 border-b border-primary-100 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Campus life</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Recent moments on campus
            </h2>
          </div>
          <Button href="/events" variant="ghost" withArrow className="shrink-0">
            View all events
          </Button>
        </div>

        <div ref={railRef} className="relative mt-4">
          {/* static track */}
          <div className="pointer-events-none absolute left-[3.25rem] top-0 h-full w-px bg-primary-100 sm:left-[4.75rem]" />
          {/* animated fill — draws down as the section scrolls into view */}
          <motion.div
            style={{ height: spineHeight }}
            className="pointer-events-none absolute left-[3.25rem] top-0 w-px bg-primary sm:left-[4.75rem]"
          />

          {events.map((event) => {
            const { day, rest } = splitDate(event.date);
            return (
              <article
                key={event.id}
                className="relative grid grid-cols-[3rem_1fr] gap-x-4 py-10 first:pt-0 last:pb-0 sm:grid-cols-[3.5rem_1fr_10rem] sm:items-start sm:gap-x-8"
              >
                {/* date column */}
                <div className="text-right">
                  <p className="font-display text-2xl leading-none text-ink">{day}</p>
                  <p className="mt-1 text-xs text-ink-light/70">{rest}</p>
                </div>

                {/* marker on the spine */}
                <div className="absolute left-[3.25rem] top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-primary bg-white sm:left-[4.75rem]" />

                {/* content */}
                <div className="pl-6 sm:pl-10">
                  <p className="text-xs font-medium text-secondary-600">
                    {event.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ink">{event.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-light/75">
                    {event.description}
                  </p>
                  
                    href={`/events/${event.id}`}
                    className="mt-3 inline-block text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                  >
                    Read more
                  </a>
                </div>

                {/* thumbnail — beside content on desktop, below on mobile */}
                <div className="relative col-span-2 mt-4 h-40 w-full overflow-hidden rounded-lg pl-6 sm:col-span-1 sm:mt-0 sm:h-28 sm:w-40 sm:pl-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
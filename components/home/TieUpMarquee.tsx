"use client";

import { useEffect, useState } from "react";
import { getTieUps } from "@/lib/api";
import { TieUp } from "@/types";

export default function TieUpMarquee() {
  const [tieUps, setTieUps] = useState<TieUp[]>([]);

  useEffect(() => {
    getTieUps().then(setTieUps);
  }, []);

  if (tieUps.length === 0) return null;

  const loopItems = [...tieUps, ...tieUps];

  return (
    <section className="border-y border-primary-100 bg-white py-16">
      <div className="container-custom mb-8 text-center">
        <h2 className="font-display text-2xl text-ink">
          Healthcare & Industry Connections
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-xs text-ink-light/60">
          Example institutions shown for illustration — actual placement and
          exposure partners will be listed here once confirmed.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-16">
          {loopItems.map((tieUp, i) => (
            <div
              key={`${tieUp.id}-${i}`}
              className="flex h-16 items-center whitespace-nowrap px-4 text-lg font-display font-medium text-ink-light/40"
            >
              {tieUp.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

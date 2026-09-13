"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { getTrustees } from "@/lib/api";
import { Trustee } from "@/types";

export default function TrusteeSection() {
  const [trustees, setTrustees] = useState<Trustee[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    getTrustees().then(setTrustees);
  }, []);

  // Spotlighting Krishna Sir specifically. Falls back to the first
  // trustee returned if the name in the CMS ever changes.
  const leader =
    trustees.find((t) => t.name.toLowerCase().includes("krishna")) ??
    trustees[0];

  if (!leader) return null;

  return (
    <section className="bg-ink py-28">
      <div className="container-custom">
        <p className="text-center text-sm text-secondary-300 lg:text-left">
          Leadership
        </p>
        <h2 className="mt-3 text-center font-display text-3xl text-white sm:text-4xl lg:text-left">
          A clear vision for the institution.
        </h2>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-1 items-center gap-12 lg:mx-0 lg:max-w-none lg:grid-cols-[320px_1fr] lg:gap-20"
        >
          {/* Portrait, offset frame */}
          <div className="relative mx-auto w-full max-w-[280px] lg:mx-0">
            <div className="absolute -inset-4 border border-white/15" />
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
  src="/images/leader.png"
  alt={leader.name}
  fill
  className="object-cover grayscale"
  sizes="(min-width: 1024px) 320px, 280px"
/>
            </div>
          </div>

          {/* Quote */}
          <div className="border-l border-secondary-300/40 pl-8 sm:pl-10">
            <p className="font-display text-2xl leading-relaxed text-white/90 sm:text-[1.85rem]">
              &ldquo;{leader.message}&rdquo;
            </p>
            <div className="mt-8">
              <p className="text-base text-white">{leader.name}</p>
              <p className="mt-1 text-sm text-white/50">{leader.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
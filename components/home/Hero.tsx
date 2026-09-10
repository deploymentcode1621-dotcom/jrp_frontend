"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";

const stats = [
  { value: "15+", label: "Years of Legacy" },
  { value: "900+", label: "Students" },
  { value: "Practical", label: "Professional Learning" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <div className="container-custom relative z-10 pt-28">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-secondary-200"
        >
          JEEVAN REKHA PRATISHTHAN • LATUR
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl leading-[1.08] text-white text-balance sm:text-6xl lg:text-7xl"
        >
          Learn. Care. Serve.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
        >
          Building confident, compassionate and professionally prepared nurses
          through quality education and practical learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/admissions" size="lg" withArrow>
            Explore Admissions
          </Button>
          <Button href="/about/swami-vivekanand" variant="outline" size="lg">
            Discover Institute
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/55">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/common/Button";

const stats = [
  { value: "15+", label: "Years of legacy" },
  { value: "900+", label: "Students trained" },
  { value: "100%", label: "Practical learning" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const toggleSound = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0E1815]">
      {/* ---------- Background video + duotone wash ---------- */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        initial={{ scale: 1.06 }}
        animate={prefersReducedMotion ? {} : { scale: 1 }}
        transition={{ duration: 20, ease: "easeOut" }}
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[#0E1815]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1815] via-[#0E1815]/70 to-[#0E1815]/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1815]/90 via-[#0E1815]/30 to-transparent" />

      {/* ---------- Right-edge credential rail (desktop only) ---------- */}
      <div className="absolute right-10 top-0 hidden h-full flex-col items-center justify-center lg:flex">
        <div className="h-24 w-px bg-[#EFE7D4]/25" />
        <p
          className="my-5 whitespace-nowrap text-xs tracking-[0.02em] text-[#EFE7D4]/60"
          style={{ writingMode: "vertical-rl" }}
        >
          Est. 2009 &nbsp;·&nbsp; Latur, Maharashtra
        </p>
        <div className="h-24 w-px bg-[#EFE7D4]/25" />
      </div>

      {/* ---------- Main content, anchored low-left like a dossier cover ---------- */}
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-28 pt-28 sm:px-12 lg:px-16 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#EFE7D4]/20 bg-[#0E1815]/40 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#C08A34]" />
          <span className="text-sm text-[#EFE7D4]/85">
            Jeevan Rekha Pratishthan, Latur
          </span>
        </motion.div>

        <div className="relative max-w-2xl">
          <h1 className="font-display text-5xl leading-[1.05] text-[#F3ECD9] sm:text-6xl lg:text-[5.25rem]">
            {["Learn.", "Care.", "Serve."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.13, ease: "easeOut" }}
                className="mr-5 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* single orchestrated pulse-line, drawn once beneath the headline */}
          <motion.svg
            viewBox="0 0 620 40"
            className="mt-3 h-8 w-full max-w-md"
            fill="none"
          >
            <motion.path
              d="M0 20 H180 L200 6 L222 34 L244 20 H320 L338 11 L356 29 L374 20 H620"
              stroke="#C08A34"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 1.4, delay: 0.75, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-5 max-w-md text-lg leading-relaxed text-[#EFE7D4]/75"
        >
          Building confident, compassionate and professionally prepared
          nurses through quality education and practical learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button href="/admissions" size="lg">
            Explore admissions
          </Button>
          <Button
            href="/about/swami-vivekanand"
            variant="outline"
            size="lg"
            className="border-[#EFE7D4]/40 text-[#F3ECD9] hover:bg-[#F3ECD9]/10"
          >
            Discover the institute
          </Button>
        </motion.div>
      </div>

      {/* ---------- Vitals bar: stats strip along the bottom edge ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#EFE7D4]/15 bg-[#0E1815]/70 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-[#EFE7D4]/15 px-6 sm:px-12 lg:px-16">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-5 first:pl-0 sm:px-8">
              <p className="font-display text-2xl text-[#F3ECD9] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-[#EFE7D4]/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ---------- Mute toggle ---------- */}
      <motion.button
        type="button"
        onClick={toggleSound}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#EFE7D4]/25 bg-[#0E1815]/40 text-[#EFE7D4]/80 backdrop-blur-sm transition hover:bg-[#0E1815]/60 hover:text-[#F3ECD9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C08A34] sm:right-12 lg:right-16"
        aria-label={isMuted ? "Unmute background video" : "Mute background video"}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" />
            <path d="M18.5 6a9 9 0 0 1 0 12" />
          </svg>
        )}
      </motion.button>
    </section>
  );
}
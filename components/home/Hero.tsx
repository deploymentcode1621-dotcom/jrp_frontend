"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/common/Button";

const stats = [
  { value: "15+", label: "Years of legacy" },
  { value: "900+", label: "Students trained" },
  { value: "100%", label: "Practical learning" },
];

const headlineWords = ["Learn.", "Care.", "Serve."];

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
    <section className="relative overflow-hidden bg-[#F8F4EC]">
      <div className="grid min-h-[92vh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* ---------- Left: content panel ---------- */}
        <div className="relative z-10 order-2 flex flex-col justify-center px-6 py-16 sm:px-12 lg:order-1 lg:px-16 lg:py-24">
          {/* Crest-style eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex w-fit items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#6E1F24]/30">
              <span className="h-2 w-2 rounded-full bg-[#6E1F24]" />
            </span>
            <span className="text-sm text-[#5B4A44]">
              Jeevan Rekha Pratishthan, Latur
            </span>
          </motion.div>

          <div className="relative max-w-lg">
            {/* Pulse line, now a quiet ink stroke instead of a bright accent */}
            <motion.svg
              viewBox="0 0 220 32"
              className="absolute -top-7 left-0 h-6 w-44 opacity-80"
              fill="none"
            >
              <motion.path
                d="M0 16 H70 L82 5 L94 27 L106 16 H140 L150 9 L160 16 H220"
                stroke="#B98B34"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.svg>

            <h1 className="font-display text-5xl leading-[1.08] text-[#241512] sm:text-6xl lg:text-7xl">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className="mr-4 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-[#5B4A44]"
          >
            Building confident, compassionate and professionally prepared
            nurses through quality education and practical learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
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
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-16 flex max-w-md gap-8 border-t border-[#6E1F24]/15 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="relative pl-3">
                <span className="absolute left-0 top-1 h-4 w-[2px] rounded-full bg-[#B98B34]" />
                <p className="font-display text-2xl text-[#241512] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[#5B4A44]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---------- Right: image/video panel ---------- */}
        <div className="relative order-1 min-h-[46vh] overflow-hidden lg:order-2 lg:min-h-full">
          <motion.video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-poster.jpg"
            initial={{ scale: 1.08 }}
            animate={prefersReducedMotion ? {} : { scale: 1 }}
            transition={{ duration: 18, ease: "easeOut" }}
          >
            <source src="/videos/hero-loop.mp4" type="video/mp4" />
          </motion.video>

          {/* Maroon duotone wash, not blue */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C0D0D]/85 via-[#1C0D0D]/25 to-transparent" />
          <div className="absolute inset-0 bg-[#4A1418] mix-blend-multiply opacity-30" />

          {/* Arched seam into the cream panel — desktop only */}
          <svg
            className="absolute -left-px top-0 hidden h-full w-16 lg:block"
            viewBox="0 0 64 800"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M64 0 C24 160, 24 640, 64 800 L0 800 L0 0 Z"
              fill="#F8F4EC"
            />
          </svg>

          {/* Accreditation tag, sitting on the photo like a caption */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-8 left-8 rounded-lg border border-white/20 bg-black/25 px-4 py-2.5 backdrop-blur-sm sm:left-12"
          >
            <p className="text-xs tracking-wide text-white/90">
              Recognised nursing college, Latur
            </p>
          </motion.div>

          <motion.button
            type="button"
            onClick={toggleSound}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white/80 backdrop-blur-sm transition hover:bg-black/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B34]"
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
        </div>
      </div>
    </section>
  );
}
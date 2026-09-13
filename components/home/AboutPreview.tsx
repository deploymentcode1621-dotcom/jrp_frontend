"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/common/Button";

const stats = [
  { value: "15+", label: "Years serving Marathwada" },
  { value: "900+", label: "Students currently enrolled" },
  { value: "4+", label: "Academic pathways offered" },
  { value: "Latur", label: "Campus in Maharashtra" },
];

export default function AboutPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-canvas py-24">
      <div className="container-custom grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
        {/* Narrative */}
        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm italic text-primary/70">
            Part of Jeevan Rekha Pratishthan
          </p>

          <h2 className="mt-3 max-w-lg font-display text-4xl leading-[1.15] text-ink sm:text-5xl">
            Nurses who are ready on day one, not just on paper.
          </h2>

          <div className="mt-8 max-w-[60ch] space-y-5 text-[15px] leading-relaxed text-ink-light/80">
            <p>
              Jeevan Rekha Pratishthan has worked across the Marathwada
              region for over fifteen years, building institutions that pair
              academic rigor with real social purpose. Swami Vivekanand
              Institute of Nursing carries that work forward — training
              students not just to clear examinations, but to become nurses
              who are technically sound, ethically grounded, and useful in a
              ward from their first placement.
            </p>
            <p>
              The curriculum sets structured classroom study against early,
              consistent clinical exposure, backed by experienced faculty
              and a campus built for healthcare teaching specifically — not
              adapted from a general college.
            </p>
          </div>

          <div className="mt-9">
            <Button href="/about/swami-vivekanand" variant="ghost" withArrow>
              Learn more about us
            </Button>
          </div>
        </motion.div>

        {/* The spine: facts threaded along one line instead of four repeated cards */}
        <div className="relative pl-10 sm:pl-12">
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-primary-200 sm:left-[9px]"
            initial={shouldReduceMotion ? undefined : { scaleY: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />

          <ul className="space-y-10">
            {stats.map((stat, i) => (
              <motion.li
                key={stat.label}
                className="relative"
                initial={shouldReduceMotion ? undefined : { opacity: 0 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.22 }}
              >
                <span className="absolute -left-10 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-canvas sm:-left-12" />
                <p className="font-display text-3xl text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-light/70">
                  {stat.label}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
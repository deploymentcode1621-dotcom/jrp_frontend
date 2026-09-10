"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function AdmissionCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-600 to-secondary py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-10" />
      <div className="container-custom relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl font-display text-3xl text-white text-balance sm:text-4xl"
        >
          Ready to begin your nursing journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-lg text-[15px] text-white/85"
        >
          Admissions for the 2026-27 academic session are now open. Take the
          first step toward a career built on skill, purpose, and care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <Button href="/admissions" variant="outline" size="lg" withArrow>
            View Admissions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

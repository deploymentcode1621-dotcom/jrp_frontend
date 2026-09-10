"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

const stats = [
  { value: "15+", label: "Years of legacy" },
  { value: "900+", label: "Students" },
  { value: "4+", label: "Academic pathways" },
  { value: "Latur", label: "Maharashtra" },
];

export default function AboutPreview() {
  return (
    <section className="bg-canvas py-24">
      <div className="container-custom grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="About the Institution"
            title="A trusted education ecosystem with a purpose."
          />
          <p className="mt-6 text-[15px] leading-relaxed text-ink-light/80">
            Jeevan Rekha Pratishthan has served the Marathwada region for over
            fifteen years, building institutions that combine academic rigor
            with genuine social purpose. Swami Vivekanand Institute of
            Nursing carries that legacy forward — training students not just
            to pass examinations, but to become nurses who are technically
            skilled, ethically grounded, and ready to serve their communities
            from day one.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
            Our curriculum blends structured classroom learning with early
            and consistent clinical exposure, supported by experienced
            faculty and a campus built specifically for healthcare education.
          </p>
          <div className="mt-8">
            <Button href="/about/swami-vivekanand" variant="ghost" withArrow>
              Learn more about us
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary-100 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <p className="font-display text-3xl text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-ink-light/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

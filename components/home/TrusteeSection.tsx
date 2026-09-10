"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { getTrustees } from "@/lib/api";
import { Trustee } from "@/types";
import SectionHeading from "@/components/common/SectionHeading";

export default function TrusteeSection() {
  const [trustees, setTrustees] = useState<Trustee[]>([]);

  useEffect(() => {
    getTrustees().then(setTrustees);
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:36px_36px] opacity-[0.4]" />
      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Leadership"
          title="Leadership with a clear educational vision."
          dark
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {trustees.map((trustee, i) => (
            <motion.div
              key={trustee.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass-panel p-8 transition-all hover:bg-white/[0.09]"
            >
              <Quote className="mb-4 h-7 w-7 text-secondary-300" />
              <p className="text-[15px] leading-relaxed text-white/80">
                "{trustee.message}"
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-secondary-300/40">
                  <Image
                    src={trustee.image}
                    alt={trustee.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="font-display text-base text-white">{trustee.name}</p>
                  <p className="text-xs text-secondary-300">{trustee.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

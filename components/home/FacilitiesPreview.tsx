"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { getFacilities } from "@/lib/api";
import { Facility } from "@/types";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export default function FacilitiesPreview() {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  useEffect(() => {
    getFacilities().then(setFacilities);
  }, []);

  return (
    <section className="bg-canvas py-24">
      <div className="container-custom">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Campus & Learning"
            title="Facilities built for hands-on healthcare training"
          />
          <Button href="/facilities" variant="ghost" withArrow className="shrink-0">
            View All Facilities
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, i) => {
            const Icon = (Icons[facility.icon as keyof typeof Icons] ??
              Icons.Building2) as Icons.LucideIcon;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-2xl border border-primary-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg text-ink">{facility.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light/75">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

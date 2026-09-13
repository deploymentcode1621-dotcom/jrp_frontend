"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { getFacilities } from "@/lib/api";
import { Facility } from "@/types";
import Button from "@/components/common/Button";

export default function FacilitiesPreview() {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  useEffect(() => {
    getFacilities().then(setFacilities);
  }, []);

  if (facilities.length === 0) return null;

  // Treats the first facility as the flagship — the one prospective students
  // picture first. If your API/CMS order isn't guaranteed, add an
  // `isFeatured` boolean to the Facility type instead of relying on index 0.
  const [featured, ...rest] = facilities;
  const FeaturedIcon = (Icons[featured.icon as keyof typeof Icons] ??
    Icons.Building2) as Icons.LucideIcon;

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left — intro + flagship facility */}
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Campus & learning
            </div>

            <h2 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-[2.75rem]">
              Facilities built for hands-on healthcare training
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-light/75">
              Every space on campus is designed around one idea: nursing is
              learned by doing. From the first mannequin to the first ward
              round, students train in settings that mirror real practice.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative mt-10 overflow-hidden rounded-2xl bg-[#0B2B33] p-8 text-white sm:p-10"
            >
              {/* Faint EKG line — decorative, ties to the subject */}
              <svg
                className="pointer-events-none absolute -right-6 bottom-0 h-28 w-64 opacity-[0.15]"
                viewBox="0 0 260 100"
                fill="none"
              >
                <path
                  d="M0 60 H60 L75 20 L95 90 L112 45 L124 60 H260"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <FeaturedIcon className="h-5 w-5" />
              </div>

              <h3 className="relative mt-6 font-display text-2xl">
                {featured.title}
              </h3>
              <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                {featured.description}
              </p>

              <Link
                href="/facilities"
                className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-[#D4A017] transition-colors hover:text-[#e8b52a]"
              >
                See how students train here
                <Icons.ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right — remaining facilities as a directory list */}
          <div className="flex flex-col justify-center">
            <ul className="divide-y divide-primary-100 border-y border-primary-100">
              {rest.map((facility, i) => {
                const Icon = (Icons[facility.icon as keyof typeof Icons] ??
                  Icons.Building2) as Icons.LucideIcon;
                return (
                  <motion.li
                    key={facility.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    className="group relative py-6"
                  >
                    <span className="absolute -left-6 top-0 hidden h-full w-[3px] rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block" />
                    <div className="flex items-start gap-4 lg:pl-2">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-ink">
                          {facility.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-light/75">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <Button href="/facilities" variant="ghost" withArrow className="mt-8 self-start">
              View All Facilities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";
import { getCourses } from "@/lib/api";
import { Course } from "@/types";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import Loader from "@/components/common/Loader";

/**
 * Design notes
 * -------------------------------------------------------------
 * Same grid/card format as before — the change is in the card craft:
 *
 * - Category is color-coded (a 2px top rule + a dot), so the grid reads
 *   at a glance instead of every card looking identical.
 * - No pill badge, no bg-fill button, no plain grey drop-shadow.
 * - Hover state is a single coordinated move: the top rule brightens,
 *   the border tints toward the accent, the arrow shifts — not a
 *   generic "lift + shadow" applied to every card the same way.
 * - Meta row (duration/eligibility) sits as quiet inline text with
 *   icons, not boxed or backgrounded.
 * -------------------------------------------------------------
 */

const ACCELS: Record<string, string> = {
  "Nursing Programs": "#0E5C56", // deep teal
  "Allied Health": "#9A6A2E", // muted brass
};

function accentFor(category: string) {
  return ACCELS[category] ?? "#0E5C56";
}

export default function CoursesPreview() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data.slice(0, 4));
      setLoading(false);
    });
  }, []);

  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Programmes"
            title="Courses built for a healthcare career"
            description="From foundational diplomas to advanced nursing degrees, each programme is designed around real clinical competence."
          />
          <Button href="/courses" variant="ghost" withArrow className="shrink-0">
            Explore All Courses
          </Button>
        </div>

        {loading ? (
          <Loader label="Loading courses" />
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => {
              const accent = accentFor(course.category);
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[#E7E5DF] bg-white p-7 transition-colors duration-300 hover:border-[#D8D5CC]"
                  style={{ ["--accent" as string]: accent }}
                >
                  {/* Top rule, brightens on hover */}
                  <span
                    className="absolute inset-x-0 top-0 h-[3px] bg-[var(--accent)] opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Category */}
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#6B7280]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {course.category}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-xl leading-snug text-[#16233D]">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[#5B6472]">
                    {course.shortDescription}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 space-y-2 border-t border-[#EFEDE7] pt-5 text-[13px] text-[#5B6472]">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-[var(--accent)]" strokeWidth={1.75} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-3.5 w-3.5 text-[var(--accent)]" strokeWidth={1.75} />
                      {course.eligibility}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-6 flex items-center justify-between text-[14px] font-medium text-[#16233D] transition-colors group-hover:text-[var(--accent)]"
                  >
                    View course
                    <ArrowUpRight
                      className="h-4 w-4 -translate-x-0.5 opacity-60 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      strokeWidth={1.75}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
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
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-primary-100 bg-canvas p-6 transition-all hover:-translate-y-1 hover:shadow-cardHover"
              >
                <span className="mb-4 inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-600">
                  {course.category}
                </span>
                <h3 className="font-display text-lg leading-snug text-ink">
                  {course.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-light/75">
                  {course.shortDescription}
                </p>
                <div className="mt-5 space-y-2 border-t border-primary-100 pt-4 text-xs text-ink-light/65">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-secondary-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-3.5 w-3.5 text-secondary-500" />
                    {course.eligibility}
                  </div>
                </div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="mt-5 flex items-center justify-between rounded-full bg-white px-4 py-2.5 text-sm font-medium text-primary shadow-card transition-all group-hover:bg-primary group-hover:text-white"
                >
                  View Course
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

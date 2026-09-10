import type { Metadata } from "next";
import Link from "next/link";
import { Clock, GraduationCap, Users, ArrowUpRight } from "lucide-react";
import { getCourses } from "@/lib/api";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Courses | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Explore nursing and allied health programmes at Swami Vivekanand Institute of Nursing, Latur — GNM, ANM, Post Basic B.Sc. Nursing, and diploma courses in medical laboratory and operation theatre technology.",
};

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            Programmes
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Courses built for a healthcare career
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            Every programme combines classroom learning with structured
            clinical exposure, preparing students for real professional practice.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom grid grid-cols-1 gap-8 sm:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col rounded-2xl border border-primary-100 bg-white p-8 shadow-card transition-shadow hover:shadow-cardHover"
            >
              <span className="mb-4 inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-[11px] font-semibold text-primary-600">
                {course.category}
              </span>
              <h2 className="font-display text-xl text-ink">{course.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-light/80">
                {course.shortDescription}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-primary-100 pt-5 text-xs text-ink-light/70">
                <div className="flex flex-col gap-1">
                  <Clock className="h-4 w-4 text-secondary-500" />
                  {course.duration}
                </div>
                <div className="flex flex-col gap-1">
                  <GraduationCap className="h-4 w-4 text-secondary-500" />
                  {course.eligibility}
                </div>
                <div className="flex flex-col gap-1">
                  <Users className="h-4 w-4 text-secondary-500" />
                  {course.intake}
                </div>
              </div>
              <Link
                href={`/courses/${course.slug}`}
                className="mt-6 flex items-center justify-between rounded-full bg-primary-50 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                View Course Details
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="container-custom mt-16">
          <div className="flex flex-col items-center gap-5 rounded-2xl bg-gradient-to-br from-primary to-secondary p-10 text-center text-white">
            <SectionHeading
              title="Not sure which programme fits you?"
              align="center"
              dark
            />
            <Button href="/admissions" variant="outline" withArrow>
              Talk to Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

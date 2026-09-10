import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, GraduationCap, Users } from "lucide-react";
import { getCourseBySlug, getCourses } from "@/lib/api";
import Button from "@/components/common/Button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.title} | Swami Vivekanand Institute of Nursing`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const course = await getCourseBySlug(params.slug);
  if (!course) notFound();

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-secondary-300">
            {course.category}
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            {course.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <h2 className="font-display text-2xl text-ink">Programme Overview</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
              {course.overview}
            </p>

            <h3 className="mt-10 font-display text-xl text-ink">Highlights</h3>
            <ul className="mt-4 space-y-3">
              {course.highlights?.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-[15px] text-ink-light/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-primary-100 bg-white p-7 shadow-card">
            <h3 className="font-display text-lg text-ink">Programme Details</h3>
            <div className="mt-5 space-y-4 text-sm text-ink-light/80">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-secondary-500" />
                <span>Duration: {course.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-secondary-500" />
                <span>Eligibility: {course.eligibility}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-secondary-500" />
                <span>Intake: {course.intake}</span>
              </div>
            </div>
            <Button href="/admissions" className="mt-7 w-full" withArrow>
              Apply for This Course
            </Button>
          </aside>
        </div>
      </section>
    </div>
  );
}

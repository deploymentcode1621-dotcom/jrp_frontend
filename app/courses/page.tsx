import type { Metadata } from "next";
import Link from "next/link";
import { getCourses } from "@/lib/api";

export const metadata: Metadata = {
  title: "Courses | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Explore nursing and allied health programmes at Swami Vivekanand Institute of Nursing, Latur — GNM, ANM, Post Basic B.Sc. Nursing, and diploma courses in medical laboratory and operation theatre technology.",
};

type Course = Awaited<ReturnType<typeof getCourses>>[number];

/* ----------------------------------------------------------------------- */
/* Content helpers                                                          */
/* ----------------------------------------------------------------------- */

/** Derives a short catalog code from a title, e.g. "General Nursing & Midwifery (GNM)" -> "GNM" */
function courseCode(title: string): string {
  const parenMatch = title.match(/\(([^)]+)\)/);
  if (parenMatch) return parenMatch[1];

  return title
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter((word) => word.length > 2)
    .slice(0, 4)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

const NURSING_HIGHLIGHTS = [
  "Supervised rotations across general wards, maternity and paediatrics",
  "Skills-lab practice before every clinical posting",
  "Continuous assessment through practical and viva examinations",
];

const ALLIED_HEALTH_HIGHLIGHTS = [
  "Hands-on training on diagnostic and clinical equipment",
  "Hospital-based practicum alongside classroom instruction",
  "Focus on safety, sterilisation and protocol discipline",
];

function getHighlights(category: string): string[] {
  return category.toLowerCase().includes("allied")
    ? ALLIED_HEALTH_HIGHLIGHTS
    : NURSING_HIGHLIGHTS;
}

const CLINICAL_STAGES = [
  {
    title: "Foundation and skills lab",
    body: "Core theory alongside simulated practice — vitals, procedures and patient handling rehearsed in a controlled setting before any ward exposure.",
  },
  {
    title: "Supervised clinical postings",
    body: "Rotations through general medicine, surgery, maternity, paediatrics and community health, each under the direct supervision of ward faculty.",
  },
  {
    title: "Readiness assessment",
    body: "Final postings and practical examinations focused on independent competency, professional conduct and documentation.",
  },
];

const ADMISSIONS_STEPS = [
  {
    title: "Submit your application",
    body: "Complete the enquiry form with your academic record and the programme you're applying to.",
  },
  {
    title: "Document verification",
    body: "Our admissions team checks your marksheets and confirms eligibility for the programme.",
  },
  {
    title: "Counselling or entrance review",
    body: "Depending on the programme, you'll attend a counselling session or an entrance assessment.",
  },
  {
    title: "Confirm your seat",
    body: "Complete fee formalities within the given window to secure your admission.",
  },
];

const FAQS = [
  {
    q: "What are the minimum eligibility requirements?",
    a: "Eligibility differs by programme — each listing above states the required stream, minimum percentage and prior qualification. Our admissions team can confirm whether your marksheet qualifies.",
  },
  {
    q: "Is hostel accommodation available?",
    a: "Hostel details, along with fee structure and current seat availability, are best confirmed directly with the admissions office for the programme you're applying to.",
  },
  {
    q: "Can I move from a diploma into a degree programme later?",
    a: "Yes — diploma holders with a registered nursing licence can apply to our Post Basic B.Sc. Nursing programme for academic and clinical progression.",
  },
  {
    q: "How much of the programme is clinical, versus classroom?",
    a: "All our programmes combine theory with structured clinical placements; the exact split is set by the respective curriculum and covered in your orientation.",
  },
];

/* ----------------------------------------------------------------------- */
/* Small building blocks                                                    */
/* ----------------------------------------------------------------------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] text-[var(--ink-faint)]">{label}</div>
      <div className="mt-1 text-sm text-[var(--ink)]">{value}</div>
    </div>
  );
}

function CourseRow({ course }: { course: Course }) {
  const highlights = getHighlights(course.category);

  return (
    <div className="grid grid-cols-1 gap-6 border-b border-[var(--line)] py-10 sm:grid-cols-[88px_1fr] lg:grid-cols-[88px_1fr_240px] lg:gap-10">
      <div>
        <div className="flex h-16 w-16 items-center justify-center border border-[var(--teal)] font-display text-sm text-[var(--teal)]">
          {courseCode(course.title)}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-[var(--ink)]">
          {course.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[var(--ink-soft)]">
          {course.shortDescription}
        </p>

        <ul className="mt-5 space-y-2">
          {highlights.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]"
            >
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--teal)]" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          <Stat label="Duration" value={course.duration} />
          <Stat label="Eligibility" value={course.eligibility} />
          <Stat label="Seats" value={course.intake} />
        </div>
      </div>

      <div className="flex items-start sm:col-span-2 lg:col-span-1 lg:justify-end">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-block border-b border-[var(--teal)] pb-0.5 text-sm font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal-deep)] hover:text-[var(--teal-deep)]"
        >
          View course details
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------- */
/* Page                                                                      */
/* ----------------------------------------------------------------------- */

export default async function CoursesPage() {
  const courses = await getCourses();

  const categories = Array.from(new Set(courses.map((c) => c.category)));
  const grouped = courses.reduce<Record<string, Course[]>>((acc, course) => {
    (acc[course.category] ||= []).push(course);
    return acc;
  }, {});

  return (
    <div
      className="pt-28"
      style={
        {
          "--paper": "#F1F4EF",
          "--ink": "#16241F",
          "--ink-soft": "#4A5C55",
          "--ink-faint": "#8B968F",
          "--teal": "#2F5F52",
          "--teal-deep": "#1F433A",
          "--amber": "#B8863C",
          "--line": "#DADFD5",
        } as React.CSSProperties
      }
    >
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[var(--paper)] pb-16 pt-16">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl leading-[1.1] text-[var(--ink)] sm:text-5xl">
              Programmes built around real clinical practice
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[var(--ink-soft)]">
              Every course pairs structured classroom instruction with
              supervised clinical placements, so graduates step into wards,
              labs and theatres already prepared for the work. Below is the
              full list of programmes we currently offer, how they compare,
              and how to apply.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-[var(--line)] pt-8">
            <div>
              <div className="font-display text-3xl text-[var(--teal)]">
                {courses.length}
              </div>
              <div className="mt-1 text-sm text-[var(--ink-faint)]">
                Programmes offered
              </div>
            </div>
            <div>
              <div className="font-display text-3xl text-[var(--teal)]">
                {categories.length}
              </div>
              <div className="mt-1 text-sm text-[var(--ink-faint)]">
                Fields of study — {categories.join(" and ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* At-a-glance comparison                                            */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-[var(--ink)]">
            All programmes at a glance
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-[var(--ink-soft)]">
            A quick comparison before you read the full listings below.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--ink)]">
                  <th className="py-3 pr-6 text-[13px] font-medium text-[var(--ink-faint)]">
                    Programme
                  </th>
                  <th className="py-3 pr-6 text-[13px] font-medium text-[var(--ink-faint)]">
                    Category
                  </th>
                  <th className="py-3 pr-6 text-[13px] font-medium text-[var(--ink-faint)]">
                    Duration
                  </th>
                  <th className="py-3 pr-6 text-[13px] font-medium text-[var(--ink-faint)]">
                    Eligibility
                  </th>
                  <th className="py-3 text-[13px] font-medium text-[var(--ink-faint)]">
                    Seats
                  </th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr
                    key={course.id}
                    className="border-b border-[var(--line)]"
                  >
                    <td className="py-4 pr-6 text-sm font-medium text-[var(--ink)]">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="hover:text-[var(--teal)]"
                      >
                        {course.title}
                      </Link>
                    </td>
                    <td className="py-4 pr-6 text-sm text-[var(--ink-soft)]">
                      {course.category}
                    </td>
                    <td className="py-4 pr-6 text-sm text-[var(--ink-soft)]">
                      {course.duration}
                    </td>
                    <td className="py-4 pr-6 text-sm text-[var(--ink-soft)]">
                      {course.eligibility}
                    </td>
                    <td className="py-4 text-sm text-[var(--ink-soft)]">
                      {course.intake}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Catalog                                                           */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[var(--paper)] py-20">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-[var(--ink)]">
            Full programme listings
          </h2>

          {Object.entries(grouped).map(([category, group]) => (
            <div key={category} className="mt-14 first:mt-8">
              <h3 className="font-display text-xl text-[var(--ink)]">
                {category}
              </h3>
              <div className="mt-6 border-t border-[var(--line)]">
                {group.map((course) => (
                  <CourseRow key={course.id} course={course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Clinical training pathway                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              How clinical training is structured
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              Regardless of programme, clinical readiness is built in three
              stages.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-3 md:gap-8">
            {CLINICAL_STAGES.map((stage, index) => (
              <div key={stage.title}>
                <div className="font-display text-3xl text-[var(--amber)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-lg text-[var(--ink)]">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {stage.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Admissions process                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[var(--paper)] py-20">
        <div className="container-custom">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-[var(--ink)]">
              How admissions work
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
              From enquiry to a confirmed seat, in four steps.
            </p>
          </div>

          <div className="mt-12 border-t border-[var(--line)]">
            {ADMISSIONS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-1 gap-3 border-b border-[var(--line)] py-8 sm:grid-cols-[64px_1fr]"
              >
                <div className="font-display text-2xl text-[var(--teal)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg text-[var(--ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--ink-soft)]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* FAQ                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-20">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-[var(--ink)]">
            Common questions
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-2 md:gap-x-14 md:gap-y-12">
            {FAQS.map((item) => (
              <div key={item.q}>
                <h3 className="font-display text-lg text-[var(--ink)]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA                                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-[var(--ink)] py-20">
        <div className="container-custom flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-md font-display text-3xl text-white">
              Not sure which programme is the right fit?
            </h2>
            <p className="mt-3 max-w-md text-[15px] text-white/70">
              Talk to our admissions team about your eligibility, your
              options, and what to expect from each programme.
            </p>
          </div>
          <Link
            href="/admissions"
            className="inline-flex flex-none items-center border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-[var(--ink)]"
          >
            Talk to admissions
          </Link>
        </div>
      </section>
    </div>
  );
}
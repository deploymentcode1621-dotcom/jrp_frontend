import type { Metadata } from "next";
import { FileText, ClipboardCheck, Send, CheckCircle2 } from "lucide-react";
import { getAdmissionStatus, getCourses } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Admissions | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Admissions information for Swami Vivekanand Institute of Nursing, Latur — eligibility, required documents, application process, and FAQs.",
};

const documents = [
  "10th & 12th Mark Sheets and Certificates",
  "Transfer Certificate (TC) from previous institution",
  "Aadhaar Card (photocopy)",
  "Passport-size photographs (4 copies)",
  "Domicile Certificate (Maharashtra)",
  "Caste Certificate, if applicable",
];

const process = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the admission enquiry form online or visit the campus in person.",
  },
  {
    icon: ClipboardCheck,
    title: "Document Verification",
    description: "Bring original and photocopies of required documents for verification.",
  },
  {
    icon: Send,
    title: "Confirm Seat",
    description: "Complete the fee formalities to confirm your seat for the session.",
  },
  {
    icon: CheckCircle2,
    title: "Orientation",
    description: "Attend the orientation programme and begin your academic journey.",
  },
];

const faqs = [
  {
    q: "What is the eligibility for GNM admission?",
    a: "Candidates must have passed 10+2 with a minimum of 40%, with Science stream preferred.",
  },
  {
    q: "Are hostel facilities available?",
    a: "Hostel information is available on request — please contact the admissions office for current availability.",
  },
  {
    q: "Is there an entrance examination?",
    a: "Admission is primarily merit-based on qualifying examination marks; any additional requirements will be communicated during the application process.",
  },
  {
    q: "Can I apply for more than one course?",
    a: "Yes, you may indicate a preference order for multiple courses on the application form.",
  },
];

export default async function AdmissionsPage() {
  const [status, courses] = await Promise.all([getAdmissionStatus(), getCourses()]);

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span
            className={`mb-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${
              status.isOpen
                ? "bg-secondary/20 text-secondary-200"
                : "bg-white/10 text-white/60"
            }`}
          >
            {status.isOpen ? "Admissions Open" : "Admissions Closed"} — Session{" "}
            {status.session}
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Begin your nursing journey with us
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            Applications for the {status.session} session close on{" "}
            {formatDate(status.lastDate)}. Review the eligibility, documents, and
            process below before applying.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Programmes" title="Courses open for admission" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="rounded-xl border border-primary-100 bg-white p-5"
              >
                <p className="text-xs font-medium text-secondary-600">
                  {course.category}
                </p>
                <p className="mt-1 font-display text-base text-ink">{course.title}</p>
                <p className="mt-1 text-xs text-ink-light/60">
                  {course.duration} · {course.eligibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="Required Documents" title="What you'll need to apply" />
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {documents.map((doc) => (
              <li
                key={doc}
                className="flex items-center gap-3 rounded-xl border border-primary-100 bg-canvas px-5 py-4 text-sm text-ink-light/80"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-secondary-500" />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom">
          <SectionHeading eyebrow="How It Works" title="Application process" />
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-base text-ink">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-custom max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-primary-100 bg-canvas p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-ink">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-light/75">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-secondary py-20 text-center text-white">
        <div className="container-custom">
          <h2 className="font-display text-3xl text-balance sm:text-4xl">
            Ready to apply?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] text-white/85">
            Reach out to our admissions office to start your application today.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="outline" size="lg" withArrow>
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

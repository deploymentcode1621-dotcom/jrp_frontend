import type { Metadata } from "next";
import { HeartPulse, Eye, Target, BookOpen, Users2, Hand } from "lucide-react";

export const metadata: Metadata = {
  title: "About Swami Vivekanand Institute of Nursing | Latur",
  description:
    "Discover Swami Vivekanand Institute of Nursing, Latur — our vision, mission, academic philosophy, and approach to nursing education and student development.",
};

const sections = [
  {
    icon: HeartPulse,
    title: "About the Institute",
    body: "Swami Vivekanand Institute of Nursing, run by Jeevan Rekha Pratishthan, offers structured, practically grounded nursing and allied health programmes in Latur, Maharashtra. The institute is built specifically for healthcare education — from its skills labs to its clinical partnerships — with every element designed to prepare students for real professional practice.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "To be recognised as a leading nursing institution in Maharashtra, known for producing graduates who are clinically capable, ethically sound, and genuinely committed to patient care.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To deliver a curriculum that balances academic depth with hands-on clinical training, supported by experienced faculty, modern learning infrastructure, and consistent hospital exposure from the earliest stages of study.",
  },
  {
    icon: BookOpen,
    title: "Academic Philosophy",
    body: "We believe nursing is learned as much through practice as through theory. Every course is structured to move students from classroom concepts to supervised clinical application as early and as often as possible.",
  },
  {
    icon: Users2,
    title: "Nursing Education",
    body: "Our programmes — from ANM to Post Basic B.Sc. Nursing — are designed around the Maharashtra Nursing Council framework, updated continuously to reflect current clinical standards and community health needs.",
  },
  {
    icon: Hand,
    title: "Student Development",
    body: "Beyond academics, students receive mentorship, counselling support, and opportunities for community outreach — building the confidence and character needed for a demanding, service-oriented profession.",
  },
];

export default function SwamiVivekanandAboutPage() {
  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            About the Institute
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Swami Vivekanand Institute of Nursing
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            A Jeevan Rekha Pratishthan institution shaping nurses through
            practical learning, ethical grounding, and consistent clinical exposure.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom grid grid-cols-1 gap-8 sm:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-primary-100 bg-white p-8 shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <section.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-xl text-ink">{section.title}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-light/80">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

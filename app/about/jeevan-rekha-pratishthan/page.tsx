import type { Metadata } from "next";
import { Landmark, Eye, Target, Users, Award } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Jeevan Rekha Pratishthan | About Us",
  description:
    "Learn about Jeevan Rekha Pratishthan, Latur — the trust behind Swami Vivekanand Institute of Nursing, its history, vision, mission, and leadership.",
};

const sections = [
  {
    icon: Landmark,
    title: "History",
    body: "Jeevan Rekha Pratishthan was founded with a simple conviction: that quality healthcare education should be accessible to students across the Marathwada region. Over fifteen years, the trust has grown from a modest beginning into a recognised institution serving hundreds of students, guided throughout by the same founding principles of discipline, service, and academic integrity.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "To be a centre of excellence in healthcare education, producing professionals who combine clinical competence with genuine compassion, and who go on to strengthen healthcare delivery across Maharashtra and beyond.",
  },
  {
    icon: Target,
    title: "Mission",
    body: "To provide accessible, high-quality, practically grounded education in nursing and allied health sciences; to build infrastructure and faculty capability that matches evolving healthcare needs; and to instil in every student a lasting sense of professional and ethical responsibility.",
  },
  {
    icon: Users,
    title: "Leadership",
    body: "The trust is guided by a board of trustees with deep roots in the Latur community and long-standing commitment to education and public service. Their oversight ensures that every institution under the trust stays aligned with its founding purpose.",
  },
  {
    icon: Award,
    title: "Legacy",
    body: "Today, Jeevan Rekha Pratishthan's institutions have collectively trained hundreds of students who now serve in hospitals, clinics, and community health settings — a legacy the trust continues to build on with every new academic session.",
  },
];

export default function JeevanRekhaPratishthanPage() {
  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            About the Trust
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Jeevan Rekha Pratishthan
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            The trust behind Swami Vivekanand Institute of Nursing, dedicated
            to accessible, purposeful healthcare education in Latur, Maharashtra.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom space-y-14">
          {sections.map((section) => (
            <div
              key={section.title}
              className="grid grid-cols-1 gap-6 border-b border-primary-100 pb-14 last:border-0 lg:grid-cols-[220px_1fr]"
            >
              <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <section.icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-xl text-ink">{section.title}</h2>
              </div>
              <p className="text-[15px] leading-relaxed text-ink-light/80">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

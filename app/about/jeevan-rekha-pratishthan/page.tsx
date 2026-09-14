import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jeevan Rekha Pratishthan | About Us",
  description:
    "Jeevan Rekha Pratishthan, Latur — the public charitable trust behind Swami Vivekanand Institute of Nursing. History, vision, mission, governance, and legacy.",
};

const stats = [
  { value: "2009", label: "Year the trust was registered" },
  { value: "15+", label: "Years of continuous operation" },
  { value: "500+", label: "Students trained across its institutions" },
];

const spine = [
  {
    mark: "H",
    year: "2009",
    title: "History",
    body: "Jeevan Rekha Pratishthan was founded on a simple conviction: quality healthcare education should be within reach of students across Marathwada, not just its major cities. What began as a single modest campus has grown, over fifteen years, into a recognised trust serving hundreds of students — without ever loosening its founding insistence on discipline, service, and academic integrity.",
  },
  {
    mark: "V",
    title: "Vision",
    body: "To be a centre of excellence in healthcare education — producing professionals who pair clinical competence with genuine compassion, and who go on to strengthen healthcare delivery across Maharashtra and beyond.",
  },
  {
    mark: "M",
    title: "Mission",
    body: "To provide accessible, high-quality, practically grounded education in nursing and allied health sciences; to build infrastructure and faculty capability that keeps pace with healthcare's changing needs; and to instil in every student a lasting sense of professional and ethical responsibility.",
  },
  {
    mark: "G",
    title: "Governance",
    body: "The trust is guided by a board of trustees with deep roots in the Latur community and a long-standing commitment to education and public service. Their oversight keeps every institution under the trust aligned with its founding purpose, and its finances and admissions accountable to the public it serves.",
  },
  {
    mark: "L",
    year: "Today",
    title: "Legacy",
    body: "Jeevan Rekha Pratishthan's institutions have collectively trained hundreds of students who now serve in hospitals, clinics, and community health settings — a legacy the trust continues to build with every academic session that begins.",
  },
];

const trustees = [
  { name: "Trustee Name", role: "Chairperson" },
  { name: "Trustee Name", role: "Secretary" },
  { name: "Trustee Name", role: "Treasurer" },
  { name: "Trustee Name", role: "Trustee" },
];

const institutions = [
  {
    name: "Swami Vivekanand Institute of Nursing",
    detail: "Latur, Maharashtra — GNM, ANM, Post Basic B.Sc. Nursing, and Medical Lab Technology.",
    href: "/",
  },
];

export default function JeevanRekhaPratishthanPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="bg-ink py-24">
        <div className="container-custom">
          <p className="mb-4 text-sm text-[#C9A468]">About the trust</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
            Jeevan Rekha Pratishthan
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            A public charitable trust registered in Latur in 2009, formed to
            build lasting healthcare education institutions across
            Marathwada — and the trust behind Swami Vivekanand Institute of
            Nursing.
          </p>
        </div>
      </section>

      {/* Stats — sit directly on the spine, not a card grid */}
      <section className="bg-canvas pt-16">
        <div className="container-custom">
          <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-primary-100 pb-14">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-[160px]">
                <p className="font-display text-3xl text-ink">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-light/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The spine */}
      <section className="relative bg-canvas py-4">
        <div className="container-custom">
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[23px] top-2 bottom-2 w-px bg-[#D8CFBE] sm:left-[27px]"
              aria-hidden="true"
            />
            {/* traveling pulse — one orchestrated moment, plays once */}
            <div
              className="pulse-dot absolute left-[19px] h-2 w-2 rounded-full bg-[#A9793C] sm:left-[23px]"
              aria-hidden="true"
            />

            <div className="space-y-0">
              {spine.map((section, i) => (
                <div
                  key={section.title}
                  className={`relative grid grid-cols-[48px_1fr] gap-6 py-12 sm:grid-cols-[56px_1fr] ${
                    i !== spine.length - 1 ? "border-b border-primary-100" : ""
                  }`}
                >
                  <div className="relative flex justify-center pt-1">
                    <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#A9793C]/40 bg-canvas font-display text-lg text-[#A9793C]">
                      {section.mark}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 flex items-baseline gap-3">
                      <h2 className="font-display text-xl text-ink">
                        {section.title}
                      </h2>
                      {section.year && (
                        <span className="text-sm text-ink-light/60">
                          {section.year}
                        </span>
                      )}
                    </div>
                    <p className="max-w-2xl text-[15px] leading-relaxed text-ink-light/80">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="bg-canvas py-20">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-ink">Board of trustees</h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink-light/70">
            The individuals responsible for the trust's oversight and public
            accountability.
          </p>
          <div className="mt-10 divide-y divide-primary-100 border-y border-primary-100">
            {trustees.map((trustee) => (
              <div
                key={trustee.name + trustee.role}
                className="flex items-center justify-between py-5"
              >
                <span className="font-display text-lg text-ink">
                  {trustee.name}
                </span>
                <span className="text-sm text-ink-light/60">
                  {trustee.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions under the trust */}
      <section className="bg-ink py-20">
        <div className="container-custom">
          <h2 className="font-display text-2xl text-white">
            Institutions under the trust
          </h2>
          <div className="mt-10 space-y-4">
            {institutions.map((inst) => (
              <Link
                key={inst.name}
                href={inst.href}
                className="group block border-b border-white/10 pb-6"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display text-lg text-white group-hover:text-[#C9A468]">
                      {inst.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{inst.detail}</p>
                  </div>
                  <span className="shrink-0 text-sm text-white/40 group-hover:text-[#C9A468]">
                    Visit
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulseTravel {
          0% { top: 0.5rem; opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { top: calc(100% - 1rem); opacity: 0; }
        }
        .pulse-dot {
          animation: pulseTravel 2.4s ease-in-out 0.3s 1 both;
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-dot { animation: none; opacity: 0; }
        }
      `}</style>
    </div>
  );
}
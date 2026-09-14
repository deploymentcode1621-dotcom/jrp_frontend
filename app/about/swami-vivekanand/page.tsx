import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Swami Vivekanand Institute of Nursing | Latur",
  description:
    "Discover Swami Vivekanand Institute of Nursing, Latur — our vision, mission, academic philosophy, and approach to nursing education and student development.",
};

const programmes = [
  "GNM",
  "ANM",
  "Post Basic B.Sc. Nursing",
  "Medical Lab Technology",
];

export default function SwamiVivekanandAboutPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="bg-ink py-24">
        <div className="container-custom">
          <p className="mb-4 text-sm text-[#C9A468]">
            A unit of Jeevan Rekha Pratishthan
          </p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
            Swami Vivekanand Institute of Nursing
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Shaping nurses through practical learning, ethical grounding, and
            consistent clinical exposure — in Latur, Maharashtra.
          </p>
        </div>
      </section>

      {/* Lead: About the Institute, with programmes as a marginal note */}
      <section className="bg-canvas py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 border-b border-primary-100 pb-16 lg:grid-cols-[1fr_260px]">
            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                About the institute
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-light/80">
                Swami Vivekanand Institute of Nursing, run by Jeevan Rekha
                Pratishthan, offers structured, practically grounded nursing
                and allied health programmes in Latur. The institute is built
                specifically for healthcare education — from its skills labs
                to its clinical partnerships — with every element designed to
                prepare students for real professional practice.
              </p>
            </div>
            <div className="lg:pt-1">
              <p className="text-sm text-ink-light/50">Programmes offered</p>
              <ul className="mt-4 space-y-2">
                {programmes.map((programme) => (
                  <li
                    key={programme}
                    className="border-t border-primary-100 pt-2 text-[15px] text-ink first:border-t-0 first:pt-0"
                  >
                    {programme}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="mt-5 inline-block text-sm text-[#A9793C] hover:underline"
              >
                See full course details
              </Link>
            </div>
          </div>

          {/* Vision & Mission — a real pair, not a grid */}
          <div className="grid grid-cols-1 gap-12 border-b border-primary-100 py-16 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="text-sm text-ink-light/50">Where we&apos;re going</p>
              <h3 className="mt-3 font-display text-xl text-ink">Vision</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
                To be recognised as a leading nursing institution in
                Maharashtra, known for producing graduates who are clinically
                capable, ethically sound, and genuinely committed to patient
                care.
              </p>
            </div>
            <div className="sm:border-l sm:border-primary-100 sm:pl-16">
              <p className="text-sm text-ink-light/50">How we get there</p>
              <h3 className="mt-3 font-display text-xl text-ink">Mission</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
                To deliver a curriculum that balances academic depth with
                hands-on clinical training, supported by experienced faculty,
                modern learning infrastructure, and consistent hospital
                exposure from the earliest stages of study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Philosophy — the one bold moment on the page */}
      <section className="relative overflow-hidden bg-[#A9793C]/[0.06] py-24">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 -top-10 select-none font-display text-[220px] leading-none text-[#A9793C]/10"
        >
          “
        </span>
        <div className="container-custom relative">
          <p className="text-sm text-ink-light/50">Academic philosophy</p>
          <p className="mt-5 max-w-3xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            Nursing is learned as much through practice as through theory.
            Every course moves students from classroom concepts to supervised
            clinical application — as early, and as often, as possible.
          </p>
        </div>
      </section>

      {/* Nursing Education & Student Development — the second pair */}
      <section className="bg-canvas py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="text-sm text-ink-light/50">Curriculum</p>
              <h3 className="mt-3 font-display text-xl text-ink">
                Nursing education
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
                Our programmes — from ANM to Post Basic B.Sc. Nursing — are
                designed around the Maharashtra Nursing Council framework,
                updated continuously to reflect current clinical standards
                and community health needs.
              </p>
            </div>
            <div className="sm:border-l sm:border-primary-100 sm:pl-16">
              <p className="text-sm text-ink-light/50">Beyond academics</p>
              <h3 className="mt-3 font-display text-xl text-ink">
                Student development
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-light/80">
                Students receive mentorship, counselling support, and
                opportunities for community outreach — building the
                confidence and character a demanding, service-oriented
                profession requires.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import type { Metadata } from "next";
import Image from "next/image";
import {
  Stethoscope,
  Microscope,
  MonitorPlay,
  BookOpen,
  Users2,
  HeartPulse,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Facilities | Swami Vivekanand Institute of Nursing",
  description:
    "Explore the labs, classrooms, library, and clinical training facilities at Swami Vivekanand Institute of Nursing, Latur.",
};

const facilities = [
  {
    icon: Stethoscope,
    title: "Nursing Skills Lab",
    body: "A fully equipped simulation lab where students practice clinical procedures on mannequins before real patient contact.",
    points: ["Simulation mannequins", "Vital signs stations", "Wound care practice bays"],
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80&auto=format&fit=crop",
    alt: "Nursing students practicing clinical skills in a simulation lab",
  },
  {
    icon: Microscope,
    title: "Science & Anatomy Lab",
    body: "Dedicated laboratories for anatomy, physiology, and biochemistry, with anatomical models and specimens.",
    points: ["Anatomical models", "Microscopy stations", "Specimen library"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
    alt: "Anatomy and science laboratory with microscopes and equipment",
  },
  {
    icon: MonitorPlay,
    title: "Smart Classrooms",
    body: "Digitally equipped classrooms with audio-visual aids for interactive, modern teaching methods.",
    points: ["Projection systems", "Digital whiteboards", "Recorded lecture access"],
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80&auto=format&fit=crop",
    alt: "A modern classroom fitted with digital teaching equipment",
  },
  {
    icon: BookOpen,
    title: "Library",
    body: "A well-stocked library with nursing textbooks, journals, and a quiet reading environment for focused study.",
    points: ["Nursing journals", "Reference section", "Digital catalogue"],
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&auto=format&fit=crop",
    alt: "Rows of bookshelves and reading tables in the institute library",
  },
  {
    icon: Users2,
    title: "Student Support",
    body: "Dedicated counselling and mentorship support to help students navigate academic and personal challenges.",
    points: ["Academic mentorship", "Counselling services", "Peer support groups"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80&auto=format&fit=crop",
    alt: "Students in conversation with a mentor on campus",
  },
  {
    icon: HeartPulse,
    title: "Clinical Exposure",
    body: "Structured postings at partner hospitals give students real-world exposure under experienced supervision.",
    points: ["Hospital postings", "Supervised rotations", "Case documentation practice"],
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1200&q=80&auto=format&fit=crop",
    alt: "Nursing student on a supervised hospital ward rotation",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="bg-ink py-24">
        <div className="container-custom">
          <p className="mb-4 text-sm text-[#C9A468]">Campus &amp; learning</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-white sm:text-5xl">
            Facilities built for hands-on healthcare training
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">
            Every space on campus is designed with one goal — to move
            students from theory to confident clinical practice.
          </p>
        </div>
      </section>

      {/* Facility rows */}
      <section className="bg-canvas py-20">
        <div className="container-custom space-y-24">
          {facilities.map((facility, i) => (
            <div
              key={facility.title}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-primary-50">
                <Image
                  src={facility.image}
                  alt={facility.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#A9793C]/30 text-[#A9793C]">
                  <facility.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h2 className="font-display text-2xl text-ink">
                  {facility.title}
                </h2>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-light/80">
                  {facility.body}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-primary-100 pt-6">
                  {facility.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-baseline gap-3 text-[15px] text-ink-light/80"
                    >
                      <span className="h-1 w-1 shrink-0 translate-y-[-2px] rounded-full bg-[#A9793C]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
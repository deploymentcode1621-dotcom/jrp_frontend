import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { getFacilities } from "@/lib/api";

export const metadata: Metadata = {
  title: "Facilities | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Explore the campus facilities at Swami Vivekanand Institute of Nursing, Latur — skills labs, science labs, smart classrooms, library, and clinical exposure infrastructure.",
};

export default async function FacilitiesPage() {
  const facilities = await getFacilities();

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            Campus & Learning
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            Facilities built for hands-on healthcare training
          </h1>
          <p className="mt-5 max-w-xl text-[15px] text-white/70">
            Every space on campus is designed with one goal — to move
            students from theory to confident clinical practice.
          </p>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom space-y-16">
          {facilities.map((facility, i) => {
            const Icon = (Icons[facility.icon as keyof typeof Icons] ??
              Icons.Building2) as Icons.LucideIcon;
            return (
              <div
                key={facility.id}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-24 w-24 text-primary-400/50" />
                  </div>
                </div>
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-display text-2xl text-ink">{facility.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-light/80">
                    {facility.description}
                  </p>
                  {facility.features && (
                    <ul className="mt-5 space-y-2">
                      {facility.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-ink-light/75"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

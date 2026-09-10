import type { Metadata } from "next";
import { getGallery } from "@/lib/api";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Swami Vivekanand Institute of Nursing, Latur",
  description:
    "Browse photos from campus, student activities, events, and infrastructure at Swami Vivekanand Institute of Nursing, Latur.",
};

export default async function GalleryPage() {
  const images = await getGallery();

  return (
    <div className="pt-28">
      <section className="bg-ink py-20">
        <div className="container-custom">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-secondary-300">
            Gallery
          </span>
          <h1 className="max-w-2xl font-display text-4xl text-white sm:text-5xl">
            A glimpse into campus life
          </h1>
        </div>
      </section>

      <section className="bg-canvas py-20">
        <div className="container-custom">
          <GalleryClient images={images} />
        </div>
      </section>
    </div>
  );
}

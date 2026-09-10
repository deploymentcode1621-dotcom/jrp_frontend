"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";
import Modal from "@/components/common/Modal";
import EmptyState from "@/components/common/EmptyState";

const categories = [
  "All",
  "Campus",
  "Students",
  "Events",
  "Activities",
  "Infrastructure",
] as const;

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category
                ? "border-primary bg-primary text-white"
                : "border-primary-100 bg-white text-ink-light hover:bg-primary-50"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No images in this category yet"
          description="Try selecting a different category."
        />
      ) : (
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
          {filtered.map((image, i) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              onClick={() => setSelected(image)}
              className="group relative mb-4 block w-full overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <Expand className="h-5 w-5 text-white" />
              </div>
            </motion.button>
          ))}
        </div>
      )}

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <Image
            src={selected.src}
            alt={selected.alt}
            width={1200}
            height={900}
            className="max-h-[80vh] w-auto rounded-lg object-contain"
          />
        )}
      </Modal>
    </div>
  );
}

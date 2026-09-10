"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getNotices } from "@/lib/api";
import { Notice } from "@/types";

export default function NoticeTicker() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getNotices().then(setNotices);
  }, []);

  useEffect(() => {
    if (notices.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notices.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [notices.length]);

  if (notices.length === 0) return null;

  return (
    <div className="relative z-20 -mt-6 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-stretch gap-3 rounded-2xl border border-primary-100 bg-white px-5 py-4 shadow-card sm:flex-row sm:items-center sm:gap-6">
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary text-white px-4 py-1.5 text-xs font-semibold tracking-wide">
            LATEST NOTICE
          </span>

          <div className="relative h-6 flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={notices[index].id}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 truncate text-sm text-ink-light"
              >
                <span className="font-medium text-ink">{notices[index].title}</span>
                <span className="hidden sm:inline"> — {notices[index].description}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <Link
            href="/admissions"
            className="flex shrink-0 items-center gap-1 text-sm font-medium text-secondary-600 hover:text-secondary-700"
          >
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

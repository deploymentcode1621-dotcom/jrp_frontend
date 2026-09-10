"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      <button
        aria-label="Previous page"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-full border border-primary-100 p-2 text-ink disabled:opacity-30 hover:bg-primary-50"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "h-9 w-9 rounded-full text-sm font-medium transition-colors",
            page === currentPage
              ? "bg-primary text-white"
              : "text-ink-light hover:bg-primary-50"
          )}
        >
          {page}
        </button>
      ))}
      <button
        aria-label="Next page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-full border border-primary-100 p-2 text-ink disabled:opacity-30 hover:bg-primary-50"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

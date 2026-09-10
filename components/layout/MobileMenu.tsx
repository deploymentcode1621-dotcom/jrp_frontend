"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, Mail } from "lucide-react";
import Button from "@/components/common/Button";

interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-ink-dark/60 lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 z-[95] flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-primary-100 px-5 py-5">
              <span className="font-display text-lg text-ink">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full p-2 hover:bg-primary-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-5 py-4">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="border-b border-primary-50">
                    <button
                      onClick={() => setAboutExpanded(!aboutExpanded)}
                      className="flex w-full items-center justify-between py-4 text-left text-[15px] font-medium text-ink"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          aboutExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {aboutExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pb-2"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2.5 text-sm text-ink-light hover:bg-primary-50"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block border-b border-primary-50 py-4 text-[15px] font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="space-y-4 border-t border-primary-100 px-5 py-5">
              <div className="space-y-2 text-sm text-ink-light">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" /> info@svinlatur.edu.in
                </span>
              </div>
              <Button href="/admissions" className="w-full" withArrow>
                Apply Now
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

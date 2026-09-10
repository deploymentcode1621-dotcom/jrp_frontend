"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Mail, MapPin, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/common/Button";
import MobileMenu from "@/components/layout/MobileMenu";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    dropdown: [
      { label: "Jeevan Rekha Pratishthan", href: "/about/jeevan-rekha-pratishthan" },
      { label: "Swami Vivekanand Institute of Nursing", href: "/about/swami-vivekanand" },
    ],
  },
  { label: "Courses", href: "/courses" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Top info bar */}
      <div
        className={cn(
          "hidden overflow-hidden bg-ink text-white/85 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        )}
      >
        <div className="container-custom flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" /> +91 98765 43210
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" /> info@svinlatur.edu.in
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="rounded-full bg-secondary/20 px-3 py-0.5 font-medium text-secondary-200">
              Admissions Open
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Latur, Maharashtra
            </span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-primary-100/60 bg-white/95 shadow-card backdrop-blur-md"
            : "border-transparent bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="container-custom flex items-center justify-between transition-all duration-300">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 transition-all duration-300",
              scrolled ? "py-3" : "py-5"
            )}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl overflow-hidden bg-white">
  <Image
    src="/logo.png"
    alt="Swami Vivekanand Institute of Paramedical logo"
    width={44}
    height={44}
    className="h-full w-full object-contain"
  />
</div>
            <div className="leading-tight">
              <p className="font-display text-[15px] font-semibold text-ink">
                Swami Vivekanand
              </p>
              <p className="text-[11px] tracking-wide text-ink-light/70">
                Institute of Nursing, Latur
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-light transition-colors hover:bg-primary-50 hover:text-primary">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full w-72 overflow-hidden rounded-2xl border border-primary-100 bg-white p-2 shadow-cardHover"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block rounded-xl px-4 py-3 text-sm text-ink-light transition-colors hover:bg-primary-50 hover:text-primary"
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
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-50 hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-ink-light"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button href="/admissions" size="sm" withArrow>
                Apply Now
              </Button>
            </div>
            <button
              className="rounded-full p-2 text-ink hover:bg-primary-50 lg:hidden"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}

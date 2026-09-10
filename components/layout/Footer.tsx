import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const quickLinks = [
  { label: "About Institute", href: "/about/swami-vivekanand" },
  { label: "Courses", href: "/courses" },
  { label: "Facilities", href: "/facilities" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admissions", href: "/admissions" },
];

const courseLinks = [
  { label: "GNM", href: "/courses/gnm-general-nursing-midwifery" },
  { label: "ANM", href: "/courses/anm-auxiliary-nurse-midwifery" },
  { label: "Post Basic B.Sc. Nursing", href: "/courses/post-basic-bsc-nursing" },
  { label: "Medical Lab Technology", href: "/courses/medical-lab-technology" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-custom grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-display font-semibold text-white">
              SV
            </div>
            <span className="font-display text-base text-white">
              Swami Vivekanand Institute of Nursing
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            A unit of Jeevan Rekha Pratishthan, dedicated to building confident,
            compassionate, and professionally prepared nurses in Latur, Maharashtra.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm tracking-wide text-white">
            Courses
          </h4>
          <ul className="space-y-3 text-sm">
            {courseLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-secondary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm tracking-wide text-white">
            Contact
          </h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              Jeevan Rekha Pratishthan Campus, Latur, Maharashtra 413512
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-secondary" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-secondary" /> info@svinlatur.edu.in
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Swami Vivekanand Institute of Nursing,
            Jeevan Rekha Pratishthan. All rights reserved.
          </p>
          <p>Latur, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
}

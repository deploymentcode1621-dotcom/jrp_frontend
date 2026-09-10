# Swami Vivekanand Institute of Nursing — Website Frontend

Premium, production-ready frontend for **Jeevan Rekha Pratishthan's Swami Vivekanand Institute of Nursing**, Latur, Maharashtra.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. The backend is not yet connected — the app runs entirely on local mock data, structured so a Node.js + Express + MySQL backend can be wired in later without any UI changes.

## Tech Stack

- Next.js 14 (App Router, Server Components by default)
- TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project Structure

```
app/                     Routes (App Router)
  about/
    jeevan-rekha-pratishthan/
    swami-vivekanand/
  courses/               Listing + /courses/[slug]
  facilities/
  events/                Listing + /events/[id]
  gallery/               Filterable masonry gallery + lightbox
  contact/               Contact form (mock submission)
  admissions/            Admission status, process, FAQ
  layout.tsx             Root layout, fonts, metadata
  page.tsx               Home page
  globals.css

components/
  layout/                Navbar, MobileMenu, Footer
  home/                  Hero, NoticeTicker, AboutPreview, CoursesPreview,
                         TrusteeSection, FacilitiesPreview, EventsPreview,
                         GalleryPreview, TieUpMarquee, AdmissionCTA
  common/                Button, SectionHeading, Loader, EmptyState, Modal, Pagination

lib/
  mock-data.ts           All mock content (notices, courses, facilities, etc.)
  api.ts                 Data-fetching layer — swap to live API via env flag
  utils.ts                cn() class helper, date formatting

types/
  index.ts               Shared TypeScript interfaces

public/
  images/                Drop hero-poster.jpg here
  videos/                Drop hero-loop.mp4 here
```

## Connecting the Real Backend Later

1. Set `NEXT_PUBLIC_USE_LIVE_API=true` and `NEXT_PUBLIC_API_BASE_URL` in `.env.local`.
2. In `lib/api.ts`, each function already has its live `fetch()` branch written and its future endpoint documented in a comment (e.g. `GET /api/notices`, `POST /api/enquiries`). No component code needs to change — every component calls these functions, never `lib/mock-data.ts` directly.
3. Point `NEXT_PUBLIC_API_BASE_URL` at your Express server and remove the mock delay branch once verified.

## Before Deploying

- Add a real hero video at `public/videos/hero-loop.mp4` and a poster image at `public/images/hero-poster.jpg` (see the README files in those folders for specs).
- Replace placeholder phone/email/address in `Navbar.tsx`, `Footer.tsx`, and `app/contact/page.tsx` with real contact details.
- Replace Unsplash placeholder images (events, gallery, trustees) with real institute photography once available.
- Confirm actual healthcare tie-up partners before enabling `TieUpMarquee` in production — it currently uses illustrative placeholder names only, as required.

## Design Notes

- Palette: Primary `#1769AA`, Secondary `#20A4C9`, Dark `#102A43`, Background `#F7FBFF` — defined as Tailwind tokens in `tailwind.config.ts` and CSS variables in `globals.css`.
- Typography: Fraunces (display/headings) + Inter (body/UI).
- Motion kept subtle and purposeful — entrance animation on hero, scroll-reveal on section content, hover states on cards — never animating every element.

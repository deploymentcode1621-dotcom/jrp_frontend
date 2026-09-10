/**
 * API layer — thin abstraction over data fetching.
 *
 * While the Node.js + Express + MySQL backend is not yet connected, every
 * function here resolves from local mock data (lib/mock-data.ts) instead.
 *
 * Once the backend is live:
 *   1. Set NEXT_PUBLIC_USE_LIVE_API=true and NEXT_PUBLIC_API_BASE_URL in .env
 *   2. Replace the mock branch inside each function with a fetch() call to
 *      the matching endpoint (already noted in each function's comment).
 *   3. No component code needs to change — every component calls these
 *      functions, never mock-data.ts directly.
 */

import {
  Notice,
  Course,
  Facility,
  EventItem,
  GalleryImage,
  Trustee,
  TieUp,
  EnquiryPayload,
  AdmissionStatus,
} from "@/types";
import {
  notices,
  courses,
  facilities,
  events,
  galleryImages,
  trustees,
  tieUps,
  admissionStatus,
} from "@/lib/mock-data";

const USE_LIVE_API = process.env.NEXT_PUBLIC_USE_LIVE_API === "true";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(value), 0));
}

/** Future endpoint: GET /api/notices */
export async function getNotices(): Promise<Notice[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/notices`);
    return res.json();
  }
  return delay(notices);
}

/** Future endpoint: GET /api/courses */
export async function getCourses(): Promise<Course[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/courses`);
    return res.json();
  }
  return delay(courses);
}

/** Future endpoint: GET /api/courses/:slug */
export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/courses/${slug}`);
    return res.json();
  }
  return delay(courses.find((c) => c.slug === slug));
}

/** Future endpoint: GET /api/facilities */
export async function getFacilities(): Promise<Facility[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/facilities`);
    return res.json();
  }
  return delay(facilities);
}

/** Future endpoint: GET /api/events */
export async function getEvents(): Promise<EventItem[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/events`);
    return res.json();
  }
  return delay(events);
}

/** Future endpoint: GET /api/events/:id */
export async function getEventById(id: string): Promise<EventItem | undefined> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/events/${id}`);
    return res.json();
  }
  return delay(events.find((e) => e.id === id));
}

/** Future endpoint: GET /api/gallery */
export async function getGallery(): Promise<GalleryImage[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/gallery`);
    return res.json();
  }
  return delay(galleryImages);
}

/** Future endpoint: GET /api/trustees */
export async function getTrustees(): Promise<Trustee[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/trustees`);
    return res.json();
  }
  return delay(trustees);
}

/** Future endpoint: GET /api/tie-ups */
export async function getTieUps(): Promise<TieUp[]> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/tie-ups`);
    return res.json();
  }
  return delay(tieUps);
}

/** Future endpoint: GET /api/admission/status */
export async function getAdmissionStatus(): Promise<AdmissionStatus> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/admission/status`);
    return res.json();
  }
  return delay(admissionStatus);
}

/** Future endpoint: POST /api/enquiries */
export async function submitEnquiry(
  payload: EnquiryPayload
): Promise<{ success: boolean; message: string }> {
  if (USE_LIVE_API) {
    const res = await fetch(`${API_BASE_URL}/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.json();
  }
  // Local mock submission — logs and resolves as successful.
  // eslint-disable-next-line no-console
  console.log("Mock enquiry submitted:", payload);
  return delay({
    success: true,
    message: "Thank you. Your enquiry has been received — we'll be in touch shortly.",
  });
}

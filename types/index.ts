export interface Notice {
  id: string;
  title: string;
  description: string;
  date: string;
  isNew?: boolean;
}

export interface Course {
  id: string;
  slug: string;
  category: "Nursing Programs" | "Allied Health";
  title: string;
  shortDescription: string;
  duration: string;
  eligibility: string;
  intake?: string;
  overview?: string;
  highlights?: string[];
}

export interface Facility {
  id: string;
  icon: string;
  title: string;
  description: string;
  image?: string;
  features?: string[];
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  category: "Campus" | "Students" | "Events" | "Activities" | "Infrastructure";
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

export interface Trustee {
  id: string;
  name: string;
  role: string;
  message: string;
  image: string;
}

export interface TieUp {
  id: string;
  name: string;
}

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface AdmissionStatus {
  session: string;
  isOpen: boolean;
  lastDate: string;
}

import {
  Notice,
  Course,
  Facility,
  EventItem,
  GalleryImage,
  Trustee,
  TieUp,
  AdmissionStatus,
} from "@/types";

export const notices: Notice[] = [
  {
    id: "n1",
    title: "Admissions Open — 2026-27 Academic Session",
    description:
      "Applications are now being accepted for GNM and ANM nursing programmes. Limited seats available.",
    date: "2026-09-01",
    isNew: true,
  },
  {
    id: "n2",
    title: "Orientation Programme for New Students",
    description:
      "First-year orientation will be held in the main auditorium, introducing students to faculty and campus life.",
    date: "2026-08-20",
  },
  {
    id: "n3",
    title: "Circular: Revised Academic Calendar",
    description:
      "The academic calendar for the upcoming term has been revised. Students should check the notice board for details.",
    date: "2026-08-12",
  },
  {
    id: "n4",
    title: "Annual Clinical Skills Workshop",
    description:
      "A hands-on workshop covering essential clinical procedures will be conducted for second and third-year students.",
    date: "2026-07-29",
  },
];

export const courses: Course[] = [
  {
    id: "c1",
    slug: "gnm-general-nursing-midwifery",
    category: "Nursing Programs",
    title: "General Nursing & Midwifery (GNM)",
    shortDescription:
      "A comprehensive diploma preparing students for professional nursing practice across clinical settings.",
    duration: "3.5 Years",
    eligibility: "10+2 with min. 40% (Science preferred)",
    intake: "60 Seats",
    overview:
      "The GNM programme builds clinical competence and compassionate care skills through classroom instruction, laboratory practice, and supervised hospital postings.",
    highlights: [
      "Supervised clinical postings from Year 1",
      "Simulation-based skills lab training",
      "Midwifery and community health rotations",
      "Registered under Maharashtra Nursing Council",
    ],
  },
  {
    id: "c2",
    slug: "anm-auxiliary-nurse-midwifery",
    category: "Nursing Programs",
    title: "Auxiliary Nurse Midwifery (ANM)",
    shortDescription:
      "A foundational nursing diploma focused on maternal, child health, and community-level care.",
    duration: "2 Years",
    eligibility: "10+2 (any stream), min. 35%",
    intake: "40 Seats",
    overview:
      "ANM students are trained to deliver essential health services at the community level, with strong emphasis on maternal and child health.",
    highlights: [
      "Community health centre placements",
      "Maternal and child health focus",
      "Practical midwifery training",
      "Pathway to further nursing studies",
    ],
  },
  {
    id: "c3",
    slug: "post-basic-bsc-nursing",
    category: "Nursing Programs",
    title: "Post Basic B.Sc. Nursing",
    shortDescription:
      "An advanced degree programme for diploma-holding nurses seeking academic and clinical progression.",
    duration: "2 Years",
    eligibility: "GNM with registered nursing license",
    intake: "30 Seats",
    overview:
      "Designed for practicing nurses, this programme deepens clinical reasoning, leadership, and research capability.",
    highlights: [
      "Advanced clinical specialties",
      "Nursing research foundations",
      "Leadership and management training",
      "Bridge to higher nursing education",
    ],
  },
  {
    id: "c4",
    slug: "medical-lab-technology",
    category: "Allied Health",
    title: "Diploma in Medical Laboratory Technology",
    shortDescription:
      "Hands-on training in diagnostic laboratory techniques for a career in pathology and diagnostics.",
    duration: "2 Years",
    eligibility: "10+2 with Science, min. 40%",
    intake: "30 Seats",
    overview:
      "Students gain proficiency in laboratory diagnostics, sample handling, and equipment used in modern pathology labs.",
    highlights: [
      "Hospital and diagnostic lab internships",
      "Hands-on instrumentation training",
      "Quality control practices",
      "Pathway into diagnostic careers",
    ],
  },
  {
    id: "c5",
    slug: "operation-theatre-technology",
    category: "Allied Health",
    title: "Diploma in Operation Theatre Technology",
    shortDescription:
      "Specialised training in operation theatre protocols, sterilisation, and surgical assistance.",
    duration: "2 Years",
    eligibility: "10+2 with Science, min. 40%",
    intake: "20 Seats",
    overview:
      "This programme prepares technicians to support surgical teams with precision, sterility, and patient safety in mind.",
    highlights: [
      "Surgical asepsis and sterilisation",
      "Operation theatre equipment handling",
      "Supervised OT postings",
      "Emergency response training",
    ],
  },
];

export const facilities: Facility[] = [
  {
    id: "f1",
    icon: "Stethoscope",
    title: "Nursing Skills Lab",
    description:
      "A fully equipped simulation lab where students practice clinical procedures on mannequins before real patient contact.",
    features: ["Simulation mannequins", "Vital signs stations", "Wound care practice bays"],
  },
  {
    id: "f2",
    icon: "Microscope",
    title: "Science & Anatomy Lab",
    description:
      "Dedicated laboratories for anatomy, physiology, and biochemistry with anatomical models and specimens.",
    features: ["Anatomical models", "Microscopy stations", "Specimen library"],
  },
  {
    id: "f3",
    icon: "MonitorPlay",
    title: "Smart Classrooms",
    description:
      "Digitally equipped classrooms with audio-visual aids for interactive, modern teaching methods.",
    features: ["Projection systems", "Digital whiteboards", "Recorded lecture access"],
  },
  {
    id: "f4",
    icon: "BookOpen",
    title: "Library",
    description:
      "A well-stocked library with nursing textbooks, journals, and a quiet reading environment for focused study.",
    features: ["Nursing journals", "Reference section", "Digital catalogue"],
  },
  {
    id: "f5",
    icon: "Users",
    title: "Student Support",
    description:
      "Dedicated counselling and mentorship support to help students navigate academic and personal challenges.",
    features: ["Academic mentorship", "Counselling services", "Peer support groups"],
  },
  {
    id: "f6",
    icon: "HeartPulse",
    title: "Clinical Exposure",
    description:
      "Structured postings at partner hospitals give students real-world exposure under experienced supervision.",
    features: ["Hospital postings", "Supervised rotations", "Case documentation practice"],
  },
];

export const events: EventItem[] = [
  {
    id: "e1",
    title: "Nightingale Pledge Ceremony",
    description:
      "First-year students took the Nightingale Pledge, marking their formal entry into the nursing profession.",
    date: "2026-08-18",
    category: "Ceremony",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "e2",
    title: "Inter-College Clinical Skills Competition",
    description:
      "Students competed in a state-level clinical skills demonstration, showcasing precision and patient care technique.",
    date: "2026-07-05",
    category: "Competition",
    image:
      "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "e3",
    title: "Community Health Camp",
    description:
      "Students and faculty organised a free health check-up camp for residents of nearby villages around Latur.",
    date: "2026-06-14",
    category: "Outreach",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    category: "Campus",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    alt: "Institute campus building exterior",
    size: "large",
  },
  {
    id: "g2",
    category: "Students",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    alt: "Nursing students in a practical session",
    size: "medium",
  },
  {
    id: "g3",
    category: "Events",
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop",
    alt: "Ceremony at the institute",
    size: "medium",
  },
  {
    id: "g4",
    category: "Activities",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    alt: "Students participating in an activity",
    size: "small",
  },
  {
    id: "g5",
    category: "Infrastructure",
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    alt: "Skills lab infrastructure",
    size: "medium",
  },
  {
    id: "g6",
    category: "Students",
    src: "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=1000&auto=format&fit=crop",
    alt: "Students studying in the library",
    size: "small",
  },
  {
    id: "g7",
    category: "Campus",
    src: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1000&auto=format&fit=crop",
    alt: "Campus grounds",
    size: "medium",
  },
  {
    id: "g8",
    category: "Events",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    alt: "Health camp event",
    size: "large",
  },
];

export const trustees: Trustee[] = [
  {
    id: "t1",
    name: "Yadav Sir",
    role: "Trustee",
    message:
      "Our mission has always been to shape nurses who lead with both skill and compassion — that vision guides every decision we make here.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "t2",
    name: "Krishna Sir",
    role: "Trustee",
    message:
      "We are committed to building an institution where discipline, care, and academic excellence work hand in hand for every student.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=800&auto=format&fit=crop",
  },
];

export const tieUps: TieUp[] = [
  { id: "tu1", name: "Apollo Hospitals" },
  { id: "tu2", name: "Ruby Hall Clinic" },
  { id: "tu3", name: "Sahyadri Hospitals" },
  { id: "tu4", name: "KEM Hospital" },
  { id: "tu5", name: "Noble Hospitals" },
  { id: "tu6", name: "Care Hospitals" },
];

export const admissionStatus: AdmissionStatus = {
  session: "2026-27",
  isOpen: true,
  lastDate: "2026-10-31",
};

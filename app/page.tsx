import Hero from "@/components/home/Hero";
import NoticeTicker from "@/components/home/NoticeTicker";
import AboutPreview from "@/components/home/AboutPreview";
import CoursesPreview from "@/components/home/CoursesPreview";
import TrusteeSection from "@/components/home/TrusteeSection";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import EventsPreview from "@/components/home/EventsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import TieUpMarquee from "@/components/home/TieUpMarquee";
import AdmissionCTA from "@/components/home/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <AboutPreview />
      <CoursesPreview />
      <TrusteeSection />
      <FacilitiesPreview />
      <EventsPreview />
      <GalleryPreview />
      <TieUpMarquee />
      <AdmissionCTA />
    </>
  );
}

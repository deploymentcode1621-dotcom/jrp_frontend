import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Tag } from "lucide-react";
import { getEventById, getEvents } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import Button from "@/components/common/Button";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ id: event.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = await getEventById(params.id);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | Swami Vivekanand Institute of Nursing`,
    description: event.description,
  };
}

export default async function EventDetailPage({ params }: Props) {
  const event = await getEventById(params.id);
  if (!event) notFound();

  return (
    <div className="pt-28">
      <div className="relative h-[45vh] w-full overflow-hidden">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
        <div className="container-custom absolute bottom-8 left-1/2 -translate-x-1/2">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
            <Tag className="h-3.5 w-3.5" /> {event.category}
          </span>
          <h1 className="max-w-2xl font-display text-3xl text-white sm:text-4xl">
            {event.title}
          </h1>
        </div>
      </div>

      <section className="bg-canvas py-16">
        <div className="container-custom max-w-2xl">
          <div className="mb-6 flex items-center gap-2 text-sm text-ink-light/70">
            <CalendarDays className="h-4 w-4 text-secondary-500" />
            {formatDate(event.date)}
          </div>
          <p className="text-[15px] leading-relaxed text-ink-light/80">
            {event.description}
          </p>
          <div className="mt-10">
            <Button href="/events" variant="ghost" withArrow>
              Back to all events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

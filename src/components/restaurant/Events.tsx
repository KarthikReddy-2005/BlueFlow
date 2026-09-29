import Image from "next/image";
import { isValidExternalUrl } from "@/lib/url";

interface EventsProps {
  events?: {
    enabled: boolean;
    heading: string;
    description: string;
    image?: string;
    url?: string;
  };
}

export default function Events({ events }: EventsProps) {
  if (!events || !events.enabled) {
    return null;
  }

  return (
    <section id="events" className="bg-(--brand-background) px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-24">
        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
            Gather Together
          </p>

          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            {events.heading}
          </h2>

          <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
            {events.description}
          </p>

          {isValidExternalUrl(events.url) && (
            <a
              href={events.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex border-b border-black pb-1 text-sm font-medium"
            >
              Plan Your Event →
            </a>
          )}
        </div>

        {/* Image */}
        {events.image && (
          <div className="relative aspect-4/5 overflow-hidden bg-black/5">
            <Image
              src={events.image}
              alt={events.heading}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}

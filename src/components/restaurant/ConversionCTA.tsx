import Image from "next/image";
import { isValidExternalUrl } from "@/lib/url";
import type { RestaurantAction } from "@/data/restaurants/types";

interface ConversionCTAProps {
  name: string;
  action?: RestaurantAction;
  alternatives?: RestaurantAction[];
  image?: string;
  heading?: string;
  description?: string;
}

export default function ConversionCTA({
  name,
  action,
  alternatives = [],
  image,
  heading = "Plan your next visit.",
  description = "Connect directly with the restaurant to make your plans.",
}: ConversionCTAProps) {
  if (!action || !isValidExternalUrl(action.url)) {
    return null;
  }

  return (
    <section
      className={`relative min-h-[55svh] overflow-hidden text-white ${image ? "bg-black" : "bg-(--brand-primary)"}`}
    >
      {/* Background */}
      {image && (
        <Image
          src={image}
          alt={`Dining at ${name}`}
          fill
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Overlay */}
      {image && <div className="absolute inset-0 bg-black/50" />}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[55svh] max-w-7xl items-center justify-center px-5 py-20 text-center md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--brand-accent)">
            {action.label}
          </p>

          <h2 className="font-display whitespace-pre-line text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            {heading}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
            {description}
          </p>

          <a
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            {action.label}
          </a>
          {alternatives.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              {alternatives.filter((service) => isValidExternalUrl(service.url)).map((service) => (
                <a key={service.label} href={service.url} target="_blank" rel="noopener noreferrer" className="border-b border-white/50 pb-1 text-white/80 transition hover:text-white">
                  {service.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

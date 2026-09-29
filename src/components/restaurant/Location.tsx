import type { Address, BusinessHours } from "@/data/restaurants/types";
import { isValidExternalUrl } from "@/lib/url";

interface LocationProps {
  address: Address;
  hours: BusinessHours[];
  phone: string;
}

export default function Location({ address, hours, phone }: LocationProps) {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const fullAddress = [
    address.street,
    address.city,
    address.state,
    address.zipCode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <section
      id="location"
      className="bg-(--brand-primary) px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/50">
            Visit Us
          </p>

          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            Come find your
            <br />
            place at the table.
          </h2>
        </div>

        <div className="mt-14 grid gap-14 border-t border-white/15 pt-12 md:grid-cols-2 md:gap-20 md:pt-16">
          {/* Address */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">
              Location
            </p>

            <address className="mt-5 not-italic">
              <p className="max-w-md text-2xl leading-9 md:text-3xl md:leading-10">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zipCode}
              </p>
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              {isValidExternalUrl(address.mapsUrl) && (
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center bg-white px-7 py-4 text-base font-bold text-(--brand-primary) transition-colors hover:bg-(--brand-background) focus-visible:bg-(--brand-background) sm:text-lg"
                >
                  Get Directions →
                </a>
              )}

              <a
                href={phoneHref}
                className="inline-flex border-b border-white/40 pb-1 text-sm text-white/70 transition hover:border-white hover:text-white"
              >
                {phone}
              </a>
            </div>

            {address.parkingNote && (
              <div className="mt-10 border-l border-white/20 pl-5">
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  Parking
                </p>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/60">
                  {address.parkingNote}
                </p>
              </div>
            )}

            <p className="sr-only">{fullAddress}</p>
          </div>

          {/* Hours */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">
              Hours
            </p>

            <div className="mt-5">
              {hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-start justify-between gap-6 border-b border-white/10 py-4 first:pt-0"
                >
                  <span className="text-sm text-white/65">{item.day}</span>

                  <span className="text-right text-sm font-medium">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-5 text-white/65">
              Holiday and special-event hours may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

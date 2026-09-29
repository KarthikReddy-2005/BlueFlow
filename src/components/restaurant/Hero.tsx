import { isValidExternalUrl } from "@/lib/url";
import Image from "next/image";
import type { RestaurantAction } from "@/data/restaurants/types";

interface HeroProps {
  name: string;
  tagline: string;
  cuisine: string;
  locationLabel?: string;
  hasMenu: boolean;
  heroPosition?: string;
  heroAlign?: "left" | "center" | "right";
  heroImage?: string;
  primaryAction?: RestaurantAction;
}

export default function Hero({
  name,
  tagline,
  cuisine,
  locationLabel,
  hasMenu,
  heroPosition,
  heroAlign = "left",
  heroImage,
  primaryAction,
}: HeroProps) {
  const initial = Array.from(name.trim())[0]?.toUpperCase() ?? "";
  const alignClass = heroAlign === "center" ? "mx-auto text-center" : heroAlign === "right" ? "ml-auto text-right" : "text-left";
  const actionsClass = heroAlign === "center" ? "justify-center" : heroAlign === "right" ? "justify-end" : "";
  const overlayClass = heroAlign === "right" ? "bg-gradient-to-l from-black/75 via-black/45 to-black/20" : heroAlign === "center" ? "bg-black/45" : "bg-gradient-to-r from-black/75 via-black/45 to-black/20";

  return (
    <section id="top" className="relative min-h-[82svh] overflow-hidden bg-(--brand-primary) text-white">
      {/* Background */}
      {heroImage ? (
        <Image
          src={heroImage}
          alt={`${name} restaurant`}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: heroPosition ?? "center" }}
          sizes="100vw"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_80%_60%,color-mix(in_srgb,var(--brand-secondary)_35%,transparent),transparent_52%)]"
        >
          <span className="absolute -right-10 top-1/2 -translate-y-1/2 select-none font-serif text-[min(66vw,54rem)] font-bold leading-none text-white/[0.045]">
            {initial}
          </span>
          {locationLabel && (
            <div className="absolute bottom-10 right-8 hidden rotate-[-8deg] border-2 border-(--brand-accent)/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-(--brand-accent)/80 lg:block">
              {locationLabel}
            </div>
          )}
        </div>
      )}

      {/* Dark overlay */}
      {heroImage && <div className={`absolute inset-0 ${overlayClass}`} />}

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl items-end px-5 pb-20 pt-32 md:items-center md:px-8 md:py-28">
        <div className={`max-w-3xl ${alignClass}`}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-(--brand-accent) md:text-sm">
            {cuisine}
          </p>

          <h1 className="font-display max-w-4xl text-5xl break-words font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl lg:text-[7rem]">
            {name}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-8">
            {tagline}
          </p>

          <div className={`mt-8 flex flex-wrap gap-3 ${actionsClass}`}>
            {primaryAction && isValidExternalUrl(primaryAction.url) && (
              <a
                href={primaryAction.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center bg-(--brand-secondary) px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:brightness-95"
              >
                {primaryAction.label}
              </a>
            )}

            {hasMenu && <a
              href="#menu"
              className="inline-flex min-h-12 items-center justify-center border border-white/60 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
            >
              View Menu
            </a>}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 right-8 z-10 hidden text-xs uppercase tracking-[0.2em] text-white/60 md:block">
        Scroll to explore ↓
      </div>
    </section>
  );
}

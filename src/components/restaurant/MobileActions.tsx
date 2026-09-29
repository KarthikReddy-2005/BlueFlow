import { isValidExternalUrl } from "@/lib/url";
import type { RestaurantAction } from "@/data/restaurants/types";

interface MobileActionsProps {
  phone: string;
  mapsUrl?: string;
  primaryAction?: RestaurantAction;
}

export default function MobileActions({
  phone,
  mapsUrl,
  primaryAction,
}: MobileActionsProps) {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full border-t border-black/10 bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={phoneHref}
        className="flex min-h-16 flex-1 items-center justify-center border-r border-black/10 text-xs font-semibold uppercase tracking-wide"
      >
        Call
      </a>

      {isValidExternalUrl(mapsUrl) ? (
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 flex-1 items-center justify-center bg-(--brand-secondary) px-2 text-sm font-bold uppercase tracking-wide text-white"
        >
          Directions
        </a>
      ) : null}

      {primaryAction && isValidExternalUrl(primaryAction.url) ? (
        <a
          href={primaryAction.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-16 flex-1 items-center justify-center bg-(--brand-primary) text-xs font-semibold uppercase tracking-wide"
          style={{ color: "white" }}
        >
          {primaryAction.compactLabel ?? primaryAction.label}
        </a>
      ) : null}
    </div>
  );
}

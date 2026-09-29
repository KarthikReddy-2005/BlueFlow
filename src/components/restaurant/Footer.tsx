import { isValidExternalUrl } from "@/lib/url";

interface FooterProps {
  name: string;

  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };

  phone: string;

  reservationUrl?: string;
  orderingUrl?: string;

  instagram?: string;
  facebook?: string;
  tiktok?: string;
  sections: { label: string; href: string }[];
}

export default function Footer({
  name,
  address,
  phone,
  reservationUrl,
  orderingUrl,
  instagram,
  facebook,
  tiktok,
  sections,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;
  const hasVisitLinks = [reservationUrl, orderingUrl, instagram, facebook, tiktok].some(isValidExternalUrl);

  return (
    <footer className="bg-(--brand-primary) px-5 pb-[calc(6rem+env(safe-area-inset-bottom))] pt-16 text-white md:px-8 md:pb-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#top" className="text-2xl font-semibold tracking-[0.16em]">
              {name.toUpperCase()}
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              {address.street}
              <br />
              {address.city}, {address.state} {address.zipCode}
            </p>

            <a
              href={phoneHref}
              className="mt-4 inline-block text-sm text-white/60 transition hover:text-white"
            >
              {phone}
            </a>
          </div>

          {sections.length > 0 && <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">Explore</p>
            <nav className="mt-5 flex flex-col items-start gap-3">
              {sections.map((section) => (
                <a key={section.href} href={section.href} className="text-sm text-white/60 transition hover:text-white">
                  {section.label}
                </a>
              ))}
            </nav>
          </div>}

          {/* Actions */}
          {hasVisitLinks && <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              Visit
            </p>

            <div className="mt-5 flex flex-col items-start gap-3">
              {isValidExternalUrl(reservationUrl) && (
                <a
                  href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Reservations
                </a>
              )}

              {isValidExternalUrl(orderingUrl) && (
                <a
                  href={orderingUrl}
              target="_blank"
              rel="noopener noreferrer"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Order Online
                </a>
              )}

              {isValidExternalUrl(instagram) && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Instagram
                </a>
              )}

              {isValidExternalUrl(tiktok) && (
                <a href={tiktok} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 transition hover:text-white">TikTok</a>
              )}

              {isValidExternalUrl(facebook) && (
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>}
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {currentYear} {name}. All rights reserved.
          </p>
          <p>Developer by BlueFlow</p>
        </div>
      </div>
    </footer>
  );
}

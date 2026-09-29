import { isValidExternalUrl } from "@/lib/url";

interface ContactProps {
  name: string;
  phone: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}

export default function Contact({
  name,
  phone,
  email,
  instagram,
  facebook,
  tiktok,
}: ContactProps) {
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const hasSocialLinks =
    isValidExternalUrl(instagram) || isValidExternalUrl(facebook) || isValidExternalUrl(tiktok);

  return (
    <section
      id="contact"
      className="bg-(--brand-background) px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-20">
          {/* Heading */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
              Get In Touch
            </p>

            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              Questions before
              <br />
              you join us?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/60">
              Give us a call with questions about the menu, hours or your visit.
            </p>
          </div>

          {/* Contact information */}
          <div className="space-y-7">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/65">
                Call
              </p>

              <a
                href={phoneHref}
                className="mt-2 inline-block text-lg font-medium transition hover:opacity-60"
              >
                {phone}
              </a>
            </div>

            {email && (
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-black/65">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-2 inline-block text-lg font-medium transition hover:opacity-60"
                >
                  {email}
                </a>
              </div>
            )}

            {hasSocialLinks && (
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-black/65">
                  Follow
                </p>

                <div className="mt-3 flex gap-5">
                  {isValidExternalUrl(instagram) && (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-black pb-1 text-sm"
                    >
                      Instagram
                    </a>
                  )}

                  {isValidExternalUrl(tiktok) && (
                    <a href={tiktok} target="_blank" rel="noopener noreferrer" className="border-b border-black pb-1 text-sm">TikTok</a>
                  )}

                  {isValidExternalUrl(facebook) && (
                    <a
                      href={facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-black pb-1 text-sm"
                    >
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            )}

            <p className="text-xs text-black/65">{name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
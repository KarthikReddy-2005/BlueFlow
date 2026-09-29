"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { isValidExternalUrl } from "@/lib/url";
import type { RestaurantAction } from "@/data/restaurants/types";
interface NavbarProps {
  name: string;
  logo?: string;
  primaryAction?: RestaurantAction;
  sections: { label: string; href: string }[];
}

export default function Navbar({
  name,
  logo,
  primaryAction,
  sections,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const hasNavigation = sections.length > 0 || Boolean(primaryAction && isValidExternalUrl(primaryAction.url));

  return (
    <header className="sticky top-0 z-50 w-full bg-(--brand-primary) text-white shadow-[0_1px_0_rgba(255,255,255,0.12)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="relative z-50 font-display text-lg font-bold tracking-[0.02em] text-white md:text-2xl"
          style={{ color: "white" }}
        >
          {logo ? <Image src={logo} alt={name} width={144} height={48} className="h-12 w-auto object-contain" /> : name.toUpperCase()}
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="text-sm text-white/85 transition-colors hover:text-white hover:underline hover:underline-offset-4 focus-visible:text-white focus-visible:underline"
            >
              {section.label}
            </a>
          ))}

          {primaryAction && isValidExternalUrl(primaryAction.url) && (
            <a
              href={primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/70 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-(--brand-primary) focus-visible:bg-white focus-visible:text-(--brand-primary)"
            >
              {primaryAction.label}
            </a>
          )}
        </nav>

        {/* Mobile button */}
        {hasNavigation && <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="relative z-50 flex h-11 w-11 items-center justify-center text-white md:hidden"
        >
          <span className="flex flex-col gap-1.25">
            <span
              className={`block h-px w-6 !bg-white transition ${
                menuOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-px w-6 !bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-px w-6 !bg-white transition ${
                menuOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>}
      </div>

      {/* Mobile navigation */}
      {hasNavigation && menuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-40 overflow-y-auto bg-(--brand-primary) px-5 pt-28 pb-[env(safe-area-inset-bottom)] text-white md:hidden">
          <nav className="flex flex-col">
            {sections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                onClick={closeMenu}
                className="font-display border-b border-white/15 py-5 text-4xl"
              >
                {section.label}
              </a>
            ))}
          </nav>

          {primaryAction && isValidExternalUrl(primaryAction.url) && (
            <a
              href={primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-10 inline-flex bg-(--brand-secondary) px-7 py-4 text-sm font-semibold text-white"
            >
              {primaryAction.label}
            </a>
          )}
        </div>
      )}
    </header>
  );
}

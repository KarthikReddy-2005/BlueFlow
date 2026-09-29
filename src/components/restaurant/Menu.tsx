"use client";

import { useState } from "react";
import type { MenuCategory } from "@/data/restaurants/types";

interface MenuProps {
  categories: MenuCategory[];
  heading?: string;
  description?: string;
}

export default function Menu({
  categories,
  heading = "Explore the menu.",
  description = "Discover favorites from our kitchen.",
}: MenuProps) {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(categories[0]?.id ?? null);

  if (!categories.length) {
    return null;
  }

  return (
    <section
      id="menu"
      className="bg-(--brand-primary) px-5 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
            The Menu
          </p>

          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            {heading}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            {description}
          </p>
        </div>

        {/* Category navigation */}
        <nav
          aria-label="Menu categories"
          className="mt-10 flex gap-6 overflow-x-auto border-b border-white/15 pb-4 md:mt-14"
        >
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#menu-${category.id}`}
              onClick={() => setOpenCategoryId(category.id)}
              className={`shrink-0 text-sm font-medium transition hover:text-white ${openCategoryId === category.id ? "text-white underline underline-offset-8" : "text-white/75"}`}
            >
              {category.name}
            </a>
          ))}
        </nav>

        {/* Categories */}
        <div className="mt-6">
          {categories.map((category) => (
            <div
              key={category.id}
              id={`menu-${category.id}`}
              className="scroll-mt-24 border-b border-white/15 py-6 last:border-b-0 md:py-8"
            >
              <button
                type="button"
                aria-expanded={openCategoryId === category.id}
                aria-controls={openCategoryId === category.id ? `menu-items-${category.id}` : undefined}
                onClick={() => setOpenCategoryId(openCategoryId === category.id ? null : category.id)}
                className="flex w-full items-center justify-between gap-5 text-left"
              >
                <span className="text-2xl font-medium tracking-[-0.03em] md:text-3xl">{category.name}</span>
                <span aria-hidden="true" className="text-2xl">{openCategoryId === category.id ? "-" : "+"}</span>
              </button>
              {openCategoryId === category.id && <div id={`menu-items-${category.id}`} className="grid gap-8 pt-8 md:grid-cols-[1fr_2fr] md:gap-16">
                {/* Category title */}
                <div>

                  {category.description && (
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Items */}
                <div className="grid gap-x-12 gap-y-9 lg:grid-cols-2">
                  {category.items.map((item) => (
                    <article key={item.id}>
                      <div className="flex items-start justify-between gap-5">
                        <h4 className="text-lg font-medium">{item.name}</h4>

                        <span className="shrink-0 text-sm font-medium text-white/80">
                          {item.price}
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                          {item.description}
                        </p>
                      )}

                      {/* Dietary labels */}
                      {item.dietary && (
                        <div className="mt-3 flex flex-wrap gap-3">
                          {item.dietary.vegetarian && (
                            <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                              Vegetarian
                            </span>
                          )}

                          {item.dietary.vegan && (
                            <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                              Vegan
                            </span>
                          )}

                          {item.dietary.glutenFree && (
                            <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                              Gluten Free
                            </span>
                          )}

                          {item.dietary.spicy && (
                            <span className="text-[11px] uppercase tracking-[0.15em] text-white/70">
                              Spicy
                            </span>
                          )}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 max-w-2xl text-xs leading-5 text-white/70">
          Items and prices may change. Check online ordering for current
          availability and prices, and tell the team about any allergies or
          dietary requirements.
        </p>
      </div>
    </section>
  );
}

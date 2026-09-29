import Image from "next/image";
import type { Dish } from "@/data/restaurants/types";

interface FeaturedDishesProps {
  dishes: Dish[];
  heading?: string;
  description?: string;
  hasMenu: boolean;
}

export default function FeaturedDishes({
  dishes,
  heading = "A taste of what's waiting.",
  description = "A selection of guest favorites from our kitchen.",
  hasMenu,
}: FeaturedDishesProps) {
  if (!dishes.length) {
    return null;
  }

  return (
    <section
      id="featured"
      className="bg-(--brand-background) px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
            From Our Kitchen
          </p>

          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            {heading}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/60 md:text-lg">
            {description}
          </p>
        </div>

        {/* Dishes */}
        <div className={`grid gap-10 md:gap-6 ${dishes.length === 2 ? "md:max-w-4xl md:grid-cols-2" : "md:grid-cols-3"}`}>
          {dishes.map((dish) => (
            <article key={dish.id} className="group">
              {/* Image */}
              {dish.image && (
                <div className="relative aspect-4/5 overflow-hidden bg-black/5">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              {/* Dish information */}
              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium tracking-[-0.02em]">
                    {dish.name}
                  </h3>

                  <span className="shrink-0 text-sm font-medium">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-black/60">
                  {dish.description}
                </p>

                {dish.tags && dish.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dish.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wider text-black/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Menu CTA */}
        {hasMenu && <div className="mt-14 md:mt-16">
          <a
            href="#menu"
            className="inline-flex border-b border-black pb-1 text-sm font-medium"
          >
            Explore the full menu →
          </a>
        </div>}
      </div>
    </section>
  );
}

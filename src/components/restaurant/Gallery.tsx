import Image from "next/image";
import type { GalleryImage } from "@/data/restaurants/types";

interface GalleryProps {
  images: GalleryImage[];
  heading?: string;
  description?: string;
}

export default function Gallery({
  images,
  heading = "Come for dinner.\nStay for the evening.",
  description = "Good food, warm light and the kind of tables you don't want to leave.",
}: GalleryProps) {
  if (!images.length) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="bg-(--brand-background) px-5 pb-20 md:px-8 md:pb-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
            The Experience
          </p>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display whitespace-pre-line text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              {heading}
            </h2>

            <p className="max-w-sm text-sm leading-6 text-black/55">
              {description}
            </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
          {images.slice(0, 6).map((image, index) => {
            const layoutClasses = [
              "col-span-2 aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[620px]",

              "col-span-1 aspect-[3/4] md:col-span-5 md:aspect-[4/3]",

              "col-span-1 aspect-[3/4] md:col-span-5 md:aspect-[4/3]",

              "col-span-2 aspect-[16/10] md:col-span-4 md:aspect-[3/4]",

              "col-span-1 aspect-square md:col-span-4 md:aspect-[3/4]",

              "col-span-1 aspect-square md:col-span-4 md:aspect-[3/4]",
            ];

            return (
              <div
                key={`${image.src}-${index}`}
                className={`group relative overflow-hidden bg-black/5 ${
                  layoutClasses[index] ?? "col-span-1 aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {image.category && (
                  <span className="absolute bottom-4 left-4 bg-black/45 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                    {image.category}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

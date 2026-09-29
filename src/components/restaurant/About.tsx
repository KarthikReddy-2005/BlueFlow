import Image from "next/image";

interface AboutProps {
  about?: {
    heading: string;
    description: string;
    image?: string;
  };
}

export default function About({ about }: AboutProps) {
  if (!about) {
    return null;
  }

  return (
    <section
      id="about"
      className="bg-(--brand-background) px-5 py-20 md:px-8 md:py-28"
    >
      <div className={`mx-auto grid max-w-7xl gap-12 ${about.image ? "md:grid-cols-2 md:items-center md:gap-16 lg:gap-24" : "md:max-w-4xl"}`}>
        {/* Image */}
        {about.image && (
          <div className="relative aspect-4/5 overflow-hidden bg-black/5 md:aspect-4/5">
            <Image
              src={about.image}
              alt={about.heading}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
            Our Story
          </p>

          <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
            {about.heading}
          </h2>

          <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
            {about.description}
          </p>

          <div className="mt-8 h-px w-16 bg-black/30" />
        </div>
      </div>
    </section>
  );
}

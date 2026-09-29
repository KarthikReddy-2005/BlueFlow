import type { Review } from "@/data/restaurants/types";
import { isValidExternalUrl } from "@/lib/url";

interface ReviewsProps {
  reviews?: Review[];
  rating?: number;
  reviewCount?: number;
  googleReviewsUrl?: string;
}

export default function Reviews({
  reviews,
  rating,
  reviewCount,
  googleReviewsUrl,
}: ReviewsProps) {
  if ((!reviews || reviews.length === 0) && !rating && !reviewCount) {
    return null;
  }

  return (
    <section className="bg-(--brand-background) px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-black/50">
              {reviews?.length ? "Guest Notes" : "Local Word"}
            </p>

            <h2 className="font-display text-5xl font-medium leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl">
              {reviews?.length ? "Loved around the table." : "Guest feedback."}
            </h2>
          </div>

          <div className="md:text-right">
            {rating && <p className="text-3xl font-medium">★ {rating}</p>}

            {reviewCount && (
              <p className="mt-2 text-sm text-black/50">
                Based on {reviewCount.toLocaleString()}+ reviews
              </p>
            )}
          </div>
        </div>

        {/* Reviews */}
        {reviews && reviews.length > 0 && <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <article
              key={review.id}
              className="flex min-h-75 flex-col bg-(--brand-background) p-7 md:p-9"
            >
              {/* Stars */}
              <div
                className="text-sm tracking-[0.15em]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {"★".repeat(review.rating)}
              </div>

              {/* Review */}
              <blockquote className="mt-8 flex-1 text-xl leading-8 tracking-[-0.02em] md:text-2xl md:leading-9">
                “{review.text}”
              </blockquote>

              {/* Author */}
              <div className="mt-10">
                <p className="text-sm font-medium">{review.author}</p>

                {review.source && (
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/65">
                    {review.source}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>}

        {/* External reviews */}
        {isValidExternalUrl(googleReviewsUrl) && (
          <div className="mt-10">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex border-b border-black pb-1 text-sm font-medium"
            >
              Read more reviews →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

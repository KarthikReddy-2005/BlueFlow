import TodayHours from "./TodayHours";

interface TrustBarProps {
  rating?: number;
  reviewCount?: number;
  ratingLabel?: string;
  timezone: string;

  address: {
    city: string;
    state: string;
  };

  hours: {
    day: string;
    hours: string;
  }[];
}

export default function TrustBar({
  rating,
  reviewCount,
  ratingLabel = "Guest rating",
  timezone,
  address,
  hours,
}: TrustBarProps) {
  return (
    <section className="border-b border-black/10 bg-(--brand-background)">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {/* Rating */}
        <div className="border-b border-r border-black/10 px-5 py-6 md:border-b-0 md:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-black/50">
            {ratingLabel}
          </p>

          <p className="mt-2 text-lg font-medium">
            <span className="text-(--brand-secondary)">★</span> {rating ?? "—"}
          </p>
        </div>

        {/* Reviews */}
        <div className="border-b border-black/10 px-5 py-6 md:border-b-0 md:border-r md:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-black/50">
            Reviews
          </p>

          <p className="mt-2 text-lg font-medium">
            {reviewCount ? `${reviewCount.toLocaleString()}+` : "—"}
          </p>
        </div>

        {/* Location */}
        <div className="border-r border-black/10 px-5 py-6 md:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-black/50">
            Location
          </p>

          <p className="mt-2 text-lg font-medium">
            {address.city}, {address.state}
          </p>
        </div>

        {/* Hours */}
        <div className="px-5 py-6 md:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-black/50">
            Today
          </p>

          <p className="mt-2 text-lg font-medium">
            <TodayHours timezone={timezone} hours={hours} />
          </p>
        </div>
      </div>
    </section>
  );
}

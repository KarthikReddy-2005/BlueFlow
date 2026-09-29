import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: RestaurantPageProps): Promise<Metadata> {
  const { slug } = await params;

  const restaurant = getRestaurant(slug);

  if (!restaurant) {
    return { robots: { index: false, follow: false } };
  }

  const title =
    restaurant.seo?.title ?? `${restaurant.name} | ${restaurant.cuisine}`;

  const description = restaurant.seo?.description ?? restaurant.description;

  const image = restaurant.seo?.image ?? restaurant.heroImage;

  return {
    title,
    description,
    robots: { index: false, follow: false },

    openGraph: {
      title,
      description,
      ...(image ? { images: [image] } : {}),
      type: "website",
    },
  };
}

import { getRestaurant } from "@/data/restaurants";
import { siteUrl } from "@/lib/site-url";
import { notFound } from "next/navigation";

import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import MobileActions from "@/components/restaurant/MobileActions";
import TrustBar from "@/components/restaurant/TrustBar";
import FeaturedDishes from "@/components/restaurant/FeaturedDishes";
import Menu from "@/components/restaurant/Menu";
import Gallery from "@/components/restaurant/Gallery";
import About from "@/components/restaurant/About";
import ConversionCTA from "@/components/restaurant/ConversionCTA";
import Events from "@/components/restaurant/Events";
import Reviews from "@/components/restaurant/Reviews";
import Location from "@/components/restaurant/Location";
import Contact from "@/components/restaurant/Contact";
import Footer from "@/components/restaurant/Footer";
import RestaurantTheme from "@/components/restaurant/RestaurantTheme";

interface RestaurantPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;

  const restaurant = getRestaurant(slug);

  if (!restaurant) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    ...(restaurant.heroImage
      ? { image: new URL(restaurant.heroImage, siteUrl).href }
      : {}),
    telephone: restaurant.phone,
    ...(restaurant.priceRange ? { priceRange: restaurant.priceRange } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      addressRegion: restaurant.address.state,
      postalCode: restaurant.address.zipCode,
      addressCountry:
        restaurant.address.country === "USA"
          ? "US"
          : restaurant.address.country,
    },
  };

  const primaryAction = restaurant.primaryAction ?? (restaurant.orderingUrl
    ? { label: "Order Online", compactLabel: "Order", url: restaurant.orderingUrl }
    : restaurant.reservationUrl
      ? { label: "Reserve a Table", compactLabel: "Reserve", url: restaurant.reservationUrl }
      : undefined);
  const navigationSections = [
    ...(restaurant.menu.length > 0 ? [{ label: "Menu", href: "#menu" }] : []),
    ...(restaurant.about ? [{ label: "About", href: "#about" }] : []),
    ...(restaurant.gallery.length > 0 ? [{ label: "Gallery", href: "#gallery" }] : []),
    ...(restaurant.events?.enabled ? [{ label: "Events", href: "#events" }] : []),
    { label: "Location", href: "#location" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <RestaurantTheme design={restaurant.design}>
        <Navbar
          name={restaurant.name}
          logo={restaurant.logo}
          primaryAction={primaryAction}
          sections={navigationSections}
        />

        <main>
          <Hero
            name={restaurant.name}
            tagline={restaurant.tagline}
            cuisine={restaurant.cuisine}
            locationLabel={`${restaurant.address.city}, ${restaurant.address.state}`}
            hasMenu={restaurant.menu.length > 0}
            heroPosition={restaurant.design.heroPosition}
            heroAlign={restaurant.design.heroAlign}
            heroImage={restaurant.heroImage}
            primaryAction={primaryAction}
          />

          <TrustBar
            rating={restaurant.rating}
            reviewCount={restaurant.reviewCount}
            ratingLabel={restaurant.ratingLabel}
            timezone={restaurant.timezone}
            address={restaurant.address}
            hours={restaurant.hours}
          />

          <FeaturedDishes
            dishes={restaurant.featuredDishes}
            hasMenu={restaurant.menu.length > 0}
            heading={restaurant.copy?.featuredHeading}
            description={restaurant.copy?.featuredDescription}
          />

          <Menu
            categories={restaurant.menu}
            heading={restaurant.copy?.menuHeading}
            description={restaurant.copy?.menuDescription}
          />

          <About about={restaurant.about} />

          <Gallery
            images={restaurant.gallery}
            heading={restaurant.copy?.galleryHeading}
            description={restaurant.copy?.galleryDescription}
          />

          <Reviews
            reviews={restaurant.reviews}
            rating={restaurant.rating}
            reviewCount={restaurant.reviewCount}
            googleReviewsUrl={restaurant.googleReviewsUrl}
          />

          <ConversionCTA
            name={restaurant.name}
            action={primaryAction}
            alternatives={restaurant.orderingServices?.filter((service) => service.url !== primaryAction?.url)}
            image={restaurant.reservationImage ?? restaurant.heroImage}
            heading={restaurant.copy?.reservationHeading}
            description={restaurant.copy?.reservationDescription}
          />

          <Events events={restaurant.events} />

          <Location
            address={restaurant.address}
            hours={restaurant.hours}
            phone={restaurant.phone}
          />

          <Contact
            name={restaurant.name}
            phone={restaurant.phone}
            email={restaurant.email}
            instagram={restaurant.social.instagram}
            facebook={restaurant.social.facebook}
            tiktok={restaurant.social.tiktok}
          />

          <Footer
            name={restaurant.name}
            address={restaurant.address}
            phone={restaurant.phone}
            reservationUrl={restaurant.reservationUrl}
            orderingUrl={restaurant.orderingUrl}
            instagram={restaurant.social.instagram}
            facebook={restaurant.social.facebook}
            tiktok={restaurant.social.tiktok}
            sections={navigationSections}
          />

          <MobileActions
            phone={restaurant.phone}
            mapsUrl={restaurant.address.mapsUrl}
            primaryAction={primaryAction}
          />
        </main>
      </RestaurantTheme>
    </>
  );
}

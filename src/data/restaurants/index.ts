import type { Restaurant } from "./types";
import { buddysPlace } from "./buddys-place";
import { emberAndOak } from "./ember-and-oak";

export const restaurants: Record<string, Restaurant> = {
  [buddysPlace.slug]: buddysPlace,
  [emberAndOak.slug]: emberAndOak,
};

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants[slug];
}

export function getAllRestaurants(): Restaurant[] {
  return Object.values(restaurants);
}

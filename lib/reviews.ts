export type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

// Drafted copy — the Figma file's testimonials describe an unrelated
// face-painting business, so they're not shippable as-is. Replace with
// real reviews once available.
export const PLACEHOLDER_REVIEWS: Review[] = [
  {
    id: "placeholder-1",
    author: "Rachel M.",
    rating: 5,
    quote:
      "Donna took in my wedding dress two sizes and it fit like it was made for me. She caught details the bridal shop's own tailor missed. Booking with her again for my sister's dress.",
  },
  {
    id: "placeholder-2",
    author: "Priya S.",
    rating: 5,
    quote:
      "I brought her a formal gown with a broken zipper and a hem two inches too long the week of an event. She had it back to me in three days, perfect. Extremely reliable.",
  },
  {
    id: "placeholder-3",
    author: "Marcus T.",
    rating: 5,
    quote:
      "Had a stack of old t-shirts turned into a quilt for my dad's birthday. The stitching is beautiful and it clearly means a lot to him. Worth every penny.",
  },
];

type PlacesReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
};

type PlacesDetailsResponse = {
  result?: {
    reviews?: PlacesReview[];
  };
};

export function transformPlacesReviews(data: PlacesDetailsResponse): Review[] {
  const reviews = data.result?.reviews ?? [];
  return reviews.map((r, i) => ({
    id: `${r.time}-${i}`,
    author: r.author_name,
    rating: r.rating,
    quote: r.text,
  }));
}

/**
 * Build-time only. Never call from a Client Component — the API key must
 * not reach the browser.
 */
export async function getReviews(): Promise<Review[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return PLACEHOLDER_REVIEWS;
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
    );

    if (!res.ok) {
      return PLACEHOLDER_REVIEWS;
    }

    const data = (await res.json()) as PlacesDetailsResponse;
    const transformed = transformPlacesReviews(data);

    return transformed.length > 0 ? transformed : PLACEHOLDER_REVIEWS;
  } catch {
    return PLACEHOLDER_REVIEWS;
  }
}

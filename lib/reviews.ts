export type Review = {
  id: string;
  author: string;
  rating: number;
  quote: string;
};

// Real reviews from Donna's Facebook page — she doesn't have Google reviews
// yet (https://www.facebook.com/SomethingStichedSomethingSewn/reviews).
// Serves as the fallback until GOOGLE_PLACES_API_KEY/GOOGLE_PLACE_ID are
// configured and she has Google reviews to pull instead.
export const PLACEHOLDER_REVIEWS: Review[] = [
  {
    id: "fb-devra-dimpfl-callaghan",
    author: "Devra Dimpfl Callaghan",
    rating: 5,
    quote:
      "Donna's work is spectacular. She's a magician! Plus, she is just a delightful human being!!!",
  },
  {
    id: "fb-alie-settlemyre",
    author: "Alie Settlemyre",
    rating: 5,
    quote:
      "Donna was absolutely amazing to work with and so affordable! I was scared I wasn't going to be able to get my dream dress to fit/ work with my body type, but Donna made my dreams come true!",
  },
  {
    id: "fb-emma-katherine",
    author: "Emma Katherine",
    rating: 5,
    quote:
      "Donna saw my vision and brought it to life! Went from a floor length to my dream tea length wedding dress!! She was wonderful to work with and so talented!",
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

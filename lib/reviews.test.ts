import { afterEach, describe, expect, it, vi } from "vitest";
import { getReviews, transformPlacesReviews, PLACEHOLDER_REVIEWS } from "./reviews";

describe("transformPlacesReviews", () => {
  it("transforms a Places API response into Review[]", () => {
    const result = transformPlacesReviews({
      result: {
        reviews: [
          { author_name: "Jane D.", rating: 5, text: "Great work!", time: 1700000000 },
          { author_name: "Sam R.", rating: 4, text: "Very happy.", time: 1700000100 },
        ],
      },
    });

    expect(result).toEqual([
      { id: "1700000000-0", author: "Jane D.", rating: 5, quote: "Great work!" },
      { id: "1700000100-1", author: "Sam R.", rating: 4, quote: "Very happy." },
    ]);
  });

  it("returns an empty array when there are no reviews", () => {
    expect(transformPlacesReviews({ result: {} })).toEqual([]);
    expect(transformPlacesReviews({})).toEqual([]);
  });
});

describe("getReviews", () => {
  const originalFetch = global.fetch;
  const originalEnv = { ...process.env };

  afterEach(() => {
    global.fetch = originalFetch;
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it("falls back to placeholder reviews when secrets are absent", async () => {
    delete process.env.GOOGLE_PLACES_API_KEY;
    delete process.env.GOOGLE_PLACE_ID;

    await expect(getReviews()).resolves.toEqual(PLACEHOLDER_REVIEWS);
  });

  it("falls back to placeholder reviews when the fetch throws", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key";
    process.env.GOOGLE_PLACE_ID = "test-place";
    global.fetch = vi.fn().mockRejectedValue(new Error("network error"));

    await expect(getReviews()).resolves.toEqual(PLACEHOLDER_REVIEWS);
  });

  it("falls back to placeholder reviews when the response is not ok", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key";
    process.env.GOOGLE_PLACE_ID = "test-place";
    global.fetch = vi.fn().mockResolvedValue({ ok: false });

    await expect(getReviews()).resolves.toEqual(PLACEHOLDER_REVIEWS);
  });

  it("returns the transformed live reviews on success", async () => {
    process.env.GOOGLE_PLACES_API_KEY = "test-key";
    process.env.GOOGLE_PLACE_ID = "test-place";
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        result: {
          reviews: [
            { author_name: "Live Reviewer", rating: 5, text: "Loved it.", time: 42 },
          ],
        },
      }),
    });

    await expect(getReviews()).resolves.toEqual([
      { id: "42-0", author: "Live Reviewer", rating: 5, quote: "Loved it." },
    ]);
  });
});

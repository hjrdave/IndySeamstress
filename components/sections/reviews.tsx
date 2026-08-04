import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getReviews } from "@/lib/reviews";

export async function ReviewsSection() {
  const reviews = await getReviews();

  return (
    <section id="reviews" className="px-6 py-16">
      <h2 className="mb-8 text-center text-2xl font-semibold">Reviews</h2>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="flex flex-col gap-3 pt-4">
              <div
                className="flex gap-0.5 text-amber-500"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4"
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-sm font-medium">- {review.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

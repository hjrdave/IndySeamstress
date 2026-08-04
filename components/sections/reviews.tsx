import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getReviews } from "@/lib/reviews";

export async function ReviewsSection() {
  const reviews = await getReviews();

  return (
    <section id="reviews" className="px-6 py-16">
      <h2 className="mx-auto mb-8 max-w-5xl font-heading text-4xl font-normal">
        Reviews
      </h2>
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
        {reviews.map((review) => (
          <Card
            key={review.id}
            className="rounded-xl border-[#dee2e6] bg-white"
          >
            <CardContent className="flex flex-col gap-3 pt-4">
              <div
                className="flex gap-0.5 text-[#fbd126]"
                aria-label={`${review.rating} out of 5 stars`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5"
                    fill={i < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-xs text-black">
                &ldquo;{review.quote}&rdquo;
                <br />- {review.author}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

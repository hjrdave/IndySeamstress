import { HeroSection } from "@/components/sections/hero";
import { ReviewsSection } from "@/components/sections/reviews";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="flex flex-col items-center gap-2 px-6 py-16 text-center">
        <p className="max-w-md text-muted-foreground">
          Services and Gallery sections are still in progress (see #10, #11).
        </p>
      </section>
      <ReviewsSection />
      <SiteFooter />
    </>
  );
}

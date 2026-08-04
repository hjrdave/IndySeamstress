import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { ReviewsSection } from "@/components/sections/reviews";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <SiteFooter />
    </>
  );
}

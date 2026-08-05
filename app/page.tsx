import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { GallerySection } from "@/components/sections/gallery";
import { ReviewsSection } from "@/components/sections/reviews";
import { SiteFooter } from "@/components/sections/footer";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
      />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <SiteFooter />
    </>
  );
}

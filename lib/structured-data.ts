import { SITE_INFO, SITE_URL } from "@/lib/site-info";
import { FACEBOOK_URL } from "@/lib/social-links";
import { BIO_INTRO } from "@/lib/bio";
import { SERVICES } from "@/lib/services";

// schema.org LocalBusiness + service catalog — read by both traditional
// search crawlers and LLM-based answer engines (#14).
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_INFO.businessName,
    alternateName: "Indy Seamstress",
    description: BIO_INTRO,
    url: SITE_URL,
    telephone: SITE_INFO.phoneDisplay,
    email: SITE_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_INFO.city,
      addressRegion: SITE_INFO.region,
      addressCountry: "US",
    },
    sameAs: [FACEBOOK_URL],
    priceRange: "$50-$125",
    founder: {
      "@type": "Person",
      name: SITE_INFO.ownerName,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        price: service.price.replace(/[^0-9.]/g, ""),
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };
}

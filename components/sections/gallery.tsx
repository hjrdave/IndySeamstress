import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/gallery";
import { assetPath } from "@/lib/asset-path";

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden py-20">
      <Image
        src={assetPath("/images/hero-background.png")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Curved top/bottom edges (Figma's Ellipse 1/2, #11) — a wide white
          ellipse overlapping each edge, clipped by the section's own
          overflow-hidden so only its arc shows. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-20 w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white sm:h-28"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-20 w-[140%] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-white sm:h-28"
      />

      <div className="relative pr-6 pl-16 sm:px-6">
        <h2 className="mx-auto mb-8 max-w-5xl font-heading text-3xl">Gallery</h2>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-[359/337] overflow-hidden rounded-lg border-8 border-white shadow-md"
            >
              <Image
                src={assetPath(photo.image)}
                alt={photo.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

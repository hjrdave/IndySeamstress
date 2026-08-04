import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/gallery";

export function GallerySection() {
  return (
    <section id="gallery" className="px-6 py-16">
      <h2 className="mb-8 text-center font-heading text-3xl">Gallery</h2>
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {GALLERY_PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-[359/337] overflow-hidden rounded-lg border"
          >
            <Image
              src={photo.image}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

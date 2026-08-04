import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { SERVICES } from "@/lib/services";
import { assetPath } from "@/lib/asset-path";

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-16">
      <h2 className="mx-auto mb-8 max-w-3xl font-heading text-3xl">Services</h2>
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <Card key={service.id} className="gap-3 overflow-hidden">
            <div className="relative aspect-[359/247] w-full">
              <Image
                src={assetPath(service.image)}
                alt={service.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <CardContent className="flex flex-col gap-2 pb-4">
              <p className="font-heading text-lg">{service.title}</p>
              <p className="font-heading text-lg font-bold">{service.price}</p>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-4 text-center">
        <p className="font-heading text-2xl sm:text-3xl">
          Want to schedule an appointment?
        </p>
        <ContactModal>
          <Button variant="brand">CONTACT ME</Button>
        </ContactModal>
      </div>
    </section>
  );
}

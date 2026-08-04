import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { assetPath } from "@/lib/asset-path";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden md:min-h-[750px]">
      <Image
        src={assetPath("/images/hero-background.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Desktop-only decorative icons (dress form + needle & thread appear
          only on the desktop Figma frame). */}
      <div
        aria-hidden="true"
        className="absolute hidden h-64 w-32 opacity-80 md:block"
        style={{ left: "13.9%", top: "8%" }}
      >
        <Image
          src={assetPath("/icons/hero/dress-form.png")}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute hidden h-48 w-32 opacity-80 md:block"
        style={{ left: "81.5%", top: "6%" }}
      >
        <Image
          src={assetPath("/icons/hero/needle-thread.png")}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Shared across breakpoints (both Figma frames show these). */}
      <div
        aria-hidden="true"
        className="absolute h-24 w-24 opacity-80 sm:h-32 sm:w-32"
        style={{ left: "8%", top: "78%" }}
      >
        <Image
          src={assetPath("/icons/hero/scissors.png")}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute hidden h-32 w-40 opacity-80 md:block"
        style={{ left: "68%", top: "76%" }}
      >
        <Image
          src={assetPath("/icons/hero/sewing-machine.png")}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-24 text-center sm:py-32">
        <p className="font-heading text-2xl sm:text-3xl">Your</p>
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] leading-none">
          Indy Seamstress
        </h1>
        <p className="font-heading text-lg sm:text-2xl">
          Something Stitched Something Sewn
        </p>
        <ContactModal>
          <Button variant="brand" className="mt-4">
            CONTACT ME FOR AN APPOINTMENT
          </Button>
        </ContactModal>
      </div>
    </section>
  );
}

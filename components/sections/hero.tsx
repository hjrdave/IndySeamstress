import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { assetPath } from "@/lib/asset-path";
import { FacebookBadge, TwitterBadge } from "@/components/icons/social-badges";

// Icon positions/sizes below are percentages of the background image's own
// 1728x703 box (Figma get_metadata/get_design_context, #9) — some extend
// past 100% height because those icons sit partly below the pink image in
// the real design (e.g. scissors bottom = 784+284=1068, past the image's
// 703px height). No overflow-hidden anywhere in this stack so that overflow
// stays visible against the page's white background, matching Figma.
export function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="relative min-h-[560px] w-full md:aspect-[1728/703] md:min-h-0">
        <Image
          src={assetPath("/images/hero-background.png")}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute flex flex-col"
          style={{ left: "0%", top: "77.7%", width: "4.9%" }}
        >
          <FacebookBadge className="w-full" />
          <TwitterBadge className="w-full" />
        </div>

        {/* Desktop-only decorative icons (dress form + needle & thread
            appear only on the desktop Figma frame). */}
        <div
          aria-hidden="true"
          className="absolute hidden md:block"
          style={{ left: "13.9%", top: "38.3%", width: "11.2%", height: "55.8%" }}
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
          className="absolute hidden md:block"
          style={{ left: "81.7%", top: "25.3%", width: "12.4%", height: "45.8%" }}
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
          className="absolute"
          style={{ left: "37.6%", top: "88%", width: "14.5%", height: "40.4%" }}
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
          className="absolute hidden md:block"
          style={{ left: "56.2%", top: "67%", width: "20.2%", height: "41%" }}
        >
          <Image
            src={assetPath("/icons/hero/sewing-machine.png")}
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <p className="font-heading text-2xl sm:text-3xl">Your</p>
          <h1 className="font-display text-[clamp(2.5rem,9vw,6rem)] leading-none">
            Indy Seamstress
          </h1>
          <p className="font-heading text-base sm:text-2xl">
            Something Stitched Something Sewn
          </p>
          <ContactModal>
            <Button variant="brand" className="mt-2">
              CONTACT ME FOR AN APPOINTMENT
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { assetPath } from "@/lib/asset-path";
import { FacebookBadge } from "@/components/icons/social-badges";
import { FACEBOOK_URL } from "@/lib/social-links";

// Icon positions below are percentages of the background image's own
// 1728x703 box (Figma get_metadata/get_design_context, #9), sized down from
// Figma's literal proportions per user feedback. The icon layer is capped
// at max-w-[1728px] (Figma's native canvas width) so icons stop scaling up
// past their intended size on very wide viewports.
export function HeroSection() {
  return (
    <section className="relative isolate">
      <div className="relative min-h-[560px] w-full md:aspect-[1728/703] md:min-h-0">
        {/* Background + curve live in their own clipped layer so the curve
            doesn't cut off the icons below, which intentionally overflow
            past the pink area (matching Figma). The source photo has no
            curve baked in, so it's recreated the same way as Gallery's:
            a wide white ellipse overlapping the bottom edge. */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute bottom-0 left-1/2 h-16 w-[140%] -translate-x-1/2 translate-y-1/2 rounded-[50%] bg-white sm:h-24"
          />
        </div>

        <div className="absolute inset-0 mx-auto max-w-[1728px]">
          {/* Small social badge — fixed size, never scales with viewport.
              She only has a Facebook page, so this is the only platform
              linked (matches the footer). */}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="absolute block w-8 sm:w-9"
            style={{ left: "0%", top: "77.7%" }}
          >
            <FacebookBadge className="w-full" />
          </a>

          {/* Desktop-only decorative icons (dress form + needle & thread
              appear only on the desktop Figma frame). */}
          <div
            aria-hidden="true"
            className="absolute hidden md:block"
            style={{ left: "15%", top: "42%", width: "8.5%", height: "42%" }}
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
            style={{ left: "82.8%", top: "29%", width: "9.5%", height: "35%" }}
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
            style={{ left: "40%", top: "80%", width: "11%", height: "28%" }}
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
            style={{ left: "58.2%", top: "72%", width: "15.5%", height: "31.5%" }}
          >
            <Image
              src={assetPath("/icons/hero/sewing-machine.png")}
              alt=""
              fill
              className="object-contain"
            />
          </div>
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

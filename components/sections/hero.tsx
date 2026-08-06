import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { assetPath } from "@/lib/asset-path";

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
            curve baked in, so it's recreated as an actual SVG curve — a
            single gentle arc (not wavy), matching the real Figma asset
            (get_screenshot, node 5:8). */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={assetPath("/images/hero-background.png")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 1728 140"
            preserveAspectRatio="none"
            className="absolute inset-x-0 bottom-0 h-24 w-full sm:h-32"
          >
            <path
              d="M0,55 Q 864,92 1728,48 L1728,140 L0,140 Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="absolute inset-0 mx-auto max-w-[1728px]">
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

          {/* Shared across breakpoints (both Figma frames show these).
              Mobile uses fixed sizing/position (the section's min-h-[560px]
              is a fixed height, not the aspect-ratio box desktop uses, so
              the same percentages don't translate) — sized bigger per user
              feedback; OK to overflow past the pink background on mobile,
              just needs to clear the Services heading/cards below. */}
          <div
            aria-hidden="true"
            className="absolute top-[85%] left-[40%] h-28 w-28 sm:top-[80%] sm:h-[28%] sm:w-[11%]"
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
            <Button
              variant="brand"
              className="mt-2 max-w-[min(90vw,360px)] whitespace-normal sm:max-w-none sm:whitespace-nowrap"
            >
              CONTACT ME FOR AN APPOINTMENT
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
}

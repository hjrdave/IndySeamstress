import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/contact-modal";
import { HeroDecorativeIcon } from "@/components/icons/hero";

// Hero background: real hero photo (a soft pink watercolor wash per Figma)
// pending export — see the network-egress note in components/icons/hero.tsx.
// Gradient below is a placeholder standing in for that photo.
export function HeroSection() {
  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-linear-to-b from-rose-100 via-rose-50 to-white md:min-h-[750px]">
      {/* Desktop-only decorative icons (dress form + needle & thread appear
          only on the desktop Figma frame). */}
      <HeroDecorativeIcon
        label="dress form"
        aria-hidden="true"
        className="absolute hidden h-64 w-32 text-brand-border/25 md:block"
        style={{ left: "13.9%", top: "8%" }}
      />
      <HeroDecorativeIcon
        label="needle & thread"
        aria-hidden="true"
        className="absolute hidden h-48 w-32 text-brand-border/25 md:block"
        style={{ left: "81.5%", top: "6%" }}
      />

      {/* Shared across breakpoints (both Figma frames show these). */}
      <HeroDecorativeIcon
        label="scissors"
        aria-hidden="true"
        className="absolute h-24 w-24 text-brand-border/25 sm:h-32 sm:w-32"
        style={{ left: "8%", top: "78%" }}
      />
      <HeroDecorativeIcon
        label="sewing machine"
        aria-hidden="true"
        className="absolute hidden h-32 w-40 text-brand-border/25 md:block"
        style={{ left: "68%", top: "76%" }}
      />

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

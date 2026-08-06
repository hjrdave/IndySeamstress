import { FacebookBadge } from "@/components/icons/social-badges";
import { FACEBOOK_URL } from "@/lib/social-links";

// Persistent Facebook link fixed to the left edge, visible while scrolling
// the whole page (not just within the hero). w-12 (48px) on mobile matches
// Material Design's 48dp minimum touch target (a bit more generous than
// Apple HIG/WCAG 2.5.5's 44px floor); w-11 (44px) on desktop, up from the
// original 36px, since it's still meant to be comfortably clickable there
// too. Sections' left padding gives it clearance (see their pl-16).
// Positioned higher on mobile (top-[30%]) instead of dead-center — nothing
// requires it to sit at the exact vertical middle of the screen; reverts to
// centered on desktop where it was already fine.
export function StickyFacebookBadge() {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="fixed top-[30%] left-0 z-50 w-12 -translate-y-1/2 sm:top-1/2 sm:w-11"
    >
      <FacebookBadge className="w-full" />
    </a>
  );
}

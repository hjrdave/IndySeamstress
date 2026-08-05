import { FacebookBadge } from "@/components/icons/social-badges";
import { FACEBOOK_URL } from "@/lib/social-links";

// Persistent Facebook link fixed to the left edge, visible while scrolling
// the whole page (not just within the hero).
export function StickyFacebookBadge() {
  return (
    <a
      href={FACEBOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="fixed top-1/2 left-0 z-50 w-6 -translate-y-1/2 sm:w-9"
    >
      <FacebookBadge className="w-full" />
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { FACEBOOK_MESSENGER_URL } from "@/lib/social-links";

// Floating "message us on Facebook" button, fixed to the bottom-right,
// visible while scrolling the whole page.
export function StickyMessengerButton() {
  return (
    <a
      href={FACEBOOK_MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message me on Facebook"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}

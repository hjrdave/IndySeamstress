import type { SVGProps } from "react";

// Small colored badge for the hero's left-edge social link (Figma
// get_design_context, #9) — distinct from the footer's outline icon in
// components/icons/social.tsx. Hand-authored substitute, same reasoning as
// that file: lucide-react dropped brand glyphs.
export function FacebookBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" fill="#3B5998" />
      <path
        fill="#fff"
        d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.34 4.25c-2.13 0-3.59 1.3-3.59 3.68V10.5H8.25v3h2.5V21h2.75Z"
      />
    </svg>
  );
}

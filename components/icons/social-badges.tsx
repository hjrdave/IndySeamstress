import type { SVGProps } from "react";

// Small colored square badges for the hero's left-edge stack (Figma
// get_design_context, #9) — distinct from the footer's outline icons in
// components/icons/social.tsx. Hand-authored substitutes, same reasoning as
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

export function TwitterBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" fill="#1DA1F2" />
      <path
        fill="#fff"
        d="M20 6.5c-.6.27-1.24.45-1.9.53a3.3 3.3 0 0 0 1.45-1.83 6.6 6.6 0 0 1-2.1.8 3.3 3.3 0 0 0-5.62 3 9.35 9.35 0 0 1-6.79-3.44 3.3 3.3 0 0 0 1.02 4.4 3.28 3.28 0 0 1-1.49-.41v.04a3.3 3.3 0 0 0 2.64 3.23 3.3 3.3 0 0 1-1.48.06 3.3 3.3 0 0 0 3.08 2.29A6.62 6.62 0 0 1 4 16.58a9.32 9.32 0 0 0 5.05 1.48c6.06 0 9.38-5.02 9.38-9.38l-.01-.43A6.7 6.7 0 0 0 20 6.5Z"
      />
    </svg>
  );
}

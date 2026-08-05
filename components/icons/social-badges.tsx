import type { SVGProps } from "react";

// Blue square Facebook badge for the hero's left-edge social link (Figma
// get_design_context, #9) — distinct from the footer's icon-only treatment
// in components/icons/social.tsx. Uses the real Font Awesome Free
// "facebook-f" mark (provided by the site owner) on a brand-blue square.
export function FacebookBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 640 640" aria-hidden="true" {...props}>
      <rect width="640" height="640" fill="#3B5998" />
      {/* The "f" glyph's native bbox (174-465.7 x, 64-576 y) is much taller
          than wide, so its own viewBox padding is naturally uneven — scaled
          down and centered here for more, and more balanced, padding on all
          sides than the glyph's default proportions give. */}
      <g transform="translate(128 128) scale(0.6)">
        <path
          fill="#fff"
          d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
        />
      </g>
    </svg>
  );
}

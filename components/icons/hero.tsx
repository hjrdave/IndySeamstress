import type { SVGProps } from "react";

// Stand-ins for the hero's sewing-themed illustrations (dress form, needle &
// thread, scissors, sewing machine per the Figma design). Downloading the
// real exports is blocked by this environment's network egress policy —
// swap these for the real Figma-exported SVGs once provided (#9).
export function HeroDecorativeIcon({
  label,
  ...props
}: SVGProps<SVGSVGElement> & { label: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" {...props}>
      <rect
        x="4"
        y="4"
        width="92"
        height="92"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

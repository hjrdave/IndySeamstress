import type { SVGProps } from "react";

// lucide-react dropped brand/social glyphs; these are small hand-authored
// substitutes until real social handles + a design pass exist (see #13).
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M13.5 21v-7.5H16l.5-3H13.5V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.34 4.25c-2.13 0-3.59 1.3-3.59 3.68V10.5H8.25v3h2.5V21h2.75Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

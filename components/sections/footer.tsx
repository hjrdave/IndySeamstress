import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon } from "@/components/icons/social";
import { assetPath } from "@/lib/asset-path";
import { FACEBOOK_URL } from "@/lib/social-links";
import { SITE_INFO } from "@/lib/site-info";

// She only has a Facebook page — no other platforms to link to.
const SOCIAL_LINKS = [{ label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon }];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden pt-10 pr-6 pb-14 pl-16 text-center sm:px-6 sm:text-left">
      <Image
        src={assetPath("/images/hero-background.png")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div className="text-center">
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Follow Me On
          </h2>
          <div className="mt-3 flex justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/80 transition-opacity hover:opacity-80"
              >
                <Icon className="size-8" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-heading text-sm">Your</p>
          <p className="font-display text-4xl leading-tight">Indy Seamstress</p>
          <p className="font-heading text-sm">
            Something Stitched Something Sewn
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Contact Info
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <Mail className="size-4 text-muted-foreground" />
              <a href={`mailto:${SITE_INFO.email}`} className="hover:underline">
                {SITE_INFO.email}
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <Phone className="size-4 text-muted-foreground" />
              <a href={SITE_INFO.phoneHref} className="hover:underline">
                {SITE_INFO.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <MapPin className="size-4 text-muted-foreground" />
              <span>{SITE_INFO.location}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Solid white strip for the copyright line (Figma's Rectangle 1, #13).
          Extra bottom padding on mobile keeps the text clear of the fixed
          Messenger button at the very bottom of the page when scrolled all
          the way down; not needed on larger screens where centered text
          never reaches that bottom-right corner. */}
      <div className="relative mt-8 -mr-6 -mb-14 -ml-16 bg-white px-6 pt-3 pb-20 sm:-ml-6 sm:pb-3">
        <p className="text-center text-xs text-muted-foreground">
          &copy;{new Date().getFullYear()} Indy Seamstress, Something Stitched,
          Something Sewn
        </p>
      </div>
    </footer>
  );
}

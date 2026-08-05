import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon } from "@/components/icons/social";
import { assetPath } from "@/lib/asset-path";
import { FACEBOOK_URL } from "@/lib/social-links";

// She only has a Facebook page — no other platforms to link to.
const SOCIAL_LINKS = [{ label: "Facebook", href: FACEBOOK_URL, Icon: FacebookIcon }];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden px-6 pt-10 pb-14 text-center sm:text-left">
      <Image
        src={assetPath("/images/hero-background.png")}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Follow Me On
          </h2>
          <div className="mt-3 flex justify-center gap-4 sm:justify-start">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="font-heading text-base">Your</p>
          <p className="font-display text-2xl">Indy Seamstress</p>
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
              <a href="mailto:donnapierce@gmail.com" className="hover:underline">
                donnapierce@gmail.com
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <Phone className="size-4 text-muted-foreground" />
              <a href="tel:317.300.9999" className="hover:underline">
                317.300.9999
              </a>
            </li>
            <li className="flex items-center justify-center gap-2 sm:justify-start">
              <MapPin className="size-4 text-muted-foreground" />
              <span>Indianapolis, IN</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Solid white strip for the copyright line (Figma's Rectangle 1, #13). */}
      <div className="relative mt-8 -mx-6 -mb-14 bg-white py-3">
        <p className="text-center text-xs text-muted-foreground">
          &copy;{new Date().getFullYear()} Indy Seamstress, Something Stitched,
          Something Sewn
        </p>
      </div>
    </footer>
  );
}

import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";

// Real handles aren't known yet — stubbed until the owner provides them.
const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/40 px-6 py-10 text-center sm:text-left">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div>
          <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
            Follow Me On
          </h2>
          <div className="mt-3 flex justify-center gap-4 sm:justify-start">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="font-display text-2xl">Indy Seamstress</p>
          <p className="text-sm text-muted-foreground">
            Something Stitched, Something Sewn
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

      <p className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
        &copy;{new Date().getFullYear()} Indy Seamstress, Something Stitched,
        Something Sewn
      </p>
    </footer>
  );
}

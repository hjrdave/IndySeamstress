"use client";

import type { ReactNode } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FACEBOOK_MESSENGER_URL } from "@/lib/social-links";
import { SITE_INFO } from "@/lib/site-info";

// Reusable "My Contact Info" dialog (Figma get_design_context, #9). Wrap any
// trigger element as a child, e.g. <ContactModal><Button>...</Button></ContactModal>.
export function ContactModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-sm rounded-lg p-8 text-center"
      >
        <DialogTitle className="font-heading text-xl font-normal">
          My Contact Info
        </DialogTitle>
        <ul className="mt-4 space-y-3 text-left text-base text-heading">
          <li className="flex items-center gap-3">
            <Mail className="size-5 shrink-0" aria-hidden="true" />
            <a href={`mailto:${SITE_INFO.email}`} className="hover:underline">
              {SITE_INFO.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            <a href={SITE_INFO.phoneHref} className="hover:underline">
              {SITE_INFO.phoneDisplay}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="size-5 shrink-0" aria-hidden="true" />
            <span>{SITE_INFO.location}</span>
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
            <a
              href={FACEBOOK_MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Message me on Facebook
            </a>
          </li>
        </ul>
        <DialogClose asChild>
          <Button variant="brand" className="mx-auto mt-6">
            CLOSE
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

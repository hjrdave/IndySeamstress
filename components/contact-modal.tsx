"use client";

import type { ReactNode } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// Matches the footer's contact info (map/spec source of truth).
const CONTACT_INFO = {
  email: "donnapierce@gmail.com",
  phone: "317.300.9999",
  location: "Indianapolis, IN",
};

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
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">
              {CONTACT_INFO.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="size-5 shrink-0" aria-hidden="true" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:underline">
              {CONTACT_INFO.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="size-5 shrink-0" aria-hidden="true" />
            <span>{CONTACT_INFO.location}</span>
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

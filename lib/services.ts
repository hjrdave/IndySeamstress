export type Service = {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
  alt: string;
};

// Title/price copied verbatim from Figma (get_design_context, #10). Note:
// the ticket text referenced "Event Wear Alterations" with no price, but the
// actual Figma card reads "Street Wear Alterations" / $50.00 — Figma is the
// source of truth per the ticket's own acceptance criteria.
// Descriptions are drafted copy (the Figma lorem ipsum isn't shippable) —
// easy to edit here once the site owner has her own wording.
export const SERVICES: Service[] = [
  {
    id: "bridal-alterations",
    title: "Bridal Alterations",
    price: "$100.00",
    description:
      "Wedding gowns taken in, hemmed, and bustled so your dress fits exactly right on the day that matters most.",
    image: "/images/services/bridal-alterations.png",
    alt: "Ivory wedding gown bodice with a beaded floral appliqué, hanging in front of a bookshelf",
  },
  {
    id: "street-wear-alterations",
    title: "Street Wear Alterations",
    price: "$50.00",
    description:
      "Everyday clothing hemmed, taken in, or resized so your favorite pieces fit the way they were meant to.",
    image: "/images/services/street-wear-alterations.png",
    alt: "Four men modeling casual street style outfits with jackets, hoodies, and layered streetwear",
  },
  {
    id: "formal-wear-alterations",
    title: "Formal Wear Alterations",
    price: "$125.00",
    description:
      "Suits and formal wear tailored for a sharp, comfortable fit at weddings, galas, and black-tie events.",
    image: "/images/services/formal-wear-alterations.png",
    alt: "Close-up of a gray herringbone suit with a patterned tie",
  },
  {
    id: "custom-tshirt-quilts",
    title: "Custom T-Shirt Quilts",
    price: "$120.00",
    description:
      "A box of meaningful t-shirts turned into a keepsake quilt, hand-stitched to be treasured for years.",
    image: "/images/services/custom-tshirt-quilts.png",
    alt: "Colorful quilt made from a patchwork of t-shirts from races, teams, and memorial events",
  },
];

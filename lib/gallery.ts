export type GalleryPhoto = {
  id: string;
  image: string;
  alt: string;
};

// 9 photos of past work, matching Figma's 3x3 grid (#11).
export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "bride-groom-woodland",
    image: "/images/gallery/bride-groom-woodland.png",
    alt: "Bride and groom embracing in a wooded outdoor setting",
  },
  {
    id: "lace-bow-detail",
    image: "/images/gallery/lace-bow-detail.png",
    alt: "Close-up of a blush pink dress bodice with a lace and bow detail",
  },
  {
    id: "tea-length-gown",
    image: "/images/gallery/tea-length-gown.png",
    alt: "Bride in a tea-length lace gown holding a red rose bouquet in the woods",
  },
  {
    id: "sewing-machine-workshop",
    image: "/images/gallery/sewing-machine-workshop.png",
    alt: "Vintage sewing machine on a workshop table with dried flowers",
  },
  {
    id: "custom-minnie-mouse-dress",
    image: "/images/gallery/custom-minnie-mouse-dress.png",
    alt: "Custom-made red and white polka dot Minnie Mouse costume dress",
  },
  {
    id: "bride-with-mother",
    image: "/images/gallery/bride-with-mother.png",
    alt: "Bride smiling alongside a woman in a black lace dress",
  },
  {
    id: "wedding-dress-on-hanger",
    image: "/images/gallery/wedding-dress-on-hanger.png",
    alt: "Ivory wedding dress with beaded floral detail hanging in front of a bookshelf",
  },
  {
    id: "bride-groom-bridge",
    image: "/images/gallery/bride-groom-bridge.png",
    alt: "Bride and groom embracing on a stone bridge",
  },
  {
    id: "lace-bow-closeup",
    image: "/images/gallery/lace-bow-closeup.png",
    alt: "Close-up detail of a wedding gown's beaded lace appliqué and bodice ruching",
  },
];

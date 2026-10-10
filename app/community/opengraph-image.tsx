import { renderOgImage } from "@/lib/og";

export const alt = "The Grove's community work: scholarships, free clinics, and an annual shoe drive.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Community",
    title: "Scholarships, free clinics, and a shoe drive.",
    photo: "community",
  });
}

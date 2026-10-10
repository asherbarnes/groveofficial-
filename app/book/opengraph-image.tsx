import { renderOgImage } from "@/lib/og";

export const alt = "Book The Grove's 10,000 sq ft facility with a FIBA-certified court in San Jose.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Book the Space",
    title: "10,000 sq ft. FIBA-certified court.",
    photo: "book",
  });
}

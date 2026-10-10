import { renderOgImage } from "@/lib/og";

export const alt = "Contact The Grove for partnerships, donations, volunteering, and events.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Partners, donors, and everything else.",
    photo: "home",
  });
}

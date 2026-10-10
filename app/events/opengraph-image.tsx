import { renderOgImage } from "@/lib/og";

export const alt = "Events at The Grove in San Jose: basketball competitions and community gatherings.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Events",
    title: "Competitions and community at The Grove.",
    photo: "events",
  });
}

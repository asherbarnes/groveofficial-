import { renderOgImage } from "@/lib/og";

export const alt = "The Eric Cordova Memorial Scholarship at The Grove.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "In memory and in motion",
    title: "The Eric Cordova Scholarship.",
    photo: "scholarship",
  });
}

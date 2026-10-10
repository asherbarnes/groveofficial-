import { renderOgImage } from "@/lib/og";

export const alt = "The Grove Community Collective: strengthening San Jose through basketball.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Community Collective",
    title: "Strengthening San Jose through basketball.",
    photo: "home",
  });
}

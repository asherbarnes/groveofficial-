import { renderOgImage } from "@/lib/og";

export const alt = "Showtime Basketball Academy trains at The Grove in San Jose. Your first session is free.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Showtime Basketball Academy",
    title: "Train at The Grove. First session free.",
    photo: "programs",
    showtime: true,
  });
}

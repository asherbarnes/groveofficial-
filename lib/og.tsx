import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/site";

/**
 * Shared renderer for each route's opengraph-image.tsx. Photos in assets/og/
 * are 600x630 JPEG crops of the .avif photos in public/images (social
 * scrapers don't read AVIF). Fonts are static TTFs because the image renderer
 * can't read woff2. The Grove's cards are near-black with off-white accents and
 * the white mark; Showtime's card (showtime: true) is amber with black text.
 */
export type OgPhoto = "home" | "programs" | "community" | "scholarship" | "book" | "events";

const asset = (...parts: string[]) => readFile(join(process.cwd(), "assets", ...parts));

export async function renderOgImage({
  eyebrow,
  title,
  photo,
  showtime = false,
}: {
  eyebrow: string;
  title: string;
  photo: OgPhoto;
  showtime?: boolean;
}) {
  const [oswald, sourceSans, photoData, mark] = await Promise.all([
    asset("fonts", "Oswald-SemiBold.ttf"),
    asset("fonts", "SourceSans3-Regular.ttf"),
    asset("og", `${photo}.jpg`),
    readFile(
      join(process.cwd(), "public", "brand", showtime ? "grove-mark-black.png" : "grove-mark-white.png"),
    ),
  ]);
  const ink = showtime ? "#151515" : "#f6f5f0";
  const accent = showtime ? "#151515" : "#f6f5f0";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: showtime ? "#ffb800" : "#151515",
          color: ink,
          fontFamily: "Source Sans 3",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 600,
            padding: "56px 56px 52px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
            <img
              src={`data:image/png;base64,${mark.toString("base64")}`}
              width={44}
              height={71}
              alt=""
            />
            <div style={{ fontFamily: "Oswald", fontSize: 34, letterSpacing: "0.06em" }}>
              THE GROVE
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "Oswald",
                fontSize: 20,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: accent,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                marginTop: 18,
                fontFamily: "Oswald",
                fontSize: 60,
                lineHeight: 1.02,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
            <div style={{ marginTop: 28, width: 72, height: 4, background: accent }} />
          </div>
          <div style={{ fontSize: 22, opacity: 0.75 }}>
            {`${site.location} · Est. ${site.founded}`}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
        <img
          src={`data:image/jpeg;base64,${photoData.toString("base64")}`}
          width={600}
          height={630}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Oswald", data: oswald, weight: 600, style: "normal" },
        { name: "Source Sans 3", data: sourceSans, weight: 400, style: "normal" },
      ],
    },
  );
}

import type { MetadataRoute } from "next";
import { absoluteUrl, sitePaths } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

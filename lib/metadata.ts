import type { Metadata } from "next";
import { mission } from "@/lib/content";
import { nav, site } from "@/lib/site";

type PageMeta = {
  /** Page title. Gets the "· The Grove" suffix unless `absoluteTitle` is set. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/community". */
  path: string;
  absoluteTitle?: boolean;
};

/**
 * Per-page metadata. Next.js merges `openGraph` and `twitter` shallowly, so each
 * page sets them in full here instead of inheriting the layout's (which would
 * give every page the home page's og:url and og:title). The og:image comes from
 * each route's `opengraph-image.tsx`.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} · ${site.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Every public route, for the sitemap. */
export const sitePaths = ["/", ...nav.map((item) => item.href)];

export function absoluteUrl(path: string) {
  return new URL(path, site.websiteUrl).toString();
}

/**
 * Home page JSON-LD. Verified PRODUCT.md facts only: no street address, phone,
 * email, hours, or nonprofit/tax status until the client confirms them (Q1, Q3, Q4).
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": absoluteUrl("/#organization"),
      name: site.name,
      alternateName: site.shortName,
      url: site.websiteUrl,
      description: mission.short,
      sport: "Basketball",
      foundingDate: String(site.founded),
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Jose",
        addressRegion: "CA",
        addressCountry: "US",
      },
      sameAs: [site.instagramUrl],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: site.websiteUrl,
      name: site.name,
      alternateName: site.shortName,
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};


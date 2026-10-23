export const site = {
  name: "The Grove Community Collective",
  shortName: "The Grove",
  /** Derived from the official mission ("strengthen our community through the platform of basketball"). */
  tagline: "Strengthening San Jose through basketball.",
  location: "San Jose, California",
  /** Street name only. Full address awaits client confirmation (PRODUCT.md Q3). */
  street: "South 10th St.",
  founded: 2017,
  foundedShort: "'17",
  facilitySqFt: "10,000",
  instagramHandle: "@the.grove.cc",
  instagramUrl: "https://www.instagram.com/the.grove.cc/",
  websiteUrl: "https://www.thegrove.work/",
  bookingUrl:
    "https://www.goodrun.app/location/showtime-basketball-at-the-grove-community-collective-900",
  bookingProvider: "GoodRun",
} as const;

/**
 * Showtime Basketball Academy owns enrollment, pricing, and schedules.
 * Join Showtime and related CTAs go to Showtime's site.
 */
export const showtimeLinks = {
  siteUrl: "https://www.showtimebasketballacademy.com/",
  membershipsUrl: "https://www.showtimebasketballacademy.com/memberships",
  instagramUrl: "https://www.instagram.com/showtimebasketball/",
  instagramHandle: "@showtimebasketball",
} as const;

/** Canonical primary nav — used by desktop header, mobile menu, and footer. */
export const nav = [
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/book", label: "Book the Space" },
  { href: "/contact", label: "Contact" },
] as const;

/** Off-site: Showtime owns enrollment. */
export const primaryCta = {
  href: showtimeLinks.siteUrl,
  label: "Join Showtime",
  external: true,
} as const;

export const secondaryCta = {
  href: "/book",
  label: "Book the Space",
  external: false,
} as const;

export const bookingCta = {
  href: site.bookingUrl,
  label: "Book the Space",
  external: true,
} as const;

/** Alias for Contact and other Showtime-bound CTAs. */
export const joinShowtimeCta = primaryCta;

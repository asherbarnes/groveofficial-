export const site = {
  name: "The Grove Community Collective",
  shortName: "The Grove",
  tagline: "Where San Jose comes to grow through basketball.",
  location: "San Jose, California",
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

export const nav = [
  { href: "/programs", label: "Programs" },
  { href: "/community", label: "Community" },
  { href: "/book", label: "Book the Space" },
  { href: "/contact", label: "Contact" },
] as const;

export const primaryCta = {
  href: "/programs",
  label: "Join Showtime",
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

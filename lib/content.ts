/**
 * Central content store.
 * Every fact here traces to PRODUCT.md (Verified). Do not invent facts.
 */

import { showtimeLinks } from "@/lib/site";

export const philosophy = {
  quote:
    "A grove is where a collective of trees grow together. Similarly, we are all choosing to continually be in a perpetual state of growth. Some of us are just seedlings starting along our path, others are seasoned trees standing tall, regardless we are all on the same soil, utilizing one another's roots to help build stronger foundations for our own growth.",
  source: "The Grove Community Collective",
} as const;

export const mission = {
  short:
    "The Grove is an organization that services and enriches the local community through the sport of basketball.",
  statement:
    "The Grove Community Collective is a nonprofit organization based in San Jose, CA. Our mission is to strengthen our community through the platform of basketball.",
  support:
    "At the heart of our program, our goal is to be the support we needed when we were younger.",
  commitment:
    "We are committed to creating opportunities for players and parents through the sport of basketball. We offer scholarships to help subsidize training costs, run free camps and clinics, and donate basketball shoes to players in need.",
  donors:
    "Our donors and boosters play a vital role. As the collective grows, we keep having each other's back.",
} as const;

/** Who the site serves, in priority order, and where each audience should go. */
export const audiences = [
  {
    audience: "Players and families",
    name: "Showtime Basketball Academy",
    blurb:
      "Year-round, development-first training in small groups of up to six. Your first session is free.",
    href: showtimeLinks.siteUrl,
    external: true,
  },
  {
    audience: "Athletes and event organizers",
    name: "Book the court",
    blurb:
      "A 10,000 sq ft facility with a FIBA-certified court, weight room, and event space. Book on GoodRun.",
    href: "/book",
  },
  {
    audience: "Donors and volunteers",
    name: "Eric Cordova Scholarship",
    blurb:
      "Free training, mentorship, and equipment and travel support for youth in underserved communities.",
    href: "/scholarship",
  },
  {
    audience: "The San Jose community",
    name: "Clinics, shoe drive, events",
    blurb:
      "Free camps and clinics, an annual shoe drive, and community events at the facility.",
    href: "/community",
  },
  {
    audience: "Businesses and partners",
    name: "Partner with The Grove",
    blurb: "Sponsorships, partnerships, and business inquiries.",
    href: "/contact",
  },
] as const;

export const facility = {
  summary:
    "Located in the heart of San Jose, The Grove is a 10,000 square foot training facility that doubles as a versatile event space.",
  features: [
    { label: "10,000 sq ft", detail: "Training facility and event space" },
    {
      label: "FIBA-certified court",
      detail:
        "Hardwood flooring and hoops of the same quality used in the Olympic basketball games",
    },
    { label: "Regulation floor", detail: "A pro-basketball regulation court" },
    { label: "Weight room", detail: "Fully equipped" },
  ],
} as const;

export const showtime = {
  name: "Showtime Basketball Academy",
  summary:
    "The Grove is home to Showtime Basketball Academy, our year-round basketball school.",
  approach:
    "Showtime is a development-first basketball academy built around long-term athlete growth, not an AAU-first program. Training runs in small groups of up to six players.",
  freeSession: "Your first session is free. Try one of Showtime's small group sessions.",
  /** Services as published on showtimebasketballacademy.com (2026-10-05). */
  programs: [
    {
      name: "Fundamentalists",
      blurb:
        "For entry-level players with at least one year of playing experience.",
    },
    {
      name: "Academy",
      blurb:
        "Small-group training for experienced athletes. An evaluation comes first.",
    },
    {
      name: "Individual Training",
      blurb: "1-on-1 and small-group sessions.",
    },
    {
      name: "Athletic Development",
      blurb: "Offered by Showtime. Ask them for current details.",
    },
  ],
  values: [
    { letter: "L", word: "Leadership" },
    { letter: "E", word: "Effort" },
    { letter: "A", word: "Attitude" },
    { letter: "D", word: "Discipline" },
  ],
} as const;

export const communityWork = [
  {
    title: "Scholarships",
    body: "The Eric Cordova Memorial Scholarship helps players cover training costs and adds mentorship and support for equipment, travel, and tournament fees.",
    href: "/scholarship",
  },
  {
    title: "Annual shoe drive",
    body: "Our goal is to provide every child in our program with a brand-new pair of basketball shoes. We also give out like-new shoes for outdoor play.",
    href: null,
  },
  {
    title: "Free camps and clinics",
    body: "Over the years we have organized and supported basketball camps and clinics, some with hundreds of kids in attendance.",
    href: null,
  },
  {
    title: "Nonprofit partners",
    body: "We partner with organizations that offer academic scholarships, support youth girls' basketball, provide mental health resources, and more.",
    href: null,
  },
] as const;

/** Historical proof only. Never present as upcoming. Source: research/events-inventory.md */
type PastEvent = {
  /** ISO date, from PRODUCT.md (Past events) */
  on: string;
  date: string;
  name: string;
  detail: string;
  memorial?: boolean;
  /** Run by Showtime: the date renders on an amber chip (Showtime's color) */
  showtime?: boolean;
};

export const pastEvents: readonly PastEvent[] = [
  {
    on: "2024-02-24",
    date: "Feb 2024",
    name: "The Grand Opening",
    detail: "Hundreds of community members, friends, and family opened the facility with us.",
  },
  {
    on: "2024-05-12",
    date: "May 2024",
    name: "Celebration of Life for Eric Cordova",
    memorial: true,
    detail: "Nearly 200 people gathered on the court. The scholarship in his name was established that day.",
  },
  {
    on: "2024-12-17",
    date: "Dec 2024",
    name: "Q&A with Dre Greenlaw",
    detail: "The San Francisco 49ers player talked with our community about his upbringing and his path to the NFL.",
  },
  {
    on: "2025-03-01",
    date: "Mar 2025",
    name: "Showtime Playmaker's Clinic",
    showtime: true,
    detail: "A free clinic for grades 5 to 8 on skill work, decision-making, and defense.",
  },
  {
    on: "2025-08-03",
    date: "Aug 2025",
    name: "The Cookout",
    detail: "A summer gathering with more than 15 sponsors and vendors, food, live music, and shooting contests.",
  },
] as const;

/** thegrove.work's date style: 2.24.2024 */
export function flyerDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${month}.${day}.${year}`;
}

export const scholarship = {
  name: "The Eric Cordova Memorial Scholarship",
  story:
    "For over a decade, Coach Eric gave his all to the game and the kids who played it.",
  quote: "Success is not about the wins or losses. It's about shaping lives.",
  origin:
    "The scholarship was established on May 12, 2024, at Coach Eric's Celebration of Life, where nearly 200 people gathered on the court at The Grove.",
  funding:
    "It is funded through our nonprofit and the generous contributions of those who believe in Coach Eric's vision.",
  provides: [
    "Free basketball training for youth in underserved communities",
    "Access to mentorship and a life skills workshop",
    "Support for equipment, travel, and tournament fees",
  ],
  waysToHelp: [
    "Donate to the scholarship fund",
    "Sponsor a young athlete",
    "Share Coach Eric's story",
    "Volunteer your time or expertise",
  ],
  /** Eligibility, application process, deadlines, amounts: unverified (PRODUCT.md Q15) */
  applicationVerified: false,
} as const;

export const partners = [
  {
    name: "LMNT",
    url: "https://drinklmnt.com",
    logo: "/images/lmntlogo.avif",
  },
  {
    name: "We Got Next Clothing",
    url: "https://wegotnextclothing.com",
    logo: "/images/wegotnextlogo.avif",
  },
  {
    name: "Play Brightly",
    url: "https://playbrightly.org",
    logo: "/images/playbrightlylogo.avif",
  },
  {
    name: "Rizing Tide Media",
    url: "https://rizingtidemedia.com",
    logo: "/images/rizingtidemedialogo.avif",
  },
  {
    name: "Heart Workers Union",
    url: "https://www.heartworkersunion.org",
    logo: "/images/heartworkersunionlogo.avif",
  },
  {
    name: "Perspire Sauna Studio",
    url: "https://www.perspiresaunastudio.com",
    logo: "/images/perspiresaunastudiologo.avif",
  },
  {
    name: "Forge Strength and Chiropractic",
    url: "https://strengthandchiropractic.com",
    logo: "/images/Fsclogo.avif",
  },
] as const;

/**
 * The Grove's own logo, from thegrove.work's high-resolution PNGs (trimmed; the
 * white version is the black artwork recolored). Use pending client OK and
 * vector originals (PRODUCT.md Q26). Never redraw or substitute it.
 */
export const brand = {
  markWhite: { src: "/brand/grove-mark-white.png", width: 249, height: 400 },
  markBlack: { src: "/brand/grove-mark-black.png", width: 249, height: 400 },
  lockupWhite: { src: "/brand/grove-lockup-white.png", width: 384, height: 600 },
  lockupBlack: { src: "/brand/grove-lockup-black.png", width: 384, height: 600 },
  alt: "The Grove",
} as const;

export const images = {
  hero: {
    src: "/images/zoomedoutgroupphotokids.avif",
    alt: "Youth players gathered on the court at The Grove",
  },
  showtime: {
    src: "/images/kiddoingfootworkdrill.avif",
    alt: "Young player working through a footwork drill at Showtime Basketball Academy",
  },
  facility: {
    src: "/images/kidsdoingfootworkdrills.avif",
    alt: "Players training on the court inside The Grove facility",
  },
  community: {
    src: "/images/dregreenlawwithkids.avif",
    alt: "Dre Greenlaw with kids at The Grove",
  },
  communityHuddle: {
    src: "/images/kidsinhuddle.avif",
    alt: "Players in a huddle at The Grove",
  },
  scholarship: {
    src: "/images/womanholdingplaqueericcordovascholarship.avif",
    alt: "Eric Cordova Scholarship plaque presentation",
  },
  ericCordova: {
    src: "/images/photoofericcordova.avif",
    alt: "Coach Eric Cordova",
  },
  scholarshipMemorial: {
    src: "/images/ericcordovamemorialscholarship.avif",
    alt: "Eric Cordova Memorial Scholarship",
  },
  social: [
    {
      src: "/images/zoomedoutgroupphotokids.avif",
      alt: "Group of youth players at The Grove",
    },
    {
      src: "/images/kiddoingfootworkdrill.avif",
      alt: "Footwork drill at Showtime",
    },
    {
      src: "/images/kidsinhuddle.avif",
      alt: "Team huddle at The Grove",
    },
    {
      src: "/images/kidsdoingfootworkdrills.avif",
      alt: "Players running drills at The Grove",
    },
    {
      src: "/images/dregreenlawwithkids.avif",
      alt: "Community gathering at The Grove",
    },
    {
      src: "/images/womanholdingplaqueericcordovascholarship.avif",
      alt: "Eric Cordova Scholarship moment",
    },
  ],
} as const;

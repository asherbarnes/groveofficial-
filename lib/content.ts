/**
 * Central content store.
 * Mark draft / unverified copy clearly. Do not invent facts.
 */

export const philosophy = {
  quote:
    "A grove is where a collective of trees grow together. Similarly, we are all choosing to continually be in a perpetual state of growth. Some of us are just seedlings starting along our path, others are seasoned trees standing tall, regardless we are all on the same soil, utilizing one another's roots to help build stronger foundations for our own growth.",
  source: "The Grove Community Collective",
} as const;

export const mission = {
  short:
    "The Grove is an organization that services and enriches the local community through the sport of basketball.",
  support:
    "At the heart of our program, our goal is to be the support we needed when we were younger.",
  commitment:
    "We are deeply committed to creating opportunities within our community, both for players and parents, through the sport of basketball. We offer scholarships to help offset training and camp/clinic costs, donate basketball shoes to players in need, and organize events and initiatives that bring outreach to our local community, promoting positivity and growth through basketball.",
} as const;

export const facility = {
  summary:
    "Located in the heart of San Jose, The Grove offers a 10,000 square foot training facility that doubles as a versatile event space.",
  features: [
    { label: "10,000 sq ft", detail: "Training facility in San Jose" },
    {
      label: "FIBA-certified hardwood",
      detail: "Professional-grade court flooring",
    },
    { label: "Regulation court", detail: "Built for real game work" },
    { label: "Weight room", detail: "Fully equipped training space" },
    { label: "Event space", detail: "Facility doubles for gatherings & events" },
  ],
} as const;

export const showtime = {
  name: "Showtime Basketball Academy",
  summary:
    "The Grove is home to Showtime Basketball Academy, our year-round basketball school.",
  /** Draft pathway: awaiting client verification */
  pathwayDraft: true,
  pathway: [
    {
      number: "01",
      name: "Fundamentals",
      blurb:
        "Build the base. Footwork, ball control, shooting form, and habits that stick.",
      draft: true,
    },
    {
      number: "02",
      name: "Select",
      blurb:
        "Raise the pace. Competitive training for players ready to sharpen decision-making and toughness.",
      draft: true,
    },
    {
      number: "03",
      name: "Elite",
      blurb:
        "Push the ceiling. High-level work for athletes chasing the next stage of their game.",
      draft: true,
    },
  ],
} as const;

export const ecosystem = [
  {
    name: "Showtime Basketball Academy",
    status: "confirmed" as const,
    blurb: "Year-round basketball school based at The Grove.",
    href: "/programs",
  },
  {
    name: "The Hoop Ministry",
    status: "unconfirmed" as const,
    blurb: "Details pending verification.",
    href: "/community",
  },
  {
    name: "Eric Cordova Scholarship",
    status: "confirmed" as const,
    blurb:
      "Player support funded through the nonprofit and community contributions.",
    href: "/scholarship",
  },
  {
    name: "Shoe donations",
    status: "confirmed" as const,
    blurb: "Basketball shoes donated to players in need.",
    href: "/community",
  },
  {
    name: "Community outreach",
    status: "confirmed" as const,
    blurb: "Events and initiatives that bring the game back to the neighborhood.",
    href: "/community",
  },
] as const;

export const scholarship = {
  name: "The Eric Cordova Scholarship",
  story:
    "For over a decade, Coach Eric gave his all to the game and the kids who played it.",
  funding:
    "This scholarship is funded through our nonprofit and the generous contributions of those who believe in Coach Eric's vision.",
  purpose:
    "The scholarship helps offset training and camp/clinic costs so players can keep growing through the game.",
  /** Application mechanics are unverified */
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

export const images = {
  logoWhite: {
    src: "/images/grove-logo-white.avif",
    alt: "The Grove Community Collective logo",
  },
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
    alt: "Community moment with kids at The Grove",
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
  detail: {
    src: "/images/kidsdoingfootworkdrills.avif",
    alt: "Training details on the Grove court",
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

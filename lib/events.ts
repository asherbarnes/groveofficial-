/**
 * Events shown on /events. Add an event by appending to `events`; the page sorts
 * it into Upcoming or Past on its own. Every fact needs a source (see
 * research/events-inventory.md). Never add placeholder dates or events.
 *
 * Dates are ISO 8601 with an explicit UTC offset (e.g. "2026-09-13T16:00:00-07:00"
 * for 4 PM Pacific daylight time), so classification never depends on the
 * server's local timezone.
 */

export const EVENT_TIMEZONE = "America/Los_Angeles";

export type EventImage = {
  /** Path under /public. Spaces are fine; `imageSrc()` encodes them. */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GroveEvent = {
  id: string;
  slug: string;
  title: string;
  /** One line, shown with the date. */
  summary: string;
  /** Paragraphs of verified copy. */
  description: string[];
  /** ISO 8601 with offset. Events without a valid start are not listed. */
  startDate: string;
  /** ISO 8601 with offset. Without it, the event turns past at the end of its local day. */
  endDate?: string;
  /** When doors open, if published. */
  doorsOpen?: string;
  timezone: typeof EVENT_TIMEZONE;
  venue: string;
  address?: string;
  /** Who ran the event, when it isn't The Grove itself. */
  organizer?: { name: string; url?: string; description?: string };
  category: string;
  /** e.g. "1v1 / 2v2 / 3v3" */
  format?: string;
  /** First image leads the feature; the second is the action/editorial image. */
  images: EventImage[];
  /** A public page about the event. For past events it is labeled as a record, never as tickets. */
  externalUrl?: string;
  externalLabel?: string;
  /** Where the facts came from (not rendered). */
  sourceUrls: string[];
};

export const events: GroveEvent[] = [
  {
    id: "bux-island-back2bizness-2026",
    slug: "bux-island-back2bizness",
    title: "Bux Island: Back2Bizness",
    summary: "1v1, 2v2, and 3v3 basketball, hosted at The Grove.",
    description: [
      "Bux Island is a Bay Area basketball platform built around competitive 1v1 and other short-sided formats. Its events bring together college-level players, local basketball personalities, and streetball competitors.",
      "For Back2Bizness, Bux Island brought that format to our court in San Jose: an afternoon and evening of 1v1, 2v2, and 3v3 basketball at The Grove.",
    ],
    startDate: "2026-09-13T16:00:00-07:00",
    endDate: "2026-09-13T21:00:00-07:00",
    doorsOpen: "2026-09-13T15:30:00-07:00",
    timezone: EVENT_TIMEZONE,
    venue: "The Grove Community Collective",
    address: "2099 S 10th St, San Jose, CA",
    organizer: {
      name: "Bux Island",
      url: "https://www.instagram.com/buxisland/",
      description: "Bay Area 1v1 basketball platform",
    },
    category: "Basketball",
    format: "1v1 / 2v2 / 3v3",
    images: [
      {
        src: "/images/Bux_Islane_Back2Bizness_Dunk.png",
        alt: "A player in a white tank top and maroon shorts rises for a two-handed dunk at Back2Bizness while an opponent in an Oakland vs Everybody shirt watches, with spectators seated courtside at The Grove.",
        width: 1480,
        height: 1850,
      },
      {
        src: "/images/Bux _Island_Back2Bizness.png",
        alt: "Two players embrace and smile on the court at Back2Bizness, one holding a basketball, with the crowd and a hoop behind them at The Grove.",
        width: 1536,
        height: 1920,
      },
    ],
    externalUrl: "https://www.eventbrite.com/e/bux-island-back2bizness-tickets-1999203762270",
    externalLabel: "View event details",
    sourceUrls: [
      "https://www.eventbrite.com/e/bux-island-back2bizness-tickets-1999203762270",
      "https://www.instagram.com/reel/DcxAe7dJBwC/",
      "https://www.instagram.com/reel/DdM3MPVyQ13/",
      "https://www.instagram.com/buxisland/",
    ],
  },
];

/** next/image needs spaces in public filenames percent-encoded. */
export function imageSrc(src: string) {
  return encodeURI(src);
}

function instant(iso: string | undefined) {
  if (!iso) return null;
  const ms = Date.parse(iso);
  return Number.isNaN(ms) ? null : ms;
}

/** Offset of `timeZone` from UTC at `ms`, in minutes (e.g. -420 for PDT). */
function zoneOffset(ms: number, timeZone: string) {
  const name = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(ms)
    .find((part) => part.type === "timeZoneName")?.value;
  const match = name?.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  if (!match) return 0;
  const minutes = Number(match[2]) * 60 + Number(match[3] ?? 0);
  return match[1] === "-" ? -minutes : minutes;
}

/** The moment the event's local calendar day ends, in the event's timezone. */
function endOfLocalDay(ms: number, timeZone: string) {
  const [y, m, d] = new Intl.DateTimeFormat("en-CA", { timeZone })
    .format(ms)
    .split("-")
    .map(Number);
  const nextMidnightUtc = Date.UTC(y, m - 1, d + 1);
  return nextMidnightUtc - zoneOffset(nextMidnightUtc, timeZone) * 60_000;
}

/** An event becomes past once its end time passes (or its local day ends, if no end is set). */
export function eventEndsAt(event: GroveEvent) {
  const start = instant(event.startDate);
  if (start === null) return null;
  return instant(event.endDate) ?? endOfLocalDay(start, event.timezone);
}

/** Splits events into upcoming (soonest first) and past (newest first). Undated events are left out. */
export function groupEvents(list: GroveEvent[], now: number = Date.now()) {
  const dated = list.filter((event) => instant(event.startDate) !== null);
  const byStart = (a: GroveEvent, b: GroveEvent) =>
    instant(a.startDate)! - instant(b.startDate)!;

  return {
    upcoming: dated.filter((event) => eventEndsAt(event)! > now).sort(byStart),
    past: dated
      .filter((event) => eventEndsAt(event)! <= now)
      .sort((a, b) => byStart(b, a)),
  };
}

const parts = (iso: string, timeZone: string, options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-US", { timeZone, ...options }).format(Date.parse(iso));

/** "Sunday, September 13, 2026" */
export function formatEventDate(event: GroveEvent) {
  return parts(event.startDate, event.timezone, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "9.13.2026", thegrove.work's date style, in the event's timezone. */
export function formatFlyerDate(event: GroveEvent) {
  const [m, d, y] = parts(event.startDate, event.timezone, {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).split("/");
  return `${m}.${d}.${y}`;
}

/** "4:00 PM – 9:00 PM" (or just the start time) */
export function formatEventTime(event: GroveEvent) {
  const time = (iso: string) =>
    parts(iso, event.timezone, { hour: "numeric", minute: "2-digit" }).replace(/ /g, " ");
  return event.endDate
    ? `${time(event.startDate)} – ${time(event.endDate)}`
    : time(event.startDate);
}

/** "3:30 PM" */
export function formatDoorsOpen(event: GroveEvent) {
  if (!event.doorsOpen) return null;
  return parts(event.doorsOpen, event.timezone, { hour: "numeric", minute: "2-digit" }).replace(
    / /g,
    " ",
  );
}

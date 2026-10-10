import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { ArrowUpRight } from "@/components/Icon";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import {
  events,
  formatDoorsOpen,
  formatEventDate,
  formatEventTime,
  formatFlyerDate,
  groupEvents,
  imageSrc,
  type GroveEvent,
} from "@/lib/events";
import { pageMetadata } from "@/lib/metadata";
import { bookingCta, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Events | The Grove Community Collective",
  absoluteTitle: true,
  description:
    "Upcoming and past basketball and community events at The Grove in San Jose, including Bux Island: Back2Bizness, a night of 1v1, 2v2, and 3v3 basketball.",
  path: "/events",
});

/** Re-render hourly so an event moves from Upcoming to Past without a rebuild. */
export const revalidate = 3600;

export default function EventsPage() {
  const { upcoming, past } = groupEvents(events);
  const [featured, ...earlier] = past;

  return (
    <>
      <section className="bg-black text-paper">
        <div className="container-grove grid items-end gap-x-16 gap-y-8 pt-16 pb-14 md:pt-24 md:pb-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <h1 className="font-display text-[clamp(3.5rem,17vw,8rem)] leading-[0.86]">
            Events.
          </h1>
          <div className="lg:pb-3">
            <span aria-hidden="true" className="brand-rule brand-rule-light" />
            <p className="mt-6 max-w-md text-lg text-paper/75">
              Basketball competitions, community gatherings, and everything in
              between. These are the events on our court in San Jose, past and
              upcoming.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="upcoming-heading" className="bg-paper py-16 md:py-20">
        <div className="container-grove grid gap-x-20 gap-y-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <h2 id="upcoming-heading" className="font-display text-4xl leading-[0.98] md:text-5xl">
            Upcoming Events
          </h2>

          {upcoming.length > 0 ? (
            <ol className="border-t-[3px] border-black">
              {upcoming.map((event) => (
                <EventRow key={event.id} event={event} />
              ))}
            </ol>
          ) : (
            <div className="border-t-[3px] border-black pt-6">
              <p className="font-display text-2xl leading-[1.05] md:text-3xl">
                No upcoming events announced.
              </p>
              <p className="mt-2 text-black/70">
                New events are announced on Instagram first.
              </p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-medium tracking-[0.1em] text-forest uppercase underline decoration-forest/40 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-forest"
              >
                Follow us on Instagram
                <ArrowUpRight />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {featured ? (
        <section aria-labelledby="past-heading" className="bg-black py-20 text-paper md:py-28">
          <div className="container-grove">
            <SectionHeading id="past-heading" title="Past Events" tone="dark" size="md" brand="none" />
            <FeaturedEvent event={featured} />

            {earlier.length > 0 ? (
              <ol className="mt-20 border-t border-paper/20">
                {earlier.map((event) => (
                  <EventRow key={event.id} event={event} tone="dark" />
                ))}
              </ol>
            ) : null}
          </div>
        </section>
      ) : null}

      <CTASection
        title="Host your event here."
        body="The Grove is a 10,000 square foot training facility that doubles as a versatile event space. Availability and rates are on GoodRun."
        primary={bookingCta}
        secondary={{ href: "/contact?topic=event", label: "Ask about an event" }}
      />
    </>
  );
}

/** The latest past event: a two-photo editorial feature. */
function FeaturedEvent({ event }: { event: GroveEvent }) {
  const [lead, action] = event.images;
  const doors = formatDoorsOpen(event);
  const facts = [
    { term: "Date", detail: formatEventDate(event) },
    {
      term: "Time",
      detail: formatEventTime(event),
      note: doors ? `Doors opened at ${doors}` : undefined,
    },
    { term: "Venue", detail: event.venue, note: event.address },
    { term: "Format", detail: event.format ? `${event.format} ${event.category}` : event.category },
    event.organizer
      ? { term: "Organizer", detail: event.organizer.name, note: event.organizer.description }
      : null,
  ].filter((fact) => fact !== null);

  return (
    <article aria-labelledby={`${event.slug}-title`} className="mt-10">
      <header className="grid items-end gap-x-16 gap-y-6 border-t-[3px] border-paper pt-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <h3
          id={`${event.slug}-title`}
          className="font-display text-[clamp(2.75rem,10vw,6.5rem)] leading-[0.9]"
        >
          {event.title}
        </h3>
        <div className="lg:pb-2">
          <time
            dateTime={event.startDate}
            className="block font-display text-4xl leading-none md:text-5xl"
          >
            {formatFlyerDate(event)}
          </time>
          <p className="mt-3 max-w-sm text-lg text-paper/75">{event.summary}</p>
        </div>
      </header>

      <dl className="mt-10 grid grid-cols-1 border-t border-paper/20 min-[360px]:grid-cols-2 lg:grid-cols-5">
        {facts.map((fact) => (
          <div key={fact.term} className="border-b border-paper/20 py-4 pr-4 sm:pr-6 lg:border-b-0 lg:border-r lg:pl-5 lg:first:pl-0 lg:last:border-r-0">
            <dt className="label text-paper/65">{fact.term}</dt>
            <dd className="mt-1.5 text-paper">
              {fact.detail}
              {fact.note ? <span className="block text-sm text-paper/70">{fact.note}</span> : null}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-x-10 gap-y-10 lg:mt-14 lg:grid-cols-12">
        {lead ? (
          <Photo
            src={imageSrc(lead.src)}
            alt={lead.alt}
            aspect="aspect-[4/5]"
            className="lg:col-span-7"
            sizes="(max-width: 1024px) 100vw, 690px"
          />
        ) : null}

        <div className="flex flex-col gap-10 lg:col-span-5">
          <div>
            {event.description.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg text-paper/80 first:mt-0">
                {paragraph}
              </p>
            ))}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {event.externalUrl ? (
                <ButtonLink href={event.externalUrl} external variant="light" size="lg">
                  {event.externalLabel ?? "View event details"}
                </ButtonLink>
              ) : null}
              {event.organizer?.url ? (
                <a
                  href={event.organizer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-medium tracking-[0.1em] uppercase underline decoration-paper/50 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-paper"
                >
                  {event.organizer.name} on Instagram
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </div>

          {action ? (
            <Photo
              src={imageSrc(action.src)}
              alt={action.alt}
              aspect="aspect-[4/5]"
              className="lg:mt-auto"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Compact row for upcoming events and older past events. */
function EventRow({ event, tone = "light" }: { event: GroveEvent; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <li
      className={[
        "grid gap-x-8 gap-y-2 border-b py-7 sm:grid-cols-[11rem_1fr]",
        dark ? "border-paper/20" : "border-black/15",
      ].join(" ")}
    >
      <time
        dateTime={event.startDate}
        className={["font-display text-3xl leading-none md:text-4xl", dark ? "text-paper" : "text-forest"].join(" ")}
      >
        {formatFlyerDate(event)}
      </time>
      <div>
        <h3 className="font-display text-2xl leading-[1.05] md:text-3xl">{event.title}</h3>
        <p className={["mt-2", dark ? "text-paper/75" : "text-black/70"].join(" ")}>
          {formatEventTime(event)} · {event.venue}
        </p>
        <p className={["mt-1", dark ? "text-paper/75" : "text-black/70"].join(" ")}>
          {event.summary}
        </p>
        {event.externalUrl ? (
          <a
            href={event.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "mt-2 inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-medium tracking-[0.1em] uppercase underline decoration-1 underline-offset-[0.5em]",
              dark ? "decoration-paper/50" : "text-forest decoration-forest/40",
            ].join(" ")}
          >
            {event.externalLabel ?? "View event details"}
            <ArrowUpRight />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}

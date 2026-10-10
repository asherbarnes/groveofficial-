import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { facility, flyerDate, images, pastEvents } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { bookingCta, site } from "@/lib/site";

/** Events held at the facility, as historical proof (not a schedule). The memorial stays off the rental pitch. */
const hostedEvents = pastEvents.filter((event) => !event.memorial);

const steps = [
  `Open The Grove on ${site.bookingProvider} to see availability and rates.`,
  "Pick your date and time and reserve it there.",
  "Planning an event or something custom? Send us a note after checking availability.",
];

export const metadata: Metadata = pageMetadata({
  title: "Book the Court and Event Space in San Jose",
  description:
    "Book The Grove in San Jose on GoodRun: a 10,000 sq ft facility with a FIBA-certified court, weight room, and event space.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section className="bg-black text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="gutter-start flex flex-col justify-end pr-5 pt-14 pb-12 sm:pr-10 md:pt-20 lg:pb-16 lg:pr-14">
            <h1 className="font-display text-[3.25rem] leading-[0.92] sm:text-7xl md:text-8xl">
              Book <span className="block">the space.</span>
            </h1>
            <span aria-hidden="true" className="brand-rule brand-rule-light mt-7" />
            <p className="mt-6 max-w-lg text-lg text-paper/75">
              {facility.summary} Book court time for training or reserve the
              space for your event. Availability and rates are on{" "}
              {site.bookingProvider}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={bookingCta.href} external variant="light" size="lg">
                {bookingCta.label}
              </ButtonLink>
              <ButtonLink href="/contact?topic=event" variant="outline-light" size="lg">
                Ask about an event
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-paper/70">
              Located on {site.street}, San Jose.
            </p>
          </div>
          <Photo
            src={images.facility.src}
            alt={images.facility.alt}
            priority
            aspect="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[38rem]"
            className="h-full"
          />
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-grove grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading title="Built for the game." size="md">
            <p>
              A clean and welcoming space for athletes and event attendees
              alike, owned and run by The Grove.
            </p>
          </SectionHeading>

          <dl className="grid border-t-[3px] border-black sm:grid-cols-2">
            {facility.features.map((feature, index) => (
              <div
                key={feature.label}
                className={[
                  "border-b border-black/15 py-6",
                  index % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6",
                ].join(" ")}
              >
                <dt className="font-display text-2xl md:text-3xl">{feature.label}</dt>
                <dd className="mt-1.5 text-black/70">{feature.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <div className="container-grove grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-display text-4xl leading-[0.98] md:text-5xl">
              How booking works
            </h2>
            <ol className="mt-8 border-t border-black/15">
              {steps.map((step, index) => (
                <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/15 py-5">
                  <span className="font-display text-3xl leading-none text-forest">
                    {index + 1}
                  </span>
                  <p className="text-black/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-4xl leading-[0.98] md:text-5xl">
              Hosted here
            </h2>
            <p className="mt-6 text-black/70">
              For athletes and event organizers alike. The space has hosted
              community celebrations, clinics, and guest speakers.
            </p>
            <ul className="mt-6 border-t border-black/15">
              {hostedEvents.map((event) => (
                <li key={event.name} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-black/15 py-3.5">
                  <time
                    dateTime={event.on}
                    className={[
                      "self-start justify-self-start font-display text-lg",
                      event.showtime ? "bg-amber px-1.5 text-black" : "text-forest",
                    ].join(" ")}
                  >
                    {flyerDate(event.on)}
                  </time>
                  <span className="text-black/80">{event.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-forest text-paper">
        <div className="container-grove flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="font-display text-5xl leading-[0.95] md:text-6xl">
              Ready to lock it in?
            </h2>
            <p className="mt-4 text-paper/75">
              Availability, rates, and reservations are on {site.bookingProvider}.
            </p>
          </div>
          <ButtonLink href={bookingCta.href} external variant="light" size="lg">
            {bookingCta.label}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { facility, images, pastEvents } from "@/lib/content";
import { bookingCta, site } from "@/lib/site";

/** Events held at the facility, as historical proof (not a schedule). The memorial stays off the rental pitch. */
const hostedEvents = pastEvents.filter((event) => !event.memorial);

export const metadata: Metadata = {
  title: "Book the Space",
  description:
    "Book The Grove in San Jose on GoodRun: a 10,000 sq ft facility with a FIBA-certified court, weight room, and event space.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <section className="bg-forest text-cream">
        <div className="container-grove py-16 md:py-24">
          <p className="eyebrow text-wood-light">Facility rental</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-8xl">
            Book the space.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/75">
            {facility.summary} Book court time for training or reserve the
            space for your event. Availability and rates are on{" "}
            {site.bookingProvider}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={bookingCta.href} external variant="cream" size="lg">
              {bookingCta.label}
            </ButtonLink>
            <ButtonLink href="/contact?topic=event" variant="secondary" size="lg">
              Ask about an event
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-cream/55">
            Booking opens {site.bookingProvider} in a new tab. Located on{" "}
            {site.street}, San Jose.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="The facility" title="Built for the game.">
              <p>
                A clean and welcoming space for athletes and event attendees
                alike, owned and run by The Grove.
              </p>
            </SectionHeading>

            <ul className="mt-10 divide-y divide-black/15 border-y border-black/15">
              {facility.features.map((feature) => (
                <li key={feature.label} className="py-4">
                  <p className="font-display text-2xl tracking-[0.05em]">
                    {feature.label}
                  </p>
                  <p className="mt-1 text-black/60">{feature.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <Photo
            src={images.facility.src}
            alt={images.facility.alt}
            aspect="aspect-[16/11]"
          />
        </div>
      </section>

      <section className="bg-black py-20 text-cream md:py-24">
        <div className="container-grove grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl tracking-[0.05em] md:text-5xl">
              How booking works
            </h2>
            <ol className="mt-5 space-y-4 text-cream/70">
              {[
                `Open The Grove on ${site.bookingProvider} to see availability and rates.`,
                "Pick your date and time and reserve it there.",
                "Planning an event or something custom? Send us a note after checking availability.",
              ].map((step, index) => (
                <li key={step} className="border-l border-wood pl-4">
                  <span className="font-display text-sm tracking-[0.14em] text-wood-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-[0.05em] md:text-5xl">
              Hosted here
            </h2>
            <p className="mt-5 text-cream/70">
              For athletes and event organizers alike. The space has hosted
              community celebrations, clinics, and guest speakers.
            </p>
            <ul className="mt-5 divide-y divide-cream/15 border-y border-cream/15">
              {hostedEvents.map((event) => (
                <li key={event.name} className="flex gap-4 py-3">
                  <span className="w-20 shrink-0 font-display text-sm tracking-[0.1em] text-wood-light">
                    {event.date}
                  </span>
                  <span className="text-cream/80">{event.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container-grove mt-14">
          <div className="flex flex-col gap-6 border border-cream/20 p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <p className="font-display text-3xl tracking-[0.05em] md:text-4xl">
                Ready to lock it in?
              </p>
              <p className="mt-2 text-cream/60">
                Opens {site.bookingProvider} in a new tab.
              </p>
            </div>
            <ButtonLink href={bookingCta.href} external variant="cream" size="lg">
              {bookingCta.label}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

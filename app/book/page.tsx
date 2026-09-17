import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { facility, images } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book the Space",
  description:
    "Book The Grove Community Collective facility in San Jose: regulation court, weight room, and event space via GoodRun.",
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
            {facility.summary} Rent court time, host an event, or bring your
            group into a space built for the game.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={site.bookingUrl} external variant="cream" size="lg">
              Book on {site.bookingProvider}
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Rental inquiry
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="The Grove" title="A home for real basketball work.">
              <p>
                The Grove Community Collective is a San Jose basketball community.
                The facility is where that community gathers: for training,
                gatherings, and events that need a serious court.
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
              Who it&apos;s for
            </h2>
            <p className="mt-5 text-cream/70">
              Teams, trainers, camps, clinics, community groups, and event
              organizers who need a clean, welcoming basketball space in San Jose.
              If you are unsure whether your use fits, send a rental inquiry.
            </p>
          </div>
          <div>
            <h2 className="font-display text-4xl tracking-[0.05em] md:text-5xl">
              How booking works
            </h2>
            <ol className="mt-5 space-y-4 text-cream/70">
              <li className="border-l border-wood pl-4">
                <span className="font-display text-sm tracking-[0.14em] text-wood-light">
                  01
                </span>
                <p className="mt-1">
                  Review the facility details and available inventory on{" "}
                  {site.bookingProvider}.
                </p>
              </li>
              <li className="border-l border-wood pl-4">
                <span className="font-display text-sm tracking-[0.14em] text-wood-light">
                  02
                </span>
                <p className="mt-1">
                  Reserve your date and time through the official booking link.
                </p>
              </li>
              <li className="border-l border-wood pl-4">
                <span className="font-display text-sm tracking-[0.14em] text-wood-light">
                  03
                </span>
                <p className="mt-1">
                  Questions about events or custom needs? Contact The Grove after
                  checking availability.
                </p>
              </li>
            </ol>
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
            <ButtonLink href={site.bookingUrl} external variant="cream" size="lg">
              Book the Space
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

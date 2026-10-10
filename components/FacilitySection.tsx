import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { facility, images } from "@/lib/content";
import { secondaryCta, site } from "@/lib/site";

export function FacilitySection() {
  return (
    <section className="bg-forest text-paper">
      <div className="grid lg:grid-cols-2">
        <Photo
          src={images.facility.src}
          alt={images.facility.alt}
          aspect="aspect-[16/11] h-full lg:aspect-auto lg:min-h-[44rem]"
          className="h-full"
        />

        <div className="gutter-end flex flex-col justify-center py-16 pl-5 sm:pl-10 md:py-24 lg:pl-16">
          <SectionHeading title="Built for the game." tone="dark">
            <p>
              {facility.summary} We own it, and it is a clean and welcoming
              space for athletes and event attendees alike.
            </p>
          </SectionHeading>

          <dl className="mt-10 grid grid-cols-2 border-t border-paper/20">
            {facility.features.map((feature, index) => (
              <div
                key={feature.label}
                className={[
                  "border-b border-paper/20 py-5",
                  index % 2 === 0 ? "pr-5" : "border-l border-paper/20 pl-5",
                ].join(" ")}
              >
                <dt className="font-display text-xl md:text-2xl">{feature.label}</dt>
                <dd className="mt-1 text-sm text-paper/70">{feature.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={secondaryCta.href} variant="light" size="lg">
              {secondaryCta.label}
            </ButtonLink>
            <p className="text-sm text-paper/70">
              Court and event rentals through {site.bookingProvider}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

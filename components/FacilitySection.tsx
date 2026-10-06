import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { facility, images } from "@/lib/content";
import { secondaryCta, site } from "@/lib/site";

export function FacilitySection() {
  return (
    <section className="bg-forest-dark text-cream">
      <div className="grid lg:grid-cols-2">
        <Photo
          src={images.facility.src}
          alt={images.facility.alt}
          aspect="aspect-[16/11] lg:aspect-auto lg:min-h-full"
          className="h-full"
        />

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-24 lg:px-14">
          <SectionHeading
            eyebrow="The Grove facility"
            title="Built for the game."
            tone="dark"
          >
            <p>
              {facility.summary} We own it, and it is a clean and welcoming
              space for athletes and event attendees alike.
            </p>
          </SectionHeading>

          <ul className="mt-10 space-y-0 border-t border-cream/20">
            {facility.features.map((feature) => (
              <li
                key={feature.label}
                className="grid grid-cols-[1fr_auto] gap-4 border-b border-cream/20 py-4"
              >
                <div>
                  <p className="font-display text-xl tracking-[0.06em] md:text-2xl">
                    {feature.label}
                  </p>
                  <p className="mt-1 text-sm text-cream/55">{feature.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <ButtonLink href={secondaryCta.href} variant="cream" size="lg">
              {secondaryCta.label}
            </ButtonLink>
            <p className="text-sm text-cream/50">
              Rentals via {site.bookingProvider}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { images } from "@/lib/content";
import { primaryCta, secondaryCta, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-black text-paper">
      <div className="grid lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="gutter-start flex flex-col justify-end pr-5 pt-14 pb-12 sm:pr-10 md:pt-20 lg:pb-16 lg:pr-14">
          {/* The tagline is part of the h1 so the page heading says what The Grove is. */}
          <h1>
            <span className="animate-rise block font-display text-[clamp(3.5rem,17vw,8rem)] leading-[0.86] tracking-[0.005em]">
              {site.shortName}.
            </span>
            {" "}
            <span
              aria-hidden="true"
              className="animate-line delay-1 brand-rule brand-rule-light mt-7"
            />
            {" "}
            <span className="animate-rise delay-2 mt-6 block max-w-md font-display text-2xl font-medium leading-[1.1] tracking-[0.03em] text-paper sm:text-[1.75rem]">
              {site.tagline}
            </span>
          </h1>

          <p className="animate-rise delay-3 mt-5 max-w-md text-paper/70">
            A San Jose basketball nonprofit with its own{" "}
            {site.facilitySqFt} sq ft training facility. Home of Showtime
            Basketball Academy, the Eric Cordova Scholarship, free clinics,
            and an annual shoe drive.
          </p>

          <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href={primaryCta.href}
              external={primaryCta.external}
              variant="showtime"
              size="lg"
            >
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="outline-light" size="lg">
              {secondaryCta.label}
            </ButtonLink>
          </div>

          <p className="label mt-12 text-paper/65">
            {site.location} · Est. {site.founded}
          </p>
        </div>

        <Photo
          src={images.hero.src}
          alt={images.hero.alt}
          priority
          aspect="aspect-[4/3] h-full lg:aspect-auto"
          className="h-full"
          imgClassName="animate-fade object-[50%_40%]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

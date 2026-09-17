import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { images, mission } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-cream">
      <div className="container-wide grid min-h-[calc(100svh-4.25rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-end px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <p className="eyebrow animate-rise text-wood-light">
            San Jose · Since {site.foundedShort}
          </p>

          <h1 className="animate-rise delay-1 mt-5 font-display text-[clamp(4.5rem,16vw,9.5rem)] leading-[0.82] tracking-[0.02em]">
            THE
            <br />
            GROVE.
          </h1>

          <div className="animate-line delay-2 mt-6 h-px w-28 bg-wood" />

          <p className="animate-rise delay-2 mt-6 max-w-md font-display text-xl tracking-[0.08em] text-cream/90 sm:text-2xl">
            {site.tagline.toUpperCase()}
          </p>

          <p className="animate-rise delay-3 mt-4 max-w-md text-cream/65">
            {mission.short} Basketball is how we grow — together.
          </p>

          <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/programs" variant="cream" size="lg">
              Join Showtime
            </ButtonLink>
            <ButtonLink href="/book" variant="secondary" size="lg">
              Book the Space
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[52vh] lg:min-h-full">
          <Photo
            src={images.hero.src}
            alt={images.hero.alt}
            priority
            aspect="h-full min-h-[52vh] lg:min-h-full"
            className="h-full"
            imgClassName="animate-fade"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/40" />
          <p className="absolute bottom-4 left-4 font-display text-xs tracking-[0.2em] text-cream/80 md:bottom-6 md:left-6">
            COMMUNITY FIRST · COURT ALWAYS
          </p>
        </div>
      </div>
    </section>
  );
}

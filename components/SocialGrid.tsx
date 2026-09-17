import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { images } from "@/lib/content";
import { site } from "@/lib/site";

export function SocialGrid() {
  return (
    <section className="bg-black py-20 text-cream md:py-24">
      <div className="container-grove">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-wood-light">Social</p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.05em] md:text-6xl">
              See the work.
            </h2>
            <p className="mt-4 max-w-md text-cream/65">
              The community lives on Instagram. Training days, gatherings, and
              the day-to-day of The Grove.
            </p>
          </div>
          <ButtonLink
            href={site.instagramUrl}
            external
            variant="cream"
            size="lg"
          >
            Follow {site.instagramHandle}
          </ButtonLink>
        </div>

        <div className="mt-12 columns-2 gap-3 md:columns-3 md:gap-4">
          {images.social.map((item, index) => (
            <div
              key={item.src}
              className={[
                "relative mb-3 break-inside-avoid overflow-hidden bg-forest-dark md:mb-4",
                index % 3 === 1 ? "aspect-[4/5]" : "aspect-square",
              ].join(" ")}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-cream/40">
          Follow {site.instagramHandle} for more from the collective.
        </p>
      </div>
    </section>
  );
}

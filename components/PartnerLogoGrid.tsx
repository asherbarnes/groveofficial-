import Image from "next/image";
import { partners } from "@/lib/content";

/** Normalized logo boxes: every partner gets the same cell and the same max height. */
export function PartnerLogoGrid() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="container-grove">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-4xl leading-[0.98] md:text-5xl">
            Backed by the crew.
          </h2>
          <p className="max-w-sm text-black/70">
            Partners of The Grove Community Collective.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 border-l border-t border-black/15 sm:grid-cols-4 lg:grid-cols-7">
          {partners.map((partner) => (
            <li key={partner.name} className="border-b border-r border-black/15 bg-white">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} (opens in a new tab)`}
                className="group flex aspect-square items-center justify-center p-5"
              >
                <span className="relative block h-full w-full transition-transform duration-300 group-hover:scale-[1.04]">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 45vw, 170px"
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { showtime } from "@/lib/content";

export function ProgramPathway() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-grove">
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading eyebrow="Showtime Basketball Academy" title="Find your game.">
            <p>{showtime.summary}</p>
          </SectionHeading>
          <div className="md:text-right">
            <ButtonLink href="/programs" variant="primary" size="lg">
              Join Showtime
            </ButtonLink>
            {showtime.pathwayDraft ? (
              <p className="draft-note md:text-right">
                Pathway details pending verification
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-14 space-y-0 border-t border-black/15">
          {showtime.pathway.map((level, index) => {
            const isLast = index === showtime.pathway.length - 1;
            return (
              <Link
                key={level.number}
                href="/programs"
                className={[
                  "group grid gap-4 border-b border-black/15 py-8 transition-colors md:grid-cols-[7rem_1fr_auto] md:items-end md:gap-10",
                  index === 0
                    ? "hover:bg-forest hover:text-cream"
                    : index === 1
                      ? "hover:bg-black hover:text-cream"
                      : "hover:bg-wood hover:text-black",
                ].join(" ")}
              >
                <span
                  className={[
                    "font-display text-5xl tracking-[0.04em] text-forest transition-colors group-hover:text-inherit",
                    index === 2 ? "md:text-6xl" : "",
                  ].join(" ")}
                >
                  {level.number}
                </span>
                <div className="px-0 md:px-2">
                  <h3
                    className={[
                      "font-display tracking-[0.06em]",
                      index === 0
                        ? "text-3xl md:text-4xl"
                        : index === 1
                          ? "text-4xl md:text-5xl"
                          : "text-5xl md:text-6xl",
                    ].join(" ")}
                  >
                    {level.name}
                  </h3>
                  <p
                    className={[
                      "mt-3 max-w-xl text-black/65 transition-colors group-hover:text-inherit group-hover:opacity-85",
                      isLast ? "md:text-lg" : "",
                    ].join(" ")}
                  >
                    {level.blurb}
                  </p>
                </div>
                <span className="font-display text-xs tracking-[0.18em] text-gray transition-colors group-hover:text-inherit">
                  Draft · Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

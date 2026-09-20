import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { images, showtime } from "@/lib/content";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Showtime Basketball Academy: the year-round basketball school based at The Grove Community Collective in San Jose.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-black text-cream">
        <div className="container-grove grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:gap-16">
          <div>
            <p className="eyebrow text-wood-light">Showtime Basketball Academy</p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-8xl">
              Find your
              <br />
              game.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              {showtime.summary} Come get some work in, with a community behind
              you.
            </p>
            <div className="mt-8">
              <ButtonLink href="#pathway" variant="cream" size="lg">
                See the pathway
              </ButtonLink>
            </div>
          </div>
          <Photo
            src={images.showtime.src}
            alt={images.showtime.alt}
            aspect="aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-narrow">
          <SectionHeading eyebrow="The academy" title="Year-round. Based at The Grove.">
            <p>
              Showtime is the primary basketball development program of The Grove
              Community Collective. The facility is the home. The academy is where
              players put in the work, from first reps to competitive growth.
            </p>
            <p className="mt-4">
              Ages, schedules, pricing, and coach details will be published once
              confirmed. Until then, reach out through Contact or follow{" "}
              <span className="text-forest">@the.grove.cc</span> for updates.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section id="pathway" className="bg-forest-dark py-20 text-cream md:py-28">
        <div className="container-grove">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Draft pathway"
              title="Fundamentals. Select. Elite."
              tone="dark"
            >
              <p>
                A progressive path through Showtime. Content below is draft until
                verified by The Grove.
              </p>
            </SectionHeading>
            <p className="draft-note text-cream/50 md:mb-2">Unverified details</p>
          </div>

          <div className="mt-14 space-y-6">
            {showtime.pathway.map((level, index) => (
              <article
                key={level.number}
                className={[
                  "grid gap-6 border border-cream/15 p-6 md:grid-cols-[8rem_1fr] md:p-10",
                  index === 0
                    ? "bg-forest"
                    : index === 1
                      ? "bg-black"
                      : "bg-wood text-black border-wood",
                ].join(" ")}
              >
                <p
                  className={[
                    "font-display text-5xl tracking-[0.04em]",
                    index === 2 ? "text-black/70" : "text-cream/40",
                  ].join(" ")}
                >
                  {level.number}
                </p>
                <div>
                  <h2
                    className={[
                      "font-display tracking-[0.06em]",
                      index === 2 ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl",
                    ].join(" ")}
                  >
                    {level.name}
                  </h2>
                  <p
                    className={[
                      "mt-4 max-w-2xl text-lg",
                      index === 2 ? "text-black/75" : "text-cream/70",
                    ].join(" ")}
                  >
                    {level.blurb}
                  </p>
                  <p
                    className={[
                      "mt-4 text-sm",
                      index === 2 ? "text-black/55" : "text-cream/45",
                    ].join(" ")}
                  >
                    Ages, curriculum, and schedule: pending confirmation.
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <ButtonLink href="/contact" variant="cream" size="lg">
              Join Showtime / Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        tone="cream"
        title="Ready to put work in?"
        body="Tell us about your player or your goals. We'll point you toward the right next step with Showtime."
      />
    </>
  );
}

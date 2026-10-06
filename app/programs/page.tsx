import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { images, showtime } from "@/lib/content";
import { joinShowtimeCta, showtimeLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Showtime Basketball Academy trains year-round at The Grove in San Jose: development-first, small groups of up to six, and your first session is free.",
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
              {showtime.summary} {showtime.approach}
            </p>
            <p className="mt-4 max-w-xl font-display text-lg tracking-[0.06em] text-wood-light">
              {showtime.freeSession}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href={joinShowtimeCta.href}
                external
                variant="cream"
                size="lg"
              >
                {joinShowtimeCta.label}
              </ButtonLink>
              <ButtonLink href="#programs" variant="secondary" size="lg">
                See programs
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-cream/55">
              Opens Showtime&apos;s inquiry form. Showtime handles enrollment,
              schedules, and pricing.
            </p>
          </div>
          <Photo
            src={images.showtime.src}
            alt={images.showtime.alt}
            aspect="aspect-[5/4]"
          />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove">
          <SectionHeading eyebrow="How to join" title="Three steps to the court." />
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {showtime.joinSteps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-forest pt-5">
                <span className="font-display text-sm tracking-[0.14em] text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-display text-2xl tracking-[0.05em] md:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-3 text-black/70">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink
              href={joinShowtimeCta.href}
              external
              variant="primary"
              size="lg"
            >
              Start with an inquiry
            </ButtonLink>
            <ButtonLink
              href={showtimeLinks.membershipsUrl}
              external
              variant="ghost"
              size="lg"
            >
              View memberships
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-20 bg-forest-dark py-20 text-cream md:py-28">
        <div className="container-grove">
          <SectionHeading eyebrow="Programs" title="Training at The Grove." tone="dark">
            <p>
              Programs as listed by Showtime. Schedules, age groups, and current
              pricing are on Showtime&apos;s site.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-px border border-cream/15 bg-cream/15 md:grid-cols-2">
            {showtime.programs.map((program) => (
              <article key={program.name} className="bg-forest-dark p-8 md:p-10">
                <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
                  {program.name}
                </h2>
                <p className="mt-4 max-w-md text-lg text-cream/70">
                  {program.blurb}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <SectionHeading eyebrow="Showtime standards" title="L.E.A.D.">
            <p>The standards every Showtime player trains by.</p>
          </SectionHeading>
          <ul className="grid grid-cols-2 gap-px border border-black/15 bg-black/15">
            {showtime.values.map((value) => (
              <li key={value.word} className="bg-cream p-6">
                <span className="font-display text-5xl text-forest">
                  {value.letter}
                </span>
                <p className="mt-1 font-display text-xl tracking-[0.06em]">
                  {value.word}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        tone="black"
        eyebrow="Showtime Basketball Academy"
        title="Ready to put work in?"
        body="Send Showtime an inquiry to set up your first session. It's free."
        primary={joinShowtimeCta}
        secondary={{
          href: showtimeLinks.instagramUrl,
          label: `Follow ${showtimeLinks.instagramHandle}`,
          external: true,
        }}
        tertiary={null}
        note="Questions about training go to Showtime directly. The Grove's contact form is for business and partner inquiries."
      />
    </>
  );
}

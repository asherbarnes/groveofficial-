import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { Accent, SectionHeading } from "@/components/SectionHeading";
import { images, showtime } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { joinShowtimeCta, showtimeLinks } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Showtime Basketball Academy Training in San Jose",
  description:
    "Showtime Basketball Academy trains year-round at The Grove in San Jose: development-first, small groups of up to six, and your first session is free.",
  path: "/programs",
});

/**
 * Showtime's page inside The Grove's site. Amber is Showtime's color, so it
 * owns this page's hero; The Grove's black header and footer frame it.
 */
export default function ProgramsPage() {
  return (
    <>
      <section className="bg-amber text-black">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="gutter-start flex flex-col justify-end pr-5 pt-14 pb-12 sm:pr-10 md:pt-20 lg:pb-16 lg:pr-14">
            <h1 className="font-display">
              <span className="block text-[clamp(4rem,13vw,8.5rem)] leading-[0.86]">
                Showtime
              </span>{" "}
              <span className="mt-2 block text-[clamp(1.75rem,4.6vw,3.25rem)] leading-[1]">
                Basketball Academy
              </span>
            </h1>
            <span aria-hidden="true" className="brand-rule mt-7 bg-black" />
            <p className="mt-6 max-w-xl text-lg text-black/80">
              {showtime.summary} {showtime.approach}
            </p>
            <p className="mt-4 max-w-xl font-display text-xl font-medium leading-[1.15] tracking-[0.02em]">
              {showtime.freeSession}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={joinShowtimeCta.href} external variant="dark" size="lg">
                {joinShowtimeCta.label}
              </ButtonLink>
              <ButtonLink href="#programs" variant="outline" size="lg">
                See programs
              </ButtonLink>
            </div>
            <p className="mt-4 max-w-md text-sm text-black/80">
              Opens Showtime&apos;s inquiry form. Showtime handles enrollment,
              schedules, and pricing.
            </p>
          </div>
          <Photo
            src={images.showtime.src}
            alt={images.showtime.alt}
            priority
            aspect="aspect-[5/4] h-full lg:aspect-auto lg:min-h-[40rem]"
            className="h-full"
          />
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-grove">
          <SectionHeading title="Three steps to the court." brand="showtime" size="md" />
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {showtime.joinSteps.map((step, index) => (
              <li key={step.title} className="border-t-[3px] border-amber pt-5">
                <span className="font-display text-5xl leading-none text-black/50">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-black/70">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href={joinShowtimeCta.href} external variant="showtime" size="lg">
              Start with an inquiry
            </ButtonLink>
            <ButtonLink href={showtimeLinks.membershipsUrl} external variant="outline" size="lg">
              View memberships
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="programs" className="scroll-mt-20 bg-black py-20 text-paper md:py-28">
        <div className="container-grove">
          <SectionHeading
            title="Training at The Grove."
            tone="dark"
            brand="showtime"
          >
            <p>
              Programs as listed by Showtime. Schedules, age groups, and current
              pricing are on Showtime&apos;s site.
            </p>
          </SectionHeading>

          <ul className="mt-14 border-t border-paper/20">
            {showtime.programs.map((program) => (
              <li
                key={program.name}
                className="grid gap-x-10 gap-y-2 border-b border-paper/20 py-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-baseline"
              >
                <h3 className="font-display text-3xl md:text-4xl">{program.name}</h3>
                <p className="max-w-md text-lg text-paper/75">{program.blurb}</p>
              </li>
            ))}
          </ul>

          <div className="mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <SectionHeading
              title={
                <>
                  Showtime <Accent brand="showtime" tone="dark">standards.</Accent>
                </>
              }
              tone="dark"
              brand="showtime"
              size="md"
            >
              <p>L.E.A.D. The standards every Showtime player trains by.</p>
            </SectionHeading>
            <ul className="grid grid-cols-2 gap-px border border-paper/15 bg-paper/15 sm:grid-cols-4">
              {showtime.values.map((value) => (
                <li key={value.word} className="bg-black p-6">
                  <span aria-hidden="true" className="font-display text-6xl leading-none text-amber">
                    {value.letter}
                  </span>
                  <p className="mt-3 font-display text-xl">{value.word}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        tone="paper"
        title="Ready to put work in?"
        body="Send Showtime an inquiry to set up your first session. It's free."
        primary={{ ...joinShowtimeCta, showtime: true }}
        secondary={{
          href: showtimeLinks.instagramUrl,
          label: `Follow ${showtimeLinks.instagramHandle}`,
          external: true,
        }}
        note="Questions about training go to Showtime directly. The Grove's contact form is for business and partner inquiries."
      />
    </>
  );
}

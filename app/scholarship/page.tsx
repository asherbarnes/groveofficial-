import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { images, scholarship } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eric Cordova Scholarship",
  description:
    "The Eric Cordova Scholarship honors a longtime coach associated with The Grove and supports players through community contributions.",
};

export default function ScholarshipPage() {
  return (
    <>
      <section className="bg-black text-cream">
        <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr]">
          <Photo
            src={images.scholarship.src}
            alt={images.scholarship.alt}
            aspect="aspect-[4/5] lg:min-h-[80vh]"
            className="h-full"
          />
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 md:py-24">
            <p className="eyebrow text-wood-light">In memory & in motion</p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-7xl">
              The Eric Cordova Scholarship
            </h1>
            <p className="mt-6 max-w-xl text-xl text-cream/75 md:text-2xl">
              {scholarship.story}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow space-y-16">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_0.85fr]">
            <SectionHeading
              eyebrow="His legacy"
              title="He gave his all to the kids who played."
            >
              <p>
                Coach Eric was a longtime coach associated with The Grove. For
                over a decade he poured into the game and into young people: the
                kind of presence a community remembers because it changed how
                people showed up for each other.
              </p>
            </SectionHeading>
            <Photo
              src={images.ericCordova.src}
              alt={images.ericCordova.alt}
              aspect="aspect-[707/413]"
            />
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[0.7fr_1fr]">
            <Photo
              src={images.scholarshipMemorial.src}
              alt={images.scholarshipMemorial.alt}
              aspect="aspect-square"
            />
            <div>
              <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
                Why the scholarship exists
              </h2>
              <p className="mt-4 text-lg text-black/70">{scholarship.funding}</p>
              <p className="mt-4 text-lg text-black/70">
                It continues a simple idea: keep the door open for players who
                need support, in the spirit of the coach who kept showing up.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
              How it helps players
            </h2>
            <p className="mt-4 text-lg text-black/70">{scholarship.purpose}</p>
            <p className="mt-4 text-black/60">
              Exact award amounts, eligibility, and timelines will be published
              once confirmed by The Grove. We will not invent application rules
              here.
            </p>
          </div>

          <div className="border border-black/15 bg-cream-deep/50 p-8 md:p-10">
            <h2 className="font-display text-3xl tracking-[0.05em]">
              Application information
            </h2>
            <p className="mt-4 text-black/70">
              Application mechanics are not verified for publication yet.
            </p>
            <p className="draft-note">Pending client verification</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Ask about the Scholarship
              </ButtonLink>
              <ButtonLink
                href={site.instagramUrl}
                external
                variant="ghost"
                size="lg"
              >
                Follow {site.instagramHandle}
              </ButtonLink>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
              Support the fund
            </h2>
            <p className="mt-4 text-lg text-black/70">
              The scholarship is funded through the nonprofit and generous
              contributions from people who believe in Coach Eric&apos;s vision.
              If you want to help keep that support going, reach out.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Contact The Grove
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tone="black"
        eyebrow="For the next one"
        title="Keep the door open."
        body="Train with Showtime, book the space, or ask how you can support players coming up behind you."
      />
    </>
  );
}

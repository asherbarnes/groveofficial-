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
    "The Eric Cordova Memorial Scholarship funds free basketball training, mentorship, and equipment and travel support for youth in underserved San Jose communities.",
  alternates: { canonical: "/scholarship" },
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
            <p className="eyebrow text-wood-light">In memory &amp; in motion</p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-7xl">
              The Eric Cordova Scholarship
            </h1>
            <p className="mt-6 max-w-xl text-xl text-cream/75 md:text-2xl">
              {scholarship.story}
            </p>
            <p className="mt-4 max-w-xl text-cream/65">{scholarship.funding}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#support" variant="cream" size="lg">
                Support the Scholarship
              </ButtonLink>
              <ButtonLink href="#provides" variant="secondary" size="lg">
                What it provides
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="provides" className="scroll-mt-20 bg-cream py-20 md:py-28">
        <div className="container-narrow space-y-20">
          <div>
            <SectionHeading eyebrow="For players" title="What the scholarship provides." />
            <ul className="mt-10 divide-y divide-black/15 border-y border-black/15">
              {scholarship.provides.map((item) => (
                <li key={item} className="py-5 font-display text-2xl tracking-[0.04em] md:text-3xl">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border border-black/15 bg-cream-deep/50 p-6 md:p-8">
              <h2 className="font-display text-2xl tracking-[0.05em]">
                How to apply
              </h2>
              <p className="mt-3 text-black/70">
                Eligibility and application details have not been published
                yet. Families can message us on Instagram to ask.
              </p>
              <div className="mt-6">
                <ButtonLink href={site.instagramUrl} external variant="ghost" size="md">
                  Message {site.instagramHandle}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-[1fr_0.85fr]">
            <SectionHeading eyebrow="His legacy" title="Shaping lives.">
              <blockquote className="border-l-2 border-wood pl-6 text-xl leading-relaxed text-black/80 md:text-2xl">
                “{scholarship.quote}”
                <footer className="mt-3 font-display text-xs tracking-[0.16em] text-gray">
                  Coach Eric Cordova
                </footer>
              </blockquote>
              <p className="mt-6">{scholarship.origin}</p>
            </SectionHeading>
            <Photo
              src={images.ericCordova.src}
              alt={images.ericCordova.alt}
              aspect="aspect-[707/413]"
            />
          </div>

          <div
            id="support"
            className="scroll-mt-20 grid items-center gap-10 md:grid-cols-[0.7fr_1fr]"
          >
            <Photo
              src={images.scholarshipMemorial.src}
              alt={images.scholarshipMemorial.alt}
              aspect="aspect-square"
            />
            <div>
              <p className="eyebrow text-forest">Support the fund</p>
              <h2 className="mt-4 font-display text-4xl tracking-[0.05em] md:text-5xl">
                Keep Coach Eric&apos;s vision going.
              </h2>
              <ul className="mt-6 space-y-3 text-lg text-black/75">
                {scholarship.waysToHelp.map((way) => (
                  <li key={way} className="border-l-2 border-wood pl-4">
                    {way}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact?topic=donate" variant="primary" size="lg">
                  I want to help
                </ButtonLink>
              </div>
              <p className="mt-3 text-sm text-gray">
                Tell us how you would like to help and we will follow up.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        tone="black"
        eyebrow="For the next one"
        title="Keep the door open."
        body="Train with Showtime, book the court, or follow along for the next community event."
        tertiary={{
          href: site.instagramUrl,
          label: `Follow ${site.instagramHandle}`,
          external: true,
        }}
      />
    </>
  );
}

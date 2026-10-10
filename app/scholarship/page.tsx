import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Photo } from "@/components/Photo";
import { Accent, SectionHeading } from "@/components/SectionHeading";
import { images, scholarship } from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Eric Cordova Memorial Scholarship",
  description:
    "The Eric Cordova Memorial Scholarship funds free basketball training, mentorship, and equipment and travel support for youth in underserved San Jose communities.",
  path: "/scholarship",
});

export default function ScholarshipPage() {
  return (
    <>
      <section className="bg-black text-paper">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="gutter-start flex min-w-0 flex-col justify-end pr-5 pt-14 pb-12 sm:pr-10 md:pt-20 lg:pb-16 lg:pr-14">
            <h1 className="font-display text-[2.75rem] leading-[0.95] min-[400px]:text-5xl sm:text-6xl md:text-7xl">
              The Eric Cordova <span className="block">Scholarship.</span>
            </h1>
            <span aria-hidden="true" className="brand-rule brand-rule-light mt-7" />
            <p className="mt-6 max-w-xl text-xl leading-snug text-paper md:text-2xl">
              {scholarship.story}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#support" variant="light" size="lg">
                Support the Scholarship
              </ButtonLink>
              <ButtonLink href="#provides" variant="outline-light" size="lg">
                What it provides
              </ButtonLink>
            </div>
          </div>
          <Photo
            src={images.scholarship.src}
            alt={images.scholarship.alt}
            priority
            aspect="aspect-[4/3] h-full sm:aspect-[16/10] lg:aspect-auto lg:min-h-[44rem]"
            className="h-full"
            imgClassName="object-[50%_30%]"
          />
        </div>
      </section>

      <section id="provides" className="scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="container-grove grid gap-x-20 gap-y-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title="What the scholarship provides." size="md" />
          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ul className="border-t border-black/15">
              {scholarship.provides.map((item) => (
                <li
                  key={item}
                  className="border-b border-black/15 py-5 font-display text-2xl leading-[1.1] md:text-[1.75rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-end bg-paper-deep p-6 md:p-8 lg:col-start-1 lg:row-start-2">
            <h3 className="font-display text-2xl">How to apply</h3>
            <p className="mt-3 text-black/70">
              Eligibility and application details have not been published
              yet. Families can message us on Instagram to ask.
            </p>
            <ButtonLink
              href={site.instagramUrl}
              external
              variant="outline"
              size="md"
              className="mt-6"
            >
              Message {site.instagramHandle}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-paper md:py-28">
        <div className="container-grove grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <figure>
            <blockquote className="font-display text-[2.25rem] leading-[1.05] sm:text-5xl md:text-6xl">
              “{scholarship.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden="true" className="brand-rule brand-rule-light" />
              <span className="label text-paper/80">Coach Eric Cordova</span>
            </figcaption>
            <p className="mt-10 max-w-xl text-paper/75">{scholarship.origin}</p>
          </figure>
          <Photo
            src={images.ericCordova.src}
            alt={images.ericCordova.alt}
            aspect="aspect-[707/413]"
            sizes="(max-width: 1024px) 100vw, 500px"
          />
        </div>
      </section>

      <section id="support" className="scroll-mt-20 bg-paper py-20 md:py-28">
        <div className="container-grove grid items-center gap-14 md:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Photo
            src={images.scholarshipMemorial.src}
            alt={images.scholarshipMemorial.alt}
            aspect="aspect-square"
            sizes="(max-width: 768px) 100vw, 420px"
          />
          <div>
            <SectionHeading
              title={
                <>
                  Keep Coach Eric&apos;s <Accent>vision going.</Accent>
                </>
              }
            >
              <p>{scholarship.funding}</p>
            </SectionHeading>
            <ul className="mt-8 grid border-t border-black/15 sm:grid-cols-2">
              {scholarship.waysToHelp.map((way, index) => (
                <li
                  key={way}
                  className={[
                    "border-b border-black/15 py-4 text-lg",
                    index % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6",
                  ].join(" ")}
                >
                  {way}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink href="/contact?topic=donate" variant="grove" size="lg">
                Tell us how you want to help
              </ButtonLink>
              <p className="mt-3 text-sm text-gray">
                We will follow up about donating, sponsoring, or volunteering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

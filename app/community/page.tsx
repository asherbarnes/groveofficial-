import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ArrowRight } from "@/components/Icon";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { Photo } from "@/components/Photo";
import { Accent, SectionHeading } from "@/components/SectionHeading";
import {
  communityWork,
  flyerDate,
  images,
  mission,
  pastEvents,
  philosophy,
} from "@/lib/content";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Community Work, Clinics, and Shoe Drive",
  description:
    "The Grove Community Collective is a San Jose nonprofit: scholarships, free camps and clinics, an annual shoe drive, and community events through basketball.",
  path: "/community",
});

const getInvolved = [
  {
    title: "Donate or sponsor",
    body: "Fund training, mentorship, and gear through the Eric Cordova Scholarship.",
    href: "/scholarship#support",
    label: "Support the Scholarship",
  },
  {
    title: "Partner with us",
    body: "Businesses and organizations: tell us how you would like to work together.",
    href: "/contact?topic=partnership",
    label: "Partner inquiry",
  },
  {
    title: "Volunteer",
    body: "Give your time or expertise to the players in our program.",
    href: "/contact?topic=donate",
    label: "Offer your time",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="grid lg:grid-cols-2">
          <div className="gutter-start flex flex-col justify-end pr-5 pt-14 pb-12 sm:pr-10 md:pt-20 lg:pb-16 lg:pr-14">
            <h1 className="font-display text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
              Built by <Accent>the community.</Accent>
            </h1>
            <span aria-hidden="true" className="brand-rule mt-7" />
            <p className="mt-6 max-w-xl text-lg text-black/70">{mission.statement}</p>
            <p className="label mt-10 text-gray">
              Serving the community since {site.founded}
            </p>
          </div>
          <Photo
            src={images.community.src}
            alt={images.community.alt}
            priority
            aspect="aspect-[4/3] h-full lg:aspect-auto lg:min-h-[38rem]"
            className="h-full"
          />
        </div>
      </section>

      <section className="bg-black py-20 text-paper md:py-28">
        <div className="container-grove">
          <SectionHeading title="How we show up." tone="dark">
            <p>{mission.support}</p>
          </SectionHeading>

          <ul className="mt-14 border-t border-paper/20">
            {communityWork.map((item) => (
              <li
                key={item.title}
                className="grid gap-x-10 gap-y-2 border-b border-paper/20 py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]"
              >
                <h3 className="font-display text-3xl leading-[1.02] md:text-4xl">{item.title}</h3>
                <div>
                <p className="max-w-xl text-paper/75">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium tracking-[0.1em] text-paper uppercase underline decoration-paper/50 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-paper"
                  >
                    About the scholarship
                    <ArrowRight />
                  </Link>
                ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-grove grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading title="On the court together." size="md">
              <p>
                A few of the moments our community has shared at The Grove. New
                events are announced on Instagram.
              </p>
            </SectionHeading>
            <ButtonLink
              href={site.instagramUrl}
              external
              variant="grove"
              size="lg"
              className="mt-8"
            >
              Follow {site.instagramHandle}
            </ButtonLink>
          </div>

          <ol className="border-t-[3px] border-black">
            {pastEvents.map((event) => (
              <li
                key={event.name}
                className="grid gap-x-8 gap-y-2 border-b border-black/15 py-7 sm:grid-cols-[11rem_1fr]"
              >
                <time
                  dateTime={event.on}
                  className={[
                    "self-start font-display text-3xl leading-none md:text-4xl",
                    event.showtime ? "bg-amber px-2 pt-1.5 pb-1 text-black sm:justify-self-start" : "text-forest",
                  ].join(" ")}
                >
                  {flyerDate(event.on)}
                </time>
                <div>
                  <h3 className="font-display text-2xl leading-[1.05] md:text-3xl">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-black/70">{event.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-paper-deep py-20 md:py-28">
        <div className="container-grove grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            title={
              <>
                Grow <span className="block">together.</span>
              </>
            }
          />
          <figure>
            <blockquote className="text-xl leading-relaxed text-black/80 md:text-2xl md:leading-relaxed">
              “{philosophy.quote}”
            </blockquote>
            <figcaption className="label mt-8 text-gray">
              Our philosophy · {philosophy.source}
            </figcaption>
          </figure>
        </div>
      </section>

      <PartnerLogoGrid />

      <section className="bg-forest py-20 text-paper md:py-28">
        <div className="container-grove">
          <SectionHeading title="Have our players' backs." tone="dark">
            <p>{mission.donors}</p>
          </SectionHeading>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {getInvolved.map((item) => (
              <div key={item.title} className="border-t border-paper/25 pt-6">
                <h3 className="font-display text-2xl md:text-3xl">{item.title}</h3>
                <p className="mt-3 text-paper/75">{item.body}</p>
                <ButtonLink href={item.href} variant="light" size="md" className="mt-6">
                  {item.label}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

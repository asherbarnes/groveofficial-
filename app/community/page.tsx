import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { communityWork, images, mission, pastEvents, philosophy } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The Grove Community Collective is a San Jose nonprofit: scholarships, free camps and clinics, an annual shoe drive, and community events through basketball.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow text-forest">Community</p>
            <h1 className="mt-4 font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-8xl">
              Built by
              <br />
              the community.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-black/70">
              {mission.statement}
            </p>
          </div>
          <p className="max-w-sm text-sm text-gray lg:justify-self-end">
            Serving the community since {site.founded} · {site.location}
          </p>
        </div>
      </section>

      <section className="bg-black py-20 text-cream md:py-28">
        <div className="container-grove">
          <SectionHeading eyebrow="What we do" title="How we show up." tone="dark">
            <p>{mission.support}</p>
          </SectionHeading>

          <div className="mt-14 grid gap-px border border-cream/15 bg-cream/15 md:grid-cols-2">
            {communityWork.map((item) => (
              <article key={item.title} className="bg-black p-8 md:p-10">
                <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-cream/70">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex font-display text-xs tracking-[0.16em] text-wood-light underline underline-offset-8"
                  >
                    About the scholarship →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-grove grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Past events" title="On the court together.">
              <p>
                A few of the moments our community has shared at The Grove. New
                events are announced on Instagram.
              </p>
            </SectionHeading>
            <div className="mt-8">
              <ButtonLink href={site.instagramUrl} external variant="primary" size="lg">
                Follow {site.instagramHandle}
              </ButtonLink>
            </div>
            <Photo
              src={images.community.src}
              alt={images.community.alt}
              aspect="aspect-[4/3]"
              className="mt-10"
            />
          </div>

          <ol className="divide-y divide-black/15 border-y border-black/15">
            {pastEvents.map((event) => (
              <li key={event.name} className="grid gap-2 py-6 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <span className="font-display text-sm tracking-[0.14em] text-forest">
                  {event.date}
                </span>
                <div>
                  <h2 className="font-display text-2xl tracking-[0.05em]">
                    {event.name}
                  </h2>
                  <p className="mt-2 text-black/70">{event.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-forest-dark text-cream">
        <div className="container-wide grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-24 lg:px-14">
            <SectionHeading eyebrow="Our philosophy" title="Grow together." tone="dark">
              <blockquote className="border-l-2 border-wood pl-6 text-lg leading-relaxed md:text-xl">
                “{philosophy.quote}”
              </blockquote>
            </SectionHeading>
          </div>
          <Photo
            src={images.communityHuddle.src}
            alt={images.communityHuddle.alt}
            aspect="aspect-[4/3] lg:aspect-auto lg:min-h-full"
            className="h-full"
          />
        </div>
      </section>

      <PartnerLogoGrid />

      <section className="bg-forest py-20 text-cream md:py-28">
        <div className="container-grove">
          <SectionHeading eyebrow="Get involved" title="Have our players' backs." tone="dark">
            <p>{mission.donors}</p>
          </SectionHeading>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
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
                label: "Offer to help",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-cream/25 pt-5">
                <h2 className="font-display text-2xl tracking-[0.05em] md:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-cream/70">{item.body}</p>
                <ButtonLink href={item.href} variant="cream" size="md" className="mt-6">
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

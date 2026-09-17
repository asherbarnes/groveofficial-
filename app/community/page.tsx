import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { images, mission, philosophy } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Mission, outreach, scholarships, and the collective spirit of The Grove in San Jose.",
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
            <p className="mt-6 max-w-2xl text-lg text-black/70">{mission.short}</p>
          </div>
          <p className="max-w-sm text-sm text-gray lg:justify-self-end">
            Founded {site.founded} · {site.location}
          </p>
        </div>
      </section>

      <section className="bg-forest-dark text-cream">
        <div className="container-wide grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-24 lg:px-14">
            <SectionHeading eyebrow="Mission" title="Support we needed." tone="dark">
              <p>{mission.support}</p>
              <p className="mt-4">{mission.commitment}</p>
            </SectionHeading>
          </div>
          <Photo
            src={images.community.src}
            alt={images.community.alt}
            aspect="aspect-[4/3] lg:aspect-auto lg:min-h-full"
            className="h-full"
          />
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-narrow">
          <SectionHeading eyebrow="Philosophy" title="Grow together.">
            <blockquote className="border-l-2 border-wood pl-6 text-xl leading-relaxed text-black/75 md:text-2xl">
              “{philosophy.quote}”
            </blockquote>
            <p className="mt-6 text-gray">
              The metaphor is about people: mentorship, shared foundations, and
              belonging. The visual identity stays basketball-first.
            </p>
          </SectionHeading>
        </div>
      </section>

      <section className="bg-black py-20 text-cream md:py-28">
        <div className="container-grove">
          <SectionHeading
            eyebrow="How we show up"
            title="People helping people grow."
            tone="dark"
          >
            <p>
              This is not a list of programs for the sake of a nonprofit page. It
              is how The Grove tries to be present for players and families.
            </p>
          </SectionHeading>

          <div className="mt-14 grid gap-0 md:grid-cols-2">
            {[
              {
                title: "Scholarships",
                body: "Support that helps offset training and camp/clinic costs, including the Eric Cordova Scholarship.",
                href: "/scholarship",
              },
              {
                title: "Shoe donations",
                body: "Basketball shoes donated to players in need, so gear is not the reason someone sits out.",
                href: null,
              },
              {
                title: "Outreach",
                body: "Events and initiatives that bring positivity and growth through basketball into the local community.",
                href: null,
              },
              {
                title: "Mentorship",
                body: "Older trees and seedlings on the same soil: people using their roots to strengthen someone else's foundation.",
                href: null,
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={[
                  "border border-cream/15 p-8 md:p-10",
                  index % 2 === 0 ? "md:border-r-0" : "",
                  index < 2 ? "border-b-0 md:border-b" : "",
                ].join(" ")}
              >
                <h2 className="font-display text-3xl tracking-[0.05em] md:text-4xl">
                  {item.title}
                </h2>
                <p className="mt-4 text-cream/65">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex font-display text-xs tracking-[0.16em] text-wood-light underline underline-offset-8"
                  >
                    Learn more →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm text-cream/45">
            The Hoop Ministry and mural project details are pending verification
            and are not presented as active programs here. See CONTENT_NEEDED.md.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/scholarship" variant="cream" size="lg">
              Eric Cordova Scholarship
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Get involved
            </ButtonLink>
          </div>
        </div>
      </section>

      <PartnerLogoGrid />

      <CTASection
        tone="forest"
        title="Come grow with us."
        body="Train, rent the space, support the scholarship, or just show up. The collective is built one person at a time."
      />
    </>
  );
}

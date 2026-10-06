import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CommunitySection } from "@/components/CommunitySection";
import { CTASection } from "@/components/CTASection";
import { FacilitySection } from "@/components/FacilitySection";
import { Hero } from "@/components/Hero";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { Photo } from "@/components/Photo";
import { ProgramPathway } from "@/components/ProgramPathway";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialGrid } from "@/components/SocialGrid";
import { audiences, images, mission, scholarship } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 02 What The Grove is, and where each visitor should go */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-grove">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <SectionHeading title="More than a gym.">
                <p>{mission.statement}</p>
                <p className="mt-4">
                  We own a {site.facilitySqFt} sq ft training facility on{" "}
                  {site.street} in San Jose. It is where Showtime Basketball
                  Academy trains, where athletes and event organizers book the
                  court, and where our scholarship, clinics, and shoe drive
                  come to life.
                </p>
                <p className="mt-4">{mission.support}</p>
              </SectionHeading>
              <p className="mt-8 text-sm text-gray">
                Serving the community since {site.founded}.
              </p>
            </div>

            <div className="lg:pt-2">
              <p className="eyebrow text-forest">Find your way in</p>
              <ul className="mt-5 divide-y divide-black/15 border-y border-black/15">
                {audiences.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 py-5 transition-colors hover:bg-cream-deep/60"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.14em] text-gray">
                          {item.audience}
                        </p>
                        <p className="mt-1 font-display text-xl tracking-[0.05em] group-hover:text-forest md:text-2xl">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-black/60">
                          {item.blurb}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-1 font-display text-xs tracking-[0.14em] text-gray"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProgramPathway />

      <FacilitySection />

      <CommunitySection />

      {/* 06 Eric Cordova Scholarship */}
      <section className="bg-black text-cream">
        <div className="container-wide grid lg:grid-cols-[0.85fr_1.15fr]">
          <Photo
            src={images.scholarship.src}
            alt={images.scholarship.alt}
            aspect="aspect-[4/5] lg:aspect-auto lg:min-h-full"
            className="h-full"
          />
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-14 md:py-24">
            <p className="eyebrow text-wood-light">Legacy</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.04em] md:text-7xl">
              For the
              <br />
              next one.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              {scholarship.story} {scholarship.funding}
            </p>
            <ul className="mt-6 max-w-xl space-y-2 text-cream/70">
              {scholarship.provides.map((item) => (
                <li key={item} className="border-l border-wood pl-4">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/scholarship#support" variant="cream" size="lg">
                Support the Scholarship
              </ButtonLink>
              <ButtonLink href="/scholarship" variant="secondary" size="lg">
                Coach Eric&apos;s story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogoGrid />

      <SocialGrid />

      <CTASection />
    </>
  );
}

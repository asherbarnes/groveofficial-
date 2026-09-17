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
import { ecosystem, images, philosophy, scholarship } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 02 More than a gym */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-grove">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <SectionHeading title="More than a gym.">
                <p>
                  The Grove is a basketball facility, and a community built
                  through the game. Training happens here. So does mentorship,
                  mutual support, and the work of showing up for the next one.
                </p>
              </SectionHeading>

              <blockquote className="mt-12 max-w-2xl border-l-2 border-wood pl-6 text-lg leading-relaxed text-black/75 md:text-xl">
                “{philosophy.quote}”
                <footer className="mt-4 font-display text-xs tracking-[0.16em] text-gray">
                  {philosophy.source}
                </footer>
              </blockquote>
            </div>

            <div className="lg:pt-10">
              <p className="eyebrow text-forest">The ecosystem</p>
              <ul className="mt-5 divide-y divide-black/15 border-y border-black/15">
                {ecosystem.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-start justify-between gap-4 py-5 transition-colors hover:bg-cream-deep/60"
                    >
                      <div>
                        <p className="font-display text-xl tracking-[0.05em] group-hover:text-forest md:text-2xl">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-black/60">
                          {item.blurb}
                        </p>
                        {item.status === "unconfirmed" ? (
                          <p className="draft-note">Unconfirmed · details TBD</p>
                        ) : null}
                      </div>
                      <span className="mt-1 font-display text-xs tracking-[0.14em] text-gray">
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
              {scholarship.story}
            </p>
            <p className="mt-4 max-w-xl text-cream/70">
              {scholarship.funding}
            </p>
            <p className="mt-4 max-w-xl text-cream/55">{scholarship.purpose}</p>
            <div className="mt-10">
              <ButtonLink href="/scholarship" variant="cream" size="lg">
                Learn about the Scholarship
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

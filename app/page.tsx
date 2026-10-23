import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CommunitySection } from "@/components/CommunitySection";
import { CTASection } from "@/components/CTASection";
import { FacilitySection } from "@/components/FacilitySection";
import { Hero } from "@/components/Hero";
import { ArrowRight, ArrowUpRight } from "@/components/Icon";
import { PartnerLogoGrid } from "@/components/PartnerLogoGrid";
import { Photo } from "@/components/Photo";
import { ProgramPathway } from "@/components/ProgramPathway";
import { Accent, SectionHeading } from "@/components/SectionHeading";
import { audiences, images, mission, scholarship } from "@/lib/content";
import { organizationJsonLd, pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const audienceLinkClass =
  "group grid grid-cols-[1fr_auto] items-center gap-6 py-5 transition-colors hover:text-forest";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} · San Jose Basketball Nonprofit`,
  absoluteTitle: true,
  description:
    "The Grove Community Collective is a San Jose basketball nonprofit with a 10,000 sq ft training facility. Home of Showtime Basketball Academy and the Eric Cordova Scholarship. Book the court on GoodRun.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />

      {/* What The Grove is, and where each visitor should go */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-grove grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHeading
            title={
              <>
                More than <Accent>a gym.</Accent>
              </>
            }
          >
            <p>{mission.statement}</p>
            <p className="mt-4">
              We own a {site.facilitySqFt} sq ft training facility on{" "}
              {site.street} in San Jose. It is where Showtime Basketball
              Academy trains, where athletes and event organizers book the
              court, and where our scholarship, clinics, and shoe drive come
              to life.
            </p>
          </SectionHeading>

          <div>
            <h2 className="sr-only">Find your way in</h2>
            <ul className="border-t border-black/15">
              {audiences.map((item) => {
                const label = (
                  <>
                    <span>
                      <span className="block font-display text-2xl md:text-[1.75rem]">
                        {item.name}
                      </span>
                      <span className="mt-1.5 block text-[0.9375rem] text-black/70">
                        <span className="font-semibold text-black">
                          {item.audience}.
                        </span>{" "}
                        {item.blurb}
                      </span>
                    </span>
                    {"external" in item && item.external ? (
                      <ArrowUpRight className="text-xl text-black/50 transition-colors duration-200 group-hover:text-forest" />
                    ) : (
                      <ArrowRight className="text-xl text-black/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-forest" />
                    )}
                  </>
                );
                return (
                  <li key={item.name} className="border-b border-black/15">
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={audienceLinkClass}
                      >
                        {label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      <Link href={item.href} className={audienceLinkClass}>
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <ProgramPathway />

      <FacilitySection />

      <CommunitySection />

      {/* Eric Cordova Scholarship */}
      <section className="bg-black text-paper">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <Photo
            src={images.scholarship.src}
            alt={images.scholarship.alt}
            aspect="aspect-[4/5] h-full lg:aspect-auto lg:min-h-[46rem]"
            className="h-full"
            imgClassName="object-[50%_30%]"
          />
          <div className="gutter-end flex flex-col justify-center py-16 pl-5 sm:pl-10 md:py-24 lg:pl-16">
            <SectionHeading
              tone="dark"
              title={
                <>
                  For the <span className="block">next one.</span>
                </>
              }
            >
              <p>
                {scholarship.story} {scholarship.funding}
              </p>
            </SectionHeading>
            <ul className="mt-8 max-w-xl border-t border-paper/20 text-paper/80">
              {scholarship.provides.map((item) => (
                <li key={item} className="border-b border-paper/20 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/scholarship#support" variant="light" size="lg">
                Support the Scholarship
              </ButtonLink>
              <ButtonLink href="/scholarship" variant="outline-light" size="lg">
                Coach Eric&apos;s story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <PartnerLogoGrid />

      <CTASection />
    </>
  );
}

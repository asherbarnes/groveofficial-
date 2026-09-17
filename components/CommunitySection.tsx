import Link from "next/link";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { images, mission } from "@/lib/content";

export function CommunitySection() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-grove">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Community impact"
              title="We want to be the support we needed."
            >
              <p>{mission.support}</p>
              <p className="mt-4">{mission.commitment}</p>
            </SectionHeading>
            <Link
              href="/community"
              className="mt-8 inline-flex font-display text-sm tracking-[0.16em] text-forest underline decoration-wood decoration-2 underline-offset-8"
            >
              Read the community story →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-6 sm:mt-12">
              <Photo
                src={images.community.src}
                alt={images.community.alt}
                aspect="aspect-[4/3]"
              />
              <Photo
                src={images.communityHuddle.src}
                alt={images.communityHuddle.alt}
                aspect="aspect-square"
              />
            </div>
            <div className="flex flex-col justify-between gap-8 border border-black/15 p-6 sm:p-8">
              <div>
                <p className="eyebrow text-forest">How we show up</p>
                <ul className="mt-6 space-y-5">
                  {[
                    "Player scholarships",
                    "Shoe donations",
                    "Community outreach",
                    "Mentorship through the game",
                    "Community events",
                  ].map((item) => (
                    <li
                      key={item}
                      className="border-b border-black/10 pb-4 font-display text-2xl tracking-[0.04em] last:border-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray">
                Donors and boosters help drive this mission. As the collective
                family grows, we keep having each other&apos;s back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

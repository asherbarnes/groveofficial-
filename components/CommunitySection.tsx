import Link from "next/link";
import { ArrowRight } from "@/components/Icon";
import { Photo } from "@/components/Photo";
import { SectionHeading } from "@/components/SectionHeading";
import { communityWork, images, mission } from "@/lib/content";

export function CommunitySection() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-grove grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            title={
              <>
                We want to be <span className="block">the support we needed.</span>
              </>
            }
          >
            <p>{mission.commitment}</p>
          </SectionHeading>

          <ul className="mt-10 grid border-t border-black/15 sm:grid-cols-2">
            {communityWork.map((item, index) => (
              <li
                key={item.title}
                className={[
                  "border-b border-black/15 py-5 font-display text-2xl",
                  index % 2 === 1 ? "sm:border-l sm:pl-6" : "sm:pr-6",
                ].join(" ")}
              >
                {item.title}
              </li>
            ))}
          </ul>

          <Link
            href="/community"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium tracking-[0.1em] text-forest uppercase underline decoration-forest/40 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-forest"
          >
            See our community work
            <ArrowRight />
          </Link>
        </div>

        <div className="lg:sticky lg:top-28">
          <Photo
            src={images.communityHuddle.src}
            alt={images.communityHuddle.alt}
            aspect="aspect-square"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
          <p className="mt-4 max-w-md text-sm text-gray">{mission.donors}</p>
        </div>
      </div>
    </section>
  );
}

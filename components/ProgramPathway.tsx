import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ArrowRight } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { showtime } from "@/lib/content";
import { primaryCta } from "@/lib/site";

/** Showtime's section on the home page: amber marks Showtime, not the page. */
export function ProgramPathway() {
  return (
    <section className="bg-paper-deep py-20 md:py-28">
      <div className="container-grove grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading title="Train at The Grove." brand="showtime">
            <p>
              {showtime.summary} {showtime.approach}
            </p>
          </SectionHeading>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <ButtonLink href={primaryCta.href} variant="showtime" size="lg">
              {primaryCta.label}
            </ButtonLink>
            <p className="text-sm text-gray">Your first session is free.</p>
          </div>
        </div>

        <div>
          <h3 className="sr-only">Showtime programs</h3>
          <ul className="border-t border-black/15">
            {showtime.programs.map((program) => (
              <li key={program.name} className="border-b border-black/15 py-6">
                <p className="font-display text-3xl md:text-[2.125rem]">
                  {program.name}
                </p>
                <p className="mt-2 max-w-md text-black/70">{program.blurb}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/programs"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-medium tracking-[0.1em] uppercase underline decoration-black/30 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-black"
          >
            How to join and program details
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

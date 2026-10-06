import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { showtime } from "@/lib/content";
import { primaryCta } from "@/lib/site";

export function ProgramPathway() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-grove">
        <div className="grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <SectionHeading eyebrow="Showtime Basketball Academy" title="Train at The Grove.">
            <p>
              {showtime.summary} {showtime.approach}
            </p>
          </SectionHeading>
          <div className="md:text-right">
            <ButtonLink href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.label}
            </ButtonLink>
            <p className="mt-3 text-sm text-gray">First session free.</p>
          </div>
        </div>

        <div className="mt-14 border-t border-black/15">
          {showtime.programs.map((program, index) => (
            <Link
              key={program.name}
              href="/programs#programs"
              className="group grid gap-2 border-b border-black/15 py-7 transition-colors hover:bg-forest hover:text-cream md:grid-cols-[7rem_1fr_auto] md:items-baseline md:gap-10"
            >
              <span className="font-display text-4xl tracking-[0.04em] text-forest transition-colors group-hover:text-inherit md:pl-2">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-3xl tracking-[0.06em] md:text-4xl">
                  {program.name}
                </h3>
                <p className="mt-2 max-w-xl text-black/65 transition-colors group-hover:text-inherit group-hover:opacity-85">
                  {program.blurb}
                </p>
              </div>
              <span className="font-display text-xs tracking-[0.18em] text-gray transition-colors group-hover:text-inherit md:pr-2">
                Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

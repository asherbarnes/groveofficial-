import { ButtonLink } from "@/components/ButtonLink";
import { primaryCta, secondaryCta } from "@/lib/site";

type Cta = {
  href: string;
  label: string;
  external?: boolean;
  /** Showtime CTAs render amber; everything else follows the band. */
  showtime?: boolean;
};

type Props = {
  title?: React.ReactNode;
  body?: string;
  /** forest = The Grove's closing band; paper = light close before the black footer */
  tone?: "forest" | "paper";
  primary?: Cta;
  secondary?: Cta | null;
  note?: string;
};

/** Closing band: one main action and at most one secondary. */
export function CTASection({
  title = "Come grow with us.",
  body = "Train with Showtime, book the court for your group or event, or support the players coming up behind you.",
  tone = "forest",
  primary = { ...primaryCta, showtime: true },
  secondary = secondaryCta,
  note,
}: Props) {
  const dark = tone === "forest";

  return (
    <section className={dark ? "bg-forest text-paper" : "border-t border-black/10 bg-paper text-black"}>
      <div className="container-grove grid gap-10 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-28">
        <div>
          <h2 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            {title}
          </h2>
          <p className={["mt-6 max-w-xl text-lg", dark ? "text-paper/75" : "text-black/70"].join(" ")}>
            {body}
          </p>
        </div>
        <div className="md:justify-self-end">
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={primary.href}
              external={primary.external}
              variant={primary.showtime ? "showtime" : dark ? "light" : "grove"}
              size="lg"
            >
              {primary.label}
            </ButtonLink>
            {secondary ? (
              <ButtonLink
                href={secondary.href}
                external={secondary.external}
                variant={dark ? "outline-light" : "outline"}
                size="lg"
              >
                {secondary.label}
              </ButtonLink>
            ) : null}
          </div>
          {note ? (
            <p className={["mt-4 max-w-sm text-sm", dark ? "text-paper/70" : "text-gray"].join(" ")}>
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

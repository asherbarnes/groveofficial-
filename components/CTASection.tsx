import { ButtonLink } from "@/components/ButtonLink";
import { primaryCta, secondaryCta } from "@/lib/site";

type Cta = { href: string; label: string; external?: boolean };

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  tone?: "forest" | "black" | "cream";
  primary?: Cta;
  secondary?: Cta;
  tertiary?: Cta | null;
  note?: string;
};

export function CTASection({
  eyebrow = "The Grove",
  title = "Come grow with us.",
  body = "Train with Showtime, book the court for your group or event, or support the players coming up behind you.",
  tone = "forest",
  primary = primaryCta,
  secondary = secondaryCta,
  tertiary = { href: "/scholarship#support", label: "Support the Scholarship" },
  note,
}: Props) {
  const bg =
    tone === "forest"
      ? "bg-forest text-cream"
      : tone === "black"
        ? "bg-black text-cream"
        : "bg-cream text-black";

  const secondaryVariant = tone === "cream" ? "ghost" : "secondary";
  const primaryVariant = tone === "cream" ? "primary" : "cream";

  return (
    <section className={bg}>
      <div className="container-grove py-20 md:py-28">
        <div className="max-w-3xl">
          <p
            className={[
              "eyebrow",
              tone === "cream" ? "text-forest" : "text-wood-light",
            ].join(" ")}
          >
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-5xl tracking-[0.04em] sm:text-6xl md:text-7xl">
            {title}
          </h2>
          <p
            className={[
              "mt-5 max-w-xl text-lg",
              tone === "cream" ? "text-black/65" : "text-cream/70",
            ].join(" ")}
          >
            {body}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {[primary, secondary, tertiary].map((cta, index) =>
              cta ? (
                <ButtonLink
                  key={cta.label}
                  href={cta.href}
                  external={cta.external}
                  variant={index === 0 ? primaryVariant : secondaryVariant}
                  size="lg"
                >
                  {cta.label}
                </ButtonLink>
              ) : null,
            )}
          </div>
          {note ? (
            <p
              className={[
                "mt-4 text-sm",
                tone === "cream" ? "text-gray" : "text-cream/55",
              ].join(" ")}
            >
              {note}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

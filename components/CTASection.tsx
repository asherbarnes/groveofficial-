import { ButtonLink } from "@/components/ButtonLink";

type Props = {
  eyebrow?: string;
  title?: string;
  body?: string;
  tone?: "forest" | "black" | "cream";
};

export function CTASection({
  eyebrow = "The Grove",
  title = "Come grow with us.",
  body = "Train with Showtime. Book the facility. Or reach out and get involved in the collective.",
  tone = "forest",
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
            <ButtonLink href="/programs" variant={primaryVariant} size="lg">
              Join Showtime
            </ButtonLink>
            <ButtonLink href="/book" variant={secondaryVariant} size="lg">
              Book the Space
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant={tone === "cream" ? "ghost" : "secondary"}
              size="lg"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

type Props = {
  title: React.ReactNode;
  titleAs?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  /** dark = paper text for near-black, forest, and photo surfaces */
  tone?: "light" | "dark";
  /** Which brand is speaking: sets the short rule between heading and body */
  brand?: "grove" | "showtime" | "none";
  size?: "lg" | "md";
  /** For aria-labelledby on the parent section */
  id?: string;
  className?: string;
};

const titleSizes = {
  lg: "text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl",
  md: "text-4xl leading-[0.98] md:text-5xl",
};

/** Section heading: stacked display caps, the brand rule, then body copy. No kicker label. */
export function SectionHeading({
  title,
  titleAs: Tag = "h2",
  children,
  tone = "light",
  brand = "grove",
  size = "lg",
  id,
  className = "",
}: Props) {
  const rule =
    brand === "showtime"
      ? "brand-rule-showtime"
      : tone === "dark"
        ? "brand-rule-light"
        : "";

  return (
    <div className={["max-w-3xl", className].join(" ")}>
      <Tag
        id={id}
        className={[
          "font-display",
          titleSizes[size],
          tone === "dark" ? "text-paper" : "text-black",
        ].join(" ")}
      >
        {title}
      </Tag>
      {brand !== "none" ? (
        <span aria-hidden="true" className={["brand-rule mt-6", rule].join(" ")} />
      ) : null}
      {children ? (
        <div
          className={[
            "mt-6 max-w-2xl text-base md:text-lg",
            tone === "dark" ? "text-paper/75" : "text-black/70",
          ].join(" ")}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

/**
 * Second line of a stacked headline in the speaking brand's color (thegrove.work's
 * "ACADEMY / VALUES"). At most one per page: forest on paper for The Grove, amber
 * on black for Showtime. Grove headings on dark surfaces stay single-color.
 */
export function Accent({
  children,
  brand = "grove",
  tone = "light",
}: {
  children: React.ReactNode;
  brand?: "grove" | "showtime";
  tone?: "light" | "dark";
}) {
  const color =
    brand === "showtime" ? (tone === "dark" ? "text-amber" : "text-black") : tone === "dark" ? "text-paper" : "text-forest";
  return <span className={["block", color].join(" ")}>{children}</span>;
}

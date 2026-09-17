type Props = {
  eyebrow?: string;
  title: string;
  titleAs?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light" | "cream";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAs: Tag = "h2",
  children,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const titleColor =
    tone === "dark"
      ? "text-cream"
      : tone === "cream"
        ? "text-black"
        : "text-black";

  const bodyColor =
    tone === "dark" ? "text-cream/70" : "text-black/70";

  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p
          className={[
            "eyebrow mb-4",
            tone === "dark" ? "text-wood-light" : "text-forest",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={[
          "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          titleColor,
        ].join(" ")}
      >
        {title}
      </Tag>
      {children ? (
        <div className={["mt-5 max-w-2xl text-base md:text-lg", bodyColor].join(" ")}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "cream" | "wood";
type ButtonSize = "md" | "lg";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  // Light forest + black text for readability; hover stays in the same family
  primary:
    "bg-forest-light text-black border border-forest-light hover:bg-forest-lighter",
  // Outline on dark surfaces: soft fill on hover, no color inversion
  secondary:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream/15 hover:border-cream",
  // Outline on light surfaces: soft fill on hover, keep black text
  ghost:
    "bg-transparent text-black border border-black/25 hover:bg-black/5 hover:border-black/40",
  // Light fill: black text for contrast on cream
  cream:
    "bg-cream text-black border border-cream hover:bg-cream-deep",
  wood:
    "bg-wood text-black border border-wood hover:bg-wood-light",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-xs tracking-[0.16em]",
  lg: "px-6 py-3.5 text-sm tracking-[0.16em]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
}: Props) {
  const classes = [
    "inline-flex items-center justify-center font-display uppercase transition-colors duration-200",
    "rounded-sm",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

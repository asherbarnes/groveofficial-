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
  primary:
    "bg-forest text-cream hover:bg-forest-mid border border-forest",
  secondary:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-black",
  ghost:
    "bg-transparent text-black border border-black/25 hover:border-black hover:bg-black hover:text-cream",
  cream:
    "bg-cream text-black border border-cream hover:bg-white",
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

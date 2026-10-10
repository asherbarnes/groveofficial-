import Link from "next/link";
import { ArrowUpRight } from "@/components/Icon";

/**
 * One button family, one radius. Color says which brand is speaking:
 * - grove: The Grove's own actions on light surfaces (forest)
 * - showtime: Showtime actions only, e.g. Join Showtime (amber)
 * - light: the main action on dark surfaces
 * - dark: the main action on amber (Showtime) surfaces
 * - outline / outline-light: secondary actions on light / dark surfaces
 */
type ButtonVariant = "grove" | "showtime" | "light" | "dark" | "outline" | "outline-light";
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
  grove: "bg-forest text-paper border-forest hover:bg-forest-deep hover:border-forest-deep",
  showtime: "bg-amber text-black border-amber hover:bg-amber-deep hover:border-amber-deep",
  light: "bg-paper text-black border-paper hover:bg-white hover:border-white",
  dark: "bg-black text-paper border-black hover:bg-black/85",
  outline: "bg-transparent text-black border-black/35 hover:border-black hover:bg-black/5",
  "outline-light":
    "bg-transparent text-paper border-paper/55 hover:border-paper hover:bg-paper/10",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-[0.8125rem]",
  lg: "min-h-12 px-6 text-sm",
};

export function ButtonLink({
  href,
  children,
  variant = "grove",
  size = "md",
  external = false,
  className = "",
  onClick,
}: Props) {
  const classes = [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border font-display font-medium uppercase tracking-[0.1em] transition-colors duration-200",
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
        <ArrowUpRight className="-mr-1 text-[1.05em]" />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

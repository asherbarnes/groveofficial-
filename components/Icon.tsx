/** Line icons drawn on one 20px grid with one stroke weight. Decorative only. */
type Props = { className?: string };

const base = {
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "square" as const,
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight({ className = "" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

/** Off-site link */
export function ArrowUpRight({ className = "" }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6 14l8-8M7 5.5h7.5V13" />
    </svg>
  );
}

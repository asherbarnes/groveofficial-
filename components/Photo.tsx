import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  aspect?: string;
};

export function Photo({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imgClassName = "",
  aspect = "aspect-[4/5]",
}: Props) {
  return (
    <figure className={["min-w-0", className].join(" ")}>
      <div
        className={[
          "relative overflow-hidden bg-forest-dark",
          aspect,
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized={src.endsWith(".svg")}
          className={["object-cover", imgClassName].join(" ")}
          sizes="(max-width: 768px) 100vw, 60vw"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 max-w-md text-sm text-gray">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

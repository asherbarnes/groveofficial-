import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  aspect?: string;
  sizes?: string;
};

/** Squared photo, cropped with object-cover. Pass `aspect` classes for the box. */
export function Photo({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imgClassName = "",
  aspect = "aspect-[4/5]",
  sizes = "(max-width: 1024px) 100vw, 50vw",
}: Props) {
  return (
    <figure className={["min-w-0", className].join(" ")}>
      <div className={["relative overflow-hidden bg-black", aspect].join(" ")}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={["object-cover", imgClassName].join(" ")}
          sizes={sizes}
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

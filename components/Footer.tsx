import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { images } from "@/lib/content";
import { nav, primaryCta, secondaryCta, showtimeLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black text-cream">
      <div className="container-grove py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${site.shortName} home`}>
              <span className="relative block h-12 w-40">
                <Image
                  src={images.logoWhite.src}
                  alt={images.logoWhite.alt}
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-cream/70">
              A San Jose nonprofit strengthening the community through
              basketball since {site.founded}. Home of Showtime Basketball
              Academy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href={primaryCta.href} variant="cream" size="md">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href={secondaryCta.href} variant="secondary" size="md">
                {secondaryCta.label}
              </ButtonLink>
            </div>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Navigate</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/80 transition-colors hover:text-wood-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-cream/50">Connect</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-wood-light"
                >
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={showtimeLinks.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/80 transition-colors hover:text-wood-light"
                >
                  Showtime Basketball Academy
                </a>
              </li>
              <li className="text-cream/55">
                {site.street}, {site.location}
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule mt-12 border-0 bg-cream/15" />

        <div className="mt-6 flex flex-col gap-2 text-sm text-cream/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Est. {site.founded} · San Jose, California</p>
        </div>
      </div>
    </footer>
  );
}

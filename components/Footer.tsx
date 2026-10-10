import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icon";
import { brand } from "@/lib/content";
import { nav, showtimeLinks, site } from "@/lib/site";

const linkClass =
  "inline-flex min-h-9 items-center gap-1.5 text-paper/80 transition-colors hover:text-paper";

export function Footer() {
  return (
    <footer className="bg-black text-paper">
      <div className="container-grove py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex items-start gap-7">
            <Link href="/" aria-label={`${site.shortName} home`} className="shrink-0">
              <Image
                src={brand.lockupWhite.src}
                alt=""
                width={brand.lockupWhite.width}
                height={brand.lockupWhite.height}
                className="h-32 w-auto md:h-36"
              />
            </Link>
            <p className="max-w-xs text-paper/70">
              A San Jose nonprofit strengthening the community through
              basketball since {site.founded}. Home of Showtime Basketball
              Academy.
            </p>
          </div>

          <nav aria-labelledby="footer-nav-heading">
            <h2 id="footer-nav-heading" className="label text-paper/65">
              Navigate
            </h2>
            <ul className="mt-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label text-paper/65">Connect</h2>
            <ul className="mt-3">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {site.instagramHandle}
                  <ArrowUpRight className="text-sm" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={showtimeLinks.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Showtime Basketball Academy
                  <ArrowUpRight className="text-sm" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li className="flex min-h-9 items-center text-paper/65">
                {site.street}, San Jose
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/65 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Est. {site.founded} · {site.location}</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { nav, primaryCta, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-black/10 bg-cream/95 backdrop-blur-sm"
          : "border-transparent bg-cream",
      ].join(" ")}
    >
      <div className="container-grove flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.08em] text-black md:text-[1.7rem]"
          aria-label={`${site.shortName} home`}
        >
          THE GROVE
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-[0.7rem] tracking-[0.18em] text-black/75 transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={primaryCta.href} variant="primary" size="md">
            {primaryCta.label}
          </ButtonLink>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <ButtonLink
            href={primaryCta.href}
            variant="primary"
            size="md"
            className="!px-3 !py-2.5 !text-[0.65rem]"
          >
            Join Showtime
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-black/20"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={[
                  "absolute left-0 h-[1.5px] w-full bg-black transition-transform",
                  open ? "top-1.5 rotate-45" : "top-0",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-1.5 h-[1.5px] w-full bg-black transition-opacity",
                  open ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 h-[1.5px] w-full bg-black transition-transform",
                  open ? "top-1.5 -rotate-45" : "top-3",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          "fixed inset-x-0 top-16 bottom-0 z-40 bg-forest-dark text-cream lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="container-grove flex h-full flex-col justify-between py-8">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-cream/15 py-4 font-display text-3xl tracking-[0.06em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/scholarship"
              className="border-b border-cream/15 py-4 font-display text-3xl tracking-[0.06em]"
              onClick={() => setOpen(false)}
            >
              Scholarship
            </Link>
          </nav>

          <div className="grid gap-3 pb-8">
            <ButtonLink
              href={primaryCta.href}
              variant="cream"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Join Showtime
            </ButtonLink>
            <ButtonLink
              href="/book"
              variant="secondary"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book the Space
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

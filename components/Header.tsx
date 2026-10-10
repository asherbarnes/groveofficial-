"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { brand } from "@/lib/content";
import { nav, primaryCta, secondaryCta, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: lock scroll, take the page behind it out of the tab
  // order, close on Escape, and close if the viewport grows to the desktop nav.
  useEffect(() => {
    if (!open) return;
    const behind = [document.getElementById("main"), document.querySelector("footer")];
    document.body.style.overflow = "hidden";
    behind.forEach((el) => el?.setAttribute("inert", ""));

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.body.style.overflow = "";
      behind.forEach((el) => el?.removeAttribute("inert"));
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-paper/10 bg-black text-paper">
        <div className="container-grove flex h-16 items-center justify-between gap-3 md:h-[4.5rem]">
          <Link
            href="/"
            className="-ml-1 inline-flex min-h-11 items-center gap-3 px-1"
            aria-label={`${site.shortName} home`}
          >
            <Image
              src={brand.markWhite.src}
              alt=""
              width={brand.markWhite.width}
              height={brand.markWhite.height}
              priority
              className="h-10 w-auto md:h-11"
            />
            <span className="font-display text-[1.375rem] tracking-[0.06em] max-[359px]:sr-only md:text-2xl">
              The Grove
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className="py-3 font-display text-[0.875rem] font-medium tracking-[0.08em] text-paper/75 uppercase transition-colors hover:text-paper aria-[current=page]:text-paper aria-[current=page]:underline aria-[current=page]:decoration-paper aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[0.6em]"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={primaryCta.href} variant="showtime" size="md" className="ml-1">
              {primaryCta.label}
            </ButtonLink>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ButtonLink
              href={primaryCta.href}
              variant="showtime"
              size="md"
              className="!px-3.5 !text-[0.75rem]"
            >
              {primaryCta.label}
            </ButtonLink>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-paper/30 transition-colors hover:border-paper"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span
                  className={[
                    "absolute left-0 h-[1.5px] w-full bg-paper transition-transform",
                    open ? "top-1.5 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1.5 h-[1.5px] w-full bg-paper transition-opacity",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 h-[1.5px] w-full bg-paper transition-transform",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header> so a future backdrop-filter there can't become the
          containing block for this fixed panel. The top offset matches the
          header height plus its 1px border. */}
      <div
        id="mobile-nav"
        className={[
          "fixed inset-x-0 bottom-0 top-[calc(4rem+1px)] z-40 overflow-y-auto bg-black text-paper md:top-[calc(4.5rem+1px)] lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="container-grove flex min-h-full flex-col gap-10 py-6">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                className="flex items-center justify-between border-b border-paper/15 py-4 font-display text-[2rem] leading-none tracking-[0.02em] aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[0.3em]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex items-end justify-between gap-6 pb-6">
            <div className="grid flex-1 gap-3">
              <ButtonLink
                href={secondaryCta.href}
                variant="light"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {secondaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={site.instagramUrl}
                external
                variant="outline-light"
                size="lg"
                className="w-full"
              >
                {site.instagramHandle}
              </ButtonLink>
            </div>
            <Image
              src={brand.lockupWhite.src}
              alt=""
              width={brand.lockupWhite.width}
              height={brand.lockupWhite.height}
              className="h-28 w-auto opacity-90"
            />
          </div>
        </div>
      </div>
    </>
  );
}

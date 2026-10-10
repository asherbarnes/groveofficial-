# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Marketing site for The Grove Community Collective (San Jose basketball nonprofit/facility, home of Showtime Basketball Academy). Next.js 16 App Router + React 19 + Tailwind CSS v4, TypeScript. No backend, no database, no tests.

## Commands

```bash
npm run dev     # local dev server
npm run build   # production build (also type-checks)
npm run lint    # eslint (flat config: next core-web-vitals + typescript)
npm start       # serve the production build
```

There is no test suite; verify changes with `npm run lint` and `npm run build`, and check visually in the browser.

## Architecture

- **Content lives in `lib/`, not in components.** `lib/site.ts` holds site facts (name, Instagram, GoodRun booking URL), the shared `nav` array, the `primaryCta` / `secondaryCta` / `bookingCta` / `joinShowtimeCta` objects, and `showtimeLinks` (Showtime inquiry, memberships, social). `lib/content.ts` holds verified copy (mission, audiences, Showtime programs and join steps, community work, past events, scholarship), partners, and the `images` map (all photo paths and alt text). Change copy/links/images there rather than inline.
- **`nav` in `lib/site.ts` is the single source** for desktop header, mobile menu, and footer. Don't hardcode nav links elsewhere.
- **Routes** (`app/*/page.tsx`): `/`, `/events`, `/programs`, `/community`, `/scholarship`, `/book`, `/contact`. One-off page storytelling stays in the route file; `components/` is an intentionally small set of reusable sections.
- **SEO:** each route exports `metadata = pageMetadata({ title, description, path })` from `lib/metadata.ts`, which sets the canonical, Open Graph, and Twitter tags in full (Next merges `openGraph` shallowly, so pages must not rely on the layout's). Each route also has an `opengraph-image.tsx` calling `renderOgImage` (`lib/og.tsx`; photo crops in `assets/og/*.jpg`, TTF fonts in `assets/fonts/`). `app/sitemap.ts` is built from `nav`; `app/robots.ts` points at it. Home renders `organizationJsonLd`, verified facts only. Adding a route: use `pageMetadata` and add an `opengraph-image.tsx`.
- **Design system: `DESIGN.md` is the source of truth** for the visual system and the brand architecture: The Grove = near-black, off-white, forest green; Showtime = amber, only where Showtime is speaking (Programs page, Join Showtime buttons). Never use amber as a Grove accent.
- **Styling:** tokens are CSS variables in `app/globals.css` (`--black`, `--paper`, `--paper-deep`, `--gray`, `--forest`, `--forest-deep`, `--forest-light`, `--amber`, `--amber-deep`) exposed to Tailwind via `@theme inline` (e.g. `bg-forest`, `text-paper`). Element defaults are in `@layer base` and shared classes in `@layer components` (`.font-display`, `.label`, `.brand-rule` / `-light` / `-showtime`, `.container-grove` / `.container-narrow`, `.gutter-start` / `.gutter-end` for full-bleed splits), so Tailwind utilities always override them. Don't add unlayered rules. Motion: `.animate-rise/fade/line`, hero only, off under `prefers-reduced-motion`.
- **Headings:** `SectionHeading` (stacked display caps, then the brand rule, then body) and `Accent` for a second line in the brand color. No kicker/eyebrow labels above headings.
- **Fonts** (Oswald display, Source Sans 3 body) are loaded with a Google Fonts `<link>` in `app/layout.tsx`, deliberately *not* `next/font` (it emitted an empty size-adjust meta). `IMPLEMENTATION_NOTES.md` still says `next/font`; that is out of date.
- **Accessibility (WCAG 2.2 AA):** the global `:focus-visible` ring is two-tone (inner black, outer off-white) so it works on every surface; don't add `outline-none`. Muted text on dark surfaces is `text-paper/65` minimum, and `--gray` is the lightest gray for small text on paper. Interactive targets are at least 24px (header and mobile controls 44px). External links announce "(opens in a new tab)" (built into `ButtonLink`). The mobile menu sits outside `<header>` (its `backdrop-blur` would trap the fixed panel), closes on Escape, and makes `#main`/`footer` `inert` while open.
- **Buttons:** use `ButtonLink` (`components/ButtonLink.tsx`): `grove` (forest, Grove actions on light), `showtime` (amber, Showtime actions only), `light` (main action on dark), `dark` (main action on amber), `outline` / `outline-light`. One 2px radius, 44px/48px tall. Pass `external` for off-site links (adds the arrow icon and new-tab text). Icons come from `components/Icon.tsx`; don't use Unicode arrows. Images go through `Photo` (`next/image` with `fill`, squared corners).
- **Booking** is external only (GoodRun via `bookingCta`). Don't build an internal booking flow.
- **Join Showtime:** header/hero/footer "Join Showtime" go to `/programs`; `/programs` sends visitors off-site via `joinShowtimeCta` (Showtime owns enrollment). Never route training inquiries to The Grove's contact form.
- **Contact form** (`components/ContactForm.tsx`, client component) is for business, partner, donor, and event inquiries only. It builds a `mailto:` from `NEXT_PUBLIC_CONTACT_EMAIL` (see `.env.example`); when unset it renders an Instagram DM prompt instead of the form. `/contact?topic=partnership|donate|event|other` preselects the topic (`ContactFormWithTopic`, wrapped in `<Suspense>`). No form backend yet.

## Content rules (client work)

- **`PRODUCT.md` is the source of truth** for what The Grove is, audiences, offerings, verified contact info, partners, conversion goals, and open client questions. Check it before writing copy; anything under "Needs confirmation" stays off the site or is labeled draft.
- **Never invent facts**: no made-up stats, prices, ages, schedules, coach bios, testimonials, emails, phone numbers, or addresses. `CONTENT_NEEDED.md` tracks what's missing or awaiting client verification; update it when content arrives or new gaps appear.
- Unconfirmed content stays off the site rather than shipping with draft labels (`.draft-note` remains available). Hoop Ministry and the mural project are omitted. Past events (`pastEvents`) are historical proof only; never present them as upcoming. `/events` reads `lib/events.ts` (typed, ISO dates with offsets) and sorts events into Upcoming / Past by end time in America/Los_Angeles; the page revalidates hourly. Add an event by appending to `events` with verified facts and sources; record it in `research/events-inventory.md`.
- **No em dashes in user-facing copy.**
- Primary CTAs are consistently **Join Showtime** and **Book the Space**. Brand hierarchy: community/mission first, then Showtime, then the facility.
- Art direction: editorial asymmetric layouts over card grids, modest button radius, squared images, motion limited to hero entrance and hover states.
- **Logo:** `brand` in `lib/content.ts` points at `public/brand/` (mark and lockup, white and black, exported from the old site's high-res PNGs; use pending client OK, Q26). The header shows the white mark beside a typeset "The Grove"; the footer and mobile menu show the full lockup. Don't redraw, trace, or substitute the logo.
- **thegrove.work is The Grove's old official site** (Wix), which this build replaces; it is the main fact source (`G`) and the design reference. The redesign evolves its look (the geometric mark, heavy all-caps headlines, near-black and off-white, the short rule), not rebrands it; see DESIGN.md for how amber was reassigned to Showtime. grove.work is unrelated; don't cite it.
- Real photos are `.avif` in `public/images/`; the `.svg` files there are leftover placeholders. `next.config.ts` still enables `dangerouslyAllowSVG` for them. Past events show `flyerDate()` dates (2.24.2024, the old site's style).

See `IMPLEMENTATION_NOTES.md` for fuller design rationale.

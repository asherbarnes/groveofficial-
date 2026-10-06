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
- **Routes** (`app/*/page.tsx`): `/`, `/programs`, `/community`, `/scholarship`, `/book`, `/contact`. One-off page storytelling stays in the route file; `components/` is an intentionally small set of reusable sections. Each route exports `metadata` with its own `alternates.canonical`; `metadataBase` and the title template are set in `app/layout.tsx`. Add a canonical when adding a route.
- **Styling:** brand colors are CSS variables in `app/globals.css` (`--forest*`, `--cream*`, `--wood*`, `--gray*`, `--black`) exposed to Tailwind via `@theme inline` (e.g. `bg-forest`, `text-cream`). Shared utility classes there: `.container-grove` / `.container-narrow` / `.container-wide`, `.font-display`, `.eyebrow`, `.rule`, `.draft-note`, and `.animate-rise/fade/line` (disabled under `prefers-reduced-motion`).
- **Fonts** (Oswald display, Source Sans 3 body) are loaded with a Google Fonts `<link>` in `app/layout.tsx`, deliberately *not* `next/font` (it emitted an empty size-adjust meta). `IMPLEMENTATION_NOTES.md` still says `next/font`; that is out of date.
- **Buttons:** use `ButtonLink` (`components/ButtonLink.tsx`) with variants `primary | secondary | ghost | cream | wood`. Filled buttons use black text for contrast; pass `external` for off-site links (opens new tab). Images go through `Photo` (`next/image` with `fill`, squared corners).
- **Booking** is external only (GoodRun via `bookingCta`). Don't build an internal booking flow.
- **Join Showtime:** header/hero/footer "Join Showtime" go to `/programs`; `/programs` sends visitors off-site via `joinShowtimeCta` (Showtime owns enrollment). Never route training inquiries to The Grove's contact form.
- **Contact form** (`components/ContactForm.tsx`, client component) is for business, partner, donor, and event inquiries only. It builds a `mailto:` from `NEXT_PUBLIC_CONTACT_EMAIL` (see `.env.example`); when unset it renders an Instagram DM prompt instead of the form. `/contact?topic=partnership|donate|event|other` preselects the topic (`ContactFormWithTopic`, wrapped in `<Suspense>`). No form backend yet.

## Content rules (client work)

- **`PRODUCT.md` is the source of truth** for what The Grove is, audiences, offerings, verified contact info, partners, conversion goals, and open client questions. Check it before writing copy; anything under "Needs confirmation" stays off the site or is labeled draft.
- **Never invent facts**: no made-up stats, prices, ages, schedules, coach bios, testimonials, emails, phone numbers, or addresses. `CONTENT_NEEDED.md` tracks what's missing or awaiting client verification; update it when content arrives or new gaps appear.
- Unconfirmed content stays off the site rather than shipping with draft labels (`.draft-note` remains available). Hoop Ministry and the mural project are omitted. Past events (`pastEvents`) are historical proof only; never present them as upcoming.
- **No em dashes in user-facing copy.**
- Primary CTAs are consistently **Join Showtime** and **Book the Space**. Brand hierarchy: community/mission first, then Showtime, then the facility.
- Art direction: editorial asymmetric layouts over card grids, modest button radius, squared images, motion limited to hero entrance and hover states.
- Header uses a text wordmark (only a white logo exists, used in the footer on dark). Don't create a substitute logo.
- Real photos are `.avif` in `public/images/`; the `.svg` files there are leftover placeholders. `next.config.ts` still enables `dangerouslyAllowSVG` for them.

See `IMPLEMENTATION_NOTES.md` for fuller design rationale.

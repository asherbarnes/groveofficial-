# Implementation Notes

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS v4 with semantic brand tokens
- Google fonts via `next/font`: **Oswald** (display) + **Source Sans 3** (body)

## Site map

| Route | Purpose |
| --- | --- |
| `/` | Editorial homepage narrative |
| `/programs` | Showtime Basketball Academy |
| `/community` | Mission, philosophy, outreach |
| `/scholarship` | Eric Cordova Scholarship |
| `/book` | Facility rental → GoodRun |
| `/contact` | Inquiries + social |

## Brand hierarchy encoded in IA

1. Community + mission
2. Showtime Basketball Academy
3. The Grove facility

Primary CTAs stay consistent: **Join Showtime** and **Book the Space**.

## Design system

CSS variables in `app/globals.css`:

- `--forest`, `--forest-dark`, `--forest-mid`
- `--cream`, `--cream-deep`
- `--black`, `--wood`, `--wood-light`
- `--gray`, `--white`

Art direction choices:

- Editorial layouts over card grids
- Modest button radius only; images stay squared
- Asymmetric homepage rhythm (poster hero → philosophy → pathway list → full-bleed facility → sticky community story → dark scholarship → partners → social masonry → final CTA)
- Motion limited to hero entrance + hover states; respects `prefers-reduced-motion`

## Booking

External GoodRun URL opens in a new tab from `/book` and shared CTAs. No fake internal booking system.

## Contact form

`ContactForm` builds a `mailto:` when `NEXT_PUBLIC_CONTACT_EMAIL` is set. If unset, it directs users to Instagram and documents the gap — no invented email/phone/address.

## Content truthfulness

- Verified copy lives in `lib/content.ts` and `lib/site.ts`
- Draft Showtime pathway and unconfirmed Hoop Ministry are labeled in UI
- Mural project intentionally omitted as a current campaign
- No invented stats, prices, ages, testimonials, or coach bios

## Images

Temporary SVG treatments in `/public/images/` preserve intended crops and weight. Replace with real JPG/WebP using the filenames listed in `CONTENT_NEEDED.md`, then update `lib/content.ts` paths if extensions change.

`next.config.ts` allows SVG placeholders via `images.dangerouslyAllowSVG` for development until photography lands.

## Components

Intentionally small set:

- `Header`, `Footer`, `ButtonLink`
- `Hero`, `SectionHeading`, `Photo`
- `ProgramPathway`, `FacilitySection`, `CommunitySection`
- `PartnerLogoGrid`, `SocialGrid`, `CTASection`, `ContactForm`

One-off page storytelling stays in route files.

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Favicon / logo

No usable official logo was present in the empty repository. Header uses a temporary text wordmark (`THE GROVE`). Replace when brand files arrive; do not invent a basketball clip-art mark.

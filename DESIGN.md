---
name: The Grove Community Collective
description: San Jose basketball nonprofit and facility, home of Showtime Basketball Academy. Near-black, off-white and forest for The Grove; amber only where Showtime speaks.
colors:
  black: "#151515"
  paper: "#f6f5f0"
  paper-deep: "#ebe9e1"
  white: "#ffffff"
  gray: "#5c5a55"
  forest: "#16352a"
  forest-deep: "#0f271f"
  amber: "#ffb800"
  amber-deep: "#e5a400"
typography:
  display:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 17vw, 8rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.01em"
  title:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "0.01em"
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0.12em"
  button:
    fontFamily: "Oswald, Arial Narrow, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  none: "0px"
spacing:
  gutter: "20px"
  container: "1180px"
  container-narrow: "760px"
  section: "80px"
  section-md: "112px"
  brand-rule: "48px"
components:
  button-grove:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    typography: "{typography.button}"
    padding: "0 20px"
    height: "44px"
  button-grove-hover:
    backgroundColor: "{colors.forest-deep}"
  button-showtime:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
    typography: "{typography.button}"
    padding: "0 20px"
    height: "44px"
  button-showtime-hover:
    backgroundColor: "{colors.amber-deep}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-light-hover:
    backgroundColor: "{colors.white}"
  button-dark:
    backgroundColor: "{colors.black}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "0 20px"
    height: "44px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
  header:
    backgroundColor: "{colors.black}"
    textColor: "{colors.paper}"
    height: "72px"
  date-chip-showtime:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.black}"
    typography: "{typography.title}"
---

# Design System: The Grove Community Collective

## Overview

**Creative North Star: "The Grove's House, Showtime's Court"**

The site is The Grove's own house with Showtime Basketball Academy as the program that trains inside it. The system makes that brand architecture visible in colour: Grove surfaces are near-black, off-white and forest green, and amber appears only where Showtime is speaking. It evolves the old thegrove.work look (monochrome, heavy all-caps headlines, the geometric mark) rather than rebranding it.

Pages are editorial and asymmetric. Stacked, condensed, all-caps block headlines sit over a short brand rule, and full-bleed split heroes put text against squared real photography. Lists are ruled rows rather than card grids. Section bands alternate paper, paper-deep, forest and black. The surfaces are flat, the corners are square, and motion is limited to the hero entrance and hover colour shifts.

**Key Characteristics:**
- Two related brands told apart by colour: forest/off-white for The Grove, amber for Showtime.
- Oswald 600 condensed caps stacked with tight but non-colliding leading.
- A 48px brand rule under every section heading, in the speaking brand's colour.
- Squared real photography that bleeds to the viewport edge in split heroes.
- One button family with a 2px radius.
- Flat tonal banding with no shadows.

## Brand architecture

**Status: working decision as of 2026-10-06, pending final client confirmation (PRODUCT.md question 26).** Heritage: the old site thegrove.work used near-black, off-white and amber with no green (research/thegrove-work-brand-review.md). The logo PNGs in `public/brand/` are also pending client approval, and vector originals are still to come.

- **The Grove and Showtime Basketball Academy are related but distinct brands.**
  - The Grove is the parent facility and community identity.
  - Showtime is a basketball training program operating at The Grove.
- **The Grove** is centred on near-black (#151515), off-white (#f6f5f0) and forest green (#16352a). Paper-deep and forest-deep are its supporting tones.
- **Amber (#ffb800) is reserved primarily for Showtime-specific contexts:**
  - the /programs hero field;
  - Join Showtime buttons (the `showtime` button variant);
  - the Showtime rule (`.brand-rule-showtime`);
  - the amber "Showtime standards." accent;
  - the amber date chip on Showtime-run past events (`showtime: true`).
- **The shared black and off-white neutrals** visually connect the two brands.
- **Amber must not become the dominant Grove accent** unless later brand evidence supports it, and the site must not feel like a Showtime Basketball website.
- **On dark Grove surfaces, the accent and rules are off-white.** Forest would disappear on near-black, and the earlier mint "forest-light" was removed as off-palette.

**The Speaking Brand Rule.** Before using amber, ask "is Showtime speaking here?" If the answer is no, use forest on light surfaces and off-white on dark ones.

## Colors

The palette is two neutrals shared by both brands, one Grove field colour, and one Showtime signal colour.

### Primary
- **Grove Forest** (forest): the field colour for The Grove. It fills whole bands (facility, scholarship quote, closing CTA), Grove primary buttons on light surfaces, the contact panel, Grove past-event dates, `Accent` headline lines on paper, the brand rule on paper, and text selection.
- **Deep Forest** (forest-deep): the hover state for Grove buttons.

### Secondary
- **Showtime Amber** (amber): Showtime only (see Brand architecture). On amber fields, text, buttons and the rule turn near-black.
- **Pressed Amber** (amber-deep): the hover state for Showtime buttons.

### Neutral
- **Court Black** (black): the header, footer, mobile menu, home hero, Showtime "Training" band, all text on light surfaces, and the inner band of the focus ring.
- **Paper** (paper): the default page surface, text on dark surfaces, the outer band of the focus ring, and the brand rule on dark surfaces.
- **Paper Deep** (paper-deep): the alternate light band, used for one section in a pair so that stacked paper sections read as separate.
- **White** (white): the hover state of the `light` button only. It is never used as a surface.
- **Warm Gray** (gray): captions and quiet text on paper. It is the lightest gray allowed for small text on paper (6.3:1 on paper, 5.7:1 on paper-deep).
- **Hairline** (black at 14 to 15%, or paper at 15 to 20% on dark surfaces): the row rules in ruled lists, partner grid lines, and dividers.

### Named Rules
**The Off-White On Dark Rule.** On near-black and forest, Grove accents, rules and `Accent` lines are paper, never forest and never mint.

**The Muted Floor Rule.** Muted text on dark surfaces is paper at 65% opacity or more. Body copy on dark surfaces sits at 70 to 75%.

## Typography

**Display Font:** Oswald (with Arial Narrow, sans-serif), weight 600, uppercase, loaded from Google Fonts with a `<link>` tag.
**Body Font:** Source Sans 3 (with system-ui, sans-serif).
**Label Font:** Oswald 500 in small, tracked caps.

**Character:** The display face is heavy, condensed and capitalised like a gym-wall stencil. The body face is a plain humanist sans that keeps long nonprofit copy readable.

### Hierarchy
- **Display** (600, clamp(3.5rem, 17vw, 8rem), 0.86): hero names only, such as "THE GROVE." and "SHOWTIME".
- **Headline** (600, 2.75rem rising to 4.5rem and up to 6rem on page h1s, 0.92 to 0.98): page h1s and section h2s through `SectionHeading`. The large size uses 0.95 and the medium size uses 0.98.
- **Title** (600, 1.5rem to 2.25rem, 1.02 to 1.1): list-row titles, past-event names, and panel headings. These wrap, so their leading stays at 1.0 or above.
- **Body** (400, 17px, 1.6): running copy. Section intros are 16px to 18px in a block of at most 42rem.
- **Label** (500, 13px, 0.12em, uppercase): footer column heads, form labels, and hero meta lines such as "San Jose · Est. 2017".

### Named Rules
**The Leading Floor Rule.** Only large single-line or deliberately stacked display headings go below 1.0 (0.86 to 0.98). Anything that wraps (subheads, list titles, quotes) stays at 1.0 or above so condensed caps never touch. `.font-display` sits in `@layer components`, so `leading-*` and `tracking-*` utilities do take effect.

**The One Accent Rule.** `Accent` produces at most one two-colour headline per page. Its second line is forest on paper, paper on dark Grove surfaces, and amber on black only for Showtime.

## Layout

The containers are `.container-grove` (min(1180px, 100% − 2.5rem)) and `.container-narrow` (760px). Section bands use 80px of vertical padding, rising to 112px at md.

Full-bleed split heroes (home, /programs, /scholarship, /community) are a two-column grid with `minmax(0, …)` tracks at lg, weighted roughly 1.1fr to 0.9fr. The text column uses `.gutter-start`, padded by max(1.25rem, (100vw − 1180px) / 2), so it lines up with the container while the photo bleeds to the viewport edge. `.gutter-end` mirrors this. Below lg the split stacks, with the photo after the text.

Content layouts are asymmetric two-column grids (0.8fr/1.2fr, 0.9fr/1.1fr, 1.05fr/0.95fr). Lists are ruled rows with a title column and a body column, or flyer rows with an 11rem date column and a heavy 3px top rule. Equal three-up grids appear only for sequenced steps and small sets.

**The Banding Rule.** Section bands alternate paper, paper-deep, forest and black. A closing band never runs black into the black footer: the closing CTA is forest or paper.

## Elevation & Depth

The system is completely flat. Depth comes from tonal banding (paper, paper-deep, forest, black), hairline rules, and photos that bleed past the container. The only `box-shadow` in the build is the inner band of the focus ring.

**The Flat Band Rule.** Separate content with colour bands and rules, never with shadows or floating cards.

## Shapes

Corners are square. Photos have no radius (the `Photo` component crops with object-cover inside a black box). Buttons, form inputs and the menu toggle share one 2px radius. The recurring geometric motifs are the short horizontal brand rule (48px × 3px), the 3px heavy top rule on event lists, and gap-px hairline grids for the partner logos and the L.E.A.D. standards.

## Components

### Buttons
One family where colour says which brand is speaking.
- **Shape:** an almost-square 2px corner with a 1px border in the fill colour.
- **Sizes:** md is 44px high with 20px horizontal padding and 13px text. lg is 48px high with 24px padding and 14px text. Both use Oswald 500 caps tracked at 0.1em.
- **grove:** forest fill with paper text, for The Grove's own actions on light surfaces. Hover turns it forest-deep.
- **showtime:** amber fill with black text, used only for Join Showtime and other Showtime actions. Hover turns it amber-deep.
- **light:** paper fill with black text, the main action on dark surfaces. Hover turns it white.
- **dark:** black fill with paper text, the main action on the amber Showtime field.
- **outline / outline-light:** a transparent fill with a 35% black or 55% paper border, for secondary actions. Hover strengthens the border to full and adds a 5 to 10% tint.
- **External:** links that leave the site get a line arrow-up-right icon and screen-reader text "(opens in a new tab)".
- **Motion:** colour transitions over 200ms. Focus uses the global two-tone ring.

### Inputs / Fields
- **Style:** a paper field with black text, a 1px paper border, a 2px radius and 12px × 16px padding, on the forest contact panel.
- **Focus:** the global two-tone ring (a 2px paper outline offset 2px over a 2px black shadow). Never remove it.

### Navigation
- **Header:** sticky and black, 64px high (72px from md). It carries the white Grove mark plus a typeset "THE GROVE" in Oswald, nav links in 14px Oswald 500 caps at paper/75, and the current page in full paper with a 2px underline. Join Showtime is always the amber `showtime` button.
- **Mobile:** a 44px toggle with a 2px radius opens a full-height black panel outside `<header>`. It holds 32px display links separated by hairlines, a `light` and an `outline-light` button, and the white lockup.
- **Footer:** black, with the white lockup, label-styled column heads at paper/65, and links at paper/80 that turn full paper on hover.

### Section Heading (signature)
`SectionHeading` stacks the display heading, then the 48px brand rule (forest on paper, paper on dark surfaces, amber for Showtime, black on the amber field), then a body block. It never has a kicker label above it.

### Flyer Date Rows (signature)
Past events are set as flyer-style dates (`flyerDate`, for example 2.24.2024) in display caps. Grove events are forest and Showtime-run events are a black-on-amber chip. These rows are historical proof only.

### Logo usage
- **Header:** the white mark (`brand.markWhite`) next to a typeset "The Grove".
- **Footer and mobile menu:** the white lockup.
- **Favicon:** the white mark on near-black.
- **Social cards:** the white mark on Grove cards and the black mark on the amber Showtime card.
- Never redraw, trace or substitute the logo.

### Icons
The icons are line icons from `components/Icon.tsx`, drawn on a 20px grid with a 1.75 stroke and square caps, sized 1em to currentColor, and always decorative. The site never uses Unicode arrows or glyph icons.

## Do's and Don'ts

### Do:
- **Do** use amber only where Showtime is speaking: the /programs hero, Join Showtime buttons, the Showtime rule, the "Showtime standards." accent, and Showtime event date chips.
- **Do** make Grove accents and rules off-white (paper) on near-black and forest surfaces.
- **Do** set large display headings at 0.86 to 0.98 leading and keep anything that wraps at 1.0 or above.
- **Do** follow every section heading with the 48px brand rule, then the body copy.
- **Do** use `ButtonLink` at 44px or 48px with the 2px radius, and pass `external` for off-site links.
- **Do** use squared real photography that bleeds to the viewport edge in split heroes, using `.gutter-start` / `.gutter-end` with minmax(0, …) tracks.
- **Do** alternate paper, paper-deep, forest and black bands, and end pages on forest or paper before the black footer.
- **Do** keep WCAG 2.2 AA: the two-tone focus ring, muted text on dark at paper/65 or more, and gray (#5c5a55) as the lightest small text on paper.

### Don't:
- **Don't** let amber become the dominant Grove accent or make the site feel like a Showtime Basketball website.
- **Don't** use forest-on-black or the removed mint "forest-light".
- **Don't** put kicker or eyebrow labels above headings.
- **Don't** use more than one `Accent` two-colour headline per page.
- **Don't** build card grids with shadows. Use ruled, asymmetric lists.
- **Don't** use Unicode arrows or glyph icons. Use the line icons in `components/Icon.tsx`.
- **Don't** redraw or substitute the Grove mark or lockup, or use illustrations or placeholder SVGs in place of photos.
- **Don't** add `outline-none` or a black closing band directly above the black footer.

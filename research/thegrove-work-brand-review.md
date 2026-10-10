# thegrove.work: brand and design review

thegrove.work is **The Grove's old official website** (a Wix site), which this build replaces. This file records what it looks like, so the new site reads as a better version of it, not an unrelated rebrand. Facts from it are logged in `content-sources.md` under source key `G`.

- **Reviewed:** 2026-10-05. Wix sitemap `lastmod` is 2026-08-14.
- **Pages:** `/`, `/events`, `/non-profit`, `/showtimebasketball`, `/ericcordova`, `/contact`, `/donate`. The sitemap lists only `/`, `/events`, `/ericcordova` and `/donate`; the others are reachable from the menu.
- **Method:** Playwright (Chromium) full-page captures at 1440px and 390px, computed styles (fonts, colors, button boxes) read from the DOM, and the hamburger menu opened. Screenshots were working files and are not stored in the repo. Re-capture them if needed.
- **Earlier mistake:** previous research named grove.work as the old site. That domain is a GoDaddy parking page with no Grove content, so nothing was ever taken from it.

## 1. What the old site looks like

### Colors

The brand is monochrome plus one warm accent. The building looks the same: white walls, the black mark painted on the wall, maple hardwood.

| Role | Value | Where |
|---|---|---|
| Near-black surface | `#1c1c1c` / `#1f1f1f` | Header, footer, menu overlay, Philosophy band, contact page, event cards |
| Pure black | `#000000` | Headings on light pages, filled buttons |
| Off-white | `#f8f8f4` | Main light surface (largest area on the site), booking strip, shoe-drive panel |
| White | `#ffffff` | Section backgrounds |
| Warm charcoal text | `#3e3d35` | Body copy and H2s on light sections |
| **Amber accent** | `#ffb800` | Full-width Showtime band on home, Showtime page header, event dates, "Coach Eric Cordova" and "The Scholarship" headings, "VALUES", the NON-PROFIT headline gradient (amber to orange) |
| Taupe | `#7e6f63` | Donate form submit button only |

- **Amber belongs to Showtime too.** Showtime's logo sits on an amber field, so amber is shared between the two brands.
- **No green.** The old site has no forest or green tones. The only green found was a Wix image-loading placeholder.

### Typography

There are about six families with no system behind them:
- Wix Madefor Display, 700/800: H1/H2, such as "Our Philosophy" and "Contact Us".
- Montserrat Black: event titles, sometimes italic with a drop shadow.
- Avenir Light and Heavy: body copy and small headings.
- Work Sans: the scholarship hero.
- Lulo Clean, plus one uploaded custom font.
- Text sizes and leading vary from section to section.

The consistent signal is **heavy, tight-tracked, all-caps or near-caps display type against light body copy**. The logo's "THE GROVE" lettering is a condensed athletic block letter; Oswald in the current build is close in spirit.

### Navigation

- A near-black header bar holds the **white logo mark on the left** and a **circled hamburger icon on the right at every width**, desktop included. No links are visible in the header.
- The menu is a full-screen near-black overlay with centered, bold, title-case links: Non-Profit Efforts, Events, Showtime Basketball, Eric Cordova Scholarship, Contact Us, plus an Instagram icon.
- The home page adds a slim off-white strip below the header: "Interested in Booking Our Space? **Book Now**", with a black button that links to GoodRun.
- The footer is a near-black band with the centered white mark and "© The Grove | Est. 2017".

### Image treatment

- **Real photography only:** the gym, players, events and the scholarship plaque. There is no stock photography and no illustration.
- **Photos run full-bleed or to the edge** in half-and-half splits. The home hero is a full-width photo of the court with the Showtime logo on the backboard and the Grove mark on the wall.
- **Mixed corners:** most photos are square-cornered, but some on `/showtimebasketball` and `/ericcordova` have one or more large rounded corners (about 40 to 60px).
- **Text over photos:** headlines sit on dark-graded or busy photos, sometimes with a drop shadow (BUX ISLAND, ALL CITY RUNS, THE COOKOUT AT THE GROVE).
- **Recurring subjects:** the black Grove mark on the white gym wall and big team lineups on hardwood. These are the most recognizable images the brand has.

### Graphic motifs

- **The mark:** a symmetric, outlined geometric figure that reads as a tree, a house and a cross at once, on a pedestal base, above "THE GROVE" in block capitals. It appears white on dark (header, footer), black on white (events page), painted on the gym wall, and on the crystal scholarship plaque.
- **Short horizontal rule:** a thin line, about 40px, sits to the left of the first line of body copy in most sections (Philosophy, Facility, Showtime, Contact). It is the most consistent layout device on the site.
- **Stacked display headlines with a contrasting word:** "THE / ERIC CORDOVA / SCHOLARSHIP", "ACADEMY / **VALUES**" (second word in amber), and "NON-PROFIT" over a letter-spaced "EFFORTS".
- **Dates as accent type:** event dates in amber, written `2.24.2024`, next to the event title.
- **Plaque ornament:** `→>>·<<<-` and the line "Forever on the Court" on the scholarship plaque. This is real brand material, not a web invention.

### Layout patterns

- **Alternating full-width bands:** light, near-black, white, amber, light. Each section is one band.
- **Split sections:** photo on one half and text on the other, alternating sides. Sometimes the photo overlaps the band edge (Showtime photo over the amber band).
- **Centered narrow text columns,** usually with the short rule to the left.
- **Collage grid on Events:** asymmetric tiles mixing photo tiles, a black text card with rounded corners, and a centered logo tile.
- **Partner logo cloud** on home, with the logos at mixed sizes.

### CTA style

- **Small:** Arial-rendered labels around 10 to 15px, buttons 32 to 48px tall.
- **Inconsistent:** square-ish (5px radius), fully rounded pills (Learn More, Donate), and square (form submits) all appear, as outline, filled-black and white-fill styles.
- **Generic labels:** Learn More, View More, Our Events, Inquire, Submit, Book Now. The one strong conversion element is the **booking strip**.

### Overall personality

Gym-floor authentic and community-proud: real players, real events, the mark on the wall. It has a streetball and event-flyer energy (Montserrat Black italics, amber dates, drop shadows) beside a quieter, earnest nonprofit voice (Philosophy, scholarship). It is confident about the space and the people, but visually loose: it reads as built section by section in Wix rather than designed as one system.

## 2. Brand elements worth preserving

1. **The mark, prominently.** White on near-black in the header and footer, as on the old site. A dark version also exists (see section 4), so the mark can appear on light surfaces too.
2. **Monochrome base.** Near-black and off-white carry the old site and match the gym.
3. **Amber as the single hot accent.** Use it sparingly, for dates, the Showtime context and one emphasized word, so it stays recognizable.
4. **Heavy condensed all-caps display type** for headlines, in one family. Oswald already does this and suits the logo lettering.
5. **The short horizontal rule** before body copy. The current build already has a wood-colored version (`.rule`, the hero `animate-line`); it is the same idea.
6. **Stacked headlines with one contrasting word** (ACADEMY / VALUES).
7. **Real photography in full-bleed or half-and-half splits,** especially the logo-wall team photo and court shots.
8. **Events presented like flyers:** big title, accent date, photo. Keep this as a past-events treatment only (PRODUCT.md rule).
9. **A booking prompt near the top of the home page.** The old site made booking visible above the fold.
10. **Brand phrases:** "The Grove: Community Collective", "Est. 2017", "Our Philosophy", "Forever on the Court" (plaque), and the L.E.A.D. standards.

## 3. Weak execution that should be improved

| Old site | Better version |
|---|---|
| About six typefaces with no scale | Two families (display + body) and a defined type scale |
| Buttons at 10px Arial, 32px tall, with three different corner styles | One button system with readable labels, 44px targets and one radius |
| Generic CTA labels (Learn More, View More, Our Events, Submit) | Outcome labels: Join Showtime, Book the Space, Support the Scholarship |
| Hamburger menu on desktop hides all navigation | Visible desktop nav with the mark kept on the left |
| Hero headline over a busy photo, with low contrast | Text on a solid or graded panel next to the photo, AA contrast |
| Drop-shadowed italic titles on photos | Same energy without shadows: titles on solid bands, or a scrim with real contrast |
| Mixed photo corners (square plus large rounded) | One rule. The current build uses square corners throughout |
| Long centered paragraphs in light gray (`#3e3d35` light weight on white) | Left-aligned, shorter measure, AA-contrast body text |
| Partner logos at random sizes | Normalized logo boxes |
| Contact form requires a phone number | Phone optional (the current build already does this) |

## 4. Outdated or broken patterns not to carry forward

- **Wix template leftovers:** the menu's Instagram icon links to `instagram.com/wix`, not @the.grove.cc.
- **Broken links:**
  - Home "Our Events" points back to the home page instead of `/events`.
  - Showtime "Inquire" points to `http://showtimebasketballacademy.com/inquire`, which returns 404 (PRODUCT.md Q8).
- **No accessible name on the menu button,** and the logo images use file names as alt text ("grove logo white.jpg", "IMG_4898.png").
- **Text baked into images** (the NON-PROFIT gradient headline, "WE'RE THE GROVE" captions).
- **Pages missing from the sitemap** (`/non-profit`, `/showtimebasketball`, `/contact`), and no meta descriptions on several pages.
- **Content kept elsewhere by the new site's content rules, not as design issues:**
  - Undated "for the past seven years" copy.
  - "Collegiate and Professional programs".
  - The two-vs-three class conflict (see PRODUCT.md Q6).

**Logo files.** The old site hosts both logo versions at high resolution:
- **White:** 1242×1423 PNG, `static.wixstatic.com/media/52022b_1b294af0183248a6a2c1eb266273adf0~mv2.png`. The repo copy is 186×200.
- **Black:** 1228×2162 transparent PNG with wide padding, `static.wixstatic.com/media/52022b_cf0eed0857314fbc864dbc45ee4959f3~mv2.png`.

These are The Grove's own files. Ask the client for the source vector files; in the meantime these PNGs are better than the current repo copy. Not added to the repo yet.

## 5. Where the current build diverges

These observations are for the upcoming design pass. No production code was changed.

| Area | Old site (thegrove.work) | Current build | Read |
|---|---|---|---|
| Primary palette | Near-black, off-white, amber | Forest green, cream, wood | **Forest green has no source in the old brand** and is the largest drift. Wood fits the hardwood. Cream is close to `#f8f8f4` but warmer |
| Accent | Amber `#ffb800` | Wood `#b8925a`, forest-light buttons | Amber is missing entirely |
| Header | Near-black bar, white mark, menu icon | Cream bar, "THE GROVE" text wordmark, visible nav | Visible nav is better. The mark is missing from the header, which was justified by "no dark logo". The old site shows a dark header avoids that problem, and a dark logo exists anyway |
| Display type | Heavy geometric sans, Montserrat Black | Oswald (condensed) | Different cut, same heavy all-caps intent. Fine, and it fits the logo lettering |
| Rule motif | Short line before body copy | Wood rule and animated hero line | Same idea. Keep it |
| Photos | Full-bleed and split, mixed corners | Squared, split and full-bleed | Aligned, and cleaner |
| Events | Flyer collage, amber dates | Typographic list with forest dates | Loses the flyer energy. Consider bringing back the photo plus accent date treatment for past events |
| Booking prompt | Strip under the header on home | In hero CTAs and /book | Equivalent |

**Suggested direction for the evolution:**
- Keep the current build's structure, accessibility and copy.
- Move the palette back toward **near-black, off-white and amber**, with wood as a secondary warm tone.
- Put **the mark back in the header** (white on a dark header, or the dark logo on light).
- Restore the **flyer-style past events** and the **amber date** device.

Whether forest green stays at all is a client decision; see PRODUCT.md question 26.

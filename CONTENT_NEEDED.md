# Content Needed

Verified facts from the public site and client brief are already in the build.
Everything below is **missing, draft, or awaiting client verification**. Do not invent replacements.

## Brand assets

- [x] Grove logo in use: mark plus lockup, white and black, in `public/brand/` (trimmed from the old site's high-res PNGs; white is the black artwork recolored). Header, footer, mobile menu, favicon and OG images use it. **Pending client OK** (PRODUCT.md Q26)
- [ ] Vector originals (SVG/AI/EPS) of the mark and lockup, to replace the PNG exports in `public/brand/`
- [x] Favicon derived from official mark (`app/icon.png`, `app/apple-icon.png`; white mark on near-black)
- [ ] Brand guidelines if they exist beyond public site copy
- [x] Partner logos + verified URLs
- [ ] Dark logo variants if any marks need better contrast on cream

## Photography (`/public/images/`)

Real Grove photography is now wired. Remaining gaps:

- [ ] Dedicated empty-court / facility architecture shot. The one facility photo (`kidsdoingfootworkdrills.avif`) is used twice: the home "Built for the game" band and the /book hero
- [ ] A second scholarship or memorial photo. The plaque photo is both the home "For the next one" band and the /scholarship hero
- [ ] A higher-resolution huddle photo (`kidsinhuddle.avif` is 482×470; it is shown at about 560px on the home community section)
- [ ] Event photos (Grand Opening, The Cookout, Celebration of Life, clinics), so past events can get the old site's photo-flyer treatment
- [ ] Hardwood / shoe / gym-detail stills
- [ ] Usage rights / model releases confirmation

### Current mapping

| Asset | Used for |
| --- | --- |
| `zoomedoutgroupphotokids.avif` | Home hero (logo-wall team photo) |
| `kiddoingfootworkdrill.avif` | /programs hero |
| `kidsdoingfootworkdrills.avif` | Home facility band, /book hero |
| `dregreenlawwithkids.avif` | /community hero |
| `kidsinhuddle.avif` | Home community section |
| `womanholdingplaqueericcordovascholarship.avif` | Home scholarship band, /scholarship hero |
| `photoofericcordova.avif` | /scholarship quote band |
| `ericcordovamemorialscholarship.avif` | /scholarship support section |

## Contact & location

- [ ] Public email address
- [ ] Phone number (if public)
- [ ] Exact street address
- [ ] Hours of operation
- [ ] Preferred form backend (Formspree, Resend, HubSpot, etc.)
- [ ] **Set `NEXT_PUBLIC_CONTACT_EMAIL`.** Until it is set, /contact shows an Instagram DM prompt instead of a form (no undeliverable submissions). Once set, the form opens a prefilled email (mailto)

## Showtime Basketball Academy

The site now lists Showtime's current published programs (Fundamentalists, Academy, Individual Training, Athletic Development). The old Fundamentals / Select / Elite draft pathway has been removed.

- [ ] Confirm program names (Showtime site vs. "Fundamentalist and Select" on thegrove.work; is Elite still offered?) (PRODUCT.md Q6)
- [ ] Academy experience requirement (2.5+ vs 3+ years), currently omitted (Q7)
- [ ] Approved one-line description for Athletic Development (none published)
- [ ] Ages / divisions (Q11)
- [ ] Pricing on The Grove's site, or link only (Q9). Site currently links to Showtime's memberships page
- [ ] Coach names and approved biographies (Q10)
- [ ] **"Join Showtime" destination (Q8).** Site uses `minosrec.com/showtime-basketball-academy/general-inquiry` (linked from Showtime's own site). The `showtimebasketballacademy.com/inquire` link used by thegrove.work returned **404** on 2026-10-05
- [ ] Confirm the join steps on /programs (inquiry, free session, acceptance/evaluation, membership) match Showtime's real sequence

## The Hoop Ministry

Removed from the site entirely (it was previously shown as "unconfirmed" on the home page).

- [ ] Confirm whether this is an active Grove program
- [ ] Approved short description

## Eric Cordova Scholarship

- [ ] Approval to use the longer Coach Eric bio that is on the old site (`G /ericcordova`; quoted in PRODUCT.md)
- [ ] Eligibility rules (site says details aren't published yet and points families to Instagram)
- [ ] Application process and deadlines
- [ ] Award amounts
- [ ] Online donation link (Q16). "I want to help" currently goes to /contact?topic=donate. Don't link thegrove.work/donate; it disappears at the Wix cutover
- [ ] 501(c)(3) status / EIN before any tax-deductible wording (Q1)

## Community & campaigns

- [ ] Mural project — confirm active status before featuring as current
- [ ] Current outreach initiatives with approved copy
- [ ] Event listings (only when real and dated). /events lists events from `lib/events.ts` (Upcoming / Past, sorted automatically); /community and /book still show older past events as history only
- [ ] Upcoming events for /events, with dates, times and a source, and an owner who keeps the list current (PRODUCT.md Q21)
- [x] Bux Island: Back2Bizness photos (`public/images/Bux _Island_Back2Bizness.png`, `public/images/Bux_Islane_Back2Bizness_Dunk.png`). Photographer credit and usage permission are not recorded; confirm with the client
- [ ] Is the shoe drive still annual, and when does it run? (Q17)
- [ ] Testimonials — only with written permission (none invented)

## Partners

Verified and linked in the build:

- [LMNT](https://drinklmnt.com)
- [We Got Next Clothing](https://wegotnextclothing.com)
- [Play Brightly](https://playbrightly.org)
- [Rizing Tide Media](https://rizingtidemedia.com)
- [Heart Workers Union](https://www.instagram.com/heartworkersunion/)
- [Perspire Sauna Studio](https://www.perspiresaunastudio.com)
- [Forge Strength and Chiropractic](https://strengthandchiropractic.com) (`Fsclogo.avif`)

Optional follow-ups:

- [ ] Confirm logo contrast on cream (swap to dark variants if needed)
- [ ] Written permission to display (if required by partners)

## Social

- [ ] Approved stills for the Instagram grid (no scraping)
- [ ] Any additional official social profiles

## SEO / structured data

Sitemap, robots, per-page titles, descriptions, canonicals, Open Graph tags and OG images are in place. Waiting on the client:

- [ ] Full street address (PRODUCT.md Q3). Until it's confirmed, the home JSON-LD lists only San Jose, CA, and there is no `LocalBusiness` / `SportsActivityLocation` facility markup
- [ ] Phone, email, hours (Q4), to add to the JSON-LD once public
- [ ] 501(c)(3) status (Q1). JSON-LD uses `SportsOrganization`, not `NGO`, and makes no nonprofit-status claim
- [ ] JSON-LD `logo`: the black lockup exists (`public/brand/grove-lockup-black.png`); add it once the client approves logo use (Q26)
- [ ] Domain cutover: canonicals, sitemap, and OG URLs all use `https://www.thegrove.work/` (`site.websiteUrl`), which is still the old Wix site. At launch, redirect its old paths (`/non-profit`, `/showtimebasketball`, `/ericcordova`, `/events`, `/donate`) to the new routes (Q5)

## Brand direction

- [ ] Palette confirmation (PRODUCT.md Q26). Working brand architecture since 2026-10-06 (DESIGN.md): The Grove is near-black, off-white and forest green; amber belongs to Showtime contexts only. Client to confirm

## Analytics / ops (optional)

- [ ] Analytics ID
- [ ] Domain cutover checklist from Wix (`thegrove.work`)

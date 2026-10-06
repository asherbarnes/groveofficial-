# Content Needed

Verified facts from the public site and client brief are already in the build.
Everything below is **missing, draft, or awaiting client verification**. Do not invent replacements.

## Brand assets

- [x] Grove white logo (`grove-logo-white.avif`) — used in footer; cream header still uses text wordmark (white logo wouldn't read)
- [ ] Dark / full-color logo for light backgrounds
- [ ] Favicon derived from official mark
- [ ] Brand guidelines if they exist beyond public site copy
- [x] Partner logos + verified URLs
- [ ] Dark logo variants if any marks need better contrast on cream

## Photography (`/public/images/`)

Real Grove photography is now wired. Remaining gaps:

- [ ] Dedicated empty-court / facility architecture shot (currently using training photo for facility sections)
- [ ] Hardwood / shoe / gym-detail stills
- [ ] Usage rights / model releases confirmation
- [ ] Optional: more candid community / event frames for social rotation

### Current mapping

| Asset | Used for |
| --- | --- |
| `zoomedoutgroupphotokids.avif` | Hero + social |
| `kiddoingfootworkdrill.avif` | Showtime / Programs + social |
| `kidsdoingfootworkdrills.avif` | Facility / Book + social |
| `dregreenlawwithkids.avif` | Community |
| `kidsinhuddle.avif` | Community + social |
| `womanholdingplaqueericcordovascholarship.avif` | Scholarship hero + social |
| `photoofericcordova.avif` | Scholarship legacy |
| `ericcordovamemorialscholarship.avif` | Scholarship memorial |

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

- [ ] Approved longer biography / story (beyond public site sentence)
- [ ] Eligibility rules (site says details aren't published yet and points families to Instagram)
- [ ] Application process and deadlines
- [ ] Award amounts
- [ ] Online donation link (Q16). "I want to help" currently goes to /contact?topic=donate. Don't link thegrove.work/donate; it disappears at the Wix cutover
- [ ] 501(c)(3) status / EIN before any tax-deductible wording (Q1)

## Community & campaigns

- [ ] Mural project — confirm active status before featuring as current
- [ ] Current outreach initiatives with approved copy
- [ ] Event listings (only when real and dated). /community and /book show past events as history only
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

## Analytics / ops (optional)

- [ ] Analytics ID
- [ ] Domain cutover checklist from Wix (`thegrove.work`)

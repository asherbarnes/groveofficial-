# Content sources

This file is the citation log behind `PRODUCT.md`. All sources were retrieved 2026-10-05.

**Status values:**
- **current:** stated on a live source today.
- **historical:** a past fact; never present it as ongoing.
- **uncertain:** conflicting, third-party only, or read indirectly.

## Sources and how they were read

| Key | URL | Method and reliability |
|---|---|---|
| G | https://www.thegrove.work/ plus `/events`, `/non-profit`, `/showtimebasketball`, `/ericcordova`, `/contact`, `/donate` | **The Grove's old official website** (Wix), which this build replaces. Text first fetched with curl; re-reviewed on 2026-10-05 in a real browser (Playwright, 1440px and 390px) for rendered layout, hover text, meta tags and design. Sitemap lastmod 2026-08-14 and lists only `/`, `/events`, `/ericcordova`, `/donate`. `/donate` is not in the menu. Design findings are in `thegrove-work-brand-review.md`. |
| SBA | https://www.showtimebasketballacademy.com/ plus `/aboutus`, `/academy`, `/fundamentalists`, `/individualtraining`, `/memberships`, `/showtime-faqs`, `/event-list` | Pages fetched with curl and the text extracted verbatim. Run by a separate company, "SHOWTIME BASKETBALL LLC". |
| IG | https://www.instagram.com/the.grove.cc/ | Behind a login wall. Bio and counts come from a model summary only. Weak. |
| ATLY | https://www.atly.com/location/TheGroveCommunityCollective | Third-party directory with no update date. |
| SJ3 | https://www.hoopitup.com/slamjose, https://sjsa.org/slam-jose-announcement/, Eventbrite "Slam Jose! Community Hoop Festival" | Seen in web search results only. Not specific to The Grove. |
| PP | https://projects.propublica.org/nonprofits/ (via web search) | Searching "Grove Community Collective" returned no matching San Jose org. A different "Grove Collective Foundation" (DC, EIN 87-4015431) is unrelated. |
| ~~OLD~~ | https://grove.work | **Not a Grove source (corrected 2026-10-05).** Earlier research wrongly named it The Grove's former site; the old site is thegrove.work (`G`). grove.work is a GoDaddy parking page (Wayback captures are parking pages too), and no facts were taken from it. Don't cite it. |
| FZ | https://fundrazr.com/campaigns/32Vd99 | The "Local Color x The Grove" mural crowdfunding page, fetched with curl and the text extracted. Created 2025-02-06, started 2025-06-17. Written by a partner; historical. |

## Facts

| Fact | Source | Status | Likely website use |
|---|---|---|---|
| Name: The Grove Community Collective ("The Grove: Community Collective") | G `/` | current | Header, metadata, JSON-LD |
| "services and enriches the local community through the sport of basketball" | G `/` | current | Home intro, meta description |
| "We own the South Bay's top basketball training facility." | G `/` | current | Facility and Book pages |
| Self-described nonprofit, "based in San Jose, CA" | G `/non-profit` | current claim; legal status uncertain (PP) | Community page. Make no tax-deductibility claims |
| Mission: "strengthen our community through the platform of basketball" | G `/non-profit` | current | Community page |
| Est. 2017 / "Serving the Community since '17" | G footer, IG | current | Footer, About |
| Home of Showtime Basketball Academy, "our year-round basketball school" | G `/`, `/showtimebasketball` | current | Programs page |
| Showtime is a separate LLC | SBA footer | current | Wording of the Programs page |
| "Located on South 10th St. San Jose, California" | G `/contact` | current | Contact page, footer |
| 2099 S 10th St Unit 90, San Jose | ATLY | uncertain | Do not publish until the client confirms |
| 10,000 sq ft facility that "doubles as a versatile event space" | G `/`, SBA | current | Facility section, Book page |
| FIBA-certified hardwood and hoops, "the same quality used in the Olympic basketball games" | G `/` | current | Facility section |
| "pro-basketball regulation floor and a fully equipped weight room" | G `/` | current | Facility section |
| Space booking via GoodRun (`goodrun.app/location/showtime-basketball-at-the-grove-community-collective-900`) | G `/` | current | Book the Space CTA |
| Contact form is for business inquiries; "we do not take training inquiries here" | G `/contact` | current | Contact page routing |
| Donor inquiry form; page titled "Donate to Become a Member" | G `/donate` | current | Scholarship/Support CTA |
| No public email, phone, or hours | G, SBA, IG | current (absence) | Contact page; needs client input |
| Instagram @the.grove.cc; bio "SJ's Basketball Hub" | IG | uncertain (summary only) | Social links, positioning |
| Showtime IG @showtimebasketball, TikTok @showtimeba | SBA | current | Programs page links |
| Philosophy quote ("A grove, is where a collective of trees grow together...") | G `/` | current | Home, Community |
| "our goal is to be the support we needed when we were younger" | G `/` | current | Home, Community |
| Scholarships, free camps/clinics, shoe donations | G `/non-profit` | current | Community page |
| Annual shoe drive, "for the past seven years"; also gives out like-new outdoor shoes | G `/non-profit` | current; year count may be stale | Community page |
| Clinics, "some with hundreds of kids in attendance" | G `/non-profit` | historical (no dates given) | Community page, as past impact |
| Partners with nonprofits for academic scholarships, girls' basketball, mental health | G `/non-profit` | current; partners unnamed | Community page |
| Scholarship provides free training, mentorship/life-skills workshops, equipment/travel/tournament fee support | G `/ericcordova` | current | Scholarship page |
| Ways to help: donate, sponsor, share, volunteer | G `/ericcordova` | current | Scholarship CTAs |
| Scholarship established at the Celebration of Life, 2024-05-12 | G `/events` | historical | Scholarship story |
| Eric Cordova bio and quote "Success is not about the wins or losses. It's about shaping lives." | G `/ericcordova` | current | Scholarship page |
| Longer Eric Cordova bio ("From early morning practices to late-night phone calls...", "discipline, teamwork, and heart", "a mentor, a motivator, and a beacon of hope") and full name "Coach Eric Cordova Memorial Basketball Scholarship", subtitle "Honoring a Legacy of Leadership, Passion, and Purpose" | G `/ericcordova` | current | Scholarship story (rewrite the source's "---" dashes) |
| Scholarship plaque text "Coach Eric · Forever on the Court", est. 2024 | G (plaque photo) | current | Scholarship page, caption or motif |
| Home booking strip: "Interested in Booking Our Space? Book Now" (to GoodRun) | G `/` | current | Supports a booking prompt near the top of the home page |
| Contact form requires phone; donor form requires phone | G `/contact`, `/donate` | current | Not carried over (phone is optional in the build) |
| High-resolution logo files: white mark 1242×1423 PNG, black mark 1228×2162 transparent PNG (URLs in `thegrove-work-brand-review.md`) | G (Wix media) | current | Header and footer logo; replaces the 186×200 repo copy once the client approves |
| Broken links on the old site: menu Instagram icon goes to `instagram.com/wix`; home "Our Events" goes to `/` | G | current defects | Redirect and QA notes only |
| Showtime classes: "2 classes: Fundamentalist and Select" (page body) | G `/showtimebasketball` | uncertain (conflicts with SBA and with the same page's meta description) | Programs pathway, once resolved |
| Showtime classes: "3 classes: Fundamentalist Class, Select class, and our Elite class" | G `/showtimebasketball` meta description (found on the 2026-10-05 re-review) | uncertain; the same page's body says 2 | Evidence for Q6 only |
| Academy curriculum: "teaching players game skills in game situations"; takes players "through their development into college-ready talent" | G `/showtimebasketball` | current (Grove's description of Showtime) | Programs copy, if Showtime agrees |
| L.E.A.D. definitions (Leadership "our foundation for success", Effort "doing things to your fullest ability", Attitude "positive and constructive", Discipline "pursue your goals ... regardless of feelings or perceptions") | G `/showtimebasketball` | current | Programs values blurbs |
| Showtime "provides 3 classes: Fundamentalist Class, Select class, and our Elite class" | FZ (2025) | historical. Elite is absent from current G and SBA | Supports the repo's draft pathway as of 2025; confirm whether it is current |
| The Grove is a "grassroots athletic training community"; "Many Grove players come from underserved communities" | FZ (2025) | historical (partner-written) | Community copy, with client approval |
| Mural: Local Color campaign, $25,100 goal, permanent mural "inside The Grove gym" | FZ (2025) | historical; outcome unknown | Omit until confirmed (`REPO` rule) |
| Play Brightly: nonprofit supporting "young girls in basketball to the elite level" | FZ (2025) | historical description of a current partner | Partner blurb; probably the "girls' basketball" partner on G `/non-profit` |
| Showtime services: Academy, Fundamentalists, Individual Training, Athletic Development | SBA `/` | current | Programs pathway |
| Academy requires "2.5+ years" vs "3+ years ... club or school team" | SBA `/` vs `/academy` | uncertain (conflict) | Programs; wait for client |
| Fundamentalists: "at least one year of playing experience" | SBA `/fundamentalists` | current | Programs |
| Small groups of "up to six players"; "not an AAU-first program" | SBA `/` | current | Programs differentiators |
| "YOUR FIRST SESSION IS FREE!" | SBA `/` | current | Join Showtime CTA support |
| Acceptance/evaluation before membership purchase | SBA `/memberships`, `/showtime-faqs` | current | Join Showtime flow copy |
| Showtime pricing (see `PRODUCT.md`) | SBA `/memberships` | current, set by Showtime | Link only unless the client approves |
| L.E.A.D. standards (Leadership, Effort, Attitude, Discipline) | G `/showtimebasketball`, SBA | current | Programs values |
| H.E.L.D. standards (Hard Work, Energy, Leadership, Discipline) | SBA `/event-list` | uncertain (conflicts with L.E.A.D.) | Don't use |
| Coaches: Derrick Nguyen (Founder/Director), Anthony "Ant" Gardner (Co-Director), Kimo (Athletic Director) | SBA `/aboutus` | current | Only with client approval |
| Showtime inquiry URLs: `showtimebasketballacademy.com/inquire` (G) and `minosrec.com/showtime-basketball-academy/general-inquiry` (SBA) | G `/showtimebasketball`, SBA | uncertain (two URLs) | Join Showtime destination |
| "Collegiate and Professional programs" | G `/events` (grand opening text) | uncertain (single mention) | Don't use |
| Partners: LMNT, We Got Next Clothing, Play Brightly, Rizing Tide Media, Heart Workers Union, Perspire Sauna Studio, strengthandchiropractic.com | G `/` partner strip | current | Partner grid |
| "Forge Strength and Chiropractic" display name | REPO only | uncertain | Partner grid label |
| The Hoop Ministry tied to The Grove | Search snippet only; absent from G, IG, and the ATLY page itself | uncertain | Don't use |
| Tagline "Where San Jose comes to grow through basketball." | REPO only (`lib/site.ts`) | uncertain | Hero; needs client approval |
| Positioning: "South Bay's Premier Basketball Training Facility" / "San Jose's Premier..." | G `/` title, G `/events` | current | Metadata, hero support |

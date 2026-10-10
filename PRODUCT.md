# PRODUCT.md

This file is the source of truth for what The Grove is, who the site serves, and which facts the site may state.

- Copy in `lib/content.ts` and `lib/site.ts` should agree with the **Verified** sections below.
- Anything under **Needs confirmation** stays off the site, or is shown with a draft label, until the client confirms it.
- `CONTENT_NEEDED.md` tracks missing assets and content deliverables. This file tracks facts and decisions.
- `research/content-sources.md` is the full citation log (fact, source, status, likely use). `research/events-inventory.md` lists every known event. `research/thegrove-work-brand-review.md` records the old site's look (colors, type, motifs) for the redesign.

Research date: 2026-10-05. The old official site (thegrove.work) was last updated 2026-08-14, according to its sitemap.

## Source key

| Key | Source |
|---|---|
| `G` | **The Grove's old official website**, https://www.thegrove.work/ (Wix; pages `/`, `/events`, `/non-profit`, `/showtimebasketball`, `/ericcordova`, `/contact`, `/donate`). This build replaces it. It is still live, so its statements count as current unless marked historical |
| `SBA` | Showtime Basketball Academy site, https://www.showtimebasketballacademy.com/. Showtime is a separate company ("© SHOWTIME BASKETBALL LLC") |
| `IG` | Instagram, https://www.instagram.com/the.grove.cc/. It is behind a login, so the bio was read through a summary, not verbatim. Treat it as weaker evidence |
| `FZ` | Local Color x The Grove mural campaign, https://fundrazr.com/campaigns/32Vd99 (campaign created 2025-02-06, started 2025-06-17). Written by a partner; **historical**. |
| `3P` | Third-party listings: atly.com, hoopitup.com, sjsa.org |
| `REPO` | Decisions already made in this build and in the client brief, as recorded in `CLAUDE.md` and `CONTENT_NEEDED.md` |

**Domain note (corrected 2026-10-05):**
- **thegrove.work** is The Grove's old official website. It is the main fact source (`G`), and the new site replaces it. Its address is in `site.websiteUrl`.
- Earlier research named **grove.work** as the old site; that was a mistake. grove.work is a GoDaddy parking page with no Grove content and no Wayback history of any. No facts were ever taken from it. Don't cite it or link to it.

---

# Verified

## What The Grove is

- **Legal-style name:** The Grove Community Collective. The site displays it as "The Grove: Community Collective", and "The Grove" is the short name. `G`
- **Description:** "an organization that services and enriches the local community through the sport of basketball. We own the South Bay's top basketball training facility." `G /`
- **Nonprofit:** the organization describes itself this way: "The Grove Community Collective is a nonprofit organization based in San Jose, CA. Our mission is to strengthen our community through the platform of basketball." `G /non-profit` Legal status is not independently verified; see Needs confirmation.
- **Established 2017** ("© The Grove | Est. 2017"; "Serving the Community since '17"). `G`, `IG`
- **Home of Showtime Basketball Academy:** "our year-round basketball school". `G /`, `G /showtimebasketball`
  - Showtime is operated by Showtime Basketball LLC, which has its own site, pricing and enrollment. `SBA`
- **What it is not:** The Grove is not a coworking or workspace business. It has no workspace, desk or office offering.

## Target audiences

No source states the audiences outright; this list is drawn from the official copy. In priority order for this site:

1. **Families of youth players** looking for training. The Grove's copy names "players and parents" (`G /`); training itself is delivered by Showtime (`SBA`).
2. **Athletes and event organizers** who want to rent the court or host an event: "athletes and event organizers alike". `G /`
3. **Donors, boosters, sponsors and volunteers:** "Our donors and boosters play a vital role". The scholarship page asks people to donate, sponsor, share and volunteer. `G /`, `G /ericcordova`
4. **The wider San Jose basketball community,** reached through events, clinics, shoe drives and runs. `G /events`, `G /non-profit`
5. **Business and partner inquiries.** The contact form is for "business inquiries"; training inquiries go to Showtime. `G /contact`

Brand hierarchy for the site (`REPO`): community and mission first, then Showtime, then the facility.

## Location

- "Located on South 10th St. San Jose, California". `G /contact`
- "Located in the heart of San Jose." The positioning is regional: "South Bay". `G /`
- The full street address is unverified; see Needs confirmation.

## Facility and amenities

All of the following come from `G /` and are repeated on `SBA`:

- "a premier 10,000 square feet training facility that doubles as a versatile event space"
- "professional-grade basketball court features FIBA-certified hardwood flooring and basketball hoops, the same quality used in the Olympic basketball games"
- "a pro-basketball regulation floor and a fully equipped weight room"
- "a clean and welcoming space for athletes and event attendees alike"

## Programs and offerings

### Space booking (The Grove)

- Booking happens on GoodRun: https://www.goodrun.app/location/showtime-basketball-at-the-grove-community-collective-900. `G /`
- The site links out to GoodRun and has no booking flow of its own (`REPO`).

### Showtime Basketball Academy (operated by Showtime Basketball LLC)

Facts from `SBA` unless marked:

- **Approach:** "a development-first basketball academy built around long-term athlete growth. We are not an AAU-first program."
- **Group size:** "small groups of up to six players".
- **Services:**
  - **Academy:** small-group training for experienced athletes.
  - **Fundamentalists:** "For entry-level basketball athletes", described as players "with at least one year of playing experience".
  - **Individual Training:** 1-on-1 and small-group sessions.
  - **Athletic Development.**
- **Values:** the L.E.A.D. standards (Leadership, Effort, Attitude, Discipline). `G /showtimebasketball`, `SBA`
  - The old site defines each one: "Leadership is our foundation for success"; "Effort means doing things to your fullest ability"; "Attitude ... must always remain positive and constructive"; "Discipline, the ability to pursue your goals and complete tasks regardless of feelings or perceptions." `G /showtimebasketball`
- **Curriculum (as The Grove describes it):** "an extensive curriculum that centers around teaching players game skills in game situations ... from their early stages of learning and loving basketball through their development into college-ready talent." `G /showtimebasketball`
- **Free first session:** "YOUR FIRST SESSION IS FREE! ... Try one of our small group sessions."
- **Enrollment:** "You must be accepted into the program before purchasing a membership." The Academy requires an evaluation first.
- **Leadership:** Founder and Director Coach Derrick Nguyen, Co-Director Coach Anthony "Ant" Gardner, and Athletic Director Coach Kimo.
  - Use these bios only with client approval. They live on Showtime's site.

## Pricing (verified only where listed)

- **The Grove:** no prices are published, either for space rental (GoodRun shows its own rates) or for donations.
- **Showtime Basketball Academy:** prices below are as published on `SBA /memberships` on 2026-10-05. Showtime sets them, and they may change.

| Plan | Academy | Fundamentalist |
|---|---|---|
| Basic, 1 per week (4 per month) | $240/mo | $200/mo |
| Essential, 2 per week (8 per month) | $440/mo | $330/mo |
| Plus, 3 per week (12 per month) | $600/mo | $400/mo |
| Drop-in, members only | $65 | $55 |

Do not show Showtime pricing on The Grove's site unless the client approves it. Linking to Showtime's memberships page is safer than copying the prices, because they can go stale.

## Scholarship and community programming

- **Nonprofit work:** "We offer scholarships to players to help subsidize training costs, run free camps and clinics, and donate basketball shoes to players in need." `G /non-profit`
- **Annual Shoe Drive:** an "annual basketball shoe drive within our program". It also distributes "like-new shoes for outdoor use". The goal is "to provide every child in our program with a brand-new pair of shoes." `G /non-profit`
- **Camps and clinics:** "organized and supported numerous basketball camps and clinics, some with hundreds of kids in attendance". `G /non-profit`
- **Nonprofit ecosystem:** The Grove partners "with organizations that offer academic scholarships, support youth girls' basketball, provide mental health resources, and much more." `G /non-profit`
- **The Eric Cordova Memorial Scholarship:** `G /ericcordova`
  - **What it provides:** "Free basketball training for youth in underserved communities. Access to mentorship and life skills workshop. Support for equipment, travel, and tournament fees."
  - **Funding:** "funded through our nonprofit and the generous contributions of those who believe in Coach Eric's vision."
  - **Ways to help:** "Donate to the scholarship fund · Sponsor a young athlete · Share Coach Eric's story · Volunteer your time or expertise".
  - **Origin:** established at the Celebration of Life on 2024-05-12. `G /events`
  - **Full name on the page:** "Coach Eric Cordova Memorial Basketball Scholarship", subtitle "Honoring a Legacy of Leadership, Passion, and Purpose". The plaque reads "Coach Eric · Forever on the Court" (photo).
  - **About Coach Eric:** "For over a decade, Coach Eric gave his all to the game and the kids who played it." Quote: "Success is not about the wins or losses. It's about shaping lives."
  - **Longer bio (verbatim on `G /ericcordova`):**
    - "From early morning practices to late-night phone calls encouraging players, he believed in every young person who walked through the gym doors."
    - "He emphasized discipline, teamwork, and heart ... not just on the court, but in life."
    - "Whether coaching his own program, running local clinics, or mentoring aspiring athletes one-on-one, his influence ran deep."
    - "He was a mentor, a motivator, and a beacon of hope for countless young athletes."
    - The scholarship continues "the mission he lived every day: giving every kid a chance to grow through basketball."
  - The source uses "---" dashes in this copy; rewrite them before using it on the site (no em dashes).

## Recurring event types

- **Annual Shoe Drive:** the only series the official site explicitly calls recurring. `G /non-profit`
- **Event types The Grove has hosted:**
  - Community celebrations (Grand Opening, The Cookout)
  - Memorials (Celebration of Life)
  - Guest speaker Q&As (Dre Greenlaw)
  - Invite-only high-level runs (Bux Island)
  - Open runs (All City Runs)
  - 1v1 showcases
  - Free youth clinics, run by Showtime
  - Off-site tournament participation (Slam Jose)

  These are examples of what The Grove does, not a schedule. `G /events`, `SBA /event-list`

### Past events (historical; never present as upcoming)

| Date | Event | Source |
|---|---|---|
| 2024-02-24 | The Grand Opening ("Hundreds of community members, friends, and family") | `G /events` |
| 2024-05-12 | The Celebration of Life for Eric Cordova (nearly 200 attendees; the scholarship was established) | `G /events` |
| 2024-12-17 | Dre Greenlaw (San Francisco 49ers) Q&A | `G /events` |
| 2025-03-01 | Showtime Playmaker's Clinic (free, grades 5 to 8, at The Grove) | `SBA` |
| 2025-03-16 | Showtime x CYS Clinic | `SBA` |
| 2025-06-14, 2025-10-11, 2025-12-29 | Bux Island ("Private, invite-only player's only runs"; which description belongs to which tile is uncertain, Q22) | `G /events` |
| 2025-06-21 | Slam Jose!, powered by Hoop It Up (Grove players took part; off-site). Corrected 2026-10-05: on the rendered page this date sits directly above "SLAM JOSE!", not under All City Runs | `G /events`, `3P` |
| Undated | All City Runs (title and photo only) | `G /events` |
| 2025-08-03 | The Cookout ("over 15 sponsors and vendors") | `G /events` |
| 2026-09-13 | Bux Island: Back2Bizness. 1v1, 2v2 and 3v3 basketball hosted at The Grove (2099 S 10th St); 4:00 to 9:00 PM, doors 3:30 PM; organized by Bux Island. Shown on /events | Project owner (confirmed), Eventbrite, IG |

No dated upcoming events have been published anywhere. Showtime's events page says "No events at the moment". `SBA`

## Verified contact information

| Purpose | Channel | Source |
|---|---|---|
| Business inquiries | The contact form on the official site (name, email, phone, message). It states: "we do not take training inquiries here." | `G /contact` |
| Training inquiries | Showtime Basketball Academy's inquiry page (see Needs confirmation for which URL) | `G /showtimebasketball`, `SBA` |
| Space booking | GoodRun (URL above) | `G /` |
| Donor inquiries | Donor inquiry form (name, email, phone, "How and Why Do You Want to Help?") | `G /donate` |
| Social | Instagram @the.grove.cc. Showtime is on Instagram as @showtimebasketball and on TikTok as @showtimeba | `IG`, `SBA` |

The Grove has no public email address, phone number or hours.

## Partnerships

The official home page partner strip shows these partners. Logos are in `public/images/` (`REPO`).

| Partner | URL |
|---|---|
| LMNT | https://drinklmnt.com |
| We Got Next Clothing | https://wegotnextclothing.com |
| Play Brightly (nonprofit supporting "young girls in basketball", `FZ`) | https://playbrightly.org |
| Rizing Tide Media | https://rizingtidemedia.com |
| Heart Workers Union | https://www.heartworkersunion.org |
| Perspire Sauna Studio | https://www.perspiresaunastudio.com |
| Strength and Chiropractic (repo display name: "Forge Strength and Chiropractic") | https://strengthandchiropractic.com |

Event collaborations, which are not formal partnerships:
- Slam Jose / Hoop It Up (`G /events`)
- CYS, through Showtime (`SBA`)

## Brand positioning

- **Positioning lines (official):**
  - "South Bay's Premier Basketball Training Facility" (page title)
  - "San Jose's Premier Basketball Training Facility"
  - "SJ's Basketball Hub" (`IG`)
- **Philosophy (official, verbatim):** "A grove, is where a collective of trees grow together. Similarly we are all choosing to continually be in a perpetual state of growth. Some of us just seedlings starting along our path, others are seasoned trees standing tall, regardless we are all on the same soil, utilizing one another's roots to help build stronger foundations for our own growth." `G /`
- **Mission voice:**
  - "our goal is to be the support we needed when we were younger"
  - "promoting positivity and growth through basketball"
  - "always having each other's back" `G /`
- **Differentiators:**
  - The Grove owns its facility.
  - FIBA-certified court and hoops in a 10,000 sq ft space with a weight room.
  - A nonprofit mission with a named memorial scholarship, an annual shoe drive and free clinics.
  - Year-round, development-first training on site, in groups of at most 6.
  - Rooted in the community since 2017.
- **Visual heritage (`G`; details in `research/thegrove-work-brand-review.md`):**
  - Monochrome base: near-black `#1c1c1c` and off-white `#f8f8f4`.
  - One hot accent: amber `#ffb800`, which Showtime's logo also uses.
  - The geometric Grove mark, white on dark and black on light, painted on the gym wall.
  - Heavy all-caps display headlines and a short horizontal rule before body copy.
  - Real gym and event photography.
  - The new site should read as an evolution of this, not a rebrand.
- **Voice and visual rules (`REPO`):**
  - Basketball-first.
  - Editorial, not corporate.
  - No em dashes in user-facing copy.
  - Never invent stats, testimonials or schedules.

## Conversion goals

**Primary**
1. **Join Showtime:** the visitor reaches Showtime's inquiry or evaluation step, where the first session is free. Today that means sending them to Showtime's inquiry page, because Showtime owns enrollment.
2. **Book the Space:** the visitor reaches GoodRun.

Both labels are fixed (`REPO`).

**Secondary**
3. **Support the mission:** donate to, sponsor or volunteer for the Eric Cordova Scholarship (donor inquiry).
4. **Business or partner inquiry:** contact form. Training inquiries are routed to Showtime.
5. **Follow on Instagram** for event news. That is the only current channel for event announcements.

---

# Needs confirmation (client questions)

Until these are answered, nothing below appears on the site as fact.

### Identity and legal
1. **Nonprofit status.** Is The Grove Community Collective a registered 501(c)(3)? What are the exact legal name and EIN? A public search found no IRS or ProPublica listing under this name. This is required before the site says donations are tax-deductible.
2. **Relationship wording.** The Grove's site says "our year-round basketball school". Showtime is a separate LLC. How should the site describe the relationship?

### Location and contact
3. **Full street address.** A third-party listing (atly.com) gives "2099 S 10th St Unit 90, San Jose". Is that correct, and may we publish it?
    - **Update 2026-10-10:** the project owner confirmed 2099 S 10th St, San Jose, CA as the venue address for Bux Island: Back2Bizness (2026-09-13), and The Grove's own Instagram reel gives the same address. /events shows it for that event. The site-wide address (`site.street`, footer, contact) still shows "South 10th St." until the client confirms it for general use and whether "Unit 90" belongs.
4. **Public email, phone and hours.** Does The Grove have any? The contact form needs a delivery address and a backend.
5. **Domain cutover (thegrove.work).** Will the new site launch on thegrove.work, replacing the Wix site? Who controls the domain and the Wix account? The old paths (`/non-profit`, `/showtimebasketball`, `/ericcordova`, `/events`, `/donate`) should redirect to the new routes at launch to keep links and search equity.

### Showtime and "Join Showtime"
6. **Class names.** The sources conflict:
   - The `/showtimebasketball` page body on The Grove's old site says "2 classes: Fundamentalist and Select".
   - That page's own meta description says "3 classes: Fundamentalist Class, Select class, and our Elite class", as does the 2025 mural campaign (`FZ`).
   - Showtime's site says "Academy" and "Fundamentalists".

   The build currently shows Showtime's published names. Which classes are current, and is Elite still offered?
7. **Experience requirement.** The Academy needs "2.5+ years" (Showtime home page) or "3+ years and on a club or school team" (Academy page). Which is right?
8. **Join Showtime destination.** It could be `showtimebasketballacademy.com/inquire`, which The Grove's site uses, or `minosrec.com/showtime-basketball-academy/general-inquiry`, which Showtime's site uses. Which one? *(2026-10-05: `/inquire` returns 404, so the build uses the minosrec form pending confirmation.)*
9. **Pricing on The Grove's site.** May we show Showtime's prices, or link only?
10. **Coach bios.** May Showtime's coach bios appear on The Grove's site?
11. **Ages and grades** for each class. None are published.
12. **"Collegiate and Professional programs"** are mentioned once on the events page. Do they exist?
13. **Values acronym.** Is it L.E.A.D. (both sites) or H.E.L.D. (one Showtime events post)?

### Programs and community
14. **The Hoop Ministry.** It is not on the official site or the current Instagram bio. Is it active, and is it part of The Grove?
15. **Scholarship mechanics.** What are the eligibility rules, application process, deadlines and award amounts?
16. **Donation path.** Is there an online donation link, or only the inquiry form? Does "Donate to Become a Member" (the page title) mean any donor benefits?
17. **Shoe drive timing.** When does it run each year? The copy says "for the past seven years" and is undated.
18. **Which nonprofit partners** make up the ecosystem (academic scholarships, girls' basketball, mental health)? Do we have permission to name them?
19. **Mural project.** Historical facts (`FZ`):
    - Local Color (a nonprofit public arts organization) ran a crowdfunding campaign.
    - Goal: $25,100 for a permanent mural "inside The Grove gym", on "the far wall".
    - The campaign started 2025-06-17.

    Was it funded and painted? Did an unveiling happen? The build omits it intentionally (`REPO`); keep it omitted until the client confirms its status.

### Events
20. **Recurring series.** Are Bux Island, All City Runs and The Cookout ongoing? If so, how often, and are they public or invite-only?
21. **Upcoming events.** Are there any dated, confirmed events to publish, and who keeps the list current? (/events now exists and lists events from `lib/events.ts`; its Upcoming section shows an empty state until a confirmed event is added.)
22. **Events page details.**
    - On the old events page, the hover text under the BUX ISLAND tile is the 1v1 showcase ("led by Ryan Parilla"), and the hover text under ALL CITY RUNS describes "Private, invite-only player's only runs". The descriptions look swapped. Which text belongs to which event, and when was All City Runs?
    - Confirm Slam Jose participation was 2025-06-21 (the date shown above it).

### Partnerships and brand
23. **Partner list.** Is it still current? Is the chiropractic partner's display name "Forge Strength and Chiropractic"? Do any partners require written permission?
24. **Tagline.** "Where San Jose comes to grow through basketball." appeared in no public source and has been replaced with "Strengthening San Jose through basketball." (from the official mission wording). Is that approved, or does the client have a preferred line?
25. **Space rental.** What are the rental terms (event types, capacity, hours), and should anything beyond the GoodRun link appear on the site?
26. **Brand palette.** The old site is monochrome plus amber, with no green. The current build uses forest green, cream and wood, which has no source in the old brand. Should the redesign return to near-black, off-white and amber, or is green an intended new direction? Also: may we use the high-resolution logo files from the old site, and are vector originals available?
    - **Working decision (2026-10-06, pending client confirmation):** The Grove and Showtime are related but distinct brands. The Grove (parent facility and community) uses near-black, off-white and forest green; amber is reserved for Showtime-specific contexts (the Programs page, Join Showtime buttons). Shared black and off-white neutrals connect them. The high-resolution logo PNGs are now used in the build, pending the client's OK. See DESIGN.md.

import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormWithTopic } from "@/components/ContactForm";
import { ArrowUpRight } from "@/components/Icon";
import { Accent } from "@/components/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { bookingCta, joinShowtimeCta, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact for Partners, Donors, and Events",
  description:
    "Contact The Grove Community Collective in San Jose for partnerships, donations, volunteering, and event questions. Training inquiries go to Showtime Basketball Academy.",
  path: "/contact",
});

const routes = [
  {
    title: "Training and Showtime",
    body: "Showtime Basketball Academy handles training inquiries and enrollment.",
    cta: { ...joinShowtimeCta, label: "Contact Showtime" },
  },
  {
    title: "Book the court",
    body: `Availability, rates, and reservations are on ${site.bookingProvider}.`,
    cta: bookingCta,
  },
  {
    title: "Events and news",
    body: "New events are announced on Instagram first.",
    cta: { href: site.instagramUrl, label: site.instagramHandle, external: true },
  },
] as const;

export default function ContactPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="container-grove grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <h1 className="font-display text-[3.25rem] leading-[0.92] sm:text-7xl md:text-8xl">
            Get <Accent>in touch.</Accent>
          </h1>
          <span aria-hidden="true" className="brand-rule mt-7" />
          <p className="mt-6 max-w-xl text-lg text-black/70">
            Reach the right people faster. Training and court bookings each
            have their own place. Everything else comes to us.
          </p>

          <ul className="mt-12 border-t-[3px] border-black">
            {routes.map((route) => (
              <li key={route.title} className="border-b border-black/15 py-6">
                <h2 className="font-display text-2xl">{route.title}</h2>
                <p className="mt-1.5 text-black/70">{route.body}</p>
                <a
                  href={route.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-medium tracking-[0.1em] text-forest uppercase underline decoration-forest/40 decoration-1 underline-offset-[0.5em] transition-colors hover:decoration-forest"
                >
                  {route.cta.label}
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li className="border-b border-black/15 py-6">
              <h2 className="font-display text-2xl">Location</h2>
              <p className="mt-1.5 text-lg">
                {site.street}, {site.location}
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-forest p-7 text-paper md:p-10 lg:sticky lg:top-28">
          <h2 className="font-display text-3xl leading-[1.02] md:text-4xl">
            Partners, donors, and everything else
          </h2>
          <p className="mt-3 text-paper/75">
            Sponsorships, partnerships, donations, volunteering, and event
            questions. We don&apos;t take training inquiries here.
          </p>
          <div className="mt-8 border-t border-paper/20 pt-8">
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithTopic />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

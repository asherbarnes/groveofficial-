import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, ContactFormWithTopic } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { bookingCta, joinShowtimeCta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Grove Community Collective in San Jose for partnerships, donations, volunteering, and event questions. Training inquiries go to Showtime Basketball Academy.",
  alternates: { canonical: "/contact" },
};

const routes = [
  {
    eyebrow: "Training and Showtime",
    body: "Showtime Basketball Academy handles training inquiries and enrollment.",
    cta: { ...joinShowtimeCta, label: "Contact Showtime" },
  },
  {
    eyebrow: "Book the court",
    body: `Availability, rates, and reservations are on ${site.bookingProvider}.`,
    cta: bookingCta,
  },
  {
    eyebrow: "Events and news",
    body: "New events are announced on Instagram first.",
    cta: { href: site.instagramUrl, label: site.instagramHandle, external: true },
  },
] as const;

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-grove grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Get in touch." titleAs="h1">
            <p>
              Reach the right people faster. Training and court bookings each
              have their own place. Everything else comes to us.
            </p>
          </SectionHeading>

          <ul className="mt-10 divide-y divide-black/15 border-y border-black/15">
            {routes.map((route) => (
              <li key={route.eyebrow} className="py-6">
                <p className="eyebrow text-forest">{route.eyebrow}</p>
                <p className="mt-2 text-black/70">{route.body}</p>
                <a
                  href={route.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-display text-sm tracking-[0.12em] underline decoration-wood decoration-2 underline-offset-6"
                >
                  {route.cta.label} ↗
                </a>
              </li>
            ))}
            <li className="py-6">
              <p className="eyebrow text-forest">Location</p>
              <p className="mt-2 text-lg">
                {site.street}, {site.location}
              </p>
            </li>
          </ul>
        </div>

        <div className="border border-black/15 bg-white p-6 md:p-10">
          <h2 className="font-display text-3xl tracking-[0.05em]">
            Partners, donors, and everything else
          </h2>
          <p className="mt-2 text-sm text-gray">
            Sponsorships, partnerships, donations, volunteering, and event
            questions. We don&apos;t take training inquiries here.
          </p>
          <div className="mt-8">
            <Suspense fallback={<ContactForm />}>
              <ContactFormWithTopic />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}

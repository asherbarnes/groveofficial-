import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The Grove Community Collective in San Jose — general inquiries, Showtime, facility rentals, and scholarship questions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-grove grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact" title="Get in touch.">
              <p>
                General questions, Showtime interest, scholarship support, or
                facility rentals — send a note. Confirmed public phone, email, and
                street address will be added once verified.
              </p>
            </SectionHeading>

            <div className="mt-10 space-y-6 border-t border-black/15 pt-8">
              <div>
                <p className="eyebrow text-forest">Location</p>
                <p className="mt-2 text-lg">{site.location}</p>
                <p className="mt-1 text-sm text-gray">
                  Exact street address pending verification.
                </p>
              </div>

              <div>
                <p className="eyebrow text-forest">Social</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-lg underline decoration-wood decoration-2 underline-offset-6"
                >
                  {site.instagramHandle}
                </a>
              </div>

              <div>
                <p className="eyebrow text-forest">Facility rental</p>
                <p className="mt-2 text-black/70">
                  For court and event bookings, use GoodRun — or send a rental
                  inquiry below.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <ButtonLink href="/book" variant="primary" size="md">
                    Book page
                  </ButtonLink>
                  <ButtonLink
                    href={site.bookingUrl}
                    external
                    variant="ghost"
                    size="md"
                  >
                    Open {site.bookingProvider}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-black/15 bg-white p-6 md:p-10">
            <h2 className="font-display text-3xl tracking-[0.05em]">
              Send an inquiry
            </h2>
            <p className="mt-2 text-sm text-gray">
              Choose a topic so messages land in the right place once email is
              connected.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

/** Training inquiries are routed to Showtime, so there is no training topic here. */
export const contactTopics = [
  { value: "partnership", label: "Partnership or sponsorship" },
  { value: "donate", label: "Donating or volunteering" },
  { value: "event", label: "Event or space question" },
  { value: "other", label: "Something else" },
] as const;

type TopicValue = (typeof contactTopics)[number]["value"];

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ?? "";

const fieldClass =
  "mt-2 w-full border border-black/20 bg-white px-4 py-3 outline-none transition-colors focus:border-forest";

function isTopic(value: string | null): value is TopicValue {
  return contactTopics.some((topic) => topic.value === value);
}

/** Reads ?topic= so links like /contact?topic=donate preselect the form. Wrap in <Suspense>. */
export function ContactFormWithTopic() {
  const param = useSearchParams().get("topic");
  return <ContactForm defaultTopic={isTopic(param) ? param : "partnership"} />;
}

export function ContactForm({
  defaultTopic = "partnership",
}: {
  defaultTopic?: TopicValue;
}) {
  const [sent, setSent] = useState(false);

  // No verified inbox yet: don't collect a message we can't deliver.
  if (!contactEmail) {
    return (
      <div className="space-y-4" data-testid="contact-fallback">
        <p className="text-black/75">
          The fastest way to reach The Grove is a direct message on Instagram.
          Include your name, what you are reaching out about, and the best way
          to reach you.
        </p>
        <ButtonLink href={site.instagramUrl} external variant="primary" size="lg">
          Message {site.instagramHandle}
        </ButtonLink>
      </div>
    );
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) || "").trim();
    const name = get("name");
    const topicLabel =
      contactTopics.find((topic) => topic.value === get("topic"))?.label ??
      "Inquiry";

    const subject = encodeURIComponent(`[The Grove] ${topicLabel}: ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${get("email")}`,
        get("phone") ? `Phone: ${get("phone")}` : null,
        `Topic: ${topicLabel}`,
        "",
        get("message"),
      ]
        .filter((line) => line !== null)
        .join("\n"),
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-forest">Name</span>
          <input required name="name" type="text" autoComplete="name" className={fieldClass} />
        </label>
        <label className="block">
          <span className="eyebrow text-forest">Email</span>
          <input required name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-forest">Phone (optional)</span>
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
        <label className="block">
          <span className="eyebrow text-forest">Topic</span>
          <select name="topic" className={fieldClass} defaultValue={defaultTopic}>
            {contactTopics.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-forest">Message</span>
        <textarea required name="message" rows={6} className={`${fieldClass} resize-y`} />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-forest-light px-6 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-black transition-colors hover:bg-forest-lighter"
      >
        Send inquiry
      </button>
      <p className="text-sm text-gray">Opens your email app with your message filled in.</p>

      {sent ? (
        <p className="text-sm text-forest" role="status">
          Your email app should open now. If it didn&apos;t, email us at{" "}
          <a href={`mailto:${contactEmail}`} className="underline decoration-wood underline-offset-4">
            {contactEmail}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

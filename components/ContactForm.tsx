"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "ready" | "missing";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "").trim();
    const message = String(data.get("message") || "").trim();

    const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

    if (!contactEmail) {
      setStatus("missing");
      return;
    }

    const subject = encodeURIComponent(`[The Grove] ${topic || "Inquiry"} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-forest">Name</span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            className="mt-2 w-full border border-black/20 bg-white px-4 py-3 outline-none transition-colors focus:border-forest"
          />
        </label>
        <label className="block">
          <span className="eyebrow text-forest">Email</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="mt-2 w-full border border-black/20 bg-white px-4 py-3 outline-none transition-colors focus:border-forest"
          />
        </label>
      </div>

      <label className="block">
        <span className="eyebrow text-forest">Topic</span>
        <select
          name="topic"
          className="mt-2 w-full border border-black/20 bg-white px-4 py-3 outline-none transition-colors focus:border-forest"
          defaultValue="General inquiry"
        >
          <option>General inquiry</option>
          <option>Showtime Basketball Academy</option>
          <option>Facility rental</option>
          <option>Scholarship</option>
          <option>Partnership / support</option>
        </select>
      </label>

      <label className="block">
        <span className="eyebrow text-forest">Message</span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-2 w-full resize-y border border-black/20 bg-white px-4 py-3 outline-none transition-colors focus:border-forest"
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center bg-forest-light px-6 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-black transition-colors hover:bg-forest-lighter"
      >
        Send inquiry
      </button>

      {status === "missing" ? (
        <p className="text-sm text-gray" role="status">
          A public contact email has not been verified yet. Reach out via{" "}
          <a
            href="https://www.instagram.com/the.grove.cc/"
            className="underline decoration-wood underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            @the.grove.cc
          </a>{" "}
          for now, or set NEXT_PUBLIC_CONTACT_EMAIL when confirmed.
        </p>
      ) : null}

      {status === "ready" ? (
        <p className="text-sm text-forest" role="status">
          Opening your email client…
        </p>
      ) : null}
    </form>
  );
}

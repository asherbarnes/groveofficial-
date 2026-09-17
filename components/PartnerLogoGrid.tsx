import Image from "next/image";
import { partners } from "@/lib/content";

const topRow = partners.slice(0, 4);
const bottomRow = partners.slice(4);

function PartnerLogo({
  partner,
}: {
  partner: (typeof partners)[number];
}) {
  return (
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative mx-auto block h-[8rem] w-full max-w-[14rem] opacity-90 transition-opacity duration-200 hover:opacity-100 sm:h-[11.55rem] sm:max-w-[19.8rem]"
      aria-label={partner.name}
    >
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 224px, 317px"
      />
    </a>
  );
}

export function PartnerLogoGrid() {
  return (
    <section className="border-y border-black/10 bg-cream py-16 md:py-20">
      <div className="container-grove">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-forest">Partners</p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.06em] md:text-4xl">
            Backed by the crew.
          </h2>
        </div>

        <div className="mt-10 flex flex-col items-center gap-y-[3.6rem] md:gap-y-[4.2rem]">
          <ul className="grid w-full grid-cols-4 gap-x-[0.96rem] md:gap-x-[1.28rem]">
            {topRow.map((partner) => (
              <li key={partner.name} className="flex justify-center">
                <PartnerLogo partner={partner} />
              </li>
            ))}
          </ul>

          <ul className="mx-auto grid w-3/4 grid-cols-3 gap-x-[0.96rem] md:gap-x-[1.28rem]">
            {bottomRow.map((partner) => (
              <li key={partner.name} className="flex justify-center">
                <PartnerLogo partner={partner} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

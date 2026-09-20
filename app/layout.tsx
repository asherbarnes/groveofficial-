import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.websiteUrl),
  title: {
    default: `${site.name} · San Jose`,
    template: `%s · ${site.shortName}`,
  },
  description:
    "The Grove Community Collective is a San Jose basketball community. Home of Showtime Basketball Academy, community outreach, and the Eric Cordova Scholarship.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description:
      "Where San Jose comes to grow through basketball. Community, Showtime Basketball Academy, and The Grove facility.",
    locale: "en_US",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Loaded via <link> instead of next/font to avoid empty next-size-adjust meta */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

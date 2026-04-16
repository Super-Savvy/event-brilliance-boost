import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { I18nProvider } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Mesquite Event Center",
  image: "https://mesquiteeventcenter.com/og.jpg",
  telephone: "+1-214-699-9868",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4601 Gus Thomasson Rd",
    addressLocality: "Mesquite",
    addressRegion: "TX",
    postalCode: "75150",
    addressCountry: "US",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.5", reviewCount: "33" },
  openingHours: "Mo-Sa 14:00-19:00",
  priceRange: "$$",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mesquite Event Center | Event Venue in Mesquite, TX" },
      {
        name: "description",
        content:
          "Elegant ballroom in Mesquite, TX for weddings, quinceañeras, birthdays & corporate events. Spacious, clean, free parking. Call (214) 699-9868.",
      },
      { name: "author", content: "Mesquite Event Center" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mesquite Event Center" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
      { rel: "canonical", href: "https://mesquiteeventcenter.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}

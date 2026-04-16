import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import sweetheart from "@/assets/real-sweetheart-table.jpg";
import quinceDress from "@/assets/real-quince-dress.jpg";
import partyLights from "@/assets/real-party-lights.jpg";
import aliceCake from "@/assets/real-alice-cake.jpg";
import holidayParty from "@/assets/real-holiday-party.jpg";
import banquet from "@/assets/real-banquet-guests.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events We Host — Weddings, Quinceañeras & More | Mesquite Event Center" },
      {
        name: "description",
        content:
          "Weddings, quinceañeras, sweet sixteens, birthdays, baptisms and corporate events in Mesquite, TX. Up to 150 guests, late-night friendly, free parking.",
      },
      { property: "og:title", content: "Events We Host | Mesquite Event Center" },
      { property: "og:description", content: "Weddings, quinceañeras, birthdays & corporate events." },
      { property: "og:image", content: quinceDress },
      { name: "twitter:image", content: quinceDress },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useI18n();

  const items = [
    {
      img: sweetheart,
      name: "Weddings",
      es: "Bodas",
      desc: "Romantic, spacious receptions with a beautiful sweetheart table setup, dance floor, and stage.",
    },
    {
      img: quinceDress,
      name: "Quinceañeras",
      es: "Quinceañeras",
      desc: "Make her dream debut unforgettable. Late-night friendly so the celebration never has to end early.",
    },
    {
      img: partyLights,
      name: "Sweet Sixteens & Birthdays",
      es: "Cumpleaños y Sweet Sixteen",
      desc: "Bring the disco lights — our chandeliers and uplighting create the perfect party vibe.",
    },
    {
      img: aliceCake,
      name: "Themed Parties",
      es: "Fiestas temáticas",
      desc: "From Alice in Wonderland to whatever you can dream up — our space transforms beautifully.",
    },
    {
      img: holidayParty,
      name: "Holiday & Family Gatherings",
      es: "Fiestas familiares",
      desc: "Christmas parties, reunions, baby showers — anywhere you want to gather your favorite people.",
    },
    {
      img: banquet,
      name: "Corporate & Banquets",
      es: "Eventos corporativos",
      desc: "Meetings, banquets, and company celebrations comfortably hosting up to 150 guests.",
    },
  ];

  return (
    <div className="bg-gradient-soft">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t("events.title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("events.sub")}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <article key={it.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold">{it.name}</h2>
                <p className="text-sm text-primary">{it.es}</p>
                <p className="mt-3 text-muted-foreground">{it.desc}</p>
                <Button asChild variant="outline" className="mt-5">
                  <Link to="/contact">{t("cta.quote")}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

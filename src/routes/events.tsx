import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import wedding from "@/assets/event-wedding.jpg";
import quince from "@/assets/event-quince.jpg";
import birthday from "@/assets/event-birthday.jpg";
import corporate from "@/assets/event-corporate.jpg";
import baptism from "@/assets/event-baptism.jpg";
import sweet16 from "@/assets/event-sweet16.jpg";

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
      { property: "og:description", content: "Weddings, quinceañeras, birthdays, baptisms & corporate events." },
      { property: "og:image", content: wedding },
      { name: "twitter:image", content: wedding },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useI18n();

  const items = [
    { img: wedding, name: "Weddings", es: "Bodas", desc: "Romantic, spacious receptions with a beautiful dance floor and stage." },
    { img: quince, name: "Quinceañeras", es: "Quinceañeras", desc: "Make her dream debut unforgettable in our elegant ballroom." },
    { img: sweet16, name: "Sweet Sixteens", es: "Sweet Sixteen", desc: "Lights, music, and room to dance — perfect for the big 16." },
    { img: birthday, name: "Birthday Parties", es: "Cumpleaños", desc: "From milestone birthdays to family fiestas, we set the scene." },
    { img: baptism, name: "Baptisms & Communions", es: "Bautizos", desc: "An intimate, beautiful space for life's sacred moments." },
    { img: corporate, name: "Corporate & Banquets", es: "Eventos corporativos", desc: "Meetings, banquets, and company celebrations with style." },
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

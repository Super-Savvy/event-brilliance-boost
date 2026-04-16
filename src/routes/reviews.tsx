import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.5★ on Google | Mesquite Event Center" },
      {
        name: "description",
        content:
          "Read what real clients say about Mesquite Event Center. Rated 4.5 stars on Google for weddings, quinceañeras, and birthdays in Mesquite, TX.",
      },
      { property: "og:title", content: "Client Reviews | Mesquite Event Center" },
      { property: "og:description", content: "Real reviews from real celebrations. Rated 4.5★ on Google." },
    ],
  }),
  component: ReviewsPage,
});

const REVIEWS = [
  {
    name: "Adriana Oviedo",
    rating: 5,
    text:
      "Highly recommend this venue and would def book again, everyone loved the place and everything was great and nicely set up and decorated. Very clean and staff always answered my calls and texts in a timely manner. Will book again in future.",
  },
  {
    name: "Cecilia Valdez",
    rating: 5,
    text:
      "We had a great time at the venue. The staff was awesome, polite, and so helpful. The gentleman was so kind and understanding. Beautiful Alice in Wonderland themed party!",
  },
  {
    name: "Cristal Martinez",
    rating: 5,
    text:
      "Great customer service! Owner was very punctual the day of our wedding, very accessible. Beautiful place to have any event — we will definitely be back again!",
  },
  {
    name: "Edgar Medrano",
    rating: 5,
    text:
      "We recently had an event, the venue looks newly renovated, great customer service, easy to make payment. Would definitely recommend. Y habla español.",
  },
  {
    name: "Alex Noya",
    rating: 5,
    text:
      "We had a great experience renting this ballroom for my sister's quinceañera. Everything was beautiful and clean. The payment plan was very helpful.",
  },
  {
    name: "Shanell Wyatt",
    rating: 5,
    text:
      "Event space was nice and accommodating! Building was ready on time, clean, and clean bathrooms. I would recommend — my event was a success.",
  },
  {
    name: "Martha Cast",
    rating: 5,
    text:
      "My husband and I recently celebrated our wedding at this venue. It was the perfect place. We loved how everything turned out. Management and employees were professional and friendly.",
  },
  {
    name: "Amor G",
    rating: 5,
    text:
      "I rented this venue a few weeks ago and absolutely loved it! Spotless, immaculate bathrooms, and the evening staff were very friendly. 10/10 — highly recommend!",
  },
  {
    name: "Lourdes Pérez",
    rating: 5,
    text: "Very nice, spacious and clean ballroom. 10 out of 10!",
  },
];

function ReviewsPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="font-semibold">4.5 / 5 · 33 Google reviews</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{t("reviews.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("reviews.sub")}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.text}"</blockquote>
            <figcaption className="mt-4 font-semibold text-primary">— {r.name}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-primary p-10 text-center text-primary-foreground shadow-glow">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">Ready to celebrate with us?</h2>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
            <Link to="/contact">{t("cta.quote")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <a href="tel:+12146999868">{t("cta.call")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

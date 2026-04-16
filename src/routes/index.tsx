import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { Star, MapPin, Sparkles, Car, Moon, Languages, CreditCard, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-ballroom.jpg";
import wedding from "@/assets/real-sweetheart-table.jpg";
import quince from "@/assets/real-quince-dress.jpg";
import birthday from "@/assets/real-party-lights.jpg";
import corporate from "@/assets/real-banquet-guests.jpg";
import alice from "@/assets/real-alice-cake.jpg";
import holiday from "@/assets/real-holiday-party.jpg";
import treats from "@/assets/real-treats-pretzels.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesquite Event Center | Beautiful Ballroom in Mesquite, TX" },
      {
        name: "description",
        content:
          "Host weddings, quinceañeras, birthdays, and corporate events in Mesquite's favorite ballroom. Spacious, spotless, late-night friendly. Book a tour today.",
      },
      { property: "og:title", content: "Mesquite Event Center | Beautiful Ballroom in Mesquite, TX" },
      { property: "og:description", content: "Elegant ballroom for weddings, quinceañeras & more in Mesquite, TX." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  const { t } = useI18n();

  const features = [
    { icon: Sparkles, t: "home.f1.t", d: "home.f1.d" },
    { icon: Car, t: "home.f2.t", d: "home.f2.d" },
    { icon: Moon, t: "home.f3.t", d: "home.f3.d" },
    { icon: Languages, t: "home.f4.t", d: "home.f4.d" },
    { icon: CreditCard, t: "home.f5.t", d: "home.f5.d" },
    { icon: ShieldCheck, t: "home.f6.t", d: "home.f6.d" },
  ];

  const events = [
    { img: wedding, name: "Weddings" },
    { img: quince, name: "Quinceañeras" },
    { img: birthday, name: "Birthdays" },
    { img: corporate, name: "Corporate" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Mesquite Event Center ballroom set up for a celebration"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> {t("hero.eyebrow")}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/90 sm:text-lg">{t("hero.subtitle")}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow">
                <Link to="/contact">
                  {t("cta.quote")} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-primary"
              >
                <a href="tel:+12146999868">
                  <Phone className="mr-1 h-4 w-4" /> {t("cta.call")}
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/90">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <span>{t("hero.rating")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("home.featuresTitle")}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.t}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="bg-gradient-gold mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-gold-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{t(f.t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(f.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("home.eventsTitle")}</h2>
              <p className="mt-2 text-muted-foreground">{t("home.eventsSub")}</p>
            </div>
            <Link to="/events" className="hidden text-sm font-semibold text-primary hover:underline sm:inline">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e) => (
              <Link
                key={e.name}
                to="/events"
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={e.img}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="font-display text-xl font-semibold">{e.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow sm:p-14">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("home.ctaTitle")}</h2>
              <p className="mt-2 text-white/85">{t("home.ctaSub")}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
                <Link to="/contact">{t("cta.tour")}</Link>
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
        </div>
      </section>
    </>
  );
}

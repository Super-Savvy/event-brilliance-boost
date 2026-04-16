import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import {
  Star,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Check,
  CalendarDays,
  Users,
  Sparkles,
  Heart,
  Crown,
  Briefcase,
  Palette,
  Languages,
} from "lucide-react";
import heroImg from "@/assets/hero-ballroom.jpg";
import wedding from "@/assets/real-sweetheart-table.jpg";
import quince from "@/assets/real-quince-dress.jpg";
import birthday from "@/assets/real-party-lights.jpg";
import corporate from "@/assets/real-banquet-guests.jpg";
import alice from "@/assets/real-alice-cake.jpg";
import holiday from "@/assets/real-holiday-party.jpg";
import sweetheart from "@/assets/real-sweetheart-table.jpg";
import banquet from "@/assets/real-banquet-guests.jpg";

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

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 sm:py-28 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> {t("hero.eyebrow")}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/90 sm:text-lg">{t("hero.subtitle")}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
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

          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-white/90">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span>{t("hero.rating")}</span>
          </div>
        </div>

        {/* Floating contact strip */}
        <div className="relative mx-auto -mb-10 max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 rounded-2xl bg-foreground p-5 text-background shadow-glow sm:grid-cols-3 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Sparkles className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium">{t("strip.tag")}</p>
            </div>
            <a href="tel:+12146999868" className="flex items-center gap-3 hover:text-gold">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">+1 (214) 699-9868</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                <Clock className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium">{t("contact.hoursValue")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO 1 — text + image */}
      <section className="pt-28 pb-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              — {t("intro.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
              {t("intro.title")}
            </h2>
            <p className="mt-5 text-muted-foreground">{t("intro.body")}</p>
            <p className="mt-3 text-muted-foreground">{t("intro.body2")}</p>
            <Button asChild className="mt-7" size="lg">
              <Link to="/events">
                {t("intro.cta")} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img src={alice} alt="Decorated event setup" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-glow sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold">4.5 ★</div>
                  <div className="text-xs text-muted-foreground">33+ Google reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO 2 — image + text with play */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img src={holiday} alt="Guests celebrating at the venue" className="aspect-[5/4] w-full object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              — {t("intro2.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-[2.4rem] md:leading-[1.1]">
              {t("intro2.title")}
            </h2>
            <p className="mt-5 text-muted-foreground">{t("intro2.body")}</p>
            <ul className="mt-6 space-y-3">
              {[
                "Up to 150 guests with dance floor",
                "Free on-site parking",
                "Open until 2 AM",
                "Bilingual on-site team (EN/ES)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              — {t("services.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t("services.title")}</h2>
            <p className="mt-3 text-muted-foreground">{t("services.sub")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              image={banquet}
              icon={Crown}
              title={t("services.s1.t")}
              desc={t("services.s1.d")}
              featured
            />
            <ServiceCard image={wedding} icon={Heart} title={t("services.s2.t")} desc={t("services.s2.d")} />
            <ServiceCard image={quince} icon={Sparkles} title={t("services.s3.t")} desc={t("services.s3.d")} />
            <ServiceCard image={corporate} icon={Briefcase} title={t("services.s4.t")} desc={t("services.s4.d")} />
            <ServiceCard image={alice} icon={Palette} title={t("services.s5.t")} desc={t("services.s5.d")} />
            <ServiceCard image={birthday} icon={Languages} title={t("services.s6.t")} desc={t("services.s6.d")} />
          </div>
        </div>
      </section>

      {/* CTA WITH BOOKING FORM */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src={sweetheart} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/30" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              — {t("book.eyebrow")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl md:text-5xl">
              {t("book.title")}
            </h2>
            <p className="mt-4 max-w-md text-white/90">{t("book.sub")}</p>
          </div>
          <QuickBookForm />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                — {t("testi.eyebrow")}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t("testi.title")}</h2>
              <div className="mt-6 overflow-hidden rounded-3xl shadow-soft">
                <img src={quince} alt="Happy client" className="aspect-square w-full object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              {testimonials.map((tt) => (
                <figure key={tt.author} className="rounded-3xl bg-card p-7 shadow-soft">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-lg leading-relaxed text-foreground/90">
                    "{tt.quote}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-primary">
                    {tt.author} <span className="ml-1 text-muted-foreground font-normal">— Google Review</span>
                  </figcaption>
                </figure>
              ))}
              <Link
                to="/reviews"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Read all reviews <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING DATES */}
      <section className="bg-gradient-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                — {t("events2.eyebrow")}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{t("events2.title")}</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">{t("events2.sub")}</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/contact">{t("events2.viewAll")}</Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {upcoming.map((u) => (
              <div key={u.day + u.month} className="flex items-center gap-5 rounded-2xl bg-card p-5 shadow-soft">
                <div className="flex h-20 w-20 flex-none flex-col items-center justify-center rounded-2xl bg-gradient-gold text-gold-foreground">
                  <span className="font-display text-2xl font-bold leading-none">{u.day}</span>
                  <span className="mt-1 text-xs uppercase tracking-wide">{u.month}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" /> {u.label}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{u.title}</h3>
                  <a
                    href="tel:+12146999868"
                    className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    Reserve now <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  image,
  icon: Icon,
  title,
  desc,
  featured,
}: {
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-soft ${
        featured ? "ring-2 ring-gold/40" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-card text-primary shadow-soft">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
        <Link
          to="/contact"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
        >
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function QuickBookForm() {
  const { t } = useI18n();
  const [data, setData] = useState({ name: "", phone: "", date: "", guests: "", type: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tour request — ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nGuests: ${data.guests}\nType: ${data.type}`,
    );
    window.location.href = `mailto:info@mesquiteeventcenter.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold";

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/30 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          placeholder={t("book.name")}
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className={input}
        />
        <input
          required
          type="tel"
          placeholder={t("book.phone")}
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          className={input}
        />
        <input
          required
          type="date"
          placeholder={t("book.date")}
          value={data.date}
          onChange={(e) => setData({ ...data, date: e.target.value })}
          className={input}
        />
        <div className="relative">
          <input
            type="number"
            min={1}
            placeholder={t("book.guests")}
            value={data.guests}
            onChange={(e) => setData({ ...data, guests: e.target.value })}
            className={input}
          />
          <Users className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <select
          required
          value={data.type}
          onChange={(e) => setData({ ...data, type: e.target.value })}
          className={`${input} sm:col-span-2`}
        >
          <option value="">{t("book.type")}</option>
          <option>Wedding</option>
          <option>Quinceañera</option>
          <option>Sweet 16</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Other</option>
        </select>
      </div>
      <Button type="submit" size="lg" className="mt-4 w-full bg-gold text-gold-foreground hover:bg-gold/90">
        <CalendarDays className="mr-2 h-4 w-4" /> {t("book.submit")}
      </Button>
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-white/85">
        <Mail className="h-3.5 w-3.5" /> Same-business-day reply
      </p>
      {sent && (
        <p className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-xs text-white">
          <Check className="h-3.5 w-3.5" /> Thanks! Your email app should now open with your request.
        </p>
      )}
    </form>
  );
}

const testimonials = [
  {
    author: "Adriana Oviedo",
    quote:
      "Highly recommend this venue and would def book again, everyone loved the place and everything was great and nicely set up and decorated. Very clean and staff always answered my calls and texts in timely manner.",
  },
  {
    author: "cristal martinez",
    quote:
      "Great customer service! Owner was very punctual the day of our wedding, very accessible. Beautiful place to have any event that you are looking to book.",
  },
];

function getUpcomingSaturdays(count: number) {
  const out: { day: string; month: string; label: string; title: string }[] = [];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const labels = ["Saturday • Evening", "Saturday • All day", "Saturday • Evening"];
  const d = new Date();
  // Move to next Saturday (skip today if it's already Saturday)
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7));
  // Skip a few weeks ahead so dates feel "available but soon"
  d.setDate(d.getDate() + 14);
  for (let i = 0; i < count; i++) {
    out.push({
      day: String(d.getDate()).padStart(2, "0"),
      month: months[d.getMonth()],
      label: labels[i % labels.length],
      title: "Open weekend slot",
    });
    d.setDate(d.getDate() + 21);
  }
  return out;
}
const upcoming = getUpcomingSaturdays(3);

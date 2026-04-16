import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, CheckCircle2, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Request a Tour | Mesquite Event Center" },
      {
        name: "description",
        content:
          "Contact Mesquite Event Center to schedule a tour or request a quote. Call (214) 699-9868. 4601 Gus Thomasson Rd, Mesquite, TX 75150.",
      },
      { property: "og:title", content: "Contact & Book | Mesquite Event Center" },
      { property: "og:description", content: "Schedule a tour or request a quote — same-day response." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Quote request — ${data.get("name") ?? ""}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nEvent type: ${data.get("eventType")}\nDate: ${data.get("date")}\nGuests: ${data.get("guests")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:info@mesquiteeventcenter.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t("contact.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("contact.sub")}</p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <h2 className="font-display text-2xl font-semibold">{t("contact.formTitle")}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" name="name" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input id="email" name="email" type="email" required className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">{t("contact.phone")}</Label>
              <Input id="phone" name="phone" type="tel" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="eventType">{t("contact.eventType")}</Label>
              <Input id="eventType" name="eventType" placeholder="Wedding, Quinceañera…" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="date">{t("contact.date")}</Label>
              <Input id="date" name="date" type="date" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="guests">{t("contact.guests")}</Label>
              <Input id="guests" name="guests" type="number" min={1} className="mt-1.5" />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="message">{t("contact.message")}</Label>
            <Textarea id="message" name="message" rows={4} className="mt-1.5" />
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            {t("contact.send")}
          </Button>

          {sent && (
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary">
              <CheckCircle2 className="h-4 w-4" /> {t("contact.sent")}
            </p>
          )}
        </form>

        <aside className="space-y-5">
          <div className="rounded-2xl bg-gradient-soft p-6 shadow-soft">
            <a
              href="tel:+12146999868"
              className="bg-gradient-gold flex items-center gap-3 rounded-xl p-5 text-gold-foreground shadow-glow transition hover:opacity-90"
            >
              <Phone className="h-6 w-6" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
                  {t("contact.phoneLabel")}
                </div>
                <div className="text-xl font-bold">(214) 699-9868</div>
              </div>
            </a>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">{t("contact.address")}</div>
                  <a
                    href="https://maps.google.com/?q=4601+Gus+Thomasson+Rd,+Mesquite,+TX+75150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    4601 Gus Thomasson Rd, Mesquite, TX 75150
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">{t("contact.hours")}</div>
                  <div className="text-muted-foreground">{t("contact.hoursValue")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:info@mesquiteeventcenter.com" className="text-muted-foreground hover:text-primary">
                    info@mesquiteeventcenter.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=4601+Gus+Thomasson+Rd,+Mesquite,+TX+75150&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              className="block"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}

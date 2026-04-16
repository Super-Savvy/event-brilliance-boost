import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/events", label: t("nav.events") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/reviews", label: t("nav.reviews") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="bg-gradient-gold inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-lg font-bold text-gold-foreground shadow-soft">
            M
          </span>
          <span className="font-display text-lg font-semibold leading-tight">
            Mesquite <span className="text-primary">Event Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold sm:flex">
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-full px-2.5 py-1 transition ${lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              ES
            </button>
          </div>

          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/contact">{t("nav.book")}</Link>
          </Button>

          <a
            href="tel:+12146999868"
            className="hidden h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-soft transition hover:scale-105 sm:inline-flex"
            aria-label="Call"
          >
            <Phone className="h-4 w-4" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-2">
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${lang === "en" ? "bg-primary text-primary-foreground" : "border border-border"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${lang === "es" ? "bg-primary text-primary-foreground" : "border border-border"}`}
              >
                ES
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");

  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="bg-gradient-gold inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-lg font-bold text-gold-foreground">
                M
              </span>
              <span className="font-display text-xl font-semibold">
                Mesquite <span className="text-gold">Event Center</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-background/70">{t("footer.tag")}</p>

            <h4 className="mt-8 font-display text-lg font-semibold">{t("footer.newsletter")}</h4>
            <p className="mt-1 text-sm text-background/70">{t("footer.newsletterSub")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:info@mesquiteeventcenter.com?subject=Newsletter%20signup&body=${encodeURIComponent(email)}`;
              }}
              className="mt-3 flex overflow-hidden rounded-full bg-background/10 ring-1 ring-background/20"
            >
              <input
                required
                type="email"
                placeholder={t("footer.emailPh")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-sm placeholder:text-background/50 focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center gap-1 bg-gold px-5 text-sm font-semibold text-gold-foreground transition hover:bg-gold/90"
              >
                {t("footer.subscribe")} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Menu */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-display text-base font-semibold">{t("footer.menu")}</h4>
            <ul className="space-y-2 text-sm text-background/75">
              <li><Link to="/" className="hover:text-gold">{t("nav.home")}</Link></li>
              <li><Link to="/events" className="hover:text-gold">{t("nav.events")}</Link></li>
              <li><Link to="/gallery" className="hover:text-gold">{t("nav.gallery")}</Link></li>
              <li><Link to="/reviews" className="hover:text-gold">{t("nav.reviews")}</Link></li>
              <li><Link to="/faq" className="hover:text-gold">{t("nav.faq")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="mb-4 font-display text-base font-semibold">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-background/75">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" />
                <a
                  href="https://maps.google.com/?q=4601+Gus+Thomasson+Rd,+Mesquite,+TX+75150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  4601 Gus Thomasson Rd, Mesquite, TX 75150
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <a href="tel:+12146999868" className="hover:text-gold">+1 (214) 699-9868</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <a href="mailto:info@mesquiteeventcenter.com" className="hover:text-gold">
                  info@mesquiteeventcenter.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-2">
            <h4 className="mb-4 font-display text-base font-semibold">{t("footer.follow")}</h4>
            <div className="flex gap-2">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJ_____Mesquite+Event+Center"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition hover:bg-gold hover:text-gold-foreground"
              >
                <Star className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition hover:bg-gold hover:text-gold-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/10 transition hover:bg-gold hover:text-gold-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-3 text-xs text-background/60">Tip: Replace these links with your real social pages.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 py-5 text-center text-xs text-background/60">
        © {new Date().getFullYear()} Mesquite Event Center. {t("footer.rights")}
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl font-semibold">
            Mesquite <span className="text-primary">Event Center</span>
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t("footer.tag")}</p>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <a
              href="https://maps.google.com/?q=4601+Gus+Thomasson+Rd,+Mesquite,+TX+75150"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              4601 Gus Thomasson Rd, Mesquite, TX 75150
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <a href="tel:+12146999868" className="hover:text-primary">+1 (214) 699-9868</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{t("contact.hoursValue")}</span>
          </div>
        </div>
        <div className="text-sm">
          <h4 className="mb-3 font-semibold">Explore</h4>
          <ul className="grid grid-cols-2 gap-2">
            <li><Link to="/events" className="hover:text-primary">{t("nav.events")}</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">{t("nav.gallery")}</Link></li>
            <li><Link to="/reviews" className="hover:text-primary">{t("nav.reviews")}</Link></li>
            <li><Link to="/faq" className="hover:text-primary">{t("nav.faq")}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t("nav.contact")}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Mesquite Event Center. {t("footer.rights")}
      </div>
    </footer>
  );
}

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.events": "Events",
  "nav.gallery": "Gallery",
  "nav.reviews": "Reviews",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.book": "Book a Tour",

  "cta.call": "Call (214) 699-9868",
  "cta.quote": "Request a Quote",
  "cta.tour": "Schedule a Tour",

  "hero.eyebrow": "Mesquite, TX • Event Venue",
  "hero.title": "Where Your Celebration Comes to Life",
  "hero.subtitle":
    "An elegant, spacious ballroom for weddings, quinceañeras, birthdays, and corporate events — minutes from Dallas.",
  "hero.rating": "Rated 4.5 ★ by happy clients on Google",

  "home.featuresTitle": "Everything You Need for an Unforgettable Event",
  "home.f1.t": "Spacious Ballroom",
  "home.f1.d": "Comfortably hosts up to 150 guests with a dance floor and stage area.",
  "home.f2.t": "Free Parking",
  "home.f2.d": "Plenty of on-site parking for you and your guests.",
  "home.f3.t": "Late-Night Friendly",
  "home.f3.d": "Celebrate past midnight — perfect for quinceañeras and weddings.",
  "home.f4.t": "Bilingual Service",
  "home.f4.d": "Se habla español. Friendly, accessible owners every step of the way.",
  "home.f5.t": "Flexible Payments",
  "home.f5.d": "Convenient payment plans to make booking easy.",
  "home.f6.t": "Spotless & Ready",
  "home.f6.d": "Freshly cleaned and set up so you can focus on celebrating.",

  "home.eventsTitle": "Perfect for Every Occasion",
  "home.eventsSub": "From intimate gatherings to grand celebrations.",

  "home.ctaTitle": "Let's Make Your Event Unforgettable",
  "home.ctaSub": "Tour the venue, check availability, and lock in your date today.",

  "events.title": "Events We Host",
  "events.sub": "Mesquite Event Center is the perfect setting for life's most meaningful moments.",

  "gallery.title": "Gallery",
  "gallery.sub": "A look inside our beautiful, versatile ballroom.",

  "reviews.title": "What Our Clients Say",
  "reviews.sub": "Real reviews from real celebrations.",

  "faq.title": "Frequently Asked Questions",
  "faq.sub": "Everything you need to know before booking.",

  "contact.title": "Contact & Book",
  "contact.sub": "Reach out today — we typically respond the same business day.",
  "contact.formTitle": "Request a Quote",
  "contact.name": "Your Name",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.eventType": "Event Type",
  "contact.date": "Event Date",
  "contact.guests": "Estimated Guests",
  "contact.message": "Tell us about your event",
  "contact.send": "Send Request",
  "contact.sent": "Thanks! We'll be in touch shortly.",
  "contact.hours": "Office Hours",
  "contact.hoursValue": "Monday – Saturday • 2pm – 7pm",
  "contact.address": "Address",
  "contact.phoneLabel": "Phone",

  "footer.tag": "Your celebration. Our beautiful space.",
  "footer.rights": "All rights reserved.",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.events": "Eventos",
  "nav.gallery": "Galería",
  "nav.reviews": "Reseñas",
  "nav.faq": "Preguntas",
  "nav.contact": "Contacto",
  "nav.book": "Agendar visita",

  "cta.call": "Llamar (214) 699-9868",
  "cta.quote": "Pedir cotización",
  "cta.tour": "Agendar una visita",

  "hero.eyebrow": "Mesquite, TX • Salón de eventos",
  "hero.title": "Donde tu celebración cobra vida",
  "hero.subtitle":
    "Un salón elegante y espacioso para bodas, quinceañeras, cumpleaños y eventos corporativos — a minutos de Dallas.",
  "hero.rating": "Calificado 4.5 ★ por clientes felices en Google",

  "home.featuresTitle": "Todo lo que necesitas para un evento inolvidable",
  "home.f1.t": "Salón espacioso",
  "home.f1.d": "Cómodamente para hasta 150 invitados con pista de baile y escenario.",
  "home.f2.t": "Estacionamiento gratis",
  "home.f2.d": "Amplio estacionamiento para ti y tus invitados.",
  "home.f3.t": "Hasta tarde",
  "home.f3.d": "Celebra pasada la medianoche — ideal para quinceañeras y bodas.",
  "home.f4.t": "Atención bilingüe",
  "home.f4.d": "Se habla español. Dueños amables y accesibles en cada paso.",
  "home.f5.t": "Pagos flexibles",
  "home.f5.d": "Planes de pago convenientes para reservar con facilidad.",
  "home.f6.t": "Impecable y listo",
  "home.f6.d": "Limpio y preparado para que solo te concentres en celebrar.",

  "home.eventsTitle": "Perfecto para toda ocasión",
  "home.eventsSub": "Desde reuniones íntimas hasta grandes celebraciones.",

  "home.ctaTitle": "Hagamos tu evento inolvidable",
  "home.ctaSub": "Visita el salón, consulta disponibilidad y aparta tu fecha hoy.",

  "events.title": "Eventos que organizamos",
  "events.sub": "Mesquite Event Center es el escenario ideal para los momentos más importantes.",

  "gallery.title": "Galería",
  "gallery.sub": "Un vistazo a nuestro hermoso y versátil salón.",

  "reviews.title": "Lo que dicen nuestros clientes",
  "reviews.sub": "Reseñas reales de celebraciones reales.",

  "faq.title": "Preguntas frecuentes",
  "faq.sub": "Todo lo que necesitas saber antes de reservar.",

  "contact.title": "Contacto y reservas",
  "contact.sub": "Contáctanos hoy — normalmente respondemos el mismo día hábil.",
  "contact.formTitle": "Pedir cotización",
  "contact.name": "Tu nombre",
  "contact.email": "Correo",
  "contact.phone": "Teléfono",
  "contact.eventType": "Tipo de evento",
  "contact.date": "Fecha del evento",
  "contact.guests": "Invitados aproximados",
  "contact.message": "Cuéntanos sobre tu evento",
  "contact.send": "Enviar solicitud",
  "contact.sent": "¡Gracias! Te contactaremos pronto.",
  "contact.hours": "Horario de oficina",
  "contact.hoursValue": "Lunes – Sábado • 2pm – 7pm",
  "contact.address": "Dirección",
  "contact.phoneLabel": "Teléfono",

  "footer.tag": "Tu celebración. Nuestro hermoso espacio.",
  "footer.rights": "Todos los derechos reservados.",
};

const dicts: Record<Lang, Dict> = { en, es };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored === "en" || stored === "es") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dicts[lang][k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

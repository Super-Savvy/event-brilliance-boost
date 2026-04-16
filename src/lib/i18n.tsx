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

  "footer.tag": "Your celebration. Our beautiful space. Mesquite's favorite ballroom for weddings, quinceañeras, birthdays and corporate gatherings.",
  "footer.rights": "All rights reserved.",
  "footer.menu": "Menu",
  "footer.services": "Services",
  "footer.contact": "Contact Us",
  "footer.follow": "Follow Us",
  "footer.newsletter": "Newsletter",
  "footer.newsletterSub": "Be the first to hear about open dates, seasonal specials and new packages.",
  "footer.emailPh": "Your email address",
  "footer.subscribe": "Subscribe",

  "strip.tag": "Trusted by 100+ Mesquite families since 2018",

  "intro.eyebrow": "About the Venue",
  "intro.title": "Mesquite Event Center is the area's most-loved ballroom",
  "intro.body":
    "Just minutes from downtown Dallas, our newly renovated ballroom blends warm hospitality with a polished, photo-ready space. Whether you're planning a fairytale quinceañera, a heartfelt wedding, or a corporate mixer, our team makes every detail effortless — from setup to send-off.",
  "intro.body2":
    "Spotless floors. Bright chandeliers. Late-night-ready. We treat your event like our own.",
  "intro.cta": "Read More",

  "intro2.eyebrow": "Why Couples & Families Choose Us",
  "intro2.title": "A celebration space that truly feels like yours",
  "intro2.body":
    "From intimate gatherings to 150-guest galas, our flexible floor plan, generous parking, and bilingual on-site team make hosting a breeze. We're proud to be the venue families come back to year after year.",

  "services.eyebrow": "What We Offer",
  "services.title": "Our Services",
  "services.sub": "Everything you need under one roof — book the space, we'll handle the details.",
  "services.s1.t": "Full Ballroom Rental",
  "services.s1.d": "Up to 150 guests, dance floor, stage area & elegant lighting included.",
  "services.s1.cta": "Learn More",
  "services.s2.t": "Weddings & Receptions",
  "services.s2.d": "A romantic, photo-ready setting for your big day — ceremony or reception.",
  "services.s3.t": "Quinceañeras & Sweet 16s",
  "services.s3.d": "Late-night-friendly with the wow factor your celebration deserves.",
  "services.s4.t": "Corporate & Banquets",
  "services.s4.d": "Professional setup for meetings, mixers, banquets and holiday parties.",
  "services.s5.t": "Decor & Setup Friendly",
  "services.s5.d": "Bring your own vendors or work with our trusted local partners.",
  "services.s6.t": "Bilingual Booking",
  "services.s6.d": "English & Spanish service from booking through event day.",

  "book.eyebrow": "Reserve Your Date",
  "book.title": "The Ballroom is Yours",
  "book.sub": "Tell us about your event and we'll get back to you the same business day.",
  "book.name": "Full Name",
  "book.phone": "Phone Number",
  "book.date": "Event Date",
  "book.guests": "Guests",
  "book.type": "Event Type",
  "book.submit": "Book a Tour",

  "testi.eyebrow": "Testimonials",
  "testi.title": "What People Say",

  "events2.eyebrow": "Don't Miss",
  "events2.title": "Upcoming Available Dates",
  "events2.sub": "These weekends are still open — first come, first reserved.",
  "events2.viewAll": "View Calendar",
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

  "footer.tag": "Tu celebración. Nuestro hermoso espacio. El salón favorito de Mesquite para bodas, quinceañeras, cumpleaños y eventos corporativos.",
  "footer.rights": "Todos los derechos reservados.",
  "footer.menu": "Menú",
  "footer.services": "Servicios",
  "footer.contact": "Contacto",
  "footer.follow": "Síguenos",
  "footer.newsletter": "Boletín",
  "footer.newsletterSub": "Entérate primero de fechas disponibles, ofertas y nuevos paquetes.",
  "footer.emailPh": "Tu correo electrónico",
  "footer.subscribe": "Suscribirme",

  "strip.tag": "Más de 100 familias de Mesquite confían en nosotros desde 2018",

  "intro.eyebrow": "Sobre el salón",
  "intro.title": "Mesquite Event Center es el salón más querido del área",
  "intro.body":
    "A minutos del centro de Dallas, nuestro salón recién renovado combina la hospitalidad cálida con un espacio elegante, listo para fotos. Sea una quinceañera de cuento, una boda íntima o un evento corporativo, nuestro equipo hace que cada detalle sea fácil.",
  "intro.body2":
    "Pisos impecables. Lámparas brillantes. Listo para celebrar hasta tarde. Tu evento lo tratamos como propio.",
  "intro.cta": "Leer más",

  "intro2.eyebrow": "Por qué nos eligen",
  "intro2.title": "Un espacio de celebración que se siente tuyo",
  "intro2.body":
    "Desde reuniones íntimas hasta galas de 150 invitados, nuestro plano flexible, amplio estacionamiento y equipo bilingüe en sitio hacen todo más fácil. Somos el salón al que las familias regresan año tras año.",

  "services.eyebrow": "Lo que ofrecemos",
  "services.title": "Nuestros Servicios",
  "services.sub": "Todo lo que necesitas en un solo lugar — reserva el espacio, nosotros nos encargamos.",
  "services.s1.t": "Renta completa del salón",
  "services.s1.d": "Hasta 150 invitados, pista de baile, escenario e iluminación elegante incluida.",
  "services.s1.cta": "Saber más",
  "services.s2.t": "Bodas y recepciones",
  "services.s2.d": "Un escenario romántico y listo para fotos en tu gran día.",
  "services.s3.t": "Quinceañeras y Sweet 16",
  "services.s3.d": "Hasta tarde y con el factor wow que tu celebración merece.",
  "services.s4.t": "Corporativo y banquetes",
  "services.s4.d": "Montaje profesional para juntas, banquetes y fiestas de fin de año.",
  "services.s5.t": "Decoración flexible",
  "services.s5.d": "Trae tus proveedores o trabaja con nuestros aliados locales de confianza.",
  "services.s6.t": "Reservas bilingües",
  "services.s6.d": "Atención en inglés y español desde la reserva hasta el evento.",

  "book.eyebrow": "Aparta tu fecha",
  "book.title": "El salón es tuyo",
  "book.sub": "Cuéntanos sobre tu evento y te respondemos el mismo día hábil.",
  "book.name": "Nombre completo",
  "book.phone": "Teléfono",
  "book.date": "Fecha del evento",
  "book.guests": "Invitados",
  "book.type": "Tipo de evento",
  "book.submit": "Agendar visita",

  "testi.eyebrow": "Testimonios",
  "testi.title": "Lo que dicen",

  "events2.eyebrow": "No te lo pierdas",
  "events2.title": "Próximas fechas disponibles",
  "events2.sub": "Estos fines de semana están abiertos — primero en llegar, primero en reservar.",
  "events2.viewAll": "Ver calendario",
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

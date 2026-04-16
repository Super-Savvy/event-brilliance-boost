import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Booking, Hours, Capacity | Mesquite Event Center" },
      {
        name: "description",
        content:
          "Answers to common questions about booking Mesquite Event Center: capacity, hours, parking, payments, decorations, and more.",
      },
      { property: "og:title", content: "FAQ | Mesquite Event Center" },
      { property: "og:description", content: "Booking, hours, capacity, payments and more." },
    ],
  }),
  component: FAQPage,
});

const FAQS = [
  {
    q: "How many guests can the venue hold?",
    a: "Our ballroom comfortably accommodates up to 150 guests with round tables and a dance floor.",
  },
  {
    q: "What are your office hours?",
    a: "Monday – Saturday, 2pm – 7pm. We typically return missed calls the same business day.",
  },
  {
    q: "Is there parking available?",
    a: "Yes — plenty of free on-site parking for you and your guests.",
  },
  {
    q: "Can events run past midnight?",
    a: "Absolutely. We're one of the few venues in the area that allows celebrations to continue past 12am.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, we offer convenient payment plans to make booking your event stress-free.",
  },
  {
    q: "Do you have Wi-Fi?",
    a: "A Wi-Fi QR code is provided to the contract holder upon request as part of your event package.",
  },
  {
    q: "Can we bring our own decorations and caterer?",
    a: "Yes — you're welcome to bring your own decorations and preferred caterer. We'll review the details in your contract.",
  },
  {
    q: "¿Hablan español?",
    a: "Sí — atendemos en inglés y español. Estamos para ayudarte en cada paso.",
  },
  {
    q: "How do I book a tour?",
    a: "Call us at (214) 699-9868 or send a quote request from our Contact page. We'll confirm your tour the same business day.",
  },
];

function FAQPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <div>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t("faq.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("faq.sub")}</p>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`i-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-lg">{f.q}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

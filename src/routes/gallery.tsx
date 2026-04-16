import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import partyLights from "@/assets/real-party-lights.jpg";
import holidayParty from "@/assets/real-holiday-party.jpg";
import sweetheart from "@/assets/real-sweetheart-table.jpg";
import quinceDress from "@/assets/real-quince-dress.jpg";
import aliceDecor from "@/assets/real-alice-decor.jpg";
import aliceCake from "@/assets/real-alice-cake.jpg";
import cookies from "@/assets/real-cookies-alice.jpg";
import treats from "@/assets/real-treats-pretzels.jpg";
import banquet from "@/assets/real-banquet-guests.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Real Events at Mesquite Event Center" },
      {
        name: "description",
        content:
          "Real photos from quinceañeras, weddings, birthdays, and themed parties hosted at Mesquite Event Center in Mesquite, TX.",
      },
      { property: "og:title", content: "Gallery | Mesquite Event Center" },
      { property: "og:description", content: "Real photos from real celebrations at our Mesquite ballroom." },
      { property: "og:image", content: sweetheart },
      { name: "twitter:image", content: sweetheart },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();
  const photos = [
    { src: sweetheart, alt: "Sweetheart table with pink florals", span: "md:col-span-2 md:row-span-2" },
    { src: quinceDress, alt: "Quinceañera in pink ball gown" },
    { src: partyLights, alt: "Ballroom with colorful uplighting and chandeliers" },
    { src: aliceCake, alt: "Alice in Wonderland themed cake and dessert table" },
    { src: holidayParty, alt: "Holiday-themed party with balloon arch", span: "md:col-span-2" },
    { src: aliceDecor, alt: "Themed party wall decorations" },
    { src: cookies, alt: "Custom decorated cookies" },
    { src: treats, alt: "Themed dessert details" },
    { src: banquet, alt: "Guests enjoying a banquet event", span: "md:col-span-2" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t("gallery.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("gallery.sub")}</p>
      </div>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {photos.map((p, i) => (
          <div key={i} className={`group overflow-hidden rounded-2xl shadow-soft ${p.span ?? ""}`}>
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

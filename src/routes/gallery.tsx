import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import hero from "@/assets/hero-ballroom.jpg";
import wedding from "@/assets/event-wedding.jpg";
import quince from "@/assets/event-quince.jpg";
import birthday from "@/assets/event-birthday.jpg";
import corporate from "@/assets/event-corporate.jpg";
import baptism from "@/assets/event-baptism.jpg";
import sweet16 from "@/assets/event-sweet16.jpg";
import empty from "@/assets/gallery-empty.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Photos of Our Ballroom | Mesquite Event Center" },
      {
        name: "description",
        content:
          "See photos of weddings, quinceañeras, birthdays and more at Mesquite Event Center — a beautiful event venue in Mesquite, TX.",
      },
      { property: "og:title", content: "Gallery | Mesquite Event Center" },
      { property: "og:description", content: "Photos of our beautiful Mesquite ballroom in action." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useI18n();
  const photos = [
    { src: hero, alt: "Ballroom set with round tables and chandeliers", span: "md:col-span-2 md:row-span-2" },
    { src: quince, alt: "Quinceañera setup with pink and gold balloon arch" },
    { src: wedding, alt: "Wedding reception with floral centerpieces" },
    { src: sweet16, alt: "Sweet 16 with balloon backdrop" },
    { src: birthday, alt: "Birthday party with colorful balloons" },
    { src: empty, alt: "Empty ballroom ready to be decorated", span: "md:col-span-2" },
    { src: baptism, alt: "Baptism table setting" },
    { src: corporate, alt: "Corporate banquet seating" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t("gallery.title")}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{t("gallery.sub")}</p>
      </div>

      <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {photos.map((p, i) => (
          <div
            key={i}
            className={`group overflow-hidden rounded-2xl shadow-soft ${p.span ?? ""}`}
          >
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

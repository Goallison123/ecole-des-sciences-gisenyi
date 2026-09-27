import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";
export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({ meta: [{ title: `Gallery · ${school.name}` }] }),
});
const moments = [
  "Learning together",
  "Science in practice",
  "Student activities",
  "Campus community",
  "Arts and creativity",
  "Sport and teamwork",
];
function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="School life"
        title="Gallery"
        description="A glimpse of the learning, friendships, and activities that make up school life at ESG."
      />
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((title, index) => (
            <article
              key={title}
              className="overflow-hidden rounded-xl border border-border bg-surface shadow-card"
            >
              <div
                className={`flex aspect-[4/3] items-center justify-center ${index % 3 === 0 ? "bg-mint" : index % 3 === 1 ? "bg-[#edf2e8]" : "bg-[#e8f0f2]"}`}
              >
                <div className="text-center text-primary/70">
                  <Camera className="mx-auto h-9 w-9" />
                  <p className="mt-2 text-xs">School photo</p>
                </div>
              </div>
              <h2 className="px-5 py-4 font-display text-xl font-semibold text-ink">
                {title}
              </h2>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-sm text-muted">
          Official photographs can be added here by the school. Student images should
          only be published with appropriate consent.
        </p>
      </section>
    </main>
  );
}

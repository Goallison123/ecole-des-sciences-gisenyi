import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { clubs, school } from "@/lib/site";

export const Route = createFileRoute("/school-life")({
  component: SchoolLifePage,
  head: () => ({
    meta: [{ title: `School life · ${school.name}` }],
  }),
});

const days = [
  {
    time: "07:30",
    title: "Arrival & quiet start",
    text: "Gardens open, libraries lit, a calm beginning before the first bell.",
  },
  {
    time: "08:00",
    title: "Morning lessons",
    text: "Languages, mathematics, and the sciences when attention is at its strongest.",
  },
  {
    time: "12:30",
    title: "Lunch & courtyard",
    text: "A shared table, then sport, conversation, and time outdoors.",
  },
  {
    time: "14:00",
    title: "Studios & laboratories",
    text: "Practical work, arts, clubs, and the projects that take patience.",
  },
  {
    time: "16:30",
    title: "Study hall & departure",
    text: "Supported study for those who stay; a measured end to the day.",
  },
];

function SchoolLifePage() {
  return (
    <main>
      <PageHero
        eyebrow="School life"
        title="A campus that is lived, not only attended"
        description="Lessons matter. So do the hours around them: sport, music, service, and the ordinary kindness of a well-held school day."
      />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          <img
            src="/images/courtyard.svg"
            alt="Courtyard and sports court on the school campus"
            className="h-72 w-full rounded-xl object-cover shadow-soft md:h-full"
          />
          <img
            src="/images/lake.svg"
            alt="Lake Kivu near Gisenyi, where field weeks take place"
            className="h-72 w-full rounded-xl object-cover shadow-soft"
          />
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {[
            {
              to: "/gallery",
              title: "Gallery",
              text: "See moments from learning, activities, and campus life.",
            },
            {
              to: "/dormitory",
              title: "Dormitory",
              text: "Learn about boarding routines and preparing for residential life.",
            },
            {
              to: "/parent-visits",
              title: "Parent visits",
              text: "Find out how to arrange a family visit or meeting.",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-primary"
            >
              <h2 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Clubs & houses</Eyebrow>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-ink">
            Interests given time, tools, and a teacher who cares
          </h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <li
                key={club.title}
                className="rounded-xl border border-border bg-background px-6 py-7"
              >
                <h3 className="font-sans text-base font-semibold text-ink">
                  {club.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{club.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>A typical day</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Rhythm, not rush
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Days are structured so that serious work and recovery can coexist. Younger
              children have more play and movement; lycée students receive longer blocks
              for laboratory and research.
            </p>
            <Button
              asChild
              className="mt-8"
              variant="outline"
            >
              <Link to="/news">
                See school news
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ol className="space-y-0 divide-y divide-border rounded-xl border border-border bg-surface">
            {days.map((slot) => (
              <li
                key={slot.time}
                className="grid grid-cols-[5.5rem_1fr] gap-4 px-5 py-5"
              >
                <p className="font-medium tabular-nums text-accent">{slot.time}</p>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-ink">
                    {slot.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{slot.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mint/60 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <img
            src="/images/campus.svg"
            alt="A learning space on the school campus"
            className="w-full rounded-xl object-cover shadow-soft"
          />
          <div>
            <Eyebrow>Pastoral care</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Every student known
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Tutors follow a small group through the year. We notice effort, not only
              results; we intervene early when a student is struggling; we celebrate
              work that is honest. Parents are partners — not spectators.
            </p>
            <Button
              asChild
              className="mt-8"
            >
              <Link to="/contact">
                Speak with the school
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

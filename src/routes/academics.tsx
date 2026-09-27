import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, Monitor, PencilRuler } from "lucide-react";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";

export const Route = createFileRoute("/academics")({
  component: AcademicsPage,
  head: () => ({ meta: [{ title: `Academics · ${school.name}` }] }),
});

const resources = [
  {
    to: "/academic-calendar",
    title: "Academic calendar",
    text: "Term dates, examinations, and key school events.",
    icon: CalendarDays,
  },
  {
    to: "/library",
    title: "Library",
    text: "Reading, reference materials, and a quiet place to learn.",
    icon: BookOpen,
  },
  {
    to: "/ict-rooms",
    title: "ICT rooms",
    text: "Digital learning spaces that support research and practical skills.",
    icon: Monitor,
  },
  {
    to: "/self-study",
    title: "Self-study (étude)",
    text: "Structured independent study and supported revision routines.",
    icon: PencilRuler,
  },
];

function AcademicsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Academics"
        title="A focused culture of learning"
        description="Explore the resources and routines that support learning across O’Level and A Level at École des Sciences de Gisenyi."
      />
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {resources.map(({ to, title, text, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-xl border border-border bg-surface p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Explore{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-mint/60 px-5 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Our levels</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            Learning pathways
          </h2>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              className="rounded-pill border border-border bg-surface px-5 py-2.5 text-sm font-medium text-primary hover:bg-mint"
              to="/o-level"
            >
              O’Level
            </Link>
            <Link
              className="rounded-pill border border-border bg-surface px-5 py-2.5 text-sm font-medium text-primary hover:bg-mint"
              to="/a-level"
            >
              A Level
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

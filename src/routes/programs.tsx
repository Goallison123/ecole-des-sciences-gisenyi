import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CircleIcon } from "@/components/home/icons";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { programs, school } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  component: ProgramsPage,
  head: () => ({
    meta: [{ title: `Programs · ${school.name}` }],
  }),
});

const images: Record<string, string> = {
  preschool: "/images/preschool.jpg",
  primary: "/images/library.jpg",
  middle: "/images/lab.jpg",
  high: "/images/campus.jpg",
  baccalaureate: "/images/library.jpg",
};

function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our programs"
        title="From preschool to the baccalaureate"
        description="A complete path, adapted to every stage of school life — with science, languages, and character held to the same standard."
      />

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="rounded-pill border border-border bg-surface px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              {program.title}
            </a>
          ))}
        </div>
      </section>

      <div className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-20">
          {programs.map((program, index) => (
            <article
              key={program.id}
              id={program.id}
              className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2"
            >
              <img
                src={images[program.id]}
                alt=""
                className={`min-h-64 w-full rounded-xl object-cover shadow-soft ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <CircleIcon
                  name={program.icon}
                  className="h-14 w-14"
                  iconClassName="h-6 w-6"
                />
                <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
                  {program.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-accent">
                  {program.ages} · {program.duration}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {program.intro}
                </p>
                <ul className="mt-5 space-y-2">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-pill bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl rounded-cta bg-mint px-6 py-14 text-center md:px-16">
          <Eyebrow>Admissions</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink">
            Find the right year for your child
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Write to us with the year of entry you have in mind. We will guide you through
            visits, assessments, and the first day of school.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">
              Start an application
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

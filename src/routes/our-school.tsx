import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { leadership, school, stats, values } from "@/lib/site";
import { CircleIcon } from "@/components/home/icons";

export const Route = createFileRoute("/our-school")({
  component: OurSchoolPage,
  head: () => ({
    meta: [{ title: `Our school · ${school.name}` }],
  }),
});

function OurSchoolPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our school"
        title="A house of science on the shores of Lake Kivu"
        description="École des Sciences de Gisenyi is a complete school of excellence — from the first years of preschool to the baccalaureate — rooted in Gisenyi and open to the world."
      />

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src="/images/campus.jpg"
            alt="Campus buildings and gardens of École des Sciences de Gisenyi"
            className="h-full min-h-72 w-full rounded-xl object-cover shadow-soft"
          />
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Founded for the talents of this region
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                ESG was founded so that children in Gisenyi and across Rubavu could
                receive a scientific education of the highest demand without leaving the
                lake, the hills, and the language of home.
              </p>
              <p>
                We teach as a community: teachers who know their students, families who
                are partners, and a campus designed for attention — laboratories, gardens,
                a library, and quiet rooms for work.
              </p>
              <p>
                Our motto is a daily instruction. To know is not enough. To innovate
                without character is not enough. We form students who will build tomorrow
                with both competence and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-8 md:py-20">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-xl border border-border bg-background px-5 py-8 text-center"
            >
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Mission</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            Forming minds that can be trusted
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            We cultivate excellence, respect, innovation, and engagement so that every
            student can think clearly, act honourably, and serve the place they come from.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li
              key={value.id}
              className="rounded-xl border border-border bg-surface px-6 py-8 text-center shadow-card"
            >
              <CircleIcon
                name={value.icon}
                className="h-16 w-16"
                iconClassName="h-7 w-7"
              />
              <h3 className="mt-4 font-sans text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-mint/50 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              A team that holds the school
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {leadership.map((person) => (
              <li
                key={person.name}
                className="rounded-xl bg-surface px-6 py-8 shadow-card"
              >
                <h3 className="font-sans text-lg font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Campus</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Laboratories, gardens, and a view of the lake
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The campus sits above Gisenyi with rooms for science, a library that stays
              quiet, courtyards for sport, and gardens used as outdoor classrooms. It is a
              place designed for attention — and for belonging.
            </p>
            <Button asChild className="mt-8">
              <Link to="/contact">
                Visit the school
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <img
            src="/images/library.jpg"
            alt="The school library with wooden shelves and reading tables"
            className="w-full rounded-xl object-cover shadow-soft"
          />
        </div>
      </section>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CircleIcon } from "@/components/home/icons";
import { Eyebrow } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { programs, school, values } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <Levels />
      <JoinCta />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 bottom-[-6rem] h-[34rem] w-[34rem] rounded-pill bg-blob"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-24 h-[32rem] w-[32rem] rounded-pill bg-blob"
      />

      <div className="hero-enter relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="inline-flex rounded-pill bg-mint px-5 py-1.5 text-sm font-medium text-accent">
          Welcome to
        </span>
        <h1 className="mt-7 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {school.name}
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          {school.tagline}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button asChild>
            <Link to="/our-school">
              Discover our school
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
          >
            <Link to="/programs">Our levels</Link>
          </Button>
        </div>
        <a
          href="#values"
          className="mt-20 flex flex-col items-center gap-1 text-accent"
          aria-label="Scroll to our values"
        >
          <span className="relative flex h-9 w-6 items-start justify-center rounded-pill border-2 border-accent/70 pt-1.5">
            <span className="mouse-wheel h-1.5 w-1 rounded-pill bg-accent" />
          </span>
          <ChevronDown
            className="h-4 w-4"
            strokeWidth={2}
          />
        </a>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section
      id="values"
      className="scroll-mt-8 bg-surface px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Our values</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          More than a school, a community
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
          At École des Sciences de Gisenyi, we cultivate excellence, respect,
          innovation, and engagement to build a better future.
        </p>
      </div>
      <ul className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <li
            key={value.id}
            className="flex flex-col items-center px-4 text-center"
          >
            <CircleIcon name={value.icon} />
            <h3 className="mt-6 font-sans text-lg font-semibold text-ink">
              {value.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {value.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Levels() {
  return (
    <section
      id="programs"
      className="scroll-mt-8 bg-gradient-to-b from-mint/80 to-background px-5 py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Our levels</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
          O’Level and A Level
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Focused secondary education in science, mathematics, languages, and research.
        </p>
      </div>
      <ul className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
        {programs.map((program) => (
          <li key={program.id}>
            <Link
              to="/programs"
              hash={program.id}
              className="flex h-full flex-col items-center rounded-xl border border-border/80 bg-surface px-5 py-8 text-center shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-soft"
            >
              <CircleIcon
                name={program.icon}
                className="h-12 w-12 bg-transparent"
                iconClassName="h-7 w-7"
              />
              <h3 className="mt-4 font-sans text-base font-semibold text-ink">
                {program.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {program.summary}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function JoinCta() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-cta bg-gradient-to-b from-mint to-mint/40 px-6 py-12 text-center md:px-20 md:py-16">
        <Eyebrow>Ready to join us?</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-semibold text-ink md:text-4xl">
          Let’s give meaning to your future, together
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          Discover our school, academic levels, and values. We are here to support you.
        </p>
        <Button
          asChild
          className="mt-8"
        >
          <Link to="/contact">
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";

export type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; text: string }[];
  links?: { to: string; label: string }[];
};

export function InfoPage({
  eyebrow,
  title,
  description,
  sections,
  links = [],
}: InfoPageProps) {
  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-xl border border-border bg-surface p-7 shadow-card"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{section.text}</p>
            </article>
          ))}
        </div>
        {links.length ? (
          <nav
            aria-label="Related pages"
            className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-3"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-2 rounded-pill border border-border bg-background px-4 py-2.5 text-sm font-medium text-primary hover:bg-mint"
              >
                {link.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </nav>
        ) : null}
        <p className="mx-auto mt-10 max-w-6xl text-xs leading-relaxed text-muted">
          For current schedules, services, and availability, please confirm details with{" "}
          {school.name}.
        </p>
      </section>
    </main>
  );
}

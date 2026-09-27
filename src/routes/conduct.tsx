import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { school } from "@/lib/site";

export const Route = createFileRoute("/conduct")({
  component: ConductPage,
  head: () => ({ meta: [{ title: `Conduct and discipline · ${school.name}` }] }),
});

const principles = [
  [
    "Respect",
    "Treat students, staff, families, and school property with consideration.",
  ],
  [
    "Responsibility",
    "Attend regularly, arrive prepared, and take ownership of learning and choices.",
  ],
  ["Integrity", "Be honest in classwork, examinations, and relationships."],
  ["Safety", "Do not bully, harass, threaten, or put another person at risk."],
];

function ConductPage() {
  return (
    <main>
      <PageHero
        eyebrow="Conduct & discipline"
        title="A respectful community helps everyone learn"
        description="ESG expects students to act with respect, honesty, responsibility, and care. Clear expectations protect a safe environment where students can focus and thrive."
      />
      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {principles.map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-surface px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <article className="rounded-xl bg-mint/70 p-7">
            <HeartHandshake className="h-7 w-7 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
              Fair and supportive response
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Concerns should be raised promptly with a teacher, tutor, or school
              leader. The school should listen to those involved, consider the
              circumstances, and work with families where appropriate. Serious or
              repeated incidents may lead to formal school action under the current
              student rules.
            </p>
          </article>
          <article className="rounded-xl border border-border bg-background p-7">
            <ShieldCheck className="h-7 w-7 text-accent" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
              Admission declaration
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Transfer applicants are asked to confirm their disciplinary history
              honestly. Disclose any past or pending measures so the school can review
              the application fairly. Contact admissions if you need guidance about
              required records.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-5"
            >
              <Link to="/students">
                See admission procedures
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </article>
        </div>
        <p className="mx-auto mt-8 max-w-6xl text-xs leading-relaxed text-muted">
          For the official code of conduct, reporting channels, and applicable measures,
          families should request the current student handbook from the school. This
          page is an overview and does not replace the official rules.
        </p>
      </section>
    </main>
  );
}

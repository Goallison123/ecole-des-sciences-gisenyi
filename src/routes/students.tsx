import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow, PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { school } from "@/lib/site";

export const Route = createFileRoute("/students")({
  component: StudentsPage,
  head: () => ({ meta: [{ title: `Student admissions · ${school.name}` }] }),
});

const allocatedSteps = [
  "Confirm your NESA allocation to ESG (including P6 and S3 award or selection placements).",
  "Pay the required school fees; contact the school if you need payment guidance.",
  "Obtain the school uniform, or contact the school to arrange help getting it.",
  "Prepare personal hygiene items, bedding, and storage/luggage such as a valise.",
  "Download, complete, and sign the Student Identification / Registration PDF.",
  "Attach a recent passport-size photograph and bring the required documents when instructed.",
];

const transferSteps = [
  "Show a result of at least 70 in the previous term (bring the official report card).",
  "Sit and pass the school entrance examination; the admissions office will advise on scheduling.",
  "Complete the Previous School Information PDF with the school’s name and contact details.",
  "Confirm that the student has no disciplinary measures or unresolved disciplinary cases at the previous school.",
  "After acceptance, follow the same fee, uniform, personal supplies, identification form, and passport-photo steps as other new entrants.",
];

function StudentsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleDownload() {
    downloadForm("/student-identification-form.pdf", "student-identification-form.pdf");
  }

  function handlePreviousSchoolDownload() {
    downloadForm(
      "/previous-school-information-form.pdf",
      "previous-school-information-form.pdf",
    );
  }

  function downloadForm(href: string, filename: string) {
    const link = document.createElement("a");
    link.href = href;
    link.download = filename;
    link.click();
  }

  return (
    <main>
      <PageHero
        eyebrow="For students and families"
        title="Your next steps at ESG"
        description="Whether NESA has allocated you to ESG or you are applying from another school, use the procedures below to prepare for admission. Contact the school to confirm current fees, dates, and required originals."
      />

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <AdmissionCard
            number="01"
            title="NESA-allocated students"
            intro="For students allocated by NESA, including P6 and S3 winners or selected candidates."
            steps={allocatedSteps}
          />
          <AdmissionCard
            number="02"
            title="Students transferring from another school"
            intro="For applicants seeking admission to ESG from another school. Admission is subject to results, examination, and school review."
            steps={transferSteps}
          />
        </div>
      </section>

      <section className="bg-surface px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Get ready</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
              Student identification form
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Download and complete the student identification form. Bring it with a
              recent passport photograph and supporting records when you meet the
              admissions office. The checklist below only helps you prepare; it does not
              submit or store an application.
            </p>
            <button
              type="button"
              onClick={handleDownload}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-mint"
            >
              <Download className="h-4 w-4" />
              Download registration form
            </button>
            <button
              type="button"
              onClick={handlePreviousSchoolDownload}
              className="mt-3 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-mint"
            >
              <Download className="h-4 w-4" />
              Download previous school information form
            </button>
            <div className="mt-6 rounded-xl bg-mint/70 p-5">
              <div className="flex items-start gap-3">
                <FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-foreground/80">
                  Keep copies of your NESA allocation or previous term results, identity
                  documents, and any requested transfer records.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-background p-6 shadow-card md:p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-ink">
              Admission document checklist
            </h3>
            <p className="mt-2 text-sm text-muted">
              Use this checklist to prepare your visit. Files are not uploaded or saved
              on this website.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-foreground">
                Student full name
                <input
                  name="studentName"
                  autoComplete="name"
                  className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2.5"
                />
              </label>
              <label className="text-sm font-medium text-foreground">
                Admission pathway
                <select
                  name="pathway"
                  className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2.5"
                >
                  <option value="">Choose pathway</option>
                  <option>NESA allocation</option>
                  <option>Transfer from another school</option>
                </select>
              </label>
              <label className="text-sm font-medium text-foreground sm:col-span-2">
                Passport photograph (for your own checklist)
                <input
                  type="file"
                  name="passportPhoto"
                  accept="image/*"
                  className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
                />
              </label>
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
              <input
                type="checkbox"
                className="mt-1 accent-primary"
              />
              I have noted the relevant admission steps and will contact the school to
              confirm current requirements before submitting documents.
            </label>
            <Button
              type="submit"
              className="mt-6"
            >
              Mark checklist complete
            </Button>
            {submitted ? (
              <p
                role="status"
                className="mt-4 text-sm font-medium text-accent"
              >
                Checklist completed in this browser session. No information or image was
                sent to the school.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-cta bg-mint px-6 py-10 md:flex-row md:items-center md:px-12">
          <div>
            <Eyebrow>Questions?</Eyebrow>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              Confirm your admission requirements
            </h2>
            <p className="mt-2 text-sm text-muted">
              Dates, fees, and document requirements can change. Please confirm directly
              with the school.
            </p>
          </div>
          <Button asChild>
            <Link to="/contact">
              Contact admissions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function AdmissionCard({
  number,
  title,
  intro,
  steps,
}: {
  number: string;
  title: string;
  intro: string;
  steps: string[];
}) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
      <p className="text-sm font-semibold tracking-widest text-accent">
        {number} / ADMISSIONS
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{intro}</p>
      <ol className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex gap-3 text-sm leading-relaxed text-foreground/85"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-mint text-xs font-semibold text-primary">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs leading-relaxed text-muted">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> Final admission and
        placement are confirmed by the school.
      </p>
    </article>
  );
}

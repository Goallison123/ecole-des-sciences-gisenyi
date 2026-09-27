import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [{ title: `Privacy policy · ${school.name}` }],
  }),
});

function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        description="How the school treats personal information sent through this website."
      />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-20 text-base leading-relaxed text-muted md:px-8 md:pb-28">
        <p>
          École des Sciences de Gisenyi collects only what is needed to answer you and to
          administer school life. We do not sell personal data.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">What we collect</h2>
        <p>
          The contact form asks for your name, email, optional phone number, your
          relationship to the school, a subject, and a message. These details are used to
          reply to your enquiry and, where relevant, to open an admissions conversation.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">
          How long we keep it
        </h2>
        <p>
          Enquiries are kept for as long as needed to complete the conversation and any
          related admissions file, then archived or deleted according to the school’s
          record policy.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Your rights</h2>
        <p>
          You may ask to access, correct, or delete personal information we hold about
          you, subject to legal duties that require us to keep certain education records.
          Write to {school.email}.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Children</h2>
        <p>
          This public website does not create student accounts. Information about pupils
          is processed through official school channels, with parents or guardians
          involved as required.
        </p>
      </article>
    </main>
  );
}

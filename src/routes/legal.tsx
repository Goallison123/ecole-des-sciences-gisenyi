import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
  head: () => ({
    meta: [{ title: `Legal notice · ${school.name}` }],
  }),
});

function LegalPage() {
  return (
    <main>
      <PageHero eyebrow="Legal notice" title="Legal information" />
      <article className="mx-auto max-w-3xl space-y-6 px-5 pb-20 text-base leading-relaxed text-muted md:px-8 md:pb-28">
        <p>
          This website is published by École des Sciences de Gisenyi, an educational
          institution located in Gisenyi, Rwanda. It is provided for information about the
          school, its programmes, and its community.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Publisher</h2>
        <p>
          {school.name}
          <br />
          {school.city}
          <br />
          {school.email} · {school.phone}
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Content</h2>
        <p>
          Photographs, texts, and the botanical mark of the school are protected. They may
          not be reproduced without prior written permission, except for short quotations
          with clear attribution.
        </p>
        <h2 className="font-display text-2xl font-semibold text-ink">Liability</h2>
        <p>
          We take care to keep information accurate. Programmes, calendars, and admissions
          procedures may change; the secretariat remains the authority for official
          confirmation. External links are offered for convenience and do not imply
          endorsement.
        </p>
      </article>
    </main>
  );
}

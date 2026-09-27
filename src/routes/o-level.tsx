import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/o-level")({
  component: OLevelPage,
  head: () => ({ meta: [{ title: `O’Level · ${school.name}` }] }),
});
function OLevelPage() {
  return (
    <InfoPage
      eyebrow="Levels"
      title="O’Level"
      description="A strong lower-secondary foundation helps students develop knowledge, learning habits, and confidence across subject areas."
      sections={[
        {
          title: "Broad foundations",
          text: "O’Level study builds knowledge across mathematics, sciences, languages, and other curriculum areas taught at the school.",
        },
        {
          title: "Practical learning",
          text: "Students strengthen understanding through class activities, exercises, discussion, and practical work where available.",
        },
        {
          title: "Next steps",
          text: "Teachers guide learners as they progress and prepare for the transition to advanced-level study. Placement and subject choices follow school and national requirements.",
        },
      ]}
      links={[
        { to: "/a-level", label: "Explore A Level" },
        { to: "/students", label: "Admission procedures" },
      ]}
    />
  );
}

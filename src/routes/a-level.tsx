import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/a-level")({
  component: ALevelPage,
  head: () => ({ meta: [{ title: `A Level · ${school.name}` }] }),
});
function ALevelPage() {
  return (
    <InfoPage
      eyebrow="Levels"
      title="A Level"
      description="Advanced-level study gives students an opportunity to specialise, deepen subject knowledge, and prepare for further education and future careers."
      sections={[
        {
          title: "Focused subject study",
          text: "Students follow the subject combinations offered by the school and applicable national curriculum. Contact the school for current combinations and entry requirements.",
        },
        {
          title: "Independent inquiry",
          text: "Practical investigations, academic reading, and self-directed study help students develop precision, persistence, and critical thinking.",
        },
        {
          title: "Preparing for what follows",
          text: "Teachers and school staff support examination preparation and discussions about future study options. Dates and guidance are shared through official school channels.",
        },
      ]}
      links={[
        { to: "/o-level", label: "Explore O’Level" },
        { to: "/students", label: "Admission procedures" },
      ]}
    />
  );
}

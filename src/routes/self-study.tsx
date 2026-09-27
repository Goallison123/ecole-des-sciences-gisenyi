import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/self-study")({
  component: SelfStudyPage,
  head: () => ({ meta: [{ title: `Self-study (étude) · ${school.name}` }] }),
});
function SelfStudyPage() {
  return (
    <InfoPage
      eyebrow="Academics"
      title="Self-study (étude)"
      description="Independent study gives every learner time to consolidate classwork, practise skills, and prepare thoughtfully."
      sections={[
        {
          title: "A useful routine",
          text: "Set a clear goal for each study period, organise notes and materials, work in focused blocks, and leave time to review what you have learned.",
        },
        {
          title: "Ask for support",
          text: "Self-study is not studying alone. Students can note questions and seek clarification from teachers during the school’s designated support times.",
        },
        {
          title: "A calm shared space",
          text: "Respect quiet study expectations, arrive ready to work, and use devices only for the task at hand.",
        },
      ]}
    />
  );
}

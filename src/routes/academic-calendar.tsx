import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/academic-calendar")({
  component: CalendarPage,
  head: () => ({ meta: [{ title: `Academic calendar · ${school.name}` }] }),
});
function CalendarPage() {
  return (
    <InfoPage
      eyebrow="Academics"
      title="Academic calendar"
      description="Keep track of term rhythms, examinations, and important school activities."
      sections={[
        {
          title: "Term dates",
          text: "The school publishes official opening, closing, and holiday dates through its administration. Contact the school for the current academic-year calendar.",
        },
        {
          title: "Assessments and examinations",
          text: "Assessment periods are communicated to students and families by the school. Students should check class notices and teacher guidance for confirmed dates.",
        },
        {
          title: "School events",
          text: "Meetings, academic events, and school activities may be updated during the year. Confirm event details directly before making travel arrangements.",
        },
      ]}
    />
  );
}

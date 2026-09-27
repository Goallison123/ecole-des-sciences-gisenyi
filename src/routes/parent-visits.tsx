import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/parent-visits")({
  component: ParentVisitsPage,
  head: () => ({ meta: [{ title: `Parent visits · ${school.name}` }] }),
});
function ParentVisitsPage() {
  return (
    <InfoPage
      eyebrow="School life"
      title="Parent visits"
      description="Families are important partners in students’ learning and wellbeing. Visits are arranged to support a constructive connection between home and school."
      sections={[
        {
          title: "Arrange a visit",
          text: "Please contact the school office in advance to request a meeting or campus visit. This helps staff confirm availability and follow visitor procedures.",
        },
        {
          title: "Meet with teachers",
          text: "Families can raise academic, pastoral, or practical questions through the appropriate teacher or school contact. Bring any relevant student information to help the discussion.",
        },
        {
          title: "Visitor guidance",
          text: "All visitors should check in with the school office, follow campus directions, and respect student privacy and learning activities.",
        },
      ]}
    />
  );
}

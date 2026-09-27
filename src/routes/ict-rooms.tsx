import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/ict-rooms")({
  component: IctPage,
  head: () => ({ meta: [{ title: `ICT rooms · ${school.name}` }] }),
});
function IctPage() {
  return (
    <InfoPage
      eyebrow="Academics"
      title="ICT rooms"
      description="Digital tools and practical computing support research, communication, and modern scientific learning."
      sections={[
        {
          title: "Learn by doing",
          text: "ICT learning combines guided instruction with practical tasks. Follow teacher directions when using devices, software, and shared equipment.",
        },
        {
          title: "Responsible technology",
          text: "Use school technology for learning, protect account details, respect others online, and ask a teacher before installing or changing anything.",
        },
        {
          title: "Room access",
          text: "Room timetables and supervised access are coordinated by the school. Ask a teacher or the administration about current arrangements.",
        },
      ]}
    />
  );
}

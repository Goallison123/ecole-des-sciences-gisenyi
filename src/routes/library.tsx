import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/library")({
  component: LibraryPage,
  head: () => ({ meta: [{ title: `Library · ${school.name}` }] }),
});
function LibraryPage() {
  return (
    <InfoPage
      eyebrow="Academics"
      title="Library"
      description="A welcoming space for reading, research, and quiet concentration."
      sections={[
        {
          title: "Read widely",
          text: "The library supports classroom learning and independent reading. Students should ask staff for help locating relevant books and reference resources.",
        },
        {
          title: "Study with care",
          text: "Help keep the library calm and welcoming: handle books carefully, return materials as directed, and respect other readers.",
        },
        {
          title: "Access and opening times",
          text: "Library schedules and borrowing arrangements are set by the school. Check with the library or school office for current availability.",
        },
      ]}
    />
  );
}

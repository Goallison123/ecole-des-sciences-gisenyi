import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BedDouble, PackageCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoPage } from "@/components/layout/info-page";
import { school } from "@/lib/site";
export const Route = createFileRoute("/dormitory")({
  component: DormitoryPage,
  head: () => ({ meta: [{ title: `Dormitory · ${school.name}` }] }),
});
function DormitoryPage() {
  return (
    <>
      <InfoPage
        eyebrow="School life"
        title="Dormitory"
        description="Boarding-school life is built around study, wellbeing, shared responsibility, and a safe place to rest."
        sections={[
          {
            title: "Daily routine",
            text: "Boarding students follow a supervised routine for study, meals, rest, and school activities. Confirm the current schedule and boarding arrangements with the school.",
          },
          {
            title: "Personal essentials",
            text: "Families should confirm the approved list before packing. Typical needs include personal hygiene items, bedding, and secure storage or a valise.",
          },
          {
            title: "Care and safety",
            text: "Students are expected to respect shared spaces and follow dormitory rules. Speak with the school about supervision, health needs, and safeguarding procedures.",
          },
        ]}
      />
      <section className="bg-mint/60 px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {[
            [BedDouble, "Rest and routine"],
            [PackageCheck, "Prepare essentials"],
            [Shield, "Safety and care"],
          ].map(([Icon, label]) => {
            const CardIcon = Icon as typeof BedDouble;
            return (
              <div
                key={label as string}
                className="flex items-center gap-3 rounded-xl bg-surface p-5"
              >
                <CardIcon className="h-6 w-6 text-accent" />
                <p className="font-medium text-ink">{label as string}</p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-8 max-w-6xl">
          <Button
            asChild
            variant="outline"
          >
            <Link to="/students">
              Student admission checklist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

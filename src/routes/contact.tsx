import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/layout/page-hero";
import { school } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: `Contact · ${school.name}` }],
  }),
});

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: school.city,
    href: "https://www.openstreetmap.org/?mlat=-1.70&mlon=29.26#map=13/-1.70/29.26",
  },
  { icon: Phone, label: "Phone", value: school.phone, href: school.phoneHref },
  { icon: Mail, label: "Email", value: school.email, href: school.emailHref },
];

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="We are here to support you"
        description="Questions about admissions, a visit to campus, or school life — write to the secretariat and we will reply with care."
      />

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <ul className="space-y-3">
              {details.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-start gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-colors hover:border-primary"
                  >
                    <item.icon className="mt-0.5 h-5 w-5 text-accent" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-eyebrow text-muted">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-foreground">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Map of Gisenyi, Rwanda"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=29.20%2C-1.74%2C29.32%2C-1.64&layer=mapnik&marker=-1.70%2C29.26"
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              Secretariat hours: Monday to Friday, 8:00–16:30.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 shadow-card md:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">Write to us</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Tell us who you are and how we can help. Fields marked as required must be
              completed.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

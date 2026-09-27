import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-border bg-mint/60 px-6 py-10 text-center">
        <h3 className="font-display text-2xl font-semibold text-ink">Message received</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Thank you. The school secretariat will reply as soon as possible, usually within
          two working days.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSent(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+250 …"
          />
        </Field>
        <Field label="I am a" htmlFor="role">
          <select
            id="role"
            name="role"
            required
            className="flex h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>
              Please select
            </option>
            <option value="parent">Parent / guardian</option>
            <option value="student">Prospective student</option>
            <option value="staff">Teacher or staff</option>
            <option value="other">Other</option>
          </select>
        </Field>
      </div>
      <Field label="Subject" htmlFor="subject">
        <Input
          id="subject"
          name="subject"
          required
          placeholder="Admissions, visit, programmes…"
        />
      </Field>
      <Field label="Message" htmlFor="message">
        <Textarea id="message" name="message" required placeholder="How can we help?" />
      </Field>
      <Button type="submit" className="w-full sm:w-auto">
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

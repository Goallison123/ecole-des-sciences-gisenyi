import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-eyebrow text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-8">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-pill bg-blob" />
      <div className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 rounded-pill bg-blob" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
        <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}

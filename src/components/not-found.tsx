import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        This page does not exist, or the link may have changed. Return to the homepage
        to keep exploring the school.
      </p>
      <Button
        asChild
        className="mt-8"
      >
        <Link to="/">Back to home</Link>
      </Button>
    </main>
  );
}

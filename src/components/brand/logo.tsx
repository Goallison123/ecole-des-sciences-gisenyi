import { Link } from "@tanstack/react-router";
import { school } from "@/lib/site";
import { cn } from "@/lib/utils";

function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("text-accent", className)}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M32 4c-1.4 9.8-3.2 20.6-1 34.2-2.2 1.4-4.4 2.3-6.8 2.8 4.6 1.8 10 1.8 14.6 0-2.4-.5-4.6-1.4-6.8-2.8 2.2-13.6.4-24.4-1-34.2Z" />
      <path d="M30.2 30.5C18 17.2 7.4 19.6 7 31.4c-.3 8.6 8.2 15.6 21.6 14.2-1.8-4.2-1.6-9.2 1.6-15.1Z" />
      <path d="M33.8 30.5C46 17.2 56.6 19.6 57 31.4c.3 8.6-8.2 15.6-21.6 14.2 1.8-4.2 1.6-9.2-1.6-15.1Z" />
      <path d="M32 38.5c-.8 4.6-.6 8.2.2 12.8h-1.2c-.4-4.4-.4-8.4.2-12.8.3 0 .6 0 1 0Z" />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        "flex flex-col items-center text-center text-primary no-underline",
        className,
      )}
      aria-label={school.name}
    >
      <LeafMark className={compact ? "h-8 w-8" : "h-10 w-10"} />
      <span
        className={cn(
          "mt-1 font-semibold uppercase leading-tight tracking-wide text-foreground",
          compact ? "text-xs" : "text-xs md:text-sm",
        )}
      >
        {school.nameLines[0]}
        <br />
        {school.nameLines[1]}
      </span>
      {!compact ? (
        <span className="mt-1 text-micro font-medium uppercase tracking-eyebrow text-muted">
          {school.motto}
        </span>
      ) : null}
    </Link>
  );
}

export { LeafMark };

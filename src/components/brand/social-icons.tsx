import { social } from "@/lib/site";
import { cn } from "@/lib/utils";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.7.5-1.3 1.6-1.3h1.4V3h-2.4C12.4 3 11 4.7 11 6.8v1.7H9v2.7h2V21h3.5v-9.8h2.4l.4-2.7h-2.8Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.8 4H20l-5.7 6.5L21 20h-5.3l-4.2-5.5L7 20H4.8l6.1-7L4 4h5.4l3.8 5.1L17.8 4Zm-.9 14.4h1.5L7.2 5.5H5.6l11.3 12.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C18 6 12 6 12 6s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.9C6 18 12 18 12 18s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-3.8ZM10 14.7V9.3L15.2 12 10 14.7Z" />
    </svg>
  );
}

const icons = {
  Facebook: FacebookIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {social.map((item) => {
        const Icon = icons[item.name];
        return (
          <li key={item.name}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={item.name}
              className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-border text-muted transition-colors duration-150 hover:border-primary hover:text-primary"
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SocialLinks } from "@/components/brand/social-icons";
import { school } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-14">
        <Logo className="items-start text-left lg:w-56" />

        <div className="hidden h-14 w-px shrink-0 bg-border lg:block" />

        <ul className="flex flex-1 flex-col gap-3 text-sm text-muted">
          <li className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>{school.city}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <a href={school.phoneHref} className="hover:text-primary">
              {school.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            <a href={school.emailHref} className="hover:text-primary">
              {school.email}
            </a>
          </li>
        </ul>

        <SocialLinks className="lg:ml-auto" />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:px-10">
          <p>{school.copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="hover:text-primary">
              Legal notice
            </Link>
            <Link to="/privacy" className="hover:text-primary">
              Privacy policy
            </Link>
          </div>
          <p>Built by Sybella Systems</p>
        </div>
      </div>
    </footer>
  );
}

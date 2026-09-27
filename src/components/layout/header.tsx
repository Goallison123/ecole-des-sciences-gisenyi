import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { navAll, navLeft, navRight } from "@/lib/site";
import { cn } from "@/lib/utils";

function NavLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const active =
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "relative px-1 py-2 text-sm text-foreground/75 transition-colors duration-150 hover:text-primary",
        active && "font-medium text-primary",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-2 -bottom-0.5 h-px rounded-pill bg-accent transition-opacity duration-150",
          active ? "opacity-100" : "opacity-0",
        )}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-30 bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-6">
        <nav
          className="hidden items-center justify-start gap-10 lg:flex"
          aria-label="Primary"
        >
          {navLeft.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        <Logo />

        <div className="hidden items-center justify-end gap-10 lg:flex">
          {navRight.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full z-40 border-t border-border bg-surface px-5 py-4 shadow-soft lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navAll.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

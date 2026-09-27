import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { navLeft, navMenus, navRight } from "@/lib/site";
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-8 lg:px-10 lg:py-6">
        <Logo />

        <nav
          className="hidden items-center gap-4 xl:gap-5 lg:flex"
          aria-label="Primary"
        >
          {navLeft.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              label={item.label}
            />
          ))}
          {navRight.map((item) => {
            const menu =
              item.label === "Academics"
                ? navMenus.academics
                : item.label === "Levels"
                  ? navMenus.levels
                  : item.label === "School life"
                    ? navMenus.schoolLife
                    : null;

            if (!menu)
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                />
              );

            return (
              <div
                key={item.to}
                className="group relative"
              >
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 px-1 py-2 text-sm text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>
                <ul className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-2 rounded-xl border border-border bg-surface p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {menu.map((entry) => (
                    <li key={entry.to}>
                      <Link
                        to={entry.to}
                        className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-mint hover:text-primary"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>

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
          <nav
            className="grid max-h-[calc(100dvh-6rem)] grid-cols-2 gap-x-5 gap-y-1 overflow-y-auto"
            aria-label="Mobile"
          >
            {navLeft.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            {navRight.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                label={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <div className="col-span-2 mt-2 border-t border-border pt-2">
              <p className="px-1 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Academics
              </p>
              {navMenus.academics.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  onClick={() => setOpen(false)}
                />
              ))}
              <p className="mt-2 px-1 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Levels
              </p>
              {navMenus.levels.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  onClick={() => setOpen(false)}
                />
              ))}
              <p className="mt-2 px-1 py-2 text-xs font-semibold uppercase tracking-wider text-muted">
                School life
              </p>
              {navMenus.schoolLife.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

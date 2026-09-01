import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, clinic } from "@/data/clinic";
import { CtaLink } from "./CtaButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground">
            S
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">Sakthi Dental Clinic</span>
            <span className="block text-[11px] tracking-wide text-muted-foreground">
              Hosur, Tamil Nadu
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.phones[0]}
          </a>
          <CtaLink to="/contact">Fix an Appointment</CtaLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-5 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: link.to === "/" }}
                    activeProps={{ className: "bg-accent text-accent-foreground" }}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <CtaLink to="/contact" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Fix an Appointment
            </CtaLink>
          </nav>
        </div>
      )}
    </header>
  );
}

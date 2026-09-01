import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone, Clock } from "lucide-react";
import { clinic, coreTreatments } from "@/data/clinic";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Treatments", to: "/treatments" },
  { label: "FAQs", to: "/faqs" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

const socials = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "YouTube", icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg">Sakthi Dental Clinic</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Specialized, compassionate dental care for women, children and families in Hosur.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">Key Treatments</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {coreTreatments.map((t) => (
              <li key={t.title}>{t.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${clinic.email}`} className="hover:text-primary">
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{clinic.phones.join(" / ")}</span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="font-semibold text-foreground">{clinic.timings}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

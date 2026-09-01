import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink } from "@/components/site/CtaButton";
import { treatments } from "@/data/clinic";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Dental Treatments in Hosur | Sakthi Dental Clinic" },
      {
        name: "description",
        content:
          "Explore our full range of dental treatments: scaling, fillings, implants, root canal, laser dentistry, braces, clear aligners, veneers and pediatric care.",
      },
      { property: "og:title", content: "Dental Treatments | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "Fifteen dental treatments delivered with modern technology and gentle care in Hosur.",
      },
    ],
  }),
  component: TreatmentsPage,
});

function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our treatments"
        title="Complete dental care under one roof"
        subtitle="From preventive cleaning to implants, orthodontics and laser dentistry, every treatment is planned around your comfort."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          {treatments.map((t) => {
            const Icon = Icons[t.icon] ?? Icons.Sparkles;
            return (
              <article key={t.title} className="surface-card p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-xl">{t.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </article>
            );
          })}
        </div>

        <div className="soft-gradient mt-14 rounded-3xl border border-border px-6 py-12 text-center sm:px-12">
          <h2 className="text-2xl sm:text-3xl">Not sure which treatment you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Our doctors will examine, explain your options clearly, and recommend only what is
            necessary.
          </p>
          <CtaLink to="/contact" className="mt-7">
            Fix an Appointment
          </CtaLink>
        </div>
      </section>
    </>
  );
}

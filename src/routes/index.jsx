import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Quote, Star, ShieldCheck, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import bannerImage from "@/assets/banner-assurance.jpg";
import { CtaLink } from "@/components/site/CtaButton";
import { whyChooseUs, coreTreatments, testimonials, amenities, clinic } from "@/data/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakthi Dental Clinic | Dental Care in Hosur" },
      {
        name: "description",
        content:
          "Specialized dental care for women, children and families in Hosur. Braces, implants, cleaning and more, led by Dr. Anupriya. Fix an appointment today.",
      },
      { property: "og:title", content: "Sakthi Dental Clinic | Dental Care in Hosur" },
      {
        property: "og:description",
        content:
          "Compassionate, expert-led dental services for women, children and families in Hosur, Tamil Nadu.",
      },
    ],
  }),
  component: HomePage,
});

function Icon({ name, className }) {
  const Cmp = Icons[name] ?? Icons.Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}

function HomePage() {
  return (
    <>
      <section className="soft-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Trusted in Hosur since 2004</p>
            <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl md:text-[3.4rem]">
              Specialized Dental Care for Women, Children &amp; Families
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Experience compassionate, expert-led dental services tailored to your needs, all in a
              modern and welcoming environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink to="/contact">
                Fix an Appointment
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <a
                href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency Dental Support
              </a>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-6">
              {[
                { k: "20+ yrs", v: "Of experience" },
                { k: "9 AM - 9 PM", v: "Doctors daily" },
                { k: "9", v: "Specialist doctors" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="font-display text-xl font-semibold text-primary">{item.k}</dt>
                  <dd className="text-xs text-muted-foreground">{item.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Dentist welcoming a mother and her young daughter at Sakthi Dental Clinic"
              width={1408}
              height={1200}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
              <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium">Gentle care for every age</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate mt-6 overflow-hidden">
        <img
          src={bannerImage}
          alt="Calm, modern treatment room at the clinic"
          loading="lazy"
          width={1920}
          height={800}
          className="h-[280px] w-full object-cover sm:h-[340px]"
        />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <h2 className="text-2xl leading-snug text-primary-foreground sm:text-3xl md:text-4xl">
              You are always in safe hands.
              <br className="hidden sm:block" /> We are ready to help, anytime.
            </h2>
            <p className="mt-4 text-sm text-primary-foreground/85 sm:text-base">
              <Clock className="mr-2 inline h-4 w-4" aria-hidden="true" />
              Open all week, {clinic.timings.split(": ")[1]}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Our philosophy</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Why Choose Sakthi Dental Clinic?</h2>
          <p className="mt-4 text-muted-foreground">
            We combine advanced dental technology with a warm, patient-friendly environment, so every
            visit feels comfortable and stress-free.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-mint-foreground">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Our core treatments</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Explore Our Services</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreTreatments.map((t) => (
              <article key={t.title} className="surface-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <CtaLink to="/treatments" variant="outline">
              View Full List of Treatments
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What Our Patients Say</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="surface-card flex flex-col p-6">
              <Quote className="h-7 w-7 text-primary/40" aria-hidden="true" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">{t.quote}</p>
              <footer className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <cite className="text-sm font-semibold not-italic">{t.name}</cite>
                <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Clinic facilities</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Designed for an easy visit</h2>
            <p className="mt-4 text-muted-foreground">
              From parking to wheelchair access, every detail is arranged so patients of all ages can
              reach us comfortably.
            </p>
            <CtaLink to="/contact" className="mt-8">
              Fix an Appointment
            </CtaLink>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {amenities.map((a) => (
              <li key={a.label} className="surface-card flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blush text-blush-foreground">
                  <Icon name={a.icon} className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium">{a.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="soft-gradient rounded-3xl border border-border px-6 py-14 text-center sm:px-12">
          <h2 className="text-3xl sm:text-4xl">Ready for a healthier smile?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a consultation with Dr. Anupriya and our team of specialists at our Hosur clinic.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaLink to="/contact">Fix an Appointment</CtaLink>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Meet our doctors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

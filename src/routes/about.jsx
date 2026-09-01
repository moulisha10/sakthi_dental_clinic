import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";
import doctorImage from "@/assets/dr-anupriya.jpg";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink } from "@/components/site/CtaButton";
import { doctors } from "@/data/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Anupriya | Sakthi Dental Clinic Hosur" },
      {
        name: "description",
        content:
          "Meet Dr. Anupriya, founder of Sakthi Dental Clinic in Hosur, and our team of nine dental specialists committed to personalized, compassionate care.",
      },
      { property: "og:title", content: "About Dr. Anupriya | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "20+ years of dental expertise, a specialist team, and a patient-first philosophy.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Get to Know Dr. Anupriya"
        subtitle="Your Trusted Partner in Dental Care"
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <img
              src={doctorImage}
              alt="Portrait of Dr. Anupriya, founder of Sakthi Dental Clinic"
              loading="lazy"
              width={1008}
              height={1200}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
            <div className="surface-card mt-5 flex items-center gap-4 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                <Award className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium">
                20+ years of practice · Founder, Sakthi Dental Clinic (est. 2004)
              </p>
            </div>
          </div>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern
              dentistry at Hosur. She began her professional journey after graduating in 2000. Her
              passion for delivering exceptional dental care was further nurtured during six impactful
              years at Mathura Clinic, where she refined her clinical skills and deepened her
              commitment to patient wellbeing.
            </p>
            <p>
              In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to
              make high-quality dental care accessible to all. Her dedication extends beyond private
              practice, reflected in her long-standing service with the Primary Health Center at
              Chandara Hospital, where she has been a trusted dental consultant for over a decade.
            </p>
            <p>
              At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and
              wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly
              environment to ensure every visit is comfortable and stress-free. From routine check-ups
              to specialized treatments, we prioritize personalized care tailored to your unique
              dental needs.
            </p>
            <p>
              Whether you're looking for preventive care, cosmetic enhancements, or restorative
              solutions, Dr. Anupriya and her team are committed to delivering excellence at every
              step. Because here, your smile isn't just treated it's celebrated.
            </p>
            <CtaLink to="/contact" className="mt-2">
              Fix an Appointment
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Our vision &amp; mission</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What guides our care</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="surface-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Target className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering
                personalized, compassionate, and advanced dental services. We are committed to
                creating a welcoming environment where patients feel comfortable and confident in
                taking charge of their dental health. By integrating state-of-the-art technology with
                patient-centric care, we ensure that every treatment enhances not only your smile but
                also your overall well-being. Continuous learning and innovation drive us to provide
                comprehensive solutions, from preventive care to complex dental procedures, all
                designed to promote long-lasting oral health.
              </p>
            </article>
            <article className="surface-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blush text-blush-foreground">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our vision is to be a leading force in modern dentistry, known for setting new
                standards in patient care, innovation, and community engagement. At Sakthi Dental
                Clinic, we believe that building trust, encouraging preventive practices, and
                fostering a culture of excellence are key to making a lasting impact. We aspire to not
                only deliver exceptional dental outcomes but also to contribute positively to the
                community through awareness initiatives and outreach programs. With a focus on
                holistic care and a passion for brightening lives, we are dedicated to ensuring that
                every smile we treat reflects confidence, health, and happiness.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Our team</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Specialists you can trust</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <li key={doc.name} className="surface-card flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                {doc.name.split(" ")[1]?.charAt(0) ?? "D"}
              </span>
              <span>
                <span className="block font-medium">{doc.name}</span>
                <span className="block text-sm text-muted-foreground">{doc.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

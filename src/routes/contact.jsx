import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaButton } from "@/components/site/CtaButton";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments | Sakthi Dental Clinic Hosur" },
      {
        name: "description",
        content:
          "Reach Sakthi Dental Clinic in Hosur: B2/8 SBM Layout, Anthivadi. Call +91 9862890897, email info@sakthidentalclinic.in, or send us a message to book.",
      },
      { property: "og:title", content: "Contact Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "Address, phone, timings and an appointment enquiry form for our Hosur clinic.",
      },
    ],
  }),
  component: ContactPage,
});

const initial = { name: "", email: "", phone: "", message: "" };

function ContactPage() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    setValues(initial);
  };

  const fieldClass = (name) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/40 ${
      errors[name] ? "border-destructive" : "border-input focus:border-primary"
    }`;

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We would love to hear from you"
        subtitle="Questions, appointment requests or directions to the clinic — we are happy to help."
      />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-card p-7 hover:translate-y-0 sm:p-9">
            <h2 className="text-2xl">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked with * are required.
            </p>

            <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  placeholder="Your full name"
                  className={fieldClass("name")}
                />
                {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    placeholder="you@example.com"
                    className={fieldClass("email")}
                  />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.phone)}
                    placeholder="+91 98765 43210"
                    className={fieldClass("phone")}
                  />
                  {errors.phone && <p className="mt-2 text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help"
                  className={fieldClass("message")}
                />
              </div>

              <CtaButton type="submit" className="w-full sm:w-auto">
                Submit
              </CtaButton>

              {submitted && (
                <p className="flex items-center gap-2 rounded-xl bg-mint px-4 py-3 text-sm text-mint-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Thank you! Your message has been received. We will contact you shortly.
                </p>
              )}
            </form>
          </div>

          <div className="space-y-5">
            <div className="surface-card p-7 hover:translate-y-0">
              <h2 className="text-2xl">Reach us</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium">Address</span>
                    <span className="text-muted-foreground">{clinic.address}</span>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blush text-blush-foreground">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium">Email</span>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="text-muted-foreground hover:text-primary"
                    >
                      {clinic.email}
                    </a>
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium">Phone</span>
                    {clinic.phones.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p.replace(/\s/g, "")}`}
                        className="mr-2 text-muted-foreground hover:text-primary"
                      >
                        {p}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-medium">Timings</span>
                    <span className="font-semibold">{clinic.timings}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="Sakthi Dental Clinic location map"
                src="https://www.google.com/maps?q=SBM+Layout+Anthivadi+Hosur+Tamil+Nadu+635109&output=embed"
                loading="lazy"
                className="h-72 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

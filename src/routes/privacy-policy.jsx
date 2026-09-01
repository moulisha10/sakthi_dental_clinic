import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sakthi Dental Clinic" },
      {
        name: "description",
        content:
          "How Sakthi Dental Clinic collects, uses, stores and protects information from visitors and users of our website.",
      },
      { property: "og:title", content: "Privacy Policy | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "Our commitment to protecting the privacy of our website visitors and patients.",
      },
    ],
  }),
  component: PrivacyPage,
});

function Block({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="At Sakthi Dental Clinic, we are committed to protecting your privacy. This policy outlines how we collect, use, store, and disclose information from visitors and users of our website."
      />

      <article className="mx-auto max-w-3xl px-5 py-16">
        <Block title="Information We Collect">
          <p>
            We may collect personal identification information from users in several ways, including
            when users:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Visit our website</li>
            <li>Fill out forms (e.g. contact or appointment requests)</li>
            <li>Engage with features, services, or resources on our site</li>
          </ul>
          <p>Types of information we may collect include:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>
          <p>
            Users can visit our site anonymously. We only collect personal data when it is voluntarily
            submitted by users. Refusing to provide certain personal information may limit access to
            some site features or services.
          </p>
          <p>We may also gather non-personal identification information, such as:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Browser type</li>
            <li>Device details</li>
            <li>Operating system</li>
            <li>Internet service provider</li>
            <li>Technical data related to user interaction with the site</li>
          </ul>
        </Block>

        <Block title="Cookies">
          <p>
            Our website may use "cookies" to enhance the user experience. Cookies are small files
            stored on a user's device for record-keeping purposes and to track preferences or site
            activity.
          </p>
          <p>
            Users can set their browser to refuse cookies or alert them when cookies are being used.
            Please note that disabling cookies may affect some site functionality.
          </p>
        </Block>

        <Block title="How We Use Your Information">
          <p>Collected information may be used for the following purposes:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-foreground">To operate and manage the website:</strong> ensuring
              content displays properly and services run smoothly.
            </li>
            <li>
              <strong className="text-foreground">To improve customer service:</strong> helping us
              respond to inquiries more efficiently.
            </li>
            <li>
              <strong className="text-foreground">To enhance the website experience:</strong> feedback
              provided may help us improve content, usability, and performance.
            </li>
            <li>
              <strong className="text-foreground">To communicate via email:</strong> we may use the
              email address to respond to inquiries, appointments, or service updates.
            </li>
          </ul>
        </Block>

        <Block title="Data Security">
          <p>
            We implement appropriate security measures for data collection, storage, and processing to
            safeguard your personal information from unauthorized access, alteration, or destruction.
          </p>
        </Block>

        <Block title="Information Sharing">
          <p>We do not sell, trade, or rent personal identification information to third parties.</p>
          <p>
            We may share general demographic data (not linked to any personal information) with
            trusted partners or affiliates to improve service delivery and site performance.
          </p>
        </Block>

        <Block title="Children's Privacy">
          <p>
            In compliance with the Children's Online Privacy Protection Act (COPPA), we do not
            knowingly collect any personal information from children under the age of 13. Our site is
            not intended to attract users below this age group.
          </p>
        </Block>

        <Block title="Changes to This Policy">
          <p>
            Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users
            to review this page periodically to stay informed about how we protect your information.
          </p>
        </Block>

        <Block title="Acceptance of Terms">
          <p>
            By using this website, you agree to this policy. If you do not accept our Privacy Policy,
            please do not use our website. Continued use of the site following any updates will be
            deemed as your acceptance of the revised policy.
          </p>
        </Block>

        <Block title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy or your interactions with our site,
            please contact us:
          </p>
          <ul className="space-y-1">
            <li>Address: {clinic.address}</li>
            <li>
              Email:{" "}
              <a href={`mailto:${clinic.email}`} className="text-primary hover:underline">
                {clinic.email}
              </a>
            </li>
            <li>Phone: {clinic.phones.join(" / ")}</li>
          </ul>
        </Block>
      </article>
    </>
  );
}

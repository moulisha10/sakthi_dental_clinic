import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaLink } from "@/components/site/CtaButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/clinic";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Dental FAQs | Sakthi Dental Clinic Hosur" },
      {
        name: "description",
        content:
          "Answers to common dental questions on tooth pain, scaling, fillings, root canal treatment, sensitivity and oral hygiene from Sakthi Dental Clinic.",
      },
      { property: "og:title", content: "Dental FAQs | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "Clear answers to the questions our patients in Hosur ask most often.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Straightforward answers from our dental team, so you know what to expect before your visit."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="surface-card border-b-0 px-5 hover:translate-y-0"
            >
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="soft-gradient mt-12 rounded-3xl border border-border px-6 py-10 text-center">
          <h2 className="text-2xl">Still have a question?</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Send us a message and our team will get back to you.
          </p>
          <CtaLink to="/contact" className="mt-6">
            Contact the clinic
          </CtaLink>
        </div>
      </section>
    </>
  );
}

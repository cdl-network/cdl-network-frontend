import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Do you charge drivers anything?",
    answer: "Never. Not once. Not ever.",
  },
  {
    question: "How fast will I hear back?",
    answer: "Our recruiters do their best to contact everyone within 8 business hours.",
  },
  {
    question: "Do you sell my info?",
    answer: "No. We use Google Analytics (GA4) to understand behavior on our website, but we don't sell or share your personal information with anyone else.",
  },
  {
    question: "Who can apply?",
    answer: "CDL-A drivers mostly, but we also have some non-CDL-A jobs like cargo van driver or box truck driver.",
  },
  {
    question: "What happens after I submit?",
    answer: "Short screening call to confirm your details and choose the offer. We start matching right away!",
  },
  {
    question: "Why apply now?",
    answer: "Freight is moving and carriers are adding seats. It's a good moment to upgrade routes or switch companies.",
  },
];

const DriverFAQ = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Still wondering if we're the right fit? Here's what drivers ask us most.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg overflow-hidden data-[state=open]:border-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground px-5 py-4 hover:no-underline hover:bg-muted/30 [&[data-state=open]]:bg-accent/5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed px-5 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default DriverFAQ;

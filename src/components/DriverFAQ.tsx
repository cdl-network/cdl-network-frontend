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
    answer: "Usually within 1–3 hours. Always same day.",
  },
  {
    question: "Do you sell my info?",
    answer: "No. Your details stay with us — we don't send your number to random recruiters or spam lists.",
  },
  {
    question: "Who can apply?",
    answer: "Anyone. CDL-A drivers, new drivers, and people exploring their options — the quiz filters everything on our side.",
  },
  {
    question: "What happens after I submit?",
    answer: "We call you to confirm your details. If everything looks good, we start matching you with carriers and job options.",
  },
  {
    question: "Why apply now?",
    answer: "Freight is moving and carriers are adding seats. It's a good moment to upgrade routes or switch companies.",
  },
];

const DriverFAQ = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Questions? We've got answers.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Still wondering if we're the right fit? Here's what drivers ask us most.
          </p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop: Two-column card grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {faq.question}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriverFAQ;

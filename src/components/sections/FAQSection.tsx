import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="bg-surface px-5 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
          자주 묻는 질문
        </h2>
        <Card className="mt-8 border-0 shadow-sm">
          <CardContent className="p-6">
            <Accordion type="single" collapsible>
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-text-secondary leading-[1.7]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer } from "@/components/shared/StaggerContainer";

interface TrustPolicySectionProps {
  trustPolicy: {
    title: string;
    subtitle: string;
    notice: Array<{
      title: string;
      description: string;
    }>;
    details: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export function TrustPolicySection({ trustPolicy }: TrustPolicySectionProps) {
  return (
    <section className="bg-surface px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Badge variant="secondary">{trustPolicy.title}</Badge>
          <h2 className="mt-4 text-3xl font-bold leading-[1.3] tracking-tight">
            {trustPolicy.subtitle}
          </h2>
          <StaggerContainer delay={150} className="mt-6 grid gap-3">
            {trustPolicy.notice.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-base font-semibold tracking-[-0.01em] text-text-primary">
                  {item.title}
                </p>
                <p className="mt-1 text-base text-text-secondary leading-[1.7]">
                  {item.description}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold tracking-[-0.01em]">
              자주 묻는 정책
            </h3>
            <Accordion type="single" collapsible className="mt-4">
              {trustPolicy.details.map((item, index) => (
                <AccordionItem key={item.question} value={`policy-${index}`}>
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

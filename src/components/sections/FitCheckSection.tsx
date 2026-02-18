import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { Check, X } from "lucide-react";

interface FitCheckSectionProps {
  fitCheck: {
    title: string;
    recommendedTitle: string;
    recommended: string[];
    notRecommendedTitle: string;
    notRecommended: string[];
  };
}

export function FitCheckSection({ fitCheck }: FitCheckSectionProps) {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          badge={fitCheck.title}
          title="내게 맞는지 먼저 확인하세요"
          subtitle="구매 전, 지금 상황과 맞는지 체크해보세요."
        />
        <StaggerContainer delay={195} className="mt-8 grid gap-4 md:grid-cols-2">
          <Card className="border-emerald-200/70 bg-emerald-50/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-emerald-300/70 flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-emerald-700">
                {fitCheck.recommendedTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-base text-text-secondary leading-[1.7] flex-1">
                {fitCheck.recommended.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-rose-200/70 bg-rose-50/60 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-rose-300/70 flex flex-col">
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold tracking-[-0.01em] text-rose-600">
                {fitCheck.notRecommendedTitle}
              </h3>
              <ul className="mt-4 space-y-3 text-base text-text-secondary leading-[1.7] flex-1">
                {fitCheck.notRecommended.map((item) => (
                  <li key={item} className="flex gap-2">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </StaggerContainer>
      </div>
    </section>
  );
}

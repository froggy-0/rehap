import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { StaggerContainer } from "@/components/shared/StaggerContainer";

interface StudyMethodSectionProps {
  studyMethod: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
}

export function StudyMethodSection({ studyMethod }: StudyMethodSectionProps) {
  return (
    <section className="bg-surface px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          badge={studyMethod.title}
          title="3-STEP 학습 흐름"
          subtitle={studyMethod.subtitle}
        />
        <StaggerContainer delay={260} className="mt-10 grid gap-4 md:grid-cols-3">
          {studyMethod.steps.map((step, index) => (
            <Card key={step.title} className="border-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <CardContent className="p-6 text-left">
                <p className="text-xs font-semibold text-text-muted">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-text-secondary leading-[1.7]" dangerouslySetInnerHTML={{ __html: step.description }} />
              </CardContent>
            </Card>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

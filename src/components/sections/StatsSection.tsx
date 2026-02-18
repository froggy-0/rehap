import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { CountUp } from "@/components/shared/CountUp";
import { Star } from "lucide-react";

interface StatsSectionProps {
  reviewCount: number;
}

export function StatsSection({ reviewCount }: StatsSectionProps) {
  return (
    <section className="px-5 py-12 md:py-16 bg-gradient-to-b from-white to-surface/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.3] tracking-tight">
            검증된 학습 시스템
          </h2>
          <p className="mt-3 text-base text-text-secondary">
            효율적인 합격 설계로 이미 증명되었습니다
          </p>
        </div>
        <StaggerContainer delay={195} className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl font-bold text-slate-700">
              <CountUp end={1000} suffix="+" />
            </div>
            <p className="mt-2 text-sm text-text-muted">핵심 문제</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl font-bold text-slate-700">3-STEP</div>
            <p className="mt-2 text-sm text-text-muted">학습 설계</p>
          </div>
          <div className="rounded-2xl border border-border/50 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-2 text-sm text-text-muted">{reviewCount}명 선택</p>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

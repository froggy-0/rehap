import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScaleContainer } from "@/components/shared/ScaleContainer";
import { ApplicationCTA } from "@/components/shared/ApplicationCTA";
import { getAssetPath } from "@/lib/utils";

interface Workbook {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  features: string[];
  previewImages?: string[];
}

interface WorkbookPreviewSectionProps {
  workbook: Workbook;
  previewImages: string[];
  onNavigateToResources?: () => void;
}

export function WorkbookPreviewSection({ 
  workbook, 
  previewImages,
  onNavigateToResources 
}: WorkbookPreviewSectionProps) {
  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
          문제집 미리보기
        </h2>
        <ScaleContainer delay={0} className="mt-8">
          <Card className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="bg-primary/5 p-6 md:w-[320px]">
                  <div className="grid grid-cols-2 gap-3">
                    {previewImages.slice(0, 3).map((src, index) => {
                      const label = ["문제", "해설", "요약"][index] || "미리보기";
                      return (
                        <div
                          key={index}
                          className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/80 bg-white/80 shadow-sm"
                        >
                          <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-text-secondary shadow-sm">
                            {label}
                          </span>
                          <Image
                            src={getAssetPath(src)}
                            alt={`${workbook.title} 미리보기 ${index + 1}`}
                            fill
                            sizes="(min-width: 768px) 33vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                    {previewImages.length < 3 && (
                      <div className="flex items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-xs text-text-muted">
                        추가 이미지 준비중
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-xs text-text-muted">
                    실제 문제집 일부 페이지 예시
                  </p>
                </div>
                <div className="flex-1 p-6">
                  <Badge variant="secondary">{workbook.category}</Badge>
                  <h3 className="mt-2 text-xl font-bold">{workbook.title}</h3>
                  <p className="mt-1 text-sm text-text-muted leading-[1.6]">
                    {workbook.subtitle}
                  </p>
                  <p className="mt-3 text-base text-text-secondary leading-[1.7]">
                    {workbook.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {workbook.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Button
                      variant="outline"
                      className="min-h-[44px] transition-transform hover:-translate-y-0.5"
                      onClick={onNavigateToResources}
                    >
                      전체 문제집 보기
                    </Button>
                    <ApplicationCTA />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScaleContainer>
      </div>
    </section>
  );
}

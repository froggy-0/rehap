"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronDown, ChevronUp, BookOpen, Target, Clock } from "lucide-react";
import type { WorkbookItem } from "@/types/content";

interface WorkbookCardProps {
  workbook: WorkbookItem;
}

export function WorkbookCard({ workbook }: WorkbookCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          {workbook.coverImage && (
            <div className="flex-shrink-0 bg-surface p-4 sm:w-[140px]">
              <Image
                src={workbook.coverImage}
                alt={workbook.title}
                width={140}
                height={198}
                className="mx-auto h-auto w-[100px] rounded shadow-sm sm:w-full"
                loading="lazy"
              />
            </div>
          )}
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <Badge variant="secondary">{workbook.category}</Badge>
                  {workbook.discountPrice && (
                    <Badge className="bg-destructive/10 text-destructive text-[10px]">할인</Badge>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em]">
                  {workbook.title}
                </h3>
                <p className="mt-0.5 text-base text-text-muted leading-[1.6]">
                  {workbook.subtitle}
                </p>
              </div>
            </div>

            <p className="mt-3 line-clamp-2 text-base text-text-secondary leading-[1.7]">
              {workbook.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {workbook.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-700"
                >
                  {feature}
                </span>
              ))}
              {workbook.features.length > 3 && (
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-text-muted">
                  +{workbook.features.length - 3}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                {workbook.discountPrice && (
                  <span className="mr-2 text-sm text-text-muted line-through">
                    {workbook.priceDisplay}
                  </span>
                )}
                <span className="text-xl font-bold text-primary">
                  {workbook.discountPriceDisplay || workbook.priceDisplay}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="min-h-[44px]"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? (
                    <>
                      접기 <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      상세보기 <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
                <Button asChild className="min-h-[44px]">
                  <a
                    href={workbook.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    신청하기
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="border-t bg-surface/30 p-6">
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-slate-500" />
                  <span className="text-text-secondary">PDF 형식</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-slate-500" />
                  <span className="text-text-secondary">실전 대비</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-text-secondary">즉시 다운로드</span>
                </div>
              </div>

              {/* Preview Images */}
              {workbook.previewImages && workbook.previewImages.length > 0 && (
                <div>
                  <h4 className="mb-3 text-lg font-semibold">미리보기</h4>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {workbook.previewImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-lg border bg-white transition-transform hover:scale-105"
                      >
                        <Image
                          src={img}
                          alt={`미리보기 ${idx + 1}`}
                          width={200}
                          height={280}
                          className="h-auto w-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Included Content */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">포함 내용</h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {workbook.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">목차</h4>
                <Card>
                  <CardContent className="p-4">
                    <ol className="space-y-2 text-sm text-text-secondary">
                      <li>1. 운동생리학 기초</li>
                      <li>2. 에너지 대사</li>
                      <li>3. 신경근육계</li>
                      <li>4. 심폐 기능</li>
                      <li>5. 운동과 영양</li>
                      <li>6. 특수 환경과 운동</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* Study Guide */}
              <div>
                <h4 className="mb-3 text-lg font-semibold">추천 학습법</h4>
                <div className="space-y-3">
                  {[
                    { step: 1, title: "전체 구성 파악", desc: "목차를 통해 시험 범위 이해" },
                    { step: 2, title: "실전 문제 풀이", desc: "시간 제한 두고 반복 풀이" },
                    { step: 3, title: "오답 복습 루틴", desc: "틀린 문제 중심 반복 학습" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold text-white">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-semibold text-text">{item.title}</p>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Info */}
              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="p-4">
                  <h4 className="mb-2 font-semibold text-amber-900">구매 안내</h4>
                  <ul className="space-y-1 text-sm text-amber-800">
                    <li>• 결제 후 24시간 이내 이메일로 전달</li>
                    <li>• PDF 파일로 제공 (모바일/태블릿 열람 가능)</li>
                    <li>• 재다운로드 가능 (구매 후 30일)</li>
                    <li>• 최신 시험 기준 반영 (2024년 개정)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

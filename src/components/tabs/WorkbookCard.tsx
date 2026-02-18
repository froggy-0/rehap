"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Check, ChevronDown, ChevronUp, BookOpen, Target, Clock, X } from "lucide-react";
import type { WorkbookItem } from "@/types/content";

interface WorkbookCardProps {
  workbook: WorkbookItem;
}

export function WorkbookCard({ workbook }: WorkbookCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <CardContent className="p-0">
          <div className="flex flex-col sm:flex-row">
            {workbook.coverImage && (
              <div className="flex-shrink-0 bg-surface p-4 sm:w-[140px]">
                {imageLoading && (
                  <Skeleton className="mx-auto h-[198px] w-[100px] sm:w-full" />
                )}
                <Image
                  src={workbook.coverImage}
                  alt={workbook.title}
                  width={140}
                  height={198}
                  className={`mx-auto h-auto w-[100px] rounded shadow-sm sm:w-full ${imageLoading ? 'hidden' : ''}`}
                  loading="lazy"
                  onLoad={() => setImageLoading(false)}
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

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
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
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                      {workbook.previewImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(img)}
                          className="overflow-hidden rounded-lg border bg-white transition-transform hover:scale-105 cursor-pointer"
                        >
                          <Image
                            src={img}
                            alt={`미리보기 ${idx + 1}`}
                            width={400}
                            height={560}
                            className="h-auto w-full"
                          />
                        </button>
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
                {workbook.tableOfContents && workbook.tableOfContents.length > 0 && (
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">목차</h4>
                    <Card>
                      <CardContent className="p-4">
                        <ol className="space-y-2 text-sm text-text-secondary">
                          {workbook.tableOfContents.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Study Guide */}
                {workbook.studyGuide && workbook.studyGuide.length > 0 && (
                  <div>
                    <h4 className="mb-3 text-lg font-semibold">추천 학습법</h4>
                    <div className="space-y-3">
                      {workbook.studyGuide.map((item) => (
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
                )}

                {/* Purchase Info */}
                {workbook.purchaseInfo && workbook.purchaseInfo.length > 0 && (
                  <Card className="border-amber-200 bg-amber-50">
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-semibold text-amber-900">구매 안내</h4>
                      <ul className="space-y-1 text-sm text-amber-800">
                        {workbook.purchaseInfo.map((info, idx) => (
                          <li key={idx}>• {info}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative max-h-[90vh] max-w-4xl">
            <Image
              src={selectedImage}
              alt="미리보기 확대"
              width={800}
              height={1120}
              className="h-auto w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}

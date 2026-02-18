"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { WorkbookItem } from "@/types/content";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

interface WorkbookDetailDialogProps {
  workbook: WorkbookItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WorkbookDetailDialog({
  workbook,
  open,
  onOpenChange,
}: WorkbookDetailDialogProps) {
  if (!workbook) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{workbook.category}</Badge>
            {workbook.discountPrice && (
              <Badge className="bg-destructive/10 text-destructive">할인중</Badge>
            )}
          </div>
          <DialogTitle className="text-xl font-semibold tracking-[-0.01em]">
            {workbook.title}
          </DialogTitle>
          <DialogDescription className="text-base text-text-muted leading-[1.6]">
            {workbook.subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          {/* Description */}
          <div>
            <h4 className="text-xl font-semibold tracking-[-0.01em]">소개</h4>
            <p className="mt-1.5 text-base text-text-secondary leading-[1.7]">
              {workbook.description}
            </p>
          </div>

          {/* Preview Gallery */}
          {workbook.previewImages && workbook.previewImages.length > 0 && (
            <div>
              <h4 className="text-xl font-semibold tracking-[-0.01em]">
                미리보기
              </h4>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {workbook.previewImages.slice(0, 3).map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/80 bg-white/90 shadow-sm"
                  >
                    <Image
                      src={getAssetPath(src)}
                      alt={`${workbook.title} 미리보기 ${index + 1}`}
                      fill
                      sizes="(min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-text-muted leading-[1.6]">
                실제 문제집 일부 페이지 예시입니다.
              </p>
            </div>
          )}

          {/* Features */}
          <div>
            <h4 className="text-xl font-semibold tracking-[-0.01em]">
              포함 내용
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {workbook.features.map((feature, index) => (
                <span
                  key={index}
                  className="rounded-full bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Study Guide */}
          <div>
            <h4 className="text-xl font-semibold tracking-[-0.01em]">
              추천 학습법
            </h4>
            <ul className="mt-2 space-y-1.5 text-base text-text-secondary leading-[1.7]">
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">1.</span>
                <span>전체 내용을 한 번 빠르게 훑어보며 큰 그림을 파악하세요</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">2.</span>
                <span>틀린 문제는 해설을 꼼꼼히 읽고, 관련 이론을 다시 정리하세요</span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-primary">3.</span>
                <span>시험 전 최소 2회 이상 반복 학습을 추천합니다</span>
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-muted leading-[1.6]">가격</p>
                <div className="mt-1 flex items-baseline gap-2">
                  {workbook.discountPrice && (
                    <span className="text-sm text-text-muted leading-[1.6] line-through">
                      {workbook.priceDisplay}
                    </span>
                  )}
                  <span className="text-2xl font-bold tracking-tight text-primary">
                    {workbook.discountPriceDisplay || workbook.priceDisplay}
                  </span>
                </div>
              </div>
              <span className="text-sm text-text-muted leading-[1.6]">
                PDF 제공
              </span>
            </div>
          </div>

          {/* Policy */}
          <p className="text-sm text-text-muted leading-[1.6]">
            * 디지털 상품 특성상 전달 후 환불이 어렵습니다. 전달 전 취소 시 100% 환불.
          </p>
        </div>

        <DialogFooter>
          <Button
            asChild
            className="min-h-[44px] w-full text-base font-semibold"
          >
            <a
              href={workbook.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              신청하기
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

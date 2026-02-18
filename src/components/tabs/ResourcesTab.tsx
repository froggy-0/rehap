"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { WorkbookCard } from "./WorkbookCard";
import { useAppData } from "@/hooks/useAppData";

export function ResourcesTab() {
  const { workbooks: data } = useAppData();
  const [activeCategory, setActiveCategory] = useState("전체");

  const filteredItems = useMemo(
    () =>
      activeCategory === "전체"
        ? data.items
        : data.items.filter((item) => item.category === activeCategory),
    [activeCategory, data.items]
  );

  return (
    <div className="px-5 py-10 md:py-16 reveal">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border bg-aurora p-6 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
            Resources
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.3] tracking-tight">
            운동생리학 학습 자료
          </h2>
          <p className="mt-2 text-base text-text-secondary leading-[1.7]">
            전과목 개념부터 실전 모의까지, 목적별로 선택하세요.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {data.categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className="min-h-[44px] rounded-full px-4"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          {filteredItems.map((workbook) => (
            <WorkbookCard key={workbook.id} workbook={workbook} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-12 text-center text-text-muted">
            해당 카테고리의 자료가 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}

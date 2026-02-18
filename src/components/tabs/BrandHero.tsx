"use client";

import { getSiteConfig } from "@/lib/content";
import { LogoMark } from "@/components/layout/LogoMark";
import { m } from "motion/react";

export function BrandHero() {
  const config = getSiteConfig();

  return (
    <div className="relative overflow-hidden bg-aurora px-5 py-16 text-center md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25 mix-blend-soft-light" />
      <div className="relative mx-auto max-w-2xl">
        <m.div
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-white/70 px-4 py-2 shadow-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LogoMark className="h-8 w-8" />
          <span className="text-xs font-semibold text-text-secondary">
            {config.brand.tagline}
          </span>
        </m.div>
        <m.h2
          className="mt-6 text-5xl font-bold leading-[1.2] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {config.brand.name}
        </m.h2>
        <m.p
          className="mt-6 text-base text-text-secondary leading-[1.8] max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          운동생리학 학습자 전체를 위한<br />
          핵심 정리와 실전 문제집을 제공합니다.
          <br /><br />
          자격증 대비와 지식 이해를<br />
          동시에 완성하는 학습 브랜드입니다.
        </m.p>
      </div>
    </div>
  );
}

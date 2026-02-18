"use client";

import { Section } from "@/components/layout/Section";
import { getSiteConfig } from "@/lib/content";
import { m } from "motion/react";

export function CEOIntro() {
  const { brand } = getSiteConfig();
  const { ceo } = brand;
  const displayName = ceo.displayName ?? ceo.name;
  const initial = displayName ? displayName.charAt(0) : "J";

  return (
    <Section id="ceo" bgColor="surface">
      <m.h3
        className="text-center text-3xl font-bold leading-[1.3] tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        대표 소개
      </m.h3>
      <m.div
        className="mx-auto mt-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* 인용구 블록 */}
        <div className="relative rounded-2xl border border-border/50 bg-white p-8 shadow-sm">
          <div className="absolute -top-4 left-8 text-6xl font-serif leading-none text-primary/20 select-none">"</div>
          <div className="space-y-4 text-base text-text-secondary leading-[1.7]">
            {ceo.message.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="absolute -bottom-2 right-8 text-6xl font-serif leading-none text-primary/20 select-none rotate-180">"</div>
        </div>

        {/* 프로필 */}
        <div className="mt-6 flex items-center gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xl font-bold text-white shadow-sm">
            {initial}
          </div>
          <div>
            {displayName && (
              <p className="font-semibold text-text">{displayName}</p>
            )}
            <p className="text-sm text-text-muted">{ceo.title}</p>
          </div>
        </div>
      </m.div>
    </Section>
  );
}

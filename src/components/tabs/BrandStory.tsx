"use client";

import { Section } from "@/components/layout/Section";
import { m, Variants } from "motion/react";
import { ANIMATION, SPRING } from "@/lib/constants";

const timeline = [
  {
    step: "01",
    title: "당신의 막막함을 기억합니다",
    desc: "방대한 범위 앞에서 어디서부터 시작해야 할지 몰랐던 그 순간. JHAP은 그 공백에서 시작되었습니다.",
  },
  {
    step: "02",
    title: "이해의 흐름을 설계하다",
    desc: "시험에 필요한 핵심을 선별하고, 개념과 문제를 자연스럽게 연결하는 학습 구조를 만들었습니다.",
  },
  {
    step: "03",
    title: "함께 성장하는 학습 동반자",
    desc: "출제 경향과 학습자 피드백을 지속적으로 반영하여, 가장 현실적인 합격 솔루션을 제공합니다.",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION.STAGGER.SLOW,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: SPRING.SMOOTH,
  },
};

export function BrandStory() {
  return (
    <Section id="story">
      <h3 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
        브랜드 이야기
      </h3>
      <div className="mx-auto mt-10 max-w-2xl">
        <div className="relative">
          {/* 세로 연결선 */}
          <m.div
            className="absolute left-6 top-8 w-px bg-border"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 4rem)" }}
            viewport={{ once: true, amount: ANIMATION.VIEWPORT.TABLET }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <m.div
            className="space-y-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: ANIMATION.VIEWPORT.MOBILE }}
          >
            {timeline.map((timelineItem, idx) => (
              <m.div
                key={idx}
                variants={item}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white shadow-sm">
                  {timelineItem.step}
                </div>
                <div className="pb-2 pt-2">
                  <p className="font-semibold text-text">{timelineItem.title}</p>
                  <p className="mt-1 text-sm text-text-secondary leading-[1.7]">
                    {timelineItem.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>
        </div>
      </div>
    </Section>
  );
}

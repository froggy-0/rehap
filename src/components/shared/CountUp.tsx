"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, m } from "motion/react";

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

/**
 * 숫자를 부드럽게 카운트업하는 애니메이션 컴포넌트
 * 
 * @param end - 최종 도달할 숫자
 * @param duration - 애니메이션 지속 시간 (밀리초, 기본값: 2000)
 * @param className - 추가 CSS 클래스
 * @param suffix - 숫자 뒤에 붙을 문자열 (예: "+", "명")
 * 
 * @example
 * ```tsx
 * <CountUp end={1000} suffix="+" />
 * <CountUp end={100} duration={1500} suffix="명" />
 * ```
 */
export function CountUp({ end, duration = 2000, className = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, end, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return <m.span ref={ref} className={className} />;
}


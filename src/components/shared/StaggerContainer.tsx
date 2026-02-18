"use client";

import { ReactNode } from "react";
import { m, Variants } from "motion/react";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

/**
 * 자식 요소들을 순차적으로 나타나게 하는 컨테이너 컴포넌트
 * 
 * @param children - 애니메이션을 적용할 자식 요소들
 * @param delay - 각 자식 요소 간 지연 시간 (밀리초, 기본값: 100)
 * @param className - 추가 CSS 클래스
 * 
 * @example
 * ```tsx
 * <StaggerContainer delay={150}>
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </StaggerContainer>
 * ```
 */
export function StaggerContainer({
  children,
  delay = 100,
  className = "",
}: StaggerContainerProps) {
  return (
    <m.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <m.div key={index} variants={item}>
            {child}
          </m.div>
        ))
      ) : (
        <m.div variants={item}>{children}</m.div>
      )}
    </m.div>
  );
}


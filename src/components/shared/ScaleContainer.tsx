"use client";

import { ReactNode } from "react";
import { m, Variants } from "motion/react";

interface ScaleContainerProps {
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ScaleContainer({
  children,
  delay = 100,
  className = "",
}: ScaleContainerProps) {
  return (
    <m.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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


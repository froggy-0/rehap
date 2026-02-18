"use client";

import { m, Variants } from "motion/react";

export function HeroTextReveal() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const char: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      filter: "blur(10px)",
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
  };

  const text = "합격까지 연결하다";

  return (
    <div className="min-h-[280px] flex flex-col justify-center text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] tracking-tight text-text-secondary space-y-2">
        <div className="opacity-100">외우는 공부에서</div>
        <div className="opacity-100">이해하는 공부로</div>
        <m.div
          className="text-primary font-bold"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((c, i) => (
            <m.span
              key={i}
              variants={char}
              className="inline-block"
              style={{ 
                transform: `translateY(${Math.sin(i) * 3}px)` 
              }}
            >
              {c === " " ? "\u00A0" : c}
            </m.span>
          ))}
        </m.div>
      </h1>
    </div>
  );
}

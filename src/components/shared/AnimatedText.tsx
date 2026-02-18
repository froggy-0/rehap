"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 30 }: AnimatedTextProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block animate-char-fade-in"
          style={{
            animationDelay: isVisible ? `${index * delay}ms` : "0ms",
            opacity: isVisible ? undefined : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

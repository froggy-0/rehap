"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function StaggerContainer({ 
  children, 
  delay = 100,
  className = "" 
}: StaggerContainerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              isVisible 
                ? "translate-y-0 opacity-100" 
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * delay}ms` : "0ms",
            }}
          >
            {child}
          </div>
        ))
      ) : (
        children
      )}
    </div>
  );
}

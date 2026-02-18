"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScaleContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScaleContainer({ 
  children, 
  delay = 100,
  className = "" 
}: ScaleContainerProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              isVisible 
                ? "scale-100 opacity-100" 
                : "scale-90 opacity-0"
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

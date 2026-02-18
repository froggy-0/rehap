"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  delay?: number;
  threshold?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { delay = 0, threshold = 0.1 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return { ref, isVisible };
}

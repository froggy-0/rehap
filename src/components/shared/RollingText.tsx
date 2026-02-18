"use client";

interface RollingTextProps {
  text: string;
  className?: string;
}

export function RollingText({ text, className = "" }: RollingTextProps) {
  return (
    <span className={`inline-block ${className}`}>
      {text}
    </span>
  );
}

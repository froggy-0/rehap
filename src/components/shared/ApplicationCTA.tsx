"use client";

import { Button } from "@/components/ui/button";
import { useAppData } from "@/hooks/useAppData";

interface ApplicationCTAProps {
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline";
  className?: string;
}

export function ApplicationCTA({
  size = "lg",
  variant = "default",
  className = "",
}: ApplicationCTAProps) {
  const { config } = useAppData();

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={`min-h-[44px] font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      <a
        href={config.applicationForm.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {config.applicationForm.buttonText}
      </a>
    </Button>
  );
}

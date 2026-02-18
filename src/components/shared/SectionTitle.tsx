import { Badge } from "@/components/ui/badge";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {badge && <Badge variant="secondary">{badge}</Badge>}
      <h2 className="mt-4 text-3xl font-bold leading-[1.3] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-text-secondary leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

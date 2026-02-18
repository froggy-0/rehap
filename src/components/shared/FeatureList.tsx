import { Check, Star, ArrowRight } from "lucide-react";

interface FeatureListProps {
  items: string[];
  icon?: "check" | "star" | "arrow";
  className?: string;
}

export function FeatureList({ items, icon = "check", className = "" }: FeatureListProps) {
  const iconMap = {
    check: Check,
    star: Star,
    arrow: ArrowRight,
  };

  const Icon = iconMap[icon];

  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="text-base text-text-secondary leading-[1.7]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "white" | "surface";
}

export function Section({
  id,
  children,
  className,
  bgColor = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 md:py-24 reveal",
        bgColor === "surface" ? "bg-surface" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-4xl">{children}</div>
    </section>
  );
}

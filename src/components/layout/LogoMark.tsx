import Image from "next/image";
import { cn, getAssetPath } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <div className={cn("relative h-20 w-20", className)} aria-hidden="true">
      <Image
        src={getAssetPath("/images/file.svg")}
        alt="JHAP Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}

import { cn } from "@/lib/utils";

interface SocialIconProps {
  type: "instagram" | "kakao" | "email";
  className?: string;
}

export function SocialIcon({ type, className }: SocialIconProps) {
  if (type === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("h-5 w-5", className)}
        fill="none"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={cn("h-5 w-5", className)}
        fill="none"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      fill="none"
    >
      <path
        d="M5 6.5h14a3 3 0 0 1 3 3v3.5a3 3 0 0 1-3 3H11l-4.5 3v-3H5a3 3 0 0 1-3-3v-3.5a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text
        x="8"
        y="13.5"
        fontSize="6.5"
        fontWeight="700"
        fill="currentColor"
      >
        TALK
      </text>
    </svg>
  );
}

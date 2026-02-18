import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { ReviewItem } from "@/types/content";

interface ReviewCardProps {
  review: ReviewItem;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-1">
          {Array.from({ length: review.rating }, (_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
        <p className="mt-3 text-base text-text-secondary leading-[1.7]">
          &ldquo;{review.content}&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.01em]">
              {review.name}
            </p>
            <p className="text-sm text-text-muted leading-[1.6]">
              {review.role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

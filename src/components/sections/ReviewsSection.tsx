import { StaggerContainer } from "@/components/shared/StaggerContainer";
import { ReviewCard } from "@/components/tabs/ReviewCard";

interface Review {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
  title?: string;
}

export function ReviewsSection({ reviews, title = "학습자들의 생생한 후기" }: ReviewsSectionProps) {
  return (
    <section className="bg-surface px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
          {title}
        </h2>
        <StaggerContainer delay={156} className="mt-8 grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import { useAppData } from "@/hooks/useAppData";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FitCheckSection } from "@/components/sections/FitCheckSection";
import { StudyMethodSection } from "@/components/sections/StudyMethodSection";
import { WhyJHAPSection } from "@/components/sections/WhyJHAPSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { WorkbookPreviewSection } from "@/components/sections/WorkbookPreviewSection";
import { TrustPolicySection } from "@/components/sections/TrustPolicySection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { PurchaseProcessSection } from "@/components/sections/PurchaseProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";

interface HomeTabProps {
  onNavigateToResources?: () => void;
}

export function HomeTab({ onNavigateToResources }: HomeTabProps) {
  const { config, workbooks, reviews, faq, home } = useAppData();

  const featuredWorkbook = workbooks.items[0];
  const topReviews = reviews.items.slice(0, 2);
  const bottomReviews = reviews.items.slice(2);
  const previewImages = featuredWorkbook?.previewImages?.length
    ? featuredWorkbook.previewImages
    : ["/images/preview-1.jpg", "/images/preview-2.jpg", "/images/preview-3.jpg"];

  return (
    <div>
      <HeroSection />
      <StatsSection reviewCount={reviews.items.length} />
      <FitCheckSection fitCheck={home.fitCheck} />
      <StudyMethodSection studyMethod={home.studyMethod} />
      <WhyJHAPSection values={config.brand.values} />
      <ReviewsSection reviews={topReviews} />
      
      {featuredWorkbook && (
        <WorkbookPreviewSection
          workbook={featuredWorkbook}
          previewImages={previewImages}
          onNavigateToResources={onNavigateToResources}
        />
      )}

      <TrustPolicySection trustPolicy={home.trustPolicy} />
      <UrgencySection urgency={home.urgency} />
      <PurchaseProcessSection
        applicationFormUrl={config.applicationForm.url}
        buttonText={config.applicationForm.buttonText}
      />

      {bottomReviews.length > 0 && (
        <ReviewsSection reviews={bottomReviews} title="" />
      )}

      <FAQSection faqs={faq.items} />
    </div>
  );
}

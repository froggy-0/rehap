import { Section } from "@/components/layout/Section";
import { getSiteConfig } from "@/lib/content";

export function BrandStory() {
  const { brand } = getSiteConfig();

  return (
    <Section id="story">
      <h3 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
        브랜드 이야기
      </h3>
      <div className="mx-auto mt-10 max-w-2xl space-y-4 text-base text-text-secondary leading-[1.7]">
        {brand.story.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}

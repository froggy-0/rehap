import { BrandHero } from "./BrandHero";
import { CEOIntro } from "./CEOIntro";
import { BrandStory } from "./BrandStory";
import { BrandValues } from "./BrandValues";
import { ApplicationCTA } from "@/components/shared/ApplicationCTA";

export function BrandTab() {
  return (
    <div>
      <BrandHero />
      <CEOIntro />
      <BrandStory />
      <BrandValues />
      <div className="flex justify-center py-16">
        <ApplicationCTA size="lg" className="px-12 py-6 text-lg" />
      </div>
    </div>
  );
}

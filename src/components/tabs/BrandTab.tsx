import { BrandHero } from "./BrandHero";
import { CEOIntro } from "./CEOIntro";
import { BrandStory } from "./BrandStory";
import { BrandValues } from "./BrandValues";

export function BrandTab() {
  return (
    <div>
      <BrandHero />
      <CEOIntro />
      <BrandStory />
      <BrandValues />
    </div>
  );
}

import { HeroTextReveal } from "@/components/shared/HeroTextReveal";
import { ApplicationCTA } from "@/components/shared/ApplicationCTA";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-32 md:py-48">
      <div className="relative mx-auto max-w-5xl">
        <div className="space-y-12">
          <HeroTextReveal />
          <div className="flex justify-center pt-8">
            <ApplicationCTA size="lg" className="px-12 py-6 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

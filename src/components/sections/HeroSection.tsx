import { AnimatedText } from "@/components/shared/AnimatedText";
import { ApplicationCTA } from "@/components/shared/ApplicationCTA";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-32 md:py-48">
      <div className="relative mx-auto max-w-5xl">
        <div className="space-y-12 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3] tracking-tight text-text-secondary">
              <div className="mb-6">
                <AnimatedText text="운동생리학 전과목," delay={80} />
              </div>
              <div className="my-8">
                <AnimatedText 
                  text="한 권으로" 
                  className="text-7xl md:text-8xl lg:text-9xl text-primary"
                  delay={120}
                />
              </div>
              <div>
                <AnimatedText text="합격과 이해를 동시에 잡다." delay={80} />
              </div>
            </h1>
          </div>
          <div className="flex justify-center pt-8">
            <ApplicationCTA size="lg" className="px-12 py-6 text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

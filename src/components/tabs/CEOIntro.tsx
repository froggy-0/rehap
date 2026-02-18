import { Section } from "@/components/layout/Section";
import { getSiteConfig } from "@/lib/content";
import { LogoMark } from "@/components/layout/LogoMark";

export function CEOIntro() {
  const { brand } = getSiteConfig();
  const { ceo } = brand;
  const displayName = ceo.displayName ?? ceo.name;

  return (
    <Section id="ceo" bgColor="surface">
      <h3 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
        대표 소개
      </h3>
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/70 shadow-sm">
          {displayName ? (
            <LogoMark className="h-12 w-12" />
          ) : (
            <span className="text-3xl font-bold text-primary">J</span>
          )}
        </div>
        {displayName && (
          <h4 className="mt-4 text-xl font-semibold tracking-[-0.01em]">
            {displayName}
          </h4>
        )}
        <p className="mt-1 text-sm text-text-muted leading-[1.6]">
          {ceo.title}
        </p>
        <div className="mt-6 space-y-4 text-left text-base text-text-secondary leading-[1.7]">
          {ceo.message.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { getSiteConfig } from "@/lib/content";
import { LogoMark } from "@/components/layout/LogoMark";

export function BrandHero() {
  const config = getSiteConfig();

  return (
    <div className="relative overflow-hidden bg-aurora px-5 py-16 text-center md:py-24 reveal">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-25 mix-blend-soft-light" />
      <div className="relative mx-auto max-w-2xl">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-white/70 px-4 py-2 shadow-sm">
          <LogoMark className="h-8 w-8" />
          <span className="text-xs font-semibold text-text-secondary">
            {config.brand.tagline}
          </span>
        </div>
        <h2 className="mt-6 text-5xl font-bold leading-[1.2] tracking-tight">
          {config.brand.name}
        </h2>
        <p className="mt-6 text-base text-text-secondary leading-[1.7]">
          {config.brand.description}
        </p>
      </div>
    </div>
  );
}

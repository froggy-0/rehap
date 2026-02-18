import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/layout/Section";
import { getSiteConfig } from "@/lib/content";
import { Award, BookOpen, Target, RefreshCw } from "lucide-react";

const icons = [Award, BookOpen, Target, RefreshCw];

export function BrandValues() {
  const { brand } = getSiteConfig();

  return (
    <Section id="values" bgColor="surface">
      <h3 className="text-center text-3xl font-bold leading-[1.3] tracking-tight">
        핵심 가치
      </h3>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {brand.values.map((value, index) => {
          const Icon = icons[index];
          return (
            <Card 
              key={index} 
              className="group border border-slate-200/60 bg-gradient-to-br from-white to-slate-50/30 shadow-sm transition-all duration-200 hover:shadow-md hover:border-emerald-200/60 hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                </div>
                {value.badge && (
                  <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {value.badge}
                  </span>
                )}
                <h4 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-slate-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-[15px] text-slate-600 leading-[1.7]">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

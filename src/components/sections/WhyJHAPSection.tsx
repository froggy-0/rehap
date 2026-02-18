import { Card, CardContent } from "@/components/ui/card";
import { ScaleContainer } from "@/components/shared/ScaleContainer";
import { Sparkles, Target, Layers, RefreshCcw } from "lucide-react";

interface WhyJHAPSectionProps {
  values: Array<{
    title: string;
    description: string;
  }>;
}

export function WhyJHAPSection({ values }: WhyJHAPSectionProps) {
  const valueIcons = [
    { Icon: Sparkles, color: "from-emerald-400 to-teal-500" },
    { Icon: Target, color: "from-emerald-500 to-cyan-600" },
    { Icon: Layers, color: "from-teal-500 to-emerald-600" },
    { Icon: RefreshCcw, color: "from-cyan-500 to-teal-600" }
  ];

  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-[1.3] tracking-tight">
          왜 JHAP인가요?
        </h2>
        <p className="mt-4 text-base text-text-secondary leading-[1.7] max-w-2xl mx-auto">
          방대한 운동생리학, 어디서부터 시작할지 막막하셨나요?<br />
          JHAP은 합격에 필요한 것만 남겼습니다.
        </p>
        <ScaleContainer delay={195} className="mt-10 grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => {
            const { Icon, color } = valueIcons[index % valueIcons.length];
            return (
              <Card
                key={value.title}
                className="group border border-white/70 bg-gradient-to-br from-white/90 via-white/70 to-emerald-50/40 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6 text-left">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${color} shadow-sm transition-transform duration-200 group-hover:scale-110`}>
                    <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                  </div>
                  {value.badge && (
                    <span className="mt-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {value.badge}
                    </span>
                  )}
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em]">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-text-secondary leading-[1.7]">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </ScaleContainer>
      </div>
    </section>
  );
}

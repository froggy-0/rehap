import { Button } from "@/components/ui/button";

interface PurchaseProcessSectionProps {
  applicationFormUrl: string;
  buttonText: string;
}

export function PurchaseProcessSection({ 
  applicationFormUrl, 
  buttonText 
}: PurchaseProcessSectionProps) {
  const steps = [
    { step: "1", title: "신청", desc: "구글 폼으로 신청서 작성" },
    { step: "2", title: "입금", desc: "안내된 계좌로 입금" },
    { step: "3", title: "전달", desc: "확인 후 PDF 즉시 전달" },
  ];

  return (
    <section className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-[1.3] tracking-tight">
          구매 절차
        </h2>
        <p className="mt-2 text-base text-text-secondary leading-[1.7]">
          간편하게 3단계로 진행됩니다
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl border bg-white/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-lg font-bold text-white">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em]">
                {item.title}
              </h3>
              <p className="mt-1 text-base text-text-secondary leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="min-h-[44px] px-8 text-base font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-md"
          >
            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonText}
            </a>
          </Button>
          <p className="mt-3 text-sm text-text-muted leading-[1.6]">
            환불 정책: 결제 후 전달 전 취소 시 100% 환불
          </p>
        </div>
      </div>
    </section>
  );
}

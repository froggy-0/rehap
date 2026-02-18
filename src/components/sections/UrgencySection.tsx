import { Check } from "lucide-react";

interface UrgencySectionProps {
  urgency: {
    tag: string;
    title: string;
    messages: string[];
    footnote: string;
  };
}

export function UrgencySection({ urgency }: UrgencySectionProps) {
  return (
    <section className="bg-surface px-5 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-blue-200/70 bg-blue-50/60 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
              {urgency.tag}
            </span>
            <h3 className="text-xl font-semibold tracking-[-0.01em] text-text-primary">
              {urgency.title}
            </h3>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {urgency.messages.map((message) => (
              <div
                key={message}
                className="flex items-start gap-2 rounded-2xl border border-blue-200/50 bg-white/70 p-4"
              >
                <Check className="mt-0.5 h-5 w-5 text-blue-600" />
                <p className="text-base text-text-secondary leading-[1.7]">
                  {message}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-text-muted leading-[1.6]">
            {urgency.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}

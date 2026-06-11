"use client";

import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function HowItWorksSection() {
  const { t } = useLang();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-[--border] bg-[--bg-raised] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <Badge className="mb-4">{t.howItWorks.badge}</Badge>
          <h2
            id="how-heading"
            className="text-3xl font-bold leading-tight text-[--foreground] sm:text-4xl"
          >
          </h2>
        </div>

        <ol className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute -top-6 left-[calc(16.67%+12px)] right-[calc(16.67%+12px)] hidden h-px border-t border-dashed border-[--border-strong] md:block"
          />

          {t.howItWorks.steps.map((step, i) => (
            <li
              key={i}
              className={cn(
                "relative rounded-2xl border border-[--border] bg-[--card] p-6",
                "transition-shadow duration-200",
                "hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              )}
            >
              <div
                className={cn(
                  "relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full",
                  "bg-[--foreground] text-[--background]"
                )}
                aria-label={`Step ${step.number}`}
              >
                <span className="text-sm font-bold">{step.number}</span>
              </div>

              <h3 className="mb-2 text-base font-semibold text-[--foreground]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[--foreground-muted]">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
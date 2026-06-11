"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const { t } = useLang();
  const plan = t.pricing.plan;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <Badge className="mb-4">{t.pricing.badge}</Badge>
          <h2
            id="pricing-heading"
            className="mb-4 text-3xl font-bold text-foreground sm:text-4xl"
          >
            {t.pricing.headline}
          </h2>
          <p className="text-base leading-relaxed text-foreground-muted">
            {t.pricing.subheadline}
          </p>
        </div>

        {/* Pricing card */}
        <div className="mx-auto max-w-md">
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border-2 border-foreground bg-card",
              "p-8 shadow-[0_8px_48px_rgba(0,0,0,0.08)]"
            )}
          >
            {/* Background accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative">
              {/* Plan name + price */}
              <div className="mb-6">
                <div className="mb-2 text-sm font-medium text-foreground-muted">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-base text-foreground-muted">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button size="lg" className="mb-6 w-full font-semibold">
                {plan.cta}
              </Button>

              {/* Features */}
              <ul className="space-y-3" aria-label="Plan features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p className="mt-6 text-center text-xs leading-relaxed text-foreground-muted">
                {t.pricing.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { t } = useLang();

  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-[--border] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            "bg-[--foreground] text-[--background]",
            "p-10 text-center sm:p-16"
          )}
        >
          {/* Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative">
            <h2
              id="cta-heading"
              className="mb-4 text-3xl font-bold text-[--background] sm:text-4xl"
            >
              {t.cta.headline}
            </h2>
            <p className="mx-auto mb-8 max-w-md text-base opacity-70">
              {t.cta.subheadline}
            </p>

            <Button
              className={cn(
                "bg-[--background] text-[--foreground]",
                "hover:bg-[--background-raised] active:scale-[0.98]",
                "text-base font-semibold"
              )}
              size="lg"
            >
              {t.cta.button}
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Button>

            <p className="mt-5 text-xs opacity-50">{t.cta.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
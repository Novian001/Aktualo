"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLang } from "@/hooks/useLang";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border bg-background-raised py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4">{t.faq.badge}</Badge>
          <h2
            id="faq-heading"
            className="text-3xl font-bold text-foreground sm:text-4xl"
          >
            {t.faq.headline}
          </h2>
        </div>

        {/* Accordion */}
        <dl className="space-y-2" aria-label="Frequently asked questions">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "overflow-hidden rounded-xl border border-border bg-card",
                  "transition-all duration-200",
                  isOpen && "border-border-strong"
                )}
              >
                <dt>
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    className={cn(
                      "flex w-full items-center justify-between px-5 py-4",
                      "text-left text-sm font-semibold text-foreground",
                      "transition-colors hover:bg-muted",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                    )}
                  >
                    <span>{item.q}</span>
                    <span
                      className={cn(
                        "ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                        "bg-muted text-foreground-muted",
                        "transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <Plus className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    isOpen ? "max-h-64" : "max-h-0"
                  )}
                >
                  <p className="px-5 pb-4 pt-1 text-sm leading-relaxed text-foreground-muted">
                    {item.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}